export type TbApiOptions = {
  baseUrl: string
  tenantAdminUsername: string
  tenantAdminPassword: string
}

export type ConnectMsg = { device: string; type: string }

export type DisconnectMsg = { device: string; type: string }

export type TelemetryMsg = {
  [key: string]: {
    ts: number
    values: {
      [key: string]: number
    }
  }[]
}

export type AttributesMsg = {
  [key: string]: {
    [key: string]: number | string
  }
}
export type RequestMsg = {
  id: string
  device: string
  client: true
  key: string
}

export type ResponseMsg = {
  id: string
  device: string
  value: string
}

export type Metric =
  | 'battery_level_sensor'
  | 'battery_level'
  | 'battery_voltage_sensor'
  | 'battery_voltage'
  | 'close_counter'
  | 'close'
  | 'humidity'
  | 'movement_counter'
  | 'temperature'
  | 'water'

export type DeviceProfileName =
  | 'Bridge Model 001'
  | 'Water Sensor Model 001'
  | 'Battery Monitor Model 001'
  | 'Battery Monitor Model 002'
  | 'Environmental Sensor Model 001'
  | 'Environmental Sensor Model 002'
  | 'Hall Sensor Model 001'

export type DeviceProfile = {
  id: string
  name: DeviceProfileName
  description?: string
  metrics: Metric[]
  type: 'sensor' | 'bridge'
}

export type Device = {
  id: string
  name: string
  deviceProfile: DeviceProfile
  uid: string
  attributes: {
    type: string
  }
  values: {
    [key: string]: number
  }
}

export type MetricBehaviors = {
  [key in Metric]: {
    min: number
    max: number
    step: number
    start: number
    trend?: 'up' | 'down'
  }
}
