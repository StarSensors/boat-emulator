import { TbAlarmRule } from './alarms'
import { TbEntityId } from './common'
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
  id?: TbEntityId
  createdTime?: number
  tenantId?: TbEntityId
  name: string
  default?: boolean
  defaultDashboardId?: TbEntityId
  defaultRuleChainId?: TbEntityId
  defaultQueueName?: string
  firmwareId?: TbEntityId
  softwareId?: TbEntityId
  description?: string
  image?: string
  provisionDeviceKey?: string
  transportType?: TbTransportEnum
  provisionType?: TbProvisionTypeEnum
  profileData: TbDeviceProfileData
  type: 'DEFAULT'
  defaultEdgeRuleChainId?: TbEntityId
  externalId?: TbEntityId
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
