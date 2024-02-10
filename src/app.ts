import pino from 'pino'
import config from './config'

import { TbApi } from './tb-api'
import { TbGateway } from './tb-gateway'

import { deviceProfiles } from './constants/device-profiles'
import { devices } from './constants/devices'

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

const tbApi = new TbApi(config.tb, logger)
const tbGateway = new TbGateway(config.mqtt.url, logger)

const boostrap = async () => {
  await tbApi.start()

  await tbApi.upsertDeviceProfiles(deviceProfiles)
  await tbApi.upsertDevices(devices)

  const tbGatewayDevice = await tbApi.upsertGatewayDevice(
    'Boat Emulator Gateway',
  )
  const accessToken = await tbApi.getDeviceAccessToken(
    tbGatewayDevice.name,
    tbGatewayDevice.id?.id || 'unknown',
  )

  tbGateway.start(accessToken)
}

boostrap()
