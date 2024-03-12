import _ from 'lodash'
import pino from 'pino'
// import { inspect } from 'util'

import config from './config'
import { TbApi } from './tb-api'
import { TbGateway } from './tb-gateway'

import { assetProfiles } from './constants/asset-profiles'
import { assets } from './constants/assets'
import { customerAlarmSettings, customers } from './constants/customers'
import { dashboardMap } from './constants/dashboards'
import { deviceProfiles } from './constants/device-profiles'
import { devices } from './constants/devices'
import { ruleChainMetaData } from './constants/rule-chain-meta-data'
import { TbEntityEnum, TbScopeEnum } from './tb-api/interfaces/enums'
import { users } from './constants/users'
import { TbRuleChain } from './tb-api/interfaces/rule-chains'
import { TbCustomer } from './tb-api/interfaces/customer'

const logger = pino({
  level:
    process.env.LOG_LEVEL === 'debug' || process.env.NODE_ENV !== 'production'
      ? 'debug'
      : 'info',
  transport:
    process.env.NODE_ENV !== 'production'
      ? { target: 'pino-pretty' }
      : undefined,
})

// tenant api
const tenantApi = new TbApi(config.tb, logger)

// gateway
const tbGateway = new TbGateway(config.mqtt.url, logger)

const boostrap = async () => {
  await tenantApi.start()

  // provision rule chains
  const tbRuleChainMap: { [key: string]: TbRuleChain } = {
    default: await tenantApi.getRootRuleChain(),
  }
  for (const { name, metadata } of ruleChainMetaData) {
    tbRuleChainMap[name] = await tenantApi.upsertRuleChain(name, metadata)
  }

  // provision device profiles
  for (const deviceProfile of deviceProfiles) {
    // get device profile rule chain id
    let tbRuleChain = tbRuleChainMap.default
    if (deviceProfile.ruleChain) {
      tbRuleChain = tbRuleChainMap[deviceProfile.ruleChain]
      if (!tbRuleChain) {
        throw new Error(
          `Device profile ${deviceProfile.name}: Rule chain ${deviceProfile.ruleChain} not found`,
        )
      }
    }
    const tbRuleChainId = tbRuleChain.id?.id || 'unknown'

    await tenantApi.upsertDeviceProfile(
      deviceProfile.name,
      deviceProfile.id,
      deviceProfile.description || '',
      deviceProfile.alarms,
      tbRuleChainId,
    )
  }

  // provision devices
  const tBdevices = await Promise.all(
    _.map(devices, async device =>
      tenantApi.upsertDevice(device.name, device.id, device.deviceProfile.name),
    ),
  )

  // add device attributes
  for (const { name, id } of tBdevices) {
    const device = _.find(devices, { name })
    if (device) {
      await tenantApi.setEntityAttributes(
        id?.id || 'Unknown',
        device.attributes,
      )
    }
  }

  // provision asset profiles
  await Promise.all(
    _.map(assetProfiles, assetProfile =>
      tenantApi.upsertAssetProfile(assetProfile.name),
    ),
  )

  // provision assets
  await Promise.all(
    _.map(assets, asset =>
      tenantApi.upsertAsset(asset.name, asset.assetProfile.name),
    ),
  )

  // add customers
  const tbCustomers: TbCustomer[] = []
  for (const customer of customers) {
    const tbCustomer = await tenantApi.upsertCustomer(customer.title)
    tbCustomers.push(tbCustomer)
    const customerId = tbCustomer.id?.id || 'unknown'

    // set customer attributes
    await tenantApi.setEntityAttributes(
      customerId,
      customerAlarmSettings,
      TbEntityEnum.CUSTOMER,
      TbScopeEnum.SERVER_SCOPE,
    )

    const customerAssets = _.filter(
      assets,
      asset => asset.label === customer.boat,
    )

    // assign assets to customer
    for (const customerAsset of customerAssets) {
      await tenantApi.assignAssetToCustomer(customerAsset.name, customer.title)
      await tenantApi.relateAssetToCustomer(customerAsset.name, customer.title)
    }
  }

  // add users
  const tbUsers = await Promise.all(
    _.map(users, ({ email, firstName, lastName, customer }) =>
      tenantApi.upsertUser(email, firstName, lastName, customer.title),
    ),
  )

  // activate all users
  for (const { email } of tbUsers) {
    const user = _.find(users, { email })
    if (user) {
      await tenantApi.activateUser(email, user.password)
    }
  }

  // setup user dashboards
  for (const dashboardUser in dashboardMap) {
    const dashboards: any[] = dashboardMap[dashboardUser] || []
    for (const dashboard of dashboards) {
      const db = await tenantApi.upsertDashboard(dashboard)
      if (dashboardUser === 'customer') {
        for (const tbCustomer of tbCustomers) {
          await tenantApi.assignDashboardToCustomer(
            db.id?.id || 'unknown',
            tbCustomer.title,
          )
        }
      }
    }
  }

  // setup asset specific dashboards
  for (const tbCustomer of tbCustomers) {
    const tbAssets = await tenantApi.findCustomerRelatedAssets(tbCustomer.title)

    console.log(tbCustomer.title)
    console.log('tbAssets', tbAssets)

    for (const tbAsset of tbAssets) {
      const tbDevices = await tenantApi.findAssetRelatedDevices(tbAsset.name)
      console.log('tbDevices', tbDevices)
    }
  }

  // // user apis
  // const userApis = _.map(users, user => ({
  //   ...user,
  //   api: new TbApi(
  //     {
  //       baseUrl: config.tb.baseUrl,
  //       username: user.email,
  //       password: user.password,
  //     },
  //     logger,
  //     _.find(tbCustomers, { title: user.customer.title })?.id?.id,
  //   ),
  // }))

  // // users login after activation
  // await Promise.all(_.map(userApis, async ({ api }) => await api.start()))

  // // user actions
  // for (const userApi of userApis) {
  //   const { api, customer } = userApi
  //   const customerAssets = _.filter(
  //     assets,
  //     asset => asset.label === customer.boat,
  //   )

  //   for (const asset of customerAssets) {
  //     // set user specific asset label
  //     await api.setAssetLabel(asset.name, asset.label)

  //     for (const { name, label } of asset.devices || []) {
  //       const device = _.find(devices, { name })
  //       if (device) {
  //         // claim device
  //         await api.claimDevice(name, device.attributes.claimingData.secretKey)

  //         // todo: regenerate customer dashboards

  //         // update the relation
  //         await api.relateDeviceToAsset(name, asset.name)

  //         // set user specific device label
  //         await api.setDeviceLabel(name, label)
  //       }
  //     }
  //   }
  // }

  // // add gateway device (will be used to send data to ThingsBoard)
  // const tbGatewayDevice = await tenantApi.upsertGatewayDevice(
  //   'Boat Emulator Gateway',
  // )

  // // update or set getway device initial state
  // const state: {
  //   [key: string]: {
  //     current: { [key: string]: number }
  //     target: { [key: string]: number }
  //     targetEnabled: boolean
  //   }
  // } = {}
  // for (const tbDevice of tBdevices) {
  //   const deviceId = tbDevice.id?.id || 'unknown'

  //   // get device attributes
  //   const deviceAttrs = await tenantApi.getEntityAttributes(
  //     deviceId,
  //     TbEntityEnum.DEVICE,
  //   )

  //   // get target information from devices attributes
  //   // target enabled
  //   const targetEnabled =
  //     !!_.find(deviceAttrs, { key: 'target_enabled' })?.value || false

  //   const targetMap = _.chain(deviceAttrs)
  //     .filter(
  //       attr => attr.key.startsWith('target_') && attr.key !== 'target_enabled',
  //     )
  //     .map(attr => [attr.key.replace('target_', ''), attr.value])
  //     .fromPairs()
  //     .value()

  //   // get latest timeseries data
  //   const latestTimeseries = await tenantApi.getLatestTimeseries(deviceId)

  //   // get map of latest timeseries values
  //   const latestMap = _.mapValues(latestTimeseries, value => value?.value || 0)

  //   // use target in preference to latest timeseries
  //   const newAttrsMap = {
  //     ..._.mapValues(latestMap, value => Math.round((value || 0) * 10) / 10), // rounded target values
  //     ...targetMap,
  //     enabled: targetEnabled,
  //   }

  //   // update target metric values in device attributes
  //   const newAttributes = _.mapKeys(
  //     newAttrsMap,
  //     (value, metric) => `target_${metric}`,
  //   )
  //   await tenantApi.setEntityAttributes(
  //     tbDevice.id?.id || 'unknown',
  //     newAttributes,
  //     TbEntityEnum.DEVICE,
  //     TbScopeEnum.SHARED_SCOPE,
  //   )

  //   // set device latets timeseries
  //   state[tbDevice.name] = {
  //     current: latestMap,
  //     target: targetMap,
  //     targetEnabled,
  //   }
  // }

  // // set the latest timeseries
  // // (else jumps in the graph will be seen when the gateway starts sending data)
  // tbGateway.setState(state)

  // // start the gateway
  // const accessToken = await tenantApi.getCachedDeviceAccessToken(
  //   tbGatewayDevice.name,
  //   tbGatewayDevice.id?.id || 'unknown',
  // )
  // tbGateway.start(accessToken)
}

boostrap()
