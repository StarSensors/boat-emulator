import { caching, Cache } from 'cache-manager'
import { jwtDecode } from 'jwt-decode'
import { Logger } from 'pino'
import axios, { AxiosResponse, AxiosInstance } from 'axios'

import { TbApiOptions, DeviceProfile, Device } from '../types'
import { TbDeviceInfo } from './interfaces/device'
import { TbPageData } from './models/page-data'
import {
  TbScopeEnum,
  TbTransportEnum,
  TbProvisionTypeEnum,
  TbEntityEnum,
} from './interfaces/enums'
import { TbDeviceProfile } from './interfaces/device-profile'

export class TbApi {
  private readonly api: AxiosInstance
  private cache: Cache
  private readonly logger: Logger
  private readonly tenantAdminUsername: string
  private readonly tenantAdminPassword: string
  private tenantAdminToken: string
  private tenantAdminRefreshToken: string

  constructor(options: TbApiOptions, logger: Logger) {
    this.logger = logger.child({ context: 'TbApi' })

    this.tenantAdminUsername = options.tenantAdminUsername
    this.tenantAdminPassword = options.tenantAdminPassword

    this.api = axios.create({
      baseURL: options.baseUrl,
      timeout: 10000,
    })

    this.api.interceptors.request.use(
      async config => {
        if (config.url === 'api/auth/login') return config
        await this.assureLogin()
        config.headers['X-Authorization'] = `Bearer ${this.tenantAdminToken}`
        return config
      },
      error => {
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
        username: this.tenantAdminUsername,
        password: this.tenantAdminPassword,
      })

    this.tenantAdminToken = response.data.token
    this.tenantAdminRefreshToken = response.data.refreshToken

    this.logger.info('Logged in.')
  }

  async refreshToken(): Promise<void> {
    this.logger.info(
      `Refreshing token with token ${this.tenantAdminRefreshToken}...`,
    )
    const response: AxiosResponse<{ token: string; refreshToken: string }> =
      await this.api.post('api/auth/token', {
        refreshToken: this.tenantAdminRefreshToken,
      })

    this.tenantAdminToken = response.data.token
    this.tenantAdminRefreshToken = response.data.refreshToken

    this.logger.info('Refreshed token.')
  }

  tenantAdminTokenIsExpired(): boolean {
    if (typeof this.tenantAdminToken !== 'string' || !this.tenantAdminToken) {
      throw new Error('Invalid token provided')
    }

    let isJwtExpired = false
    const { exp } = jwtDecode(this.tenantAdminToken)

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
    if (this.tenantAdminToken) {
      if (this.tenantAdminTokenIsExpired()) {
        this.logger.info('Token expired, refreshing...')
        try {
          await this.refreshToken()
        } catch (error) {
          this.logger.error('Failed to login')
          await this.login()
        }
      }
    } else {
      await this.login()
    }
  }

  async getDeviceId(deviceName: string): Promise<string> {
    let id: string | undefined = await this.cache.get(deviceName)

    if (!id) {
      this.logger.info(`Device ${deviceName}: ID not cached, fetching...`)

      const response: AxiosResponse<{ id: { id: string } }> =
        await this.api.get('api/tenant/devices', {
          params: { deviceName },
        })

      id = response.data.id?.id

      if (!id) {
        throw new Error(
          `Device ${deviceName}: Device id not found in response ${JSON.stringify(
            response,
          )}`,
        )
      }

      this.logger.info(`Device ${deviceName}: Caching ID ${id}`)
      await this.cache.set(deviceName, id)
    }

    return id
  }

  async getDeviceAccessToken(
    deviceName: string,
    deviceId: string,
  ): Promise<string> {
    let accessToken: string | undefined = await this.cache.get(deviceId)

    if (!accessToken) {
      this.logger.info(
        `Device ${deviceName}: Access token not cached, fetching... (ID: ${deviceId})`,
      )

      const response: AxiosResponse<{
        deviceId: { id: string }
        credentialsType: string
        credentialsId: string
      }> = await this.api.get(`api/device/${deviceId}/credentials`, {
        headers: {
          'X-Authorization': `Bearer ${this.tenantAdminToken}`,
        },
      })

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
      await this.cache.set(deviceId, accessToken)
    }

    return accessToken
  }

  async getDeviceProfiles(): Promise<TbDeviceProfile[]> {
    let deviceProfiles: TbDeviceProfile[] = []

    let hasNext = true
    let page = 0
    let tbPage: TbPageData<TbDeviceProfile>
    while (hasNext) {
      tbPage = await this.getDeviceProfilesPage({
        pageSize: 100,
        page,
      })

      deviceProfiles = deviceProfiles.concat(tbPage.data)
      hasNext = tbPage.hasNext
      page += 1
    }

    return deviceProfiles
  }

  async getDevices(): Promise<TbDeviceInfo[]> {
    let devices: TbDeviceInfo[] = []

    let hasNext = true
    let page = 0
    let tbPage: TbPageData<TbDeviceInfo>
    while (hasNext) {
      tbPage = await this.getDevicesPage({
        pageSize: 100,
        page,
      })
      devices = devices.concat(tbPage.data)
      hasNext = tbPage.hasNext
      page += 1
    }

    return devices
  }

  async getDeviceAttributes(
    deviceId: string,
    scope: TbScopeEnum = TbScopeEnum.SERVER_SCOPE,
  ): Promise<{ [key: string]: string | number }[]> {
    const response: AxiosResponse<{ [key: string]: string | number }[]> =
      await this.api.get(
        `/api/plugins/telemetry/DEVICE/${deviceId}/values/attributes/${scope}`,
      )

    return response.data
  }

  async getDeviceProfilesPage(query: {
    pageSize: number
    page: number
    includeCustomers?: string
    deviceProfileId?: string
    active?: boolean
    textSearch?: string
    sortProperty?: string
    sortOrder?: string
  }): Promise<TbPageData<TbDeviceProfile>> {
    const response: AxiosResponse<TbPageData<TbDeviceProfile>> =
      await this.api.get<TbPageData<TbDeviceProfile>>('api/deviceProfiles', {
        params: query,
      })

    return response.data
  }

  async getDevicesPage(query: {
    pageSize: number
    page: number
    includeCustomers?: string
    deviceProfileId?: string
    active?: boolean
    textSearch?: string
    sortProperty?: string
    sortOrder?: string
  }): Promise<TbPageData<TbDeviceInfo>> {
    const response: AxiosResponse<TbPageData<TbDeviceInfo>> =
      await this.api.get<TbPageData<TbDeviceInfo>>('api/tenant/deviceInfos', {
        params: query,
      })

    return response.data
  }

  async upsertDeviceProfile(
    deviceProfile: TbDeviceProfile,
  ): Promise<TbDeviceProfile> {
    const response: AxiosResponse<TbDeviceProfile> =
      await this.api.post<TbDeviceProfile>('api/deviceProfile', deviceProfile)

    return response.data
  }

  async upsertDeviceProfiles(deviceProfiles: DeviceProfile[]): Promise<void> {
    const tbDeviceProfiles = await this.getDeviceProfiles()

    for (const deviceProfile of deviceProfiles) {
      let tbDeviceProfile = tbDeviceProfiles.find(
        d => d.name === deviceProfile.name,
      )

      if (
        tbDeviceProfile &&
        tbDeviceProfile.externalId?.entityType ===
          TbEntityEnum.DEVICE_PROFILE &&
        tbDeviceProfile.externalId?.id === deviceProfile.id &&
        tbDeviceProfile.name === deviceProfile.name
      ) {
        this.logger.info(`Device type ${deviceProfile.name}: In sync`)
        continue
      }

      if (tbDeviceProfile) {
        this.logger.info(
          `Device type ${deviceProfile.name}: Setting name, description, and external id`,
        )
        tbDeviceProfile.externalId = {
          entityType: TbEntityEnum.DEVICE_PROFILE,
          id: deviceProfile.id,
        }
        tbDeviceProfile.name = deviceProfile.name
      } else {
        this.logger.info(
          `Device type ${deviceProfile.name}: Creating new device type.`,
        )

        tbDeviceProfile = {
          name: deviceProfile.name,
          description: deviceProfile.description || '',
          transportType: TbTransportEnum.DEFAULT,
          profileData: {
            configuration: { type: 'DEFAULT' },
            provisionConfiguration: {
              type: TbProvisionTypeEnum.DISABLED,
              provisionDeviceSecret: null,
            },
            transportConfiguration: { type: TbTransportEnum.DEFAULT },
          },
          type: 'DEFAULT',
          externalId: {
            entityType: TbEntityEnum.DEVICE_PROFILE,
            id: deviceProfile.id,
          },
        }
      }

      await this.upsertDeviceProfile(tbDeviceProfile)
    }
  }

  async upsertDevices(devices: Device[]): Promise<void> {
    const tbDeviceProfiles = await this.getDeviceProfiles()
    const tbDevices = await this.getDevices()

    for (const device of devices) {
      const tbDeviceProfile = tbDeviceProfiles.find(
        tbDeviceProfile => tbDeviceProfile.name === device.deviceProfile.name,
      )

      if (!tbDeviceProfile) {
        const errorStr = `Device ${device.name}: No device profile with name ${device.deviceProfile} found!`
        this.logger.error(errorStr)
        throw new Error(errorStr)
      }

      let tbDevice = tbDevices.find(tbDevice => tbDevice.name === device.uid)

      if (
        tbDevice &&
        tbDevice.externalId?.entityType === TbEntityEnum.DEVICE &&
        tbDevice.externalId.id === device.id &&
        tbDevice.deviceProfileId?.entityType === TbEntityEnum.DEVICE_PROFILE &&
        tbDevice.deviceProfileId.id === tbDeviceProfile.id?.id &&
        tbDevice.name === device.uid &&
        tbDevice.label === device.name
      ) {
        this.logger.info(`Device ${device.name}: In sync`)
        continue
      }

      if (tbDevice) {
        this.logger.info(
          `Device ${device.name}: Setting name, label, device profile and external id`,
        )
        tbDevice = {
          ...tbDevice,
          name: device.uid,
          label: device.name,
          deviceProfileId: {
            entityType: TbEntityEnum.DEVICE_PROFILE,
            id: tbDeviceProfile.id?.id || 'unknown',
          },
          externalId: {
            entityType: TbEntityEnum.DEVICE,
            id: device.id,
          },
        }
      } else {
        this.logger.info(`Device ${device.name}: Creating new device.`)

        tbDevice = {
          name: device.uid,
          label: device.name,
          deviceProfileId: {
            entityType: TbEntityEnum.DEVICE_PROFILE,
            id: tbDeviceProfile.id?.id || 'unknown',
          },
          externalId: {
            entityType: TbEntityEnum.DEVICE,
            id: device.id,
          },
        }
      }

      await this.upsertDevice(tbDevice)
    }
  }

  async upsertDevice(device: TbDeviceInfo): Promise<TbDeviceInfo> {
    const response: AxiosResponse<TbDeviceInfo> =
      await this.api.post<TbDeviceInfo>('api/device', device)

    return response.data
  }

  async upsertGatewayDevice(): Promise<TbDeviceInfo> {
    const gatewayName = 'Boat Emulator Gateway'

    const tbDevices = await this.getDevices()

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
}
