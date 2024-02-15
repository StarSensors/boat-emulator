import { TbAlarmRule } from './alarms'
import { TbEntity } from './common'
import { TbTransportEnum, TbProvisionTypeEnum } from './enums'

export type TbDeviceProfileAlarm = {
  id?: string
  alarmType?: string
  createRules?: Record<string, TbAlarmRule>
  clearRule?: TbAlarmRule
  propagate?: boolean
  propagateToOwner?: boolean
  propagateToTenant?: boolean
  propagateRelationTypes?: string[]
}

export type TbDeviceProfileData = {
  configuration: {
    type: 'DEFAULT'
  }
  transportConfiguration: {
    type: TbTransportEnum
  }
  provisionConfiguration: {
    type: TbProvisionTypeEnum
    provisionDeviceSecret?: string | null
  }
  alarms?: TbDeviceProfileAlarm[]
}

export type TbDeviceProfile = {
  id?: TbEntity
  createdTime?: number
  tenantId?: TbEntity
  name: string
  default?: boolean
  defaultDashboardId?: TbEntity
  defaultRuleChainId?: TbEntity
  defaultQueueName?: string
  firmwareId?: TbEntity
  softwareId?: TbEntity
  description?: string
  image?: string
  provisionDeviceKey?: string
  transportType?: TbTransportEnum
  provisionType?: TbProvisionTypeEnum
  profileData: TbDeviceProfileData
  type: 'DEFAULT'
  defaultEdgeRuleChainId?: TbEntity
  externalId?: TbEntity
}

export type TbDeviceProfileInfo = Pick<
  TbDeviceProfile,
  | 'id'
  | 'tenantId'
  | 'name'
  | 'image'
  | 'defaultDashboardId'
  | 'type'
  | 'transportType'
>
