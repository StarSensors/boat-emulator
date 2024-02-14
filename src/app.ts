import _ from 'lodash'
import pino from 'pino'
// import { inspect } from 'util'

import config from './config'
import { TbApi } from './tb-api'
import { TbGateway } from './tb-gateway'

import { assetProfiles } from './constants/asset-profiles'
import { assets } from './constants/assets'
import { customers } from './constants/customers'
import { deviceProfiles } from './constants/device-profiles'
import { devices } from './constants/devices'
import { users } from './constants/users'

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
// const tbGateway = new TbGateway(config.mqtt.url, logger)

const boostrap = async () => {
  await tenantApi.start()

  // provision device profiles
  _.each(deviceProfiles, async deviceProfile => {
    await tenantApi.upsertDeviceProfile(
      deviceProfile.name,
      deviceProfile.id,
      deviceProfile.description,
    )
  })

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
  const tbCustomers = await Promise.all(
    _.map(customers, customer => tenantApi.upsertCustomer(customer.title)),
  )

  // assign assets to customer
  for (const customer of customers) {
    const customerAssets = _.filter(
      assets,
      asset => asset.label === customer.boat,
    )

    await Promise.all(
      _.map(customerAssets, customerAsset =>
        tenantApi.assignAssetToCustomer(customerAsset.name, customer.title),
      ),
    )
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

  // user apis
  const userApis = _.map(users, user => ({
    ...user,
    api: new TbApi(
      {
        baseUrl: config.tb.baseUrl,
        username: user.email,
        password: user.password,
      },
      logger,
      _.find(tbCustomers, { title: user.customer.title })?.id?.id,
    ),
  }))

  // users login
  await Promise.all(_.map(userApis, async ({ api }) => await api.start()))

  // user actions after activation
  for (const userApi of userApis) {
    const { api, customer } = userApi
    const customerAssets = _.filter(
      assets,
      asset => asset.label === customer.boat,
    )

    for (const asset of customerAssets) {
      for (const { name } of asset.devices || []) {
        const device = _.find(devices, { name })
        if (device) {
          // claim device
          await api.claimDevice(name, device.attributes.claimingData.secretKey)

          // set device label
          const tbDevices = await api.getDevices()
        }
      }
    }

    // mimic user device and asset naming (labeling)
  }

  // // add gateway device (will be used to send data to ThingsBoard)
  // const tbGatewayDevice = await tenantApi.upsertGatewayDevice(
  //   'Boat Emulator Gateway',
  // )
  // const accessToken = await tenantApi.getCachedDeviceAccessToken(
  //   tbGatewayDevice.name,
  //   tbGatewayDevice.id?.id || 'unknown',
  // )
  // start the gateway
  // tbGateway.start(accessToken)
}

boostrap()
