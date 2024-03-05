import {
  TbEntityEnum,
  TbAlarmConditionFilterKeyEnum,
  TbAlarmConditionFilterValueTypeEnum,
  TbDynamicValueStringSourceTypeEnum,
  TbAlarmScheduleTypeEnum,
} from './enums'

export type ITbAlarm = {
  id: TbEntityEnum
  createdTime: number
  tenantId: TbEntityEnum
  customerId: TbEntityEnum
  name: string
  type: string
  originator: TbEntityEnum
  severity: ['CRITICAL', 'INDETERMINATE', 'MAJOR', 'MINOR', 'WARNING']
  acknowledged: boolean
  cleared: boolean
  assigneeId: TbEntityEnum
  startTs: number
  endTs: number
  ackTs: number
  clearTs: number
  assignTs: number
  details: any
  propagateToOwnerHierarchy: boolean
  propagate: boolean
  propagateToTenant: boolean
  propagateRelationTypes: any
  propagateToOwner: boolean
  originatorName: string
  originatorLabel: string
  assignee: {
    email: string
    firstName: string
    id: TbEntityEnum
    lastName: string
  }
  status: string
}

export type TbAlarmConditionFilterKey = {
  type?: TbAlarmConditionFilterKeyEnum
  key?: string
}

export type TbAlarmConditionFilter = {
  key?: TbAlarmConditionFilterKey
  valueType?: TbAlarmConditionFilterValueTypeEnum
  value?: object
  predicate?: object
}

export type TbAlarmCondition = {
  condition?: TbAlarmConditionFilter[]
  spec?: object
}

export type TbDynamicValueString = {
  inherit?: boolean
  sourceAttribute?: string
  sourceType?: TbDynamicValueStringSourceTypeEnum
}

export type TbAlarmSchedule = {
  dynamicValue?: TbDynamicValueString
  type?: TbAlarmScheduleTypeEnum
}

export type TbAlarmRule = {
  condition?: TbAlarmCondition
  schedule?: TbAlarmSchedule | null
  alarmDetails?: string | null
  dashboardId?: TbEntityEnum | null
}
