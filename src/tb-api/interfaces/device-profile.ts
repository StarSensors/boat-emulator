import { TbEntity } from './common'
import { TbTransportEnum, TbProvisionTypeEnum } from './enums'

export type TbDeviceProfileData = {
  configuration: {
    type: 'DEFAULT'
  }
  transportConfiguration: {
    type: TbTransportEnum
  }
  provisionConfiguration: {
    type: TbProvisionTypeEnum
    provisionDeviceSecret: null
  }
  alarms?: any
}

export type TbDeviceProfileInfo = {
  id?: TbEntity
  name: string
  image?: string
  dashboardId?: TbEntity
  type: 'DEFAULT'
  transportType: TbTransportEnum
  tenantId?: TbEntity
}

export type TbDeviceProfile = TbDeviceProfileInfo & {
  createdTime?: number
  customerId?: TbEntity
  default?: boolean
  defaultRuleChainId?: TbEntity
  defaultQueueName?: string
  firmwareId?: TbEntity
  softwareId?: TbEntity
  description?: string
  provisionDeviceKey?: string
  provisionType?: TbProvisionTypeEnum
  defaultEdgeRuleChainId?: TbEntity
  profileData: TbDeviceProfileData
  externalId: TbEntity
}
