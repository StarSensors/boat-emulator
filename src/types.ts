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

export type SharedAttributesMsg = {
  device: string
  data: {
    [key: string]: number | string | boolean
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

export type RpcRequestMsg = {
  device: string
  data: {
    id: number
    method: string
    params: any | null
  }
}

export type RpcResponseMsg = {
  device: string
  id: number
  data: any
}

export type Metric =
  | 'battery_level'
  | 'battery_voltage'
  | 'humidity'
  | 'movement_counter'
  | 'open'
  | 'sensor_battery_level'
  | 'sensor_battery_voltage'
  | 'temperature'
  | 'water'

export type DeviceProfileName =
  | 'Battery Monitor Model 001'
  | 'Battery Monitor Model 002'
  | 'Bridge Model 001'
  | 'Environmental Sensor Model 001'
  | 'Environmental Sensor Model 002'
  | 'Hall Sensor Model 001'
  | 'Water Sensor Model 001'

export type DeviceProfileType = 'sensor' | 'bridge'

export type DeviceProfile = {
  id: string
  name: DeviceProfileName
  description?: string
  metrics: Metric[]
  type: DeviceProfileType
}

export type Device = {
  id: string
  name: string
  label: string
  deviceProfile: DeviceProfile
  attributes: {
    uid: string
    type: DeviceProfileType
    claimingAllowed: true
    claimingData: {
      secretKey: string
      expirationTime: number
    }
  }
  values: {
    [key: string]: number
  }
}

export type AssetProfileName = 'Boat' | 'Boat compartment' | 'Harbor'

export type AssetProfile = {
  name: AssetProfileName
}

export type Asset = {
  name: string
  label: string
  assetProfile: AssetProfile
  devices?: any[]
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

export type Customer = {
  title: string
  boat: string
}

export type User = {
  firstName: string
  lastName: string
  email: string
  password: string
  customer: Customer
}
