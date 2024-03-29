import { caching, Cache } from 'cache-manager'
import { jwtDecode } from 'jwt-decode'
import { Logger } from 'pino'
import axios, {
  AxiosResponse,
  AxiosInstance,
  AxiosRequestConfig,
  isAxiosError,
} from 'axios'
import * as _ from 'lodash'
import * as querystring from 'querystring'
// import { inspect } from 'util'

// types
import { TbClientType, TbApiEntity } from './types'

// models
import { TbPageData } from './models/page-data'

// interfaces
import {
  TbAuthorityEnum,
  TbEntityEnum,
  TbProvisionTypeEnum,
  TbRelationDirectionEnum,
  TbRelationTypeGroupEnum,
  TbScopeEnum,
  TbTransportEnum,
} from './interfaces/enums'
import { TbAsset } from './interfaces/asset'
import { TbAssetProfile } from './interfaces/asset-profile'
import { TbCustomer } from './interfaces/customer'
import { TbDashboard, TbDashboardInfo } from './interfaces/dashboard'
import { TbDevice, TbDeviceInfo } from './interfaces/device'
import {
  TbDeviceProfile,
  TbDeviceProfileAlarm,
} from './interfaces/device-profile'
import {
  TbEntityRelationsQuery,
  TbRelation,
  TbEntityRelation,
} from './interfaces/relation'
import { TbTimeseriesData, TbTimeseriesValue } from './interfaces/telemetry'
import { TbUser, TbUserActivationLink } from './interfaces/user'

// utils
import { recursiveKeyFilter } from './utils'

// constants
import { URI_MAPPING } from './uri-mapping'
import { TbRuleChain, TbRuleChainMetaData } from './interfaces/rule-chains'
import { RuleChainMetaData } from '../types'

// helper functions
export const dashboardStripDown = (c: any): any => {
  return recursiveKeyFilter(
    {
      ...c,
      widgets: _.values(c.widgets),
      entityAliases: _.values(c.entityAliases),
      states: {},
    },
    ['id', 'entityId', 'entityAliasId'],
  )
}

export const dashboardConfigurationIsEqual = (
  config1: any,
  config2: any,
): boolean => {
  return (
    JSON.stringify(dashboardStripDown(config1)) ===
    JSON.stringify(dashboardStripDown(config2))
  )
}

export class TbApi {
  private readonly clientType: TbClientType
  private readonly customerId?: string
  private readonly api: AxiosInstance
  private cache: Cache
  private readonly logger: Logger
  private readonly username: string
  private readonly password: string
  private token: string
  private refreshToken: string

  constructor(options: any, logger: Logger, customerId?: string) {
    if (customerId) {
      this.clientType = 'customer'
      this.customerId = customerId
    } else {
      this.clientType = 'tenant'
    }

    this.logger = logger.child({
      context: `TbApi(${this.clientType}) for ${options.username}`,
    })

    if (!options.baseUrl || !options.username || !options.password) {
      throw new Error('Invalid options provided')
    }

    const { baseUrl, username, password } = options

    this.username = username
    this.password = password

    this.api = axios.create({
      baseURL: baseUrl,
      timeout: 10000,
    })

    this.api.interceptors.request.use(
      async config => {
        if (config.url === 'api/auth/login') return config
        await this.assureLogin()
        config.headers['X-Authorization'] = `Bearer ${this.token}`
        return config
      },
      error => {
        this.logger.error('Request error', error.message)
        return Promise.reject(error)
      },
    )
  }

  async start(): Promise<void> {
    this.cache = await caching('memory', {
      max: 1000,
      ttl: 2 * 60 * 60 * 1000,
    })
    await this.assureLogin()
  }

  async login(): Promise<void> {
    this.logger.info('Logging in...')
    const response: AxiosResponse<{ token: string; refreshToken: string }> =
      await this.api.post('api/auth/login', {
        username: this.username,
        password: this.password,
      })

    this.token = response.data.token
    this.refreshToken = response.data.refreshToken

    this.logger.info('Logged in.')
  }

  async updateRefreshToken(): Promise<void> {
    this.logger.info(`Refreshing token with token ${this.refreshToken}...`)
    const response: AxiosResponse<{ token: string; refreshToken: string }> =
      await this.api.post('api/auth/token', {
        refreshToken: this.refreshToken,
      })

    this.token = response.data.token
    this.refreshToken = response.data.refreshToken

    this.logger.info('Refreshed token.')
  }

  tokenIsExpired(): boolean {
    if (typeof this.token !== 'string' || !this.token) {
      throw new Error('Invalid token provided')
    }

    let isJwtExpired = false
    const { exp } = jwtDecode(this.token)

    if (typeof exp !== 'number') {
      throw new Error('Invalid token provided')
    }

    const currentTime = new Date().getTime() / 1000

    if (currentTime > exp) {
      isJwtExpired = true
    }

    return isJwtExpired
  }

  async assureLogin(): Promise<void> {
    if (this.token) {
      if (this.tokenIsExpired()) {
        this.logger.info('Token expired, refreshing...')
        try {
          await this.updateRefreshToken()
        } catch (error) {
          this.logger.error('Failed to refresh token')
          await this.login()
        }
      }
    } else {
      await this.login()
    }
  }

  async getCachedDeviceId(deviceName: string): Promise<string> {
    const key = `deviceId:${deviceName}`
    let id: string | undefined = await this.cache.get(key)

    if (!id) {
      this.logger.info(`Device ${deviceName}: ID not cached, fetching...`)

      const response: AxiosResponse<TbDevice> = await this.api.get<TbDevice>(
        'api/tenant/devices',
        {
          params: { deviceName },
        },
      )

      id = response.data.id?.id

      if (!id) {
        throw new Error(
          `Device ${deviceName}: Device id not found in response ${JSON.stringify(
            response,
          )}`,
        )
      }

      this.logger.info(`Device ${deviceName}: Caching ID ${id}`)
      await this.cache.set(key, id)
    }

    return id
  }

  async getCachedDeviceAccessToken(
    deviceName: string,
    deviceId: string,
  ): Promise<string> {
    const key = `accessToken:${deviceName}`
    let accessToken: string | undefined = await this.cache.get(key)

    if (!accessToken) {
      this.logger.info(
        `Device ${deviceName}: Access token not cached, fetching... (ID: ${deviceId})`,
      )

      const response: AxiosResponse<{
        deviceId: { id: string }
        credentialsType: string
        credentialsId: string
      }> = await this.api.get(`api/device/${deviceId}/credentials`)

      if (
        response.data.deviceId.id !== deviceId ||
        response.data.credentialsType !== 'ACCESS_TOKEN' ||
        !response.data.credentialsId
      ) {
        throw new Error(
          `Device ${deviceName}: Device credentials not found in response ${JSON.stringify(
            response,
          )} (ID: ${deviceId})`,
        )
      }

      accessToken = response.data.credentialsId

      this.logger.info(
        `Device ${deviceName}: Caching access token ${accessToken} (ID: ${deviceId})`,
      )
      await this.cache.set(key, accessToken)
    }

    return accessToken
  }

  async getCachedCustomerId(customerTitle: string): Promise<string> {
    const key = `customerId:${customerTitle}`
    let id: string | undefined = await this.cache.get(key)

    if (!id) {
      this.logger.info(`Customer ${customerTitle}: ID not cached, fetching...`)

      const response: AxiosResponse<TbCustomer> =
        await this.api.get<TbCustomer>('api/tenant/customers', {
          params: { customerTitle },
        })

      id = response.data.id?.id

      if (!id) {
        throw new Error(
          `Customer ${customerTitle}: Customer id not found in response ${JSON.stringify(
            response,
          )}`,
        )
      }

      this.logger.info(`Customer ${customerTitle}: Caching ID ${id}`)
      await this.cache.set(key, id)
    }

    return id
  }

  async getCachedAssetId(assetName: string): Promise<string> {
    const key = `assetId:${assetName}`
    let id: string | undefined = await this.cache.get(key)

    if (!id) {
      this.logger.info(`Asset ${assetName}: ID not cached, fetching...`)

      const response: AxiosResponse<TbAsset> = await this.api.get<TbAsset>(
        'api/tenant/assets',
        {
          params: { assetName },
        },
      )

      id = response.data.id?.id

      if (!id) {
        throw new Error(
          `Asset ${assetName}: Asset id not found in response ${JSON.stringify(
            response,
          )}`,
        )
      }

      this.logger.info(`Asset ${assetName}: Caching ID ${id}`)
      await this.cache.set(key, id)
    }

    return id
  }

  async getEntities<T>(entityType: TbApiEntity): Promise<T[]> {
    const entities: T[] = []

    let hasNext = true
    let page = 0
    let tbPage: TbPageData<T>
    while (hasNext) {
      tbPage = await this.getEntityPage<T>(entityType, {
        pageSize: 100,
        page,
      })

      entities.push(...tbPage.data)
      hasNext = tbPage.hasNext
      page += 1
    }

    return entities
  }

  getUri(
    entityType: TbApiEntity,
    method: 'get' | 'post',
    pluralType: 'single' | 'many',
    byType?: 'byId' | 'byName',
    entityId?: string,
  ) {
    let uri
    if (method === 'get' && pluralType === 'single' && byType) {
      uri = URI_MAPPING[entityType][this.clientType][method][pluralType][
        byType
      ] as string
    } else {
      uri = URI_MAPPING[entityType][this.clientType][method][
        pluralType
      ] as string
    }

    if (!uri) {
      throw new Error(`Entity type ${entityType} not supported`)
    }

    if (uri === 'not-allowed') {
      throw new Error(
        `Entity type ${entityType} not allowed for ${this.clientType} client type`,
      )
    } else if (uri === 'not-implemented') {
      throw new Error(
        `Entity type ${entityType} ${method} ${pluralType} not implemented for ${this.clientType} client type`,
      )
    }

    uri = uri.replace('{customerId}', this.customerId || '')

    if (entityId) {
      uri = uri.replace('{entityId}', entityId)
    }

    this.logger.debug(
      `URI for ${entityType}.${this.clientType}.${method}.${pluralType}${byType ? '.' + byType : ''}: ${uri}`,
    )

    return uri
  }

  async getEntityPage<T>(
    entityType: TbApiEntity,
    query: {
      pageSize: number
      page: number
      sortOrder?: string
      sortProperty?: string
      textSearch?: string
    },
  ): Promise<TbPageData<T>> {
    const response: AxiosResponse<TbPageData<T>> = await this.api.get<
      TbPageData<T>
    >(this.getUri(entityType, 'get', 'many'), { params: query })

    return response.data
  }

  async getEntityAttributes(
    deviceId: string,
    entityType: TbEntityEnum = TbEntityEnum.DEVICE,
    keys: string[] = [],
    scope?: TbScopeEnum,
  ): Promise<{ latestUpdateTs: number; key: string; value: any }[]> {
    let url = `/api/plugins/telemetry/${entityType}/${deviceId}/values/attributes`

    if (scope) {
      url += `/${scope}`
    }

    const response: AxiosResponse<
      { latestUpdateTs: number; key: string; value: any }[]
    > = await this.api.get(url, { params: { keys: keys.join(',') } })

    return response.data
  }

  async setEntityAttributes(
    entityId: string,
    attributes: { [key: string]: any },
    entityType: TbEntityEnum = TbEntityEnum.DEVICE,
    scope: TbScopeEnum = TbScopeEnum.SERVER_SCOPE,
  ): Promise<void> {
    this.logger.info(`Posting ${scope} attributes to ${entityType} ${entityId}`)
    const url = `/api/plugins/telemetry/${entityType}/${entityId}/attributes/${scope}`
    await this.api.post(url, attributes)
  }

  async upsertEntity<T>(
    entityType: TbApiEntity,
    entity: T,
    config: AxiosRequestConfig | undefined = undefined,
  ): Promise<T> {
    const uri = this.getUri(entityType, 'post', 'single')
    this.logger.info(`Upserting entity ${entityType}`)
    this.logger.debug(
      `Posting entity ${entityType}: ${JSON.stringify(entity)}, uri: ${uri}`,
    )
    const response: AxiosResponse<T> = await this.api.post<T>(
      uri,
      entity,
      config,
    )
    return response.data
  }

  async getEntity<T>(
    entityType: TbApiEntity,
    config: AxiosRequestConfig | undefined = undefined,
    entityId?: string,
  ): Promise<T | undefined> {
    const uri = this.getUri(entityType, 'get', 'single', 'byId', entityId)
    this.logger.info(`Fetching entity ${entityType}`)
    const response: AxiosResponse<T> = await this.api.get<T>(uri, config)
    return response.data
  }

  async getDevices(): Promise<TbDevice[]> {
    return this.getEntities<TbDevice>('device')
  }

  // Asset profiles are synced by name only
  // NB: Asset profile names are unique
  async upsertAssetProfile(name: string): Promise<TbAssetProfile> {
    const tbAssetProfiles =
      await this.getEntities<TbAssetProfile>('asset-profile')

    const tbAssetProfile = _.find(tbAssetProfiles, { name })

    if (tbAssetProfile) {
      this.logger.info(`Asset profile ${name}: In sync`)
      return tbAssetProfile
    }

    this.logger.info(`Asset profile ${name}: Creating new asset profile.`)

    return await this.upsertEntity<TbAssetProfile>('asset-profile', { name })
  }

  // Device profiles are synced by externalId, name, and description
  // NB: Device profile names are unique
  async upsertDeviceProfile(
    name: string,
    externalId: string,
    description: string,
    alarms: TbDeviceProfileAlarm[] = [],
    tbRuleChainId: string,
  ): Promise<TbDeviceProfile> {
    const tbDeviceProfiles =
      await this.getEntities<TbDeviceProfile>('device-profile')

    let tbDeviceProfile = _.find(tbDeviceProfiles, {
      name,
    }) as TbDeviceProfile

    if (tbDeviceProfile) {
      if (
        tbDeviceProfile.description === description &&
        tbDeviceProfile.externalId?.id === externalId &&
        _.isEqual(tbDeviceProfile.profileData.alarms, alarms) &&
        tbDeviceProfile.defaultRuleChainId?.id === tbRuleChainId
      ) {
        this.logger.info(`Device profile ${name}: In sync`)
      } else {
        if (tbDeviceProfile.description !== description) {
          this.logger.info(`Device profile ${name}: Updating description`)
          tbDeviceProfile.description = description
        }

        if (tbDeviceProfile.externalId?.id !== externalId) {
          this.logger.info(`Device profile ${name}: Updating externalId`)
          tbDeviceProfile.externalId = {
            entityType: TbEntityEnum.DEVICE_PROFILE,
            id: externalId,
          }
        }

        if (!_.isEqual(tbDeviceProfile.profileData.alarms, alarms)) {
          this.logger.info(`Device profile ${name}: Updating alarms`)
          tbDeviceProfile.profileData.alarms = alarms
        }

        if (tbDeviceProfile.defaultRuleChainId?.id !== tbRuleChainId) {
          this.logger.info(`Device profile ${name}: Updating rule chain id`)
          tbDeviceProfile.defaultRuleChainId = {
            entityType: TbEntityEnum.RULE_CHAIN,
            id: tbRuleChainId,
          }
        }

        tbDeviceProfile = await this.upsertEntity<TbDeviceProfile>(
          'device-profile',
          tbDeviceProfile,
        )
      }
    } else {
      this.logger.info(
        `Device profile ${name}: Creating new device profile with ${alarms.length} alarms.`,
      )

      const newTbDeviceProfile: TbDeviceProfile = {
        name,
        description,
        transportType: TbTransportEnum.DEFAULT,
        profileData: {
          configuration: { type: 'DEFAULT' },
          provisionConfiguration: {
            type: TbProvisionTypeEnum.DISABLED,
            provisionDeviceSecret: null,
          },
          transportConfiguration: { type: TbTransportEnum.DEFAULT },
          alarms,
        },
        type: 'DEFAULT',
        externalId: {
          entityType: TbEntityEnum.DEVICE_PROFILE,
          id: externalId,
        },
        defaultRuleChainId: {
          entityType: TbEntityEnum.RULE_CHAIN,
          id: tbRuleChainId,
        },
      }

      tbDeviceProfile = await this.upsertEntity<TbDeviceProfile>(
        'device-profile',
        newTbDeviceProfile,
      )
    }

    return tbDeviceProfile
  }

  async upsertGatewayDevice(gatewayName: string): Promise<TbDeviceInfo> {
    const tbDevices = await this.getEntities<TbDevice>('device')

    const gateway = tbDevices.find(d => d.name === gatewayName)

    if (gateway) {
      this.logger.info('Gateway: In sync')
      return gateway
    }

    const response: AxiosResponse<TbDeviceInfo> =
      await this.api.post<TbDeviceInfo>('api/device', {
        name: gatewayName,
        label: gatewayName,
        additionalInfo: {
          gateway: true,
        },
      })

    return response.data
  }

  // Assets are synced by name and asset profile
  // NB: Asset names are unique
  async upsertAsset(name: string, assetProfileName: string): Promise<TbAsset> {
    const tbAssetProfiles =
      await this.getEntities<TbAssetProfile>('asset-profile')
    const tbAssets = await this.getEntities<TbAsset>('asset')

    const tbAssetProfile = _.find(tbAssetProfiles, {
      name: assetProfileName,
    }) as TbAssetProfile

    if (!tbAssetProfile) {
      const errorStr = `Asset ${name}: No asset profile with name ${assetProfileName} found!`
      this.logger.error(errorStr)
      throw new Error(errorStr)
    }

    let tbAsset = _.find(tbAssets, { name }) as TbAsset

    if (tbAsset) {
      if (tbAsset.assetProfileId?.id === tbAssetProfile.id?.id) {
        this.logger.info(`Asset ${name}: In sync`)
      } else {
        this.logger.info(`Asset ${name}: Setting asset profile id`)
        tbAsset = await this.upsertEntity<TbAsset>('asset', {
          ...tbAsset,
          assetProfileId: {
            entityType: TbEntityEnum.ASSET_PROFILE,
            id: tbAssetProfile.id?.id || 'todo: this can not happen',
          },
        })
      }
    } else {
      this.logger.info(`Asset ${name}: Creating new asset.`)
      tbAsset = await this.upsertEntity<TbAsset>('asset', {
        name: name,
        assetProfileId: {
          entityType: TbEntityEnum.ASSET_PROFILE,
          id: tbAssetProfile.id?.id || 'todo: this can not happen',
        },
      })
    }

    return tbAsset
  }

  // Devices are synced by external id, name, and device profile
  // NB: Device names are unique
  async upsertDevice(
    name: string,
    externalId: string,
    deviceProfileName: string,
  ): Promise<TbDevice> {
    const tbDeviceProfiles =
      await this.getEntities<TbDeviceProfile>('device-profile')
    const tbDevices = await this.getEntities<TbDevice>('device')

    const tbDeviceProfile = _.find(tbDeviceProfiles, {
      name: deviceProfileName,
    }) as TbDeviceProfile

    if (!tbDeviceProfile) {
      const errorStr = `Device ${name}: No device profile with name ${deviceProfileName} found!`
      this.logger.error(errorStr)
      throw new Error(errorStr)
    }

    let tbDevice = _.find(tbDevices, { name }) as TbDevice

    if (tbDevice) {
      if (
        tbDevice.deviceProfileId?.id === tbDeviceProfile.id?.id &&
        tbDevice.externalId?.id === externalId
      ) {
        this.logger.info(`Device ${name}: In sync`)
      } else {
        this.logger.info(
          `Device ${name}: Setting device profile id and external id`,
        )
        tbDevice = {
          ...tbDevice,
          deviceProfileId: {
            entityType: TbEntityEnum.DEVICE_PROFILE,
            id: tbDeviceProfile.id?.id || 'todo: this can not happen',
          },
          externalId: {
            entityType: TbEntityEnum.DEVICE,
            id: externalId,
          },
        }

        tbDevice = await this.upsertEntity<TbDevice>('device', tbDevice)
      }
    } else {
      this.logger.info(`Device ${name}: Creating new device.`)
      tbDevice = await this.upsertEntity<TbDevice>('device', {
        name,
        deviceProfileId: {
          entityType: TbEntityEnum.DEVICE_PROFILE,
          id: tbDeviceProfile.id?.id || 'todo: this can not happen',
        },
        externalId: {
          entityType: TbEntityEnum.DEVICE,
          id: externalId,
        },
      })
    }

    return tbDevice
  }

  async setDeviceLabel(deviceName: string, label: string): Promise<TbDevice> {
    this.logger.info(`Setting label for device ${deviceName} to ${label}`)

    const tbDevices = await this.getEntities<TbDevice>('device')
    const tbDevice = _.find(tbDevices, { name: deviceName }) as TbDevice

    if (!tbDevice) {
      throw new Error(`Device ${deviceName}: Not found in device list`)
    }

    return await this.upsertEntity<TbDevice>('device', { ...tbDevice, label })
  }

  async setAssetLabel(assetName: string, label: string): Promise<TbAsset> {
    this.logger.info(`Setting label for asset ${assetName} to ${label}`)

    const tbAssets = await this.getEntities<TbAsset>('asset')
    const tbAsset = _.find(tbAssets, { name: assetName }) as TbAsset

    if (!tbAsset) {
      throw new Error(`Asset ${assetName}: Not found in asset list`)
    }

    return await this.upsertEntity<TbAsset>('asset', { ...tbAsset, label })
  }

  async upsertCustomer(customerTitle: string): Promise<TbCustomer> {
    const tbCustomers = await this.getEntities<TbCustomer>('customer')
    let tbCustomer = _.find(tbCustomers, { title: customerTitle }) as TbCustomer

    if (tbCustomer) {
      this.logger.info(`Customer ${customerTitle}: In sync`)
    } else {
      this.logger.info(`Customer ${customerTitle}: Creating new customer.`)
      tbCustomer = await this.upsertEntity<TbCustomer>('customer', {
        title: customerTitle,
      })
    }

    return tbCustomer
  }

  async upsertUser(
    email: string,
    firstName: string,
    lastName: string,
    customerTitle: string,
  ): Promise<TbUser> {
    const tbUsers = await this.getEntities<TbUser>('user')
    const tbCustomers = await this.getEntities<TbCustomer>('customer')

    const tbCustomer = _.find(tbCustomers, { title: customerTitle })

    if (!tbCustomer) {
      const errorStr = `Customer ${customerTitle} not found`
      this.logger.error(errorStr)
      throw new Error(errorStr)
    }

    let tbUser = _.find(tbUsers, { email }) as TbUser

    if (tbUser) {
      if (
        tbUser.customerId?.id === tbCustomer.id?.id &&
        tbUser.firstName === firstName &&
        tbUser.lastName === lastName
      ) {
        this.logger.info(`User ${email}: In sync`)
      } else {
        this.logger.info(`User ${email}: Updating name and customer id`)
        tbUser = await this.upsertEntity<TbUser>('user', {
          ...tbUser,
          customerId: {
            entityType: TbEntityEnum.CUSTOMER,
            id: tbCustomer.id?.id || 'todo: this can not happen',
          },
          firstName,
          lastName,
        })
      }
    } else {
      this.logger.info(`User ${email}: Creating new user.`)
      tbUser = await this.upsertEntity<TbUser>(
        'user',
        {
          customerId: {
            entityType: TbEntityEnum.CUSTOMER,
            id: tbCustomer.id?.id || 'todo: this can not happen',
          },
          authority: TbAuthorityEnum.CUSTOMER_USER,
          firstName,
          lastName,
          email,
        },
        {
          params: {
            sendActivationMail: false,
          },
        },
      )
    }

    return tbUser
  }

  async getRootRuleChain(): Promise<TbRuleChain> {
    const tbRuleChains = await this.getEntities<TbRuleChain>('rule-chain')
    const rootRuleChain = _.find(tbRuleChains, {
      name: 'Root Rule Chain',
    }) as TbRuleChain

    if (!rootRuleChain) {
      throw new Error('Root rule chain not found')
    }

    return rootRuleChain
  }

  async getRuleChainMetaData(
    ruleChainId: string,
  ): Promise<TbRuleChainMetaData> {
    const result = await this.api.get<TbRuleChainMetaData>(
      `api/ruleChain/${ruleChainId}/metadata`,
    )
    return result.data
  }

  isTheSameRuleChainMetaData(
    template: RuleChainMetaData,
    metaData: TbRuleChainMetaData,
  ): boolean {
    const templateNodes = _.map(template.nodes, node =>
      _.pick(node, ['type', 'name']),
    )
    const metaDataNodes = _.map(metaData.nodes, node =>
      _.pick(node, ['type', 'name']),
    )

    if (_.isEqual(templateNodes, metaDataNodes)) {
      const templateConnections = _.sortBy(
        template.connections,
        c => c.fromIndex * c.toIndex,
      )
      const metaDataConnections = _.sortBy(
        metaData.connections,
        c => c.fromIndex * c.toIndex,
      )
      if (_.isEqual(templateConnections, metaDataConnections)) {
        if (template.firstNodeIndex === metaData.firstNodeIndex) {
          return true
        } else {
          this.logger.warn('Metadata first node index is not equal to template')
          return false
        }
      } else {
        this.logger.warn('Metadata connections are not equal to template')
        return false
      }
    } else {
      this.logger.warn('Metadata nodes are not equal to template')
      return false
    }
  }

  async upsertRuleChain(
    deviceProfileName: string,
    template: RuleChainMetaData,
  ): Promise<TbRuleChain> {
    const tbRuleChains = await this.getEntities<TbRuleChain>('rule-chain')
    let tbRuleChain = _.find(tbRuleChains, { name: deviceProfileName })

    if (tbRuleChain) {
      const tbRuleChainId = tbRuleChain.id?.id || 'unknown'
      const tbRuleChainMetaData = await this.getRuleChainMetaData(tbRuleChainId)

      if (this.isTheSameRuleChainMetaData(template, tbRuleChainMetaData)) {
        this.logger.info(`Rule chain ${deviceProfileName}: In sync`)
        return tbRuleChain
      } else {
        this.logger.info(`Rule chain ${deviceProfileName}: Updating metadata`)
        await this.api.post<TbRuleChainMetaData>('api/ruleChain/metadata', {
          ruleChainId: {
            entityType: TbEntityEnum.RULE_CHAIN,
            id: tbRuleChainId,
          },
          ...template,
        })
        return tbRuleChain
      }
    } else {
      this.logger.info(
        `Rule chain ${deviceProfileName}: Creating new rule chain.`,
      )
      tbRuleChain = await this.upsertEntity<TbRuleChain>('rule-chain', {
        name: deviceProfileName,
      })
      this.logger.info(`Rule chain ${deviceProfileName}: Creating metadata`)
      await this.api.post<TbRuleChainMetaData>('api/ruleChain/metadata', {
        ruleChainId: {
          entityType: TbEntityEnum.RULE_CHAIN,
          id: tbRuleChain.id?.id || 'todo: this can not happen',
        },
        ...template,
      })
      return tbRuleChain
    }
  }

  async upsertDashboard(
    dashboard: any,
    customerId?: string,
  ): Promise<TbDashboard> {
    let tbDashboardInfos: TbDashboardInfo[] = []
    if (customerId) {
      // only search in dashboards belonging to the customer
      let hasNext = true
      let page = 0
      let tbPage: TbPageData<TbDashboardInfo>
      while (hasNext) {
        const response: AxiosResponse<TbPageData<TbDashboardInfo>> =
          await this.api.get<TbPageData<TbDashboardInfo>>(
            `api/customer/${customerId}/dashboards`,
            {
              params: { pageSize: 100, page },
            },
          )
        tbPage = response.data
        tbDashboardInfos.push(...tbPage.data)
        hasNext = tbPage.hasNext
        page += 1
      }
    } else {
      // search all tenant accessable dashboards
      tbDashboardInfos = await this.getEntities<TbDashboardInfo>('dashboard')
    }
    const tbDashboardInfo = _.find(tbDashboardInfos, { title: dashboard.title })
    const tbDashboardInfoId = tbDashboardInfo?.id?.id

    let tbDashboard: TbDashboard | undefined
    if (tbDashboardInfoId) {
      tbDashboard = await this.getEntity<TbDashboard>(
        'dashboard',
        { params: { inlineImages: true } },
        tbDashboardInfoId,
      )
    }

    if (tbDashboard) {
      let inSync: boolean = true

      const rootProps: (keyof TbDashboard)[] = [
        'title',
        'name',
        'image',
        'mobileHide',
        'mobileOrder',
      ]
      for (const rootProp of rootProps) {
        if (dashboard[rootProp] !== tbDashboard[rootProp]) {
          this.logger.info(`Dashboard ${dashboard.title}: Updating ${rootProp}`)
          ;(tbDashboard as any)[rootProp] = dashboard[rootProp]
          inSync = false
        }
      }

      if (
        !dashboardConfigurationIsEqual(
          dashboard.configuration || {},
          tbDashboard.configuration || {},
        )
      ) {
        this.logger.info(`Dashboard ${dashboard.title}: Updating configuration`)
        tbDashboard.configuration = dashboard.configuration
        inSync = false
      }
      if (inSync) {
        this.logger.info(`Dashboard ${dashboard.title}: In sync`)
      } else {
        this.logger.info(`Dashboard ${dashboard.title}: Updating configuration`)
        return await this.upsertEntity<TbDashboard>('dashboard', tbDashboard)
      }
    } else {
      this.logger.info(`Dashboard ${dashboard.title}: Creating new dashboard.`)
      tbDashboard = await this.upsertEntity<TbDashboard>('dashboard', dashboard)
    }

    return tbDashboard
  }

  async assignDashboardToCustomer(dashboardId: string, customerTitle: string) {
    this.logger.info(
      `Assigning dashboard ${dashboardId} to customer ${customerTitle}`,
    )

    const customerId = await this.getCachedCustomerId(customerTitle)

    return await this.api.post<TbDashboard>(
      `/api/customer/${customerId}/dashboard/${dashboardId}`,
    )
  }

  async activateUser(email: string, password: string): Promise<void> {
    const tbUsers = await this.getEntities<TbUser>('user')
    const tbUser = _.find(tbUsers, { email }) as TbUser

    if (!tbUser) {
      throw new Error(`User ${email}: Not found in user list`)
    }

    let activationLink
    try {
      activationLink = await this.api.get<TbUserActivationLink>(
        `/api/user/${tbUser.id?.id}/activationLink`,
      )
    } catch (error) {
      if (isAxiosError(error)) {
        if (error.response?.data?.message === 'User is already activated!') {
          this.logger.info(`User ${tbUser.email}: Already activated`)
          return
        } else {
          throw error
        }
      } else {
        throw error
      }
    }

    if (!activationLink) {
      throw new Error(`User ${email}: No activation link found`)
    }

    const activateToken = _.first(
      _.values(querystring.parse(activationLink.data)),
    )

    if (!activateToken) {
      throw new Error(
        `User ${email}: No activation token found in activation link ${activationLink.data}`,
      )
    }

    await this.api.post(
      '/api/noauth/activate',
      {
        activateToken,
        password,
      },
      { params: { sendActivationMail: false } },
    )
  }

  async assignAssetToCustomer(
    assetName: string,
    customerTitle: string,
  ): Promise<void> {
    this.logger.info(
      `Assigning asset ${assetName} to customer ${customerTitle}`,
    )
    const assetId = await this.getCachedAssetId(assetName)
    const customerId = await this.getCachedCustomerId(customerTitle)
    await this.api.post(`/api/customer/${customerId}/asset/${assetId}`)
  }

  async relateAssetToCustomer(
    assetName: string,
    customerTitle: string,
  ): Promise<TbRelation> {
    this.logger.info(`Relating asset ${assetName} to asset ${customerTitle}`)

    const tbAssetId = await this.getCachedAssetId(assetName)
    const tbCustomerId = await this.getCachedCustomerId(customerTitle)

    let tbRelation
    try {
      tbRelation = await this.getEntity<TbRelation>('relation', {
        params: {
          fromId: tbCustomerId,
          fromType: TbEntityEnum.CUSTOMER,
          toId: tbAssetId,
          toType: TbEntityEnum.ASSET,
          relationType: 'Owns',
          relationTypeGroup: TbRelationTypeGroupEnum.COMMON,
        },
      })
    } catch (error) {
      if (isAxiosError(error)) {
        if (error.response?.status === 404) {
          this.logger.info(
            `Relation customer ${customerTitle} → asset ${assetName}: Does not exist yet`,
          )
        }
      } else {
        throw error
      }
    }

    if (tbRelation) {
      this.logger.warn(
        `Relation customer ${customerTitle} → asset ${assetName}: Already exists`,
      )
      return tbRelation
    }

    return await this.upsertEntity<TbRelation>('relation', {
      from: {
        id: tbCustomerId,
        entityType: TbEntityEnum.CUSTOMER,
      },
      to: {
        id: tbAssetId,
        entityType: TbEntityEnum.ASSET,
      },
      type: 'Owns',
      typeGroup: TbRelationTypeGroupEnum.COMMON,
      additionalInfo: {},
    })
  }

  async findCustomerRelatedAssets(customerTitle: string): Promise<TbAsset[]> {
    const customerId = await this.getCachedCustomerId(customerTitle)

    const query: TbEntityRelationsQuery = {
      parameters: {
        rootId: customerId,
        rootType: TbEntityEnum.CUSTOMER,
        direction: TbRelationDirectionEnum.FROM,
        relationTypeGroup: TbRelationTypeGroupEnum.COMMON,
        fetchLastLevelOnly: false,
      },
      filters: [
        {
          relationType: 'Owns',
          entityTypes: [TbEntityEnum.ASSET],
        },
      ],
    }

    const result = await this.api.post<TbEntityRelation[]>(
      'api/relations',
      query,
    )

    this.logger.info(
      `Customer ${customerTitle}: Found ${result.data.length} assets`,
    )

    const assets: TbAsset[] = []
    for (const tbEntityRelation of result.data) {
      const asset = await this.getEntity<TbAsset>(
        'asset',
        {},
        tbEntityRelation.to?.id,
      )
      if (!asset) {
        throw new Error(
          `Customer ${customerTitle}: Asset ${tbEntityRelation.to?.id} not found in asset list`,
        )
      }
      assets.push(asset)
    }

    return assets
  }

  async findAssetRelatedDevices(assetName: string): Promise<TbDevice[]> {
    const assetId = await this.getCachedAssetId(assetName)

    const query: TbEntityRelationsQuery = {
      parameters: {
        rootId: assetId,
        rootType: TbEntityEnum.ASSET,
        direction: TbRelationDirectionEnum.FROM,
        relationTypeGroup: TbRelationTypeGroupEnum.COMMON,
        fetchLastLevelOnly: false,
      },
      filters: [
        {
          relationType: 'Contains',
          entityTypes: [TbEntityEnum.DEVICE],
        },
      ],
    }

    const result = await this.api.post<TbEntityRelation[]>(
      'api/relations',
      query,
    )

    this.logger.info(`Asset ${assetName}: Found ${result.data.length} devices`)

    const devices: TbDevice[] = []
    for (const tbEntityRelation of result.data) {
      const device = await this.getEntity<TbDevice>(
        'device',
        {},
        tbEntityRelation.to?.id,
      )
      if (!device) {
        throw new Error(
          `Asset ${assetName}: Device ${tbEntityRelation.to?.id} not found in device list`,
        )
      }
      devices.push(device)
    }

    return devices
  }

  async claimDevice(deviceName: string, secretKey: string): Promise<void> {
    this.logger.info(`Claiming device ${deviceName}`)

    let response: AxiosResponse
    try {
      response = await this.api.post(
        `/api/customer/device/${deviceName}/claim`,
        { secretKey },
      )

      if (response.status === 200 && response.data.response === 'SUCCESS') {
        this.logger.info(`Device ${deviceName}: Claimed`)
      }
    } catch (error) {
      if (isAxiosError(error)) {
        if (
          error.response?.status === 400 &&
          error.response?.data === 'CLAIMED'
        ) {
          this.logger.warn(`Device ${deviceName}: Already claimed`)
        } else {
          throw new Error(
            `Failed to claim device ${deviceName}: ${error.message}`,
          )
        }
      } else {
        throw error
      }
    }
  }

  async relateDeviceToAsset(
    deviceName: string,
    assetName: string,
  ): Promise<TbRelation> {
    this.logger.info(`Relating device ${deviceName} to asset ${assetName}`)

    const tbDevices = await this.getEntities<TbDevice>('device')
    const tbDevice = _.find(tbDevices, { name: deviceName }) as TbDevice
    if (!tbDevice) {
      throw new Error(`Device ${deviceName}: Not found in device list`)
    }

    const tbAssets = await this.getEntities<TbAsset>('asset')
    const tbAsset = _.find(tbAssets, { name: assetName }) as TbAsset
    if (!tbAsset) {
      throw new Error(`Asset ${assetName}: Not found in asset list`)
    }

    let tbRelation
    try {
      tbRelation = await this.getEntity<TbRelation>('relation', {
        params: {
          fromId: tbAsset.id?.id,
          fromType: TbEntityEnum.ASSET,
          toId: tbDevice.id?.id,
          toType: TbEntityEnum.DEVICE,
          relationType: 'Contains',
          relationTypeGroup: TbRelationTypeGroupEnum.COMMON,
        },
      })
    } catch (error) {
      if (isAxiosError(error)) {
        if (error.response?.status === 404) {
          this.logger.info(
            `Relation asset ${assetName} → device ${deviceName}: Does not exist yet`,
          )
        }
      } else {
        throw error
      }
    }

    if (tbRelation) {
      this.logger.warn(
        `Relation asset ${assetName} → device ${deviceName}: Already exists`,
      )
      return tbRelation
    }

    return await this.upsertEntity<TbRelation>('relation', {
      from: {
        id: tbAsset.id?.id || 'todo: this can not happen',
        entityType: TbEntityEnum.ASSET,
      },
      to: {
        id: tbDevice.id?.id || 'todo: this can not happen',
        entityType: TbEntityEnum.DEVICE,
      },
      type: 'Contains',
      typeGroup: TbRelationTypeGroupEnum.COMMON,
      additionalInfo: {},
    })
  }

  async getLatestTimeseries(
    entityId: string,
    entityType: TbEntityEnum = TbEntityEnum.DEVICE,
    keys?: string,
  ) {
    const params: any = { useStrictDataTypes: true }

    if (keys) {
      params.keys = keys
    }

    const response: AxiosResponse<TbTimeseriesData> = await this.api.get(
      `/api/plugins/telemetry/${entityType}/${entityId}/values/timeseries`,
      { params },
    )

    const latest = _.mapValues(response.data, (values: TbTimeseriesValue[]) =>
      _.first(values),
    )

    return latest
  }
}
