/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

/** AccountTwoFaSettings */
export interface TbAccountTwoFaSettings {
  configs?: Record<string, TbTwoFaAccountConfig>
}

/** ActivateUserRequest */
export interface TbActivateUserRequest {
  /**
   * The activate token to verify
   * @example "AAB254FF67D.."
   */
  activateToken?: string
  /**
   * The new password to set
   * @example "secret"
   */
  password?: string
}

/** AdminSettings */
export interface TbAdminSettings {
  /** The Id of the Administration Settings, auto-generated, UUID */
  id?: TbAdminSettingsId
  /**
   * Timestamp of the settings creation, in milliseconds
   * @format int64
   * @example 1609459200000
   */
  createdTime?: number
  /** JSON object with Tenant Id. */
  tenantId?: TbTenantId
  /**
   * The Administration Settings key, (e.g. 'general' or 'mail')
   * @example "mail"
   */
  key?: string
  /** JSON representation of the Administration Settings value */
  jsonValue?: TbJsonNode
}

/** AdminSettingsId */
export interface TbAdminSettingsId {
  /**
   * string
   * @format uuid
   * @example "784f394c-42b6-435a-983c-b7beff2784f9"
   */
  id: string
}

/** AffectedTenantAdministratorsFilter */
export type TbAffectedTenantAdministratorsFilter = object

/** AffectedUserFilter */
export type TbAffectedUserFilter = object

/** Alarm */
export interface TbAlarm {
  /** JSON object with the alarm Id. Specify this field to update the alarm. Referencing non-existing alarm Id will cause error. Omit this field to create new alarm. */
  id?: TbAlarmId
  /**
   * Timestamp of the alarm creation, in milliseconds
   * @format int64
   * @example 1634058704567
   */
  createdTime?: number
  /** JSON object with Tenant Id */
  tenantId?: TbTenantId
  /** JSON object with Customer Id */
  customerId?: TbCustomerId
  /**
   * representing type of the Alarm
   * @example "High Temperature Alarm"
   */
  name: string
  /**
   * representing type of the Alarm
   * @example "High Temperature Alarm"
   */
  type: string
  /** JSON object with alarm originator id */
  originator: TbEntityId
  /**
   * Alarm severity
   * @example "CRITICAL"
   */
  severity: 'CRITICAL' | 'INDETERMINATE' | 'MAJOR' | 'MINOR' | 'WARNING'
  /**
   * Acknowledged
   * @example true
   */
  acknowledged: boolean
  /**
   * Cleared
   * @example false
   */
  cleared: boolean
  /** Alarm assignee user id */
  assigneeId?: TbUserId
  /**
   * Timestamp of the alarm start time, in milliseconds
   * @format int64
   * @example 1634058704565
   */
  startTs?: number
  /**
   * Timestamp of the alarm end time(last time update), in milliseconds
   * @format int64
   * @example 1634111163522
   */
  endTs?: number
  /**
   * Timestamp of the alarm acknowledgement, in milliseconds
   * @format int64
   * @example 1634115221948
   */
  ackTs?: number
  /**
   * Timestamp of the alarm clearing, in milliseconds
   * @format int64
   * @example 1634114528465
   */
  clearTs?: number
  /**
   * Timestamp of the alarm assignment, in milliseconds
   * @format int64
   * @example 1634115928465
   */
  assignTs?: number
  /** JSON object with alarm details */
  details?: TbJsonNode
  /**
   * Propagation flag to specify if alarm should be propagated to parent entities of alarm originator
   * @example true
   */
  propagate?: boolean
  /**
   * Propagation flag to specify if alarm should be propagated to the owner (tenant or customer) of alarm originator
   * @example true
   */
  propagateToOwner?: boolean
  /**
   * Propagation flag to specify if alarm should be propagated to the tenant entity
   * @example true
   */
  propagateToTenant?: boolean
  /** JSON array of relation types that should be used for propagation. By default, 'propagateRelationTypes' array is empty which means that the alarm will be propagated based on any relation type to parent entities. This parameter should be used only in case when 'propagate' parameter is set to true, otherwise, 'propagateRelationTypes' array will be ignored. */
  propagateRelationTypes?: string[]
  /**
   * status of the Alarm
   * @example "ACTIVE_UNACK"
   */
  status: 'ACTIVE_ACK' | 'ACTIVE_UNACK' | 'CLEARED_ACK' | 'CLEARED_UNACK'
}

/** AlarmAssignee */
export interface TbAlarmAssignee {
  email?: string
  firstName?: string
  id?: TbUserId
  lastName?: string
}

/** AlarmAssignmentNotificationRuleTriggerConfig */
export type TbAlarmAssignmentNotificationRuleTriggerConfig =
  (TbNotificationRuleTriggerConfig & {
    /** @uniqueItems true */
    alarmSeverities?: (
      | 'CRITICAL'
      | 'INDETERMINATE'
      | 'MAJOR'
      | 'MINOR'
      | 'WARNING'
    )[]
    /** @uniqueItems true */
    alarmStatuses?: ('ACK' | 'ACTIVE' | 'ANY' | 'CLEARED' | 'UNACK')[]
    /** @uniqueItems true */
    alarmTypes?: string[]
    /** @uniqueItems true */
    notifyOn?: ('ASSIGNED' | 'UNASSIGNED')[]
    triggerType?:
      | 'ALARM'
      | 'ALARM_ASSIGNMENT'
      | 'ALARM_COMMENT'
      | 'API_USAGE_LIMIT'
      | 'DEVICE_ACTIVITY'
      | 'ENTITIES_LIMIT'
      | 'ENTITY_ACTION'
      | 'NEW_PLATFORM_VERSION'
      | 'RATE_LIMITS'
      | 'RULE_ENGINE_COMPONENT_LIFECYCLE_EVENT'
  }) & {
    /** @uniqueItems true */
    alarmSeverities?: (
      | 'CRITICAL'
      | 'INDETERMINATE'
      | 'MAJOR'
      | 'MINOR'
      | 'WARNING'
    )[]
    /** @uniqueItems true */
    alarmStatuses?: ('ACK' | 'ACTIVE' | 'ANY' | 'CLEARED' | 'UNACK')[]
    /** @uniqueItems true */
    alarmTypes?: string[]
    /** @uniqueItems true */
    notifyOn?: ('ASSIGNED' | 'UNASSIGNED')[]
    triggerType?:
      | 'ALARM'
      | 'ALARM_ASSIGNMENT'
      | 'ALARM_COMMENT'
      | 'API_USAGE_LIMIT'
      | 'DEVICE_ACTIVITY'
      | 'ENTITIES_LIMIT'
      | 'ENTITY_ACTION'
      | 'NEW_PLATFORM_VERSION'
      | 'RATE_LIMITS'
      | 'RULE_ENGINE_COMPONENT_LIFECYCLE_EVENT'
  }

/** AlarmComment */
export interface TbAlarmComment {
  /** JSON object with the alarm comment Id. Specify this field to update the alarm comment. Referencing non-existing alarm Id will cause error. Omit this field to create new alarm. */
  id?: TbAlarmCommentId
  /**
   * Timestamp of the alarm comment creation, in milliseconds
   * @format int64
   * @example 1634058704567
   */
  createdTime?: number
  /** JSON object with Alarm id. */
  alarmId?: TbEntityId
  /** JSON object with User id. */
  userId?: TbUserId
  /**
   * representing comment text
   * @example "Please take a look"
   */
  name: string
  /**
   * Defines origination of comment. System type means comment was created by TB. OTHER type means comment was created by user.
   * @example "SYSTEM/OTHER"
   */
  type?: 'OTHER' | 'SYSTEM'
  /** JSON object with text of comment. */
  comment?: TbJsonNode
}

/** AlarmCommentId */
export interface TbAlarmCommentId {
  /**
   * string
   * @format uuid
   * @example "784f394c-42b6-435a-983c-b7beff2784f9"
   */
  id: string
}

/** AlarmCommentInfo */
export interface TbAlarmCommentInfo {
  /** JSON object with the alarm comment Id. Specify this field to update the alarm comment. Referencing non-existing alarm Id will cause error. Omit this field to create new alarm. */
  id?: TbAlarmCommentId
  /**
   * Timestamp of the alarm comment creation, in milliseconds
   * @format int64
   * @example 1634058704567
   */
  createdTime?: number
  /** JSON object with Alarm id. */
  alarmId?: TbEntityId
  /** JSON object with User id. */
  userId?: TbUserId
  /**
   * representing comment text
   * @example "Please take a look"
   */
  name: string
  /**
   * Defines origination of comment. System type means comment was created by TB. OTHER type means comment was created by user.
   * @example "SYSTEM/OTHER"
   */
  type?: 'OTHER' | 'SYSTEM'
  /** JSON object with text of comment. */
  comment?: TbJsonNode
  /**
   * User email address
   * @example "johnBrown@gmail.com"
   */
  email?: string
  /**
   * User first name
   * @example "John"
   */
  firstName?: string
  /**
   * User last name
   * @example "Brown"
   */
  lastName?: string
}

/** AlarmCommentNotificationRuleTriggerConfig */
export interface TbAlarmCommentNotificationRuleTriggerConfig {
  /** @uniqueItems true */
  alarmSeverities?: (
    | 'CRITICAL'
    | 'INDETERMINATE'
    | 'MAJOR'
    | 'MINOR'
    | 'WARNING'
  )[]
  /** @uniqueItems true */
  alarmStatuses?: ('ACK' | 'ACTIVE' | 'ANY' | 'CLEARED' | 'UNACK')[]
  /** @uniqueItems true */
  alarmTypes?: string[]
  notifyOnCommentUpdate?: boolean
  onlyUserComments?: boolean
  triggerType?:
    | 'ALARM'
    | 'ALARM_ASSIGNMENT'
    | 'ALARM_COMMENT'
    | 'API_USAGE_LIMIT'
    | 'DEVICE_ACTIVITY'
    | 'ENTITIES_LIMIT'
    | 'ENTITY_ACTION'
    | 'NEW_PLATFORM_VERSION'
    | 'RATE_LIMITS'
    | 'RULE_ENGINE_COMPONENT_LIFECYCLE_EVENT'
}

/** AlarmCondition */
export interface TbAlarmCondition {
  /** JSON array of alarm condition filters */
  condition?: TbAlarmConditionFilter[]
  /** JSON object representing alarm condition type */
  spec?: TbAlarmConditionSpec
}

/** AlarmConditionFilter */
export interface TbAlarmConditionFilter {
  /** JSON object for specifying alarm condition by specific key */
  key?: TbAlarmConditionFilterKey
  /**
   * String representation of the type of the value
   * @example "NUMERIC"
   */
  valueType?: 'BOOLEAN' | 'DATE_TIME' | 'NUMERIC' | 'STRING'
  /** Value used in Constant comparison. For other types, such as TIME_SERIES or ATTRIBUTE, the predicate condition is used */
  value?: object
  /** JSON object representing filter condition */
  predicate?: TbKeyFilterPredicate
}

/** AlarmConditionFilterKey */
export interface TbAlarmConditionFilterKey {
  /**
   * The key type
   * @example "TIME_SERIES"
   */
  type?: 'ATTRIBUTE' | 'CONSTANT' | 'ENTITY_FIELD' | 'TIME_SERIES'
  /**
   * String value representing the key
   * @example "temp"
   */
  key?: string
}

/** AlarmConditionSpec */
export type TbAlarmConditionSpec = object

/** AlarmCountQuery */
export interface TbAlarmCountQuery {
  assigneeId?: TbUserId
  /** @format int64 */
  endTs?: number
  entityFilter?: TbEntityFilter
  keyFilters?: TbKeyFilter[]
  searchPropagatedAlarms?: boolean
  severityList?: (
    | 'CRITICAL'
    | 'INDETERMINATE'
    | 'MAJOR'
    | 'MINOR'
    | 'WARNING'
  )[]
  /** @format int64 */
  startTs?: number
  statusList?: ('ACK' | 'ACTIVE' | 'ANY' | 'CLEARED' | 'UNACK')[]
  /** @format int64 */
  timeWindow?: number
  typeList?: string[]
}

/** AlarmData */
export interface TbAlarmData {
  entityId?: TbEntityId
  latest?: Record<string, object>
  /** JSON object with the alarm Id. Specify this field to update the alarm. Referencing non-existing alarm Id will cause error. Omit this field to create new alarm. */
  id?: TbAlarmId
  /**
   * Timestamp of the alarm creation, in milliseconds
   * @format int64
   * @example 1634058704567
   */
  createdTime?: number
  /** JSON object with Tenant Id */
  tenantId?: TbTenantId
  /** JSON object with Customer Id */
  customerId?: TbCustomerId
  /**
   * representing type of the Alarm
   * @example "High Temperature Alarm"
   */
  name: string
  /**
   * representing type of the Alarm
   * @example "High Temperature Alarm"
   */
  type: string
  /** JSON object with alarm originator id */
  originator: TbEntityId
  /**
   * Alarm severity
   * @example "CRITICAL"
   */
  severity: 'CRITICAL' | 'INDETERMINATE' | 'MAJOR' | 'MINOR' | 'WARNING'
  /**
   * Acknowledged
   * @example true
   */
  acknowledged: boolean
  /**
   * Cleared
   * @example false
   */
  cleared: boolean
  /** Alarm assignee user id */
  assigneeId?: TbUserId
  /**
   * Timestamp of the alarm start time, in milliseconds
   * @format int64
   * @example 1634058704565
   */
  startTs?: number
  /**
   * Timestamp of the alarm end time(last time update), in milliseconds
   * @format int64
   * @example 1634111163522
   */
  endTs?: number
  /**
   * Timestamp of the alarm acknowledgement, in milliseconds
   * @format int64
   * @example 1634115221948
   */
  ackTs?: number
  /**
   * Timestamp of the alarm clearing, in milliseconds
   * @format int64
   * @example 1634114528465
   */
  clearTs?: number
  /**
   * Timestamp of the alarm assignment, in milliseconds
   * @format int64
   * @example 1634115928465
   */
  assignTs?: number
  /** JSON object with alarm details */
  details?: TbJsonNode
  /**
   * Propagation flag to specify if alarm should be propagated to parent entities of alarm originator
   * @example true
   */
  propagate?: boolean
  /**
   * Alarm originator name
   * @example "Thermostat"
   */
  originatorName?: string
  /**
   * Propagation flag to specify if alarm should be propagated to the owner (tenant or customer) of alarm originator
   * @example true
   */
  propagateToOwner?: boolean
  /**
   * Alarm originator label
   * @example "Thermostat label"
   */
  originatorLabel?: string
  /**
   * Propagation flag to specify if alarm should be propagated to the tenant entity
   * @example true
   */
  propagateToTenant?: boolean
  /** Alarm assignee */
  assignee?: TbAlarmAssignee
  /** JSON array of relation types that should be used for propagation. By default, 'propagateRelationTypes' array is empty which means that the alarm will be propagated based on any relation type to parent entities. This parameter should be used only in case when 'propagate' parameter is set to true, otherwise, 'propagateRelationTypes' array will be ignored. */
  propagateRelationTypes?: string[]
  /**
   * status of the Alarm
   * @example "ACTIVE_UNACK"
   */
  status: 'ACTIVE_ACK' | 'ACTIVE_UNACK' | 'CLEARED_ACK' | 'CLEARED_UNACK'
}

/** AlarmDataPageLink */
export interface TbAlarmDataPageLink {
  assigneeId?: TbUserId
  dynamic?: boolean
  /** @format int64 */
  endTs?: number
  /** @format int32 */
  page?: number
  /** @format int32 */
  pageSize?: number
  searchPropagatedAlarms?: boolean
  severityList?: (
    | 'CRITICAL'
    | 'INDETERMINATE'
    | 'MAJOR'
    | 'MINOR'
    | 'WARNING'
  )[]
  sortOrder?: TbEntityDataSortOrder
  /** @format int64 */
  startTs?: number
  statusList?: ('ACK' | 'ACTIVE' | 'ANY' | 'CLEARED' | 'UNACK')[]
  textSearch?: string
  /** @format int64 */
  timeWindow?: number
  typeList?: string[]
}

/** AlarmDataQuery */
export interface TbAlarmDataQuery {
  alarmFields?: TbEntityKey[]
  entityFields?: TbEntityKey[]
  entityFilter?: TbEntityFilter
  keyFilters?: TbKeyFilter[]
  latestValues?: TbEntityKey[]
  pageLink?: TbAlarmDataPageLink
}

/** AlarmId */
export interface TbAlarmId {
  /**
   * ID of the entity, time-based UUID v1
   * @format uuid
   * @example "784f394c-42b6-435a-983c-b7beff2784f9"
   */
  id: string
  /**
   * string
   * @example "ALARM"
   */
  entityType: 'ALARM'
}

/** AlarmInfo */
export interface TbAlarmInfo {
  /** JSON object with the alarm Id. Specify this field to update the alarm. Referencing non-existing alarm Id will cause error. Omit this field to create new alarm. */
  id?: TbAlarmId
  /**
   * Timestamp of the alarm creation, in milliseconds
   * @format int64
   * @example 1634058704567
   */
  createdTime?: number
  /** JSON object with Tenant Id */
  tenantId?: TbTenantId
  /** JSON object with Customer Id */
  customerId?: TbCustomerId
  /**
   * representing type of the Alarm
   * @example "High Temperature Alarm"
   */
  name: string
  /**
   * representing type of the Alarm
   * @example "High Temperature Alarm"
   */
  type: string
  /** JSON object with alarm originator id */
  originator: TbEntityId
  /**
   * Alarm severity
   * @example "CRITICAL"
   */
  severity: 'CRITICAL' | 'INDETERMINATE' | 'MAJOR' | 'MINOR' | 'WARNING'
  /**
   * Acknowledged
   * @example true
   */
  acknowledged: boolean
  /**
   * Cleared
   * @example false
   */
  cleared: boolean
  /** Alarm assignee user id */
  assigneeId?: TbUserId
  /**
   * Timestamp of the alarm start time, in milliseconds
   * @format int64
   * @example 1634058704565
   */
  startTs?: number
  /**
   * Timestamp of the alarm end time(last time update), in milliseconds
   * @format int64
   * @example 1634111163522
   */
  endTs?: number
  /**
   * Timestamp of the alarm acknowledgement, in milliseconds
   * @format int64
   * @example 1634115221948
   */
  ackTs?: number
  /**
   * Timestamp of the alarm clearing, in milliseconds
   * @format int64
   * @example 1634114528465
   */
  clearTs?: number
  /**
   * Timestamp of the alarm assignment, in milliseconds
   * @format int64
   * @example 1634115928465
   */
  assignTs?: number
  /** JSON object with alarm details */
  details?: TbJsonNode
  /**
   * Propagation flag to specify if alarm should be propagated to parent entities of alarm originator
   * @example true
   */
  propagate?: boolean
  /**
   * Alarm originator name
   * @example "Thermostat"
   */
  originatorName?: string
  /**
   * Propagation flag to specify if alarm should be propagated to the owner (tenant or customer) of alarm originator
   * @example true
   */
  propagateToOwner?: boolean
  /**
   * Alarm originator label
   * @example "Thermostat label"
   */
  originatorLabel?: string
  /**
   * Propagation flag to specify if alarm should be propagated to the tenant entity
   * @example true
   */
  propagateToTenant?: boolean
  /** Alarm assignee */
  assignee?: TbAlarmAssignee
  /** JSON array of relation types that should be used for propagation. By default, 'propagateRelationTypes' array is empty which means that the alarm will be propagated based on any relation type to parent entities. This parameter should be used only in case when 'propagate' parameter is set to true, otherwise, 'propagateRelationTypes' array will be ignored. */
  propagateRelationTypes?: string[]
  /**
   * status of the Alarm
   * @example "ACTIVE_UNACK"
   */
  status: 'ACTIVE_ACK' | 'ACTIVE_UNACK' | 'CLEARED_ACK' | 'CLEARED_UNACK'
}

/** AlarmNotificationRuleTriggerConfig */
export type TbAlarmNotificationRuleTriggerConfig =
  (TbNotificationRuleTriggerConfig & {
    /** @uniqueItems true */
    alarmSeverities?: (
      | 'CRITICAL'
      | 'INDETERMINATE'
      | 'MAJOR'
      | 'MINOR'
      | 'WARNING'
    )[]
    /** @uniqueItems true */
    alarmTypes?: string[]
    clearRule?: TbClearRule
    /** @uniqueItems true */
    notifyOn?: ('ACKNOWLEDGED' | 'CLEARED' | 'CREATED' | 'SEVERITY_CHANGED')[]
    triggerType?:
      | 'ALARM'
      | 'ALARM_ASSIGNMENT'
      | 'ALARM_COMMENT'
      | 'API_USAGE_LIMIT'
      | 'DEVICE_ACTIVITY'
      | 'ENTITIES_LIMIT'
      | 'ENTITY_ACTION'
      | 'NEW_PLATFORM_VERSION'
      | 'RATE_LIMITS'
      | 'RULE_ENGINE_COMPONENT_LIFECYCLE_EVENT'
  }) & {
    /** @uniqueItems true */
    alarmSeverities?: (
      | 'CRITICAL'
      | 'INDETERMINATE'
      | 'MAJOR'
      | 'MINOR'
      | 'WARNING'
    )[]
    /** @uniqueItems true */
    alarmTypes?: string[]
    clearRule?: TbClearRule
    /** @uniqueItems true */
    notifyOn?: ('ACKNOWLEDGED' | 'CLEARED' | 'CREATED' | 'SEVERITY_CHANGED')[]
    triggerType?:
      | 'ALARM'
      | 'ALARM_ASSIGNMENT'
      | 'ALARM_COMMENT'
      | 'API_USAGE_LIMIT'
      | 'DEVICE_ACTIVITY'
      | 'ENTITIES_LIMIT'
      | 'ENTITY_ACTION'
      | 'NEW_PLATFORM_VERSION'
      | 'RATE_LIMITS'
      | 'RULE_ENGINE_COMPONENT_LIFECYCLE_EVENT'
  }

/** AlarmRule */
export interface TbAlarmRule {
  /** JSON object representing the alarm rule condition */
  condition?: TbAlarmCondition
  /** JSON object representing time interval during which the rule is active */
  schedule?: TbAlarmSchedule
  /** String value representing the additional details for an alarm rule */
  alarmDetails?: string
  /** JSON object with the dashboard Id representing the reference to alarm details dashboard used by mobile application */
  dashboardId?: TbDashboardId
}

/** AlarmSchedule */
export interface TbAlarmSchedule {
  dynamicValue?: TbDynamicValueString
  type?: 'ANY_TIME' | 'CUSTOM' | 'SPECIFIC_TIME'
}

/** AllUsersFilter */
export type TbAllUsersFilter = object

/** AllowCreateNewDevicesDeviceProfileProvisionConfiguration */
export interface TbAllowCreateNewDevicesDeviceProfileProvisionConfiguration {
  provisionDeviceSecret?: string
}

/** AnyTimeSchedule */
export interface TbAnyTimeSchedule {
  dynamicValue?: TbDynamicValueString
  type?: 'ANY_TIME' | 'CUSTOM' | 'SPECIFIC_TIME'
}

/** ApiUsageLimitNotificationRuleTriggerConfig */
export type TbApiUsageLimitNotificationRuleTriggerConfig =
  (TbNotificationRuleTriggerConfig & {
    /** @uniqueItems true */
    apiFeatures?: (
      | 'ALARM'
      | 'DB'
      | 'EMAIL'
      | 'JS'
      | 'RE'
      | 'SMS'
      | 'TBEL'
      | 'TRANSPORT'
    )[]
    /** @uniqueItems true */
    notifyOn?: ('DISABLED' | 'ENABLED' | 'WARNING')[]
    triggerType?:
      | 'ALARM'
      | 'ALARM_ASSIGNMENT'
      | 'ALARM_COMMENT'
      | 'API_USAGE_LIMIT'
      | 'DEVICE_ACTIVITY'
      | 'ENTITIES_LIMIT'
      | 'ENTITY_ACTION'
      | 'NEW_PLATFORM_VERSION'
      | 'RATE_LIMITS'
      | 'RULE_ENGINE_COMPONENT_LIFECYCLE_EVENT'
  }) & {
    /** @uniqueItems true */
    apiFeatures?: (
      | 'ALARM'
      | 'DB'
      | 'EMAIL'
      | 'JS'
      | 'RE'
      | 'SMS'
      | 'TBEL'
      | 'TRANSPORT'
    )[]
    /** @uniqueItems true */
    notifyOn?: ('DISABLED' | 'ENABLED' | 'WARNING')[]
    triggerType?:
      | 'ALARM'
      | 'ALARM_ASSIGNMENT'
      | 'ALARM_COMMENT'
      | 'API_USAGE_LIMIT'
      | 'DEVICE_ACTIVITY'
      | 'ENTITIES_LIMIT'
      | 'ENTITY_ACTION'
      | 'NEW_PLATFORM_VERSION'
      | 'RATE_LIMITS'
      | 'RULE_ENGINE_COMPONENT_LIFECYCLE_EVENT'
  }

/** ApiUsageStateFilter */
export type TbApiUsageStateFilter = (TbEntityFilter & {
  customerId?: TbCustomerId
}) & {
  customerId?: TbCustomerId
}

/** Asset */
export interface TbAsset {
  /** JSON object with the asset Id. Specify this field to update the asset. Referencing non-existing asset Id will cause error. Omit this field to create new asset. */
  id?: TbAssetId
  /**
   * Timestamp of the asset creation, in milliseconds
   * @format int64
   * @example 1609459200000
   */
  createdTime?: number
  /** JSON object with Tenant Id. */
  tenantId?: TbTenantId
  /** JSON object with Customer Id. Use 'assignAssetToCustomer' to change the Customer Id. */
  customerId?: TbCustomerId
  /**
   * Unique Asset Name in scope of Tenant
   * @example "Empire State Building"
   */
  name: string
  /**
   * Asset type
   * @example "Building"
   */
  type?: string
  /**
   * Label that may be used in widgets
   * @example "NY Building"
   */
  label?: string
  /** JSON object with Asset Profile Id. */
  assetProfileId?: TbAssetProfileId
  /** Additional parameters of the asset */
  additionalInfo?: TbJsonNode
}

/** AssetId */
export interface TbAssetId {
  /**
   * ID of the entity, time-based UUID v1
   * @format uuid
   * @example "784f394c-42b6-435a-983c-b7beff2784f9"
   */
  id: string
  /**
   * string
   * @example "ASSET"
   */
  entityType: 'ASSET'
}

/** AssetInfo */
export interface TbAssetInfo {
  /** JSON object with the asset Id. Specify this field to update the asset. Referencing non-existing asset Id will cause error. Omit this field to create new asset. */
  id?: TbAssetId
  /**
   * Timestamp of the asset creation, in milliseconds
   * @format int64
   * @example 1609459200000
   */
  createdTime?: number
  /** JSON object with Tenant Id. */
  tenantId?: TbTenantId
  /** JSON object with Customer Id. Use 'assignAssetToCustomer' to change the Customer Id. */
  customerId?: TbCustomerId
  /**
   * Unique Asset Name in scope of Tenant
   * @example "Empire State Building"
   */
  name: string
  /**
   * Asset type
   * @example "Building"
   */
  type?: string
  /**
   * Label that may be used in widgets
   * @example "NY Building"
   */
  label?: string
  /** JSON object with Asset Profile Id. */
  assetProfileId?: TbAssetProfileId
  /** Additional parameters of the asset */
  additionalInfo?: TbJsonNode
  /** Title of the Customer that owns the asset. */
  customerTitle?: string
  /**
   * Indicates special 'Public' Customer that is auto-generated to use the assets on public dashboards.
   * @example false
   */
  customerIsPublic?: boolean
  /** Name of the corresponding Asset Profile. */
  assetProfileName?: string
}

/** AssetProfile */
export interface TbAssetProfile {
  /** JSON object with the asset profile Id. Specify this field to update the asset profile. Referencing non-existing asset profile Id will cause error. Omit this field to create new asset profile. */
  id?: TbAssetProfileId
  /**
   * Timestamp of the profile creation, in milliseconds
   * @format int64
   * @example 1609459200000
   */
  createdTime?: number
  /** JSON object with Tenant Id that owns the profile. */
  tenantId?: TbTenantId
  /**
   * Unique Asset Profile Name in scope of Tenant.
   * @example "Building"
   */
  name?: string
  /**
   * Used to mark the default profile. Default profile is used when the asset profile is not specified during asset creation.
   * @example false
   */
  default?: boolean
  /** Reference to the dashboard. Used in the mobile application to open the default dashboard when user navigates to asset details. */
  defaultDashboardId?: TbDashboardId
  /** Reference to the rule chain. If present, the specified rule chain will be used to process all messages related to asset, including asset updates, telemetry, attribute updates, etc. Otherwise, the root rule chain will be used to process those messages. */
  defaultRuleChainId?: TbRuleChainId
  /** Rule engine queue name. If present, the specified queue will be used to store all unprocessed messages related to asset, including asset updates, telemetry, attribute updates, etc. Otherwise, the 'Main' queue will be used to store those messages. */
  defaultQueueName?: string
  /** Asset Profile description.  */
  description?: string
  /** Either URL or Base64 data of the icon. Used in the mobile application to visualize set of asset profiles in the grid view.  */
  image?: string
  /** Reference to the edge rule chain. If present, the specified edge rule chain will be used on the edge to process all messages related to asset, including asset updates, telemetry, attribute updates, etc. Otherwise, the edge root rule chain will be used to process those messages. */
  defaultEdgeRuleChainId?: TbRuleChainId
}

/** AssetProfileId */
export interface TbAssetProfileId {
  /**
   * ID of the entity, time-based UUID v1
   * @format uuid
   * @example "784f394c-42b6-435a-983c-b7beff2784f9"
   */
  id: string
  /**
   * string
   * @example "ASSET_PROFILE"
   */
  entityType: 'ASSET_PROFILE'
}

/** AssetProfileInfo */
export interface TbAssetProfileInfo {
  /** JSON object with the entity Id.  */
  id?: TbEntityId
  /** Entity Name */
  name?: string
  /** Either URL or Base64 data of the icon. Used in the mobile application to visualize set of asset profiles in the grid view.  */
  image?: string
  /** Reference to the dashboard. Used in the mobile application to open the default dashboard when user navigates to asset details. */
  defaultDashboardId?: TbDashboardId
  /** Tenant id. */
  tenantId?: TbTenantId
}

/** AssetSearchQuery */
export interface TbAssetSearchQuery {
  /** Type of the relation between root entity and asset (e.g. 'Contains' or 'Manages'). */
  relationType?: string
  /** Array of asset types to filter the related entities (e.g. 'Building', 'Vehicle'). */
  assetTypes?: string[]
  /** Main search parameters. */
  parameters?: TbRelationsSearchParameters
}

/** AssetSearchQueryFilter */
export type TbAssetSearchQueryFilter = (TbEntityFilter & {
  assetTypes?: string[]
  direction?: 'FROM' | 'TO'
  fetchLastLevelOnly?: boolean
  /** @format int32 */
  maxLevel?: number
  relationType?: string
  rootEntity?: TbEntityId
}) & {
  assetTypes?: string[]
  direction?: 'FROM' | 'TO'
  fetchLastLevelOnly?: boolean
  /** @format int32 */
  maxLevel?: number
  relationType?: string
  rootEntity?: TbEntityId
}

/** AssetTypeFilter */
export type TbAssetTypeFilter = (TbEntityFilter & {
  assetNameFilter?: string
  assetTypes?: string[]
}) & {
  assetNameFilter?: string
  assetTypes?: string[]
}

/** AtomicInteger */
export interface TbAtomicInteger {
  /** @format int32 */
  acquire?: number
  /** @format int32 */
  andDecrement?: number
  /** @format int32 */
  andIncrement?: number
  /** @format int32 */
  opaque?: number
  /** @format int32 */
  plain?: number
}

/** AttributeExportData */
export interface TbAttributeExportData {
  booleanValue?: boolean
  /** @format double */
  doubleValue?: number
  jsonValue?: string
  key?: string
  /** @format int64 */
  lastUpdateTs?: number
  /** @format int64 */
  longValue?: number
  strValue?: string
}

/** AttributesEntityView */
export interface TbAttributesEntityView {
  /**
   * List of client-side attribute keys to expose
   * @example "currentConfiguration"
   */
  cs: string[]
  /**
   * List of shared attribute keys to expose
   * @example "targetConfiguration"
   */
  sh: string[]
  /**
   * List of server-side attribute keys to expose
   * @example "model"
   */
  ss: string[]
}

/** AuditLog */
export interface TbAuditLog {
  /** JSON object with the auditLog Id */
  id?: TbAuditLogId
  /**
   * Timestamp of the auditLog creation, in milliseconds
   * @format int64
   * @example 1609459200000
   */
  createdTime?: number
  /** JSON object with Tenant Id */
  tenantId?: TbTenantId
  /** JSON object with Customer Id */
  customerId?: TbCustomerId
  /** JSON object with Entity id */
  entityId?: TbEntityId
  /**
   * Name of the logged entity
   * @example "Thermometer"
   */
  entityName?: string
  /** JSON object with User id. */
  userId?: TbUserId
  /**
   * Unique user name(email) of the user that performed some action on logged entity
   * @example "tenant@thingsboard.org"
   */
  userName?: string
  /**
   * String represented Action type
   * @example "ADDED"
   */
  actionType?:
    | 'ACTIVATED'
    | 'ADDED'
    | 'ADDED_COMMENT'
    | 'ALARM_ACK'
    | 'ALARM_ASSIGNED'
    | 'ALARM_CLEAR'
    | 'ALARM_DELETE'
    | 'ALARM_UNASSIGNED'
    | 'ASSIGNED_FROM_TENANT'
    | 'ASSIGNED_TO_CUSTOMER'
    | 'ASSIGNED_TO_EDGE'
    | 'ASSIGNED_TO_TENANT'
    | 'ATTRIBUTES_DELETED'
    | 'ATTRIBUTES_READ'
    | 'ATTRIBUTES_UPDATED'
    | 'CREDENTIALS_READ'
    | 'CREDENTIALS_UPDATED'
    | 'DELETED'
    | 'DELETED_COMMENT'
    | 'LOCKOUT'
    | 'LOGIN'
    | 'LOGOUT'
    | 'PROVISION_FAILURE'
    | 'PROVISION_SUCCESS'
    | 'RELATIONS_DELETED'
    | 'RELATION_ADD_OR_UPDATE'
    | 'RELATION_DELETED'
    | 'RPC_CALL'
    | 'SMS_SENT'
    | 'SUSPENDED'
    | 'TIMESERIES_DELETED'
    | 'TIMESERIES_UPDATED'
    | 'UNASSIGNED_FROM_CUSTOMER'
    | 'UNASSIGNED_FROM_EDGE'
    | 'UPDATED'
    | 'UPDATED_COMMENT'
  /** JsonNode represented action data */
  actionData?: TbJsonNode
  /**
   * String represented Action status
   * @example "SUCCESS"
   */
  actionStatus?: 'FAILURE' | 'SUCCESS'
  /** Failure action details info. An empty string in case of action status type 'SUCCESS', otherwise includes stack trace of the caused exception. */
  actionFailureDetails?: string
}

/** AuditLogId */
export interface TbAuditLogId {
  /**
   * string
   * @format uuid
   * @example "784f394c-42b6-435a-983c-b7beff2784f9"
   */
  id: string
}

/** AutoVersionCreateConfig */
export interface TbAutoVersionCreateConfig {
  branch?: string
  saveAttributes?: boolean
  saveCredentials?: boolean
  saveRelations?: boolean
}

/** AwsSnsSmsProviderConfiguration */
export type TbAwsSnsSmsProviderConfiguration = (TbSmsProviderConfiguration & {
  /** The AWS SNS Access Key ID. */
  accessKeyId?: string
  /** The AWS SNS Access Key. */
  secretAccessKey?: string
  /** The AWS region. */
  region?: string
}) & {
  /** The AWS SNS Access Key ID. */
  accessKeyId?: string
  /** The AWS SNS Access Key. */
  secretAccessKey?: string
  /** The AWS region. */
  region?: string
}

/** BackupCodeTwoFaAccountConfig */
export interface TbBackupCodeTwoFaAccountConfig {
  /** @uniqueItems true */
  codes?: string[]
  /** @format int32 */
  codesLeft?: number
  useByDefault?: boolean
}

/** BackupCodeTwoFaProviderConfig */
export interface TbBackupCodeTwoFaProviderConfig {
  /** @format int32 */
  codesQuantity?: number
}

/** BooleanFilterPredicate */
export type TbBooleanFilterPredicate = (TbKeyFilterPredicate & {
  operation?: 'EQUAL' | 'NOT_EQUAL'
  value?: TbFilterPredicateValueBoolean
}) & {
  operation?: 'EQUAL' | 'NOT_EQUAL'
  value?: TbFilterPredicateValueBoolean
}

/** BranchInfo */
export interface TbBranchInfo {
  default?: boolean
  name?: string
}

/** BulkImportRequest */
export interface TbBulkImportRequest {
  file?: string
  mapping?: TbMapping
}

/** BulkImportResult«Asset» */
export interface TbBulkImportResultAsset {
  created?: TbAtomicInteger
  errors?: TbAtomicInteger
  errorsList?: string[]
  updated?: TbAtomicInteger
}

/** BulkImportResult«Device» */
export interface TbBulkImportResultDevice {
  created?: TbAtomicInteger
  errors?: TbAtomicInteger
  errorsList?: string[]
  updated?: TbAtomicInteger
}

/** BulkImportResult«Edge» */
export interface TbBulkImportResultEdge {
  created?: TbAtomicInteger
  errors?: TbAtomicInteger
  errorsList?: string[]
  updated?: TbAtomicInteger
}

/** Button */
export interface TbButton {
  /** @format uuid */
  dashboardId?: string
  dashboardState?: string
  enabled?: boolean
  link?: string
  linkType?: 'DASHBOARD' | 'LINK'
  setEntityIdInState?: boolean
  text?: string
}

/** ByteArrayResource */
export interface TbByteArrayResource {
  /** @format byte */
  byteArray?: string
  description?: string
  /** @format binary */
  file?: File
  filename?: string
  inputStream?: TbInputStream
  open?: boolean
  readable?: boolean
  /** @format uri */
  uri?: string
  /** @format url */
  url?: string
}

/** ByteBuffer */
export interface TbByteBuffer {
  char?: string
  direct?: boolean
  /** @format double */
  double?: number
  /** @format float */
  float?: number
  /** @format int32 */
  int?: number
  /** @format int64 */
  long?: number
  readOnly?: boolean
  /** @format int32 */
  short?: number
}

/** ChangePasswordRequest */
export interface TbChangePasswordRequest {
  /**
   * The old password
   * @example "OldPassword"
   */
  currentPassword?: string
  /**
   * The new password
   * @example "NewPassword"
   */
  newPassword?: string
}

/** CheckPreProvisionedDevicesDeviceProfileProvisionConfiguration */
export interface TbCheckPreProvisionedDevicesDeviceProfileProvisionConfiguration {
  provisionDeviceSecret?: string
}

/** ClaimRequest */
export interface TbClaimRequest {
  secretKey?: string
}

/** ClearRule */
export interface TbClearRule {
  /** @uniqueItems true */
  alarmStatuses?: ('ACK' | 'ACTIVE' | 'ANY' | 'CLEARED' | 'UNACK')[]
}

/** ClientAttributesQueryingSnmpCommunicationConfig */
export interface TbClientAttributesQueryingSnmpCommunicationConfig {
  mappings?: TbSnmpMapping[]
  /** @format int64 */
  queryingFrequencyMs?: number
  spec?:
    | 'CLIENT_ATTRIBUTES_QUERYING'
    | 'SHARED_ATTRIBUTES_SETTING'
    | 'TELEMETRY_QUERYING'
    | 'TO_DEVICE_RPC_REQUEST'
    | 'TO_SERVER_RPC_REQUEST'
}

/** CoapDeviceProfileTransportConfiguration */
export type TbCoapDeviceProfileTransportConfiguration =
  (TbDeviceProfileTransportConfiguration & {
    clientSettings?: TbPowerSavingConfiguration
    coapDeviceTypeConfiguration?: TbCoapDeviceTypeConfiguration
  }) & {
    clientSettings?: TbPowerSavingConfiguration
    coapDeviceTypeConfiguration?: TbCoapDeviceTypeConfiguration
  }

/** CoapDeviceTransportConfiguration */
export type TbCoapDeviceTransportConfiguration =
  (TbDeviceTransportConfiguration & {
    /** @format int64 */
    edrxCycle?: number
    /** @format int64 */
    pagingTransmissionWindow?: number
    powerMode?: 'DRX' | 'E_DRX' | 'PSM'
    /** @format int64 */
    psmActivityTimer?: number
  }) & {
    /** @format int64 */
    edrxCycle?: number
    /** @format int64 */
    pagingTransmissionWindow?: number
    powerMode?: 'DRX' | 'E_DRX' | 'PSM'
    /** @format int64 */
    psmActivityTimer?: number
  }

/** CoapDeviceTypeConfiguration */
export type TbCoapDeviceTypeConfiguration = object

/** ColumnMapping */
export interface TbColumnMapping {
  key?: string
  type?:
    | 'ACCESS_TOKEN'
    | 'DESCRIPTION'
    | 'IS_GATEWAY'
    | 'LABEL'
    | 'LWM2M_BOOTSTRAP_SERVER_PUBLIC_KEY_OR_ID'
    | 'LWM2M_BOOTSTRAP_SERVER_SECRET_KEY'
    | 'LWM2M_BOOTSTRAP_SERVER_SECURITY_MODE'
    | 'LWM2M_CLIENT_CERT'
    | 'LWM2M_CLIENT_ENDPOINT'
    | 'LWM2M_CLIENT_IDENTITY'
    | 'LWM2M_CLIENT_KEY'
    | 'LWM2M_CLIENT_SECURITY_CONFIG_MODE'
    | 'LWM2M_SERVER_CLIENT_PUBLIC_KEY_OR_ID'
    | 'LWM2M_SERVER_CLIENT_SECRET_KEY'
    | 'LWM2M_SERVER_SECURITY_MODE'
    | 'MQTT_CLIENT_ID'
    | 'MQTT_PASSWORD'
    | 'MQTT_USER_NAME'
    | 'NAME'
    | 'ROUTING_KEY'
    | 'SECRET'
    | 'SERVER_ATTRIBUTE'
    | 'SHARED_ATTRIBUTE'
    | 'SNMP_COMMUNITY_STRING'
    | 'SNMP_HOST'
    | 'SNMP_PORT'
    | 'SNMP_VERSION'
    | 'TIMESERIES'
    | 'TYPE'
    | 'X509'
}

/** ComparisonTsValue */
export interface TbComparisonTsValue {
  current?: TbTsValue
  previous?: TbTsValue
}

/** ComplexFilterPredicate */
export type TbComplexFilterPredicate = (TbKeyFilterPredicate & {
  operation?: 'AND' | 'OR'
  predicates?: TbKeyFilterPredicate[]
}) & {
  operation?: 'AND' | 'OR'
  predicates?: TbKeyFilterPredicate[]
}

/** ComplexVersionCreateRequest */
export type TbComplexVersionCreateRequest = (TbVersionCreateRequest & {
  branch?: string
  entityTypes?: Record<string, TbEntityTypeVersionCreateConfig>
  syncStrategy?: 'MERGE' | 'OVERWRITE'
  type?: 'COMPLEX' | 'SINGLE_ENTITY'
  versionName?: string
}) & {
  branch?: string
  entityTypes?: Record<string, TbEntityTypeVersionCreateConfig>
  syncStrategy?: 'MERGE' | 'OVERWRITE'
  type?: 'COMPLEX' | 'SINGLE_ENTITY'
  versionName?: string
}

/** ComponentDescriptor */
export interface TbComponentDescriptor {
  /** JSON object with the descriptor Id. Specify existing descriptor id to update the descriptor. Referencing non-existing descriptor Id will cause error. Omit this field to create new descriptor. */
  id?: TbComponentDescriptorId
  /**
   * Timestamp of the descriptor creation, in milliseconds
   * @format int64
   * @example 1609459200000
   */
  createdTime?: number
  /** Type of the Rule Node */
  type?:
    | 'ACTION'
    | 'ENRICHMENT'
    | 'EXTERNAL'
    | 'FILTER'
    | 'FLOW'
    | 'TRANSFORMATION'
  /**
   * Scope of the Rule Node. Always set to 'TENANT', since no rule chains on the 'SYSTEM' level yet.
   * @example "TENANT"
   */
  scope?: 'TENANT'
  /**
   * Clustering mode of the RuleNode. This mode represents the ability to start Rule Node in multiple microservices.
   * @example "ENABLED"
   */
  clusteringMode?: 'ENABLED' | 'SINGLETON' | 'USER_PREFERENCE'
  /**
   * Name of the Rule Node. Taken from the @RuleNode annotation.
   * @example "Custom Rule Node"
   */
  name?: string
  /**
   * Full name of the Java class that implements the Rule Engine Node interface.
   * @example "com.mycompany.CustomRuleNode"
   */
  clazz?: string
  /** Complex JSON object that represents the Rule Node configuration. */
  configurationDescriptor?: TbJsonNode
  /**
   * Rule node configuration version. By default, this value is 0. If the rule node is a versioned node, this value might be greater than 0.
   * @format int32
   */
  configurationVersion?: number
  /** Rule Node Actions. Deprecated. Always null. */
  actions?: string
}

/** ComponentDescriptorId */
export interface TbComponentDescriptorId {
  /**
   * string
   * @format uuid
   * @example "784f394c-42b6-435a-983c-b7beff2784f9"
   */
  id: string
}

/** CustomTimeSchedule */
export interface TbCustomTimeSchedule {
  dynamicValue?: TbDynamicValueString
  items?: TbCustomTimeScheduleItem[]
  timezone?: string
  type?: 'ANY_TIME' | 'CUSTOM' | 'SPECIFIC_TIME'
}

/** CustomTimeScheduleItem */
export interface TbCustomTimeScheduleItem {
  /** @format int32 */
  dayOfWeek?: number
  enabled?: boolean
  /** @format int64 */
  endsOn?: number
  /** @format int64 */
  startsOn?: number
}

/** Customer */
export interface TbCustomer {
  /** JSON object with the customer Id. Specify this field to update the customer. Referencing non-existing customer Id will cause error. Omit this field to create new customer. */
  id?: TbCustomerId
  /**
   * Timestamp of the customer creation, in milliseconds
   * @format int64
   * @example 1609459200000
   */
  createdTime?: number
  /**
   * Title of the customer
   * @example "Company A"
   */
  title: string
  /**
   * Name of the customer. Read-only, duplicated from title for backward compatibility
   * @example "Company A"
   */
  name?: string
  /** JSON object with Tenant Id */
  tenantId?: TbTenantId
  /**
   * Country
   * @example "US"
   */
  country?: string
  /**
   * State
   * @example "NY"
   */
  state?: string
  /**
   * City
   * @example "New York"
   */
  city?: string
  /**
   * Address Line 1
   * @example "42 Broadway Suite 12-400"
   */
  address?: string
  /** Address Line 2 */
  address2?: string
  /**
   * Zip code
   * @example "10004"
   */
  zip?: string
  /**
   * Phone number
   * @example "+1(415)777-7777"
   */
  phone?: string
  /**
   * Email
   * @example "example@company.com"
   */
  email: string
  /** Additional parameters of the device */
  additionalInfo?: TbJsonNode
}

/** CustomerId */
export interface TbCustomerId {
  /**
   * ID of the entity, time-based UUID v1
   * @format uuid
   * @example "784f394c-42b6-435a-983c-b7beff2784f9"
   */
  id: string
  /**
   * string
   * @example "CUSTOMER"
   */
  entityType: 'CUSTOMER'
}

/** CustomerUsersFilter */
export interface TbCustomerUsersFilter {
  /** @format uuid */
  customerId: string
}

/** Dashboard */
export interface TbDashboard {
  /**
   * Timestamp of the dashboard creation, in milliseconds
   * @format int64
   * @example 1609459200000
   */
  createdTime?: number
  /** JSON object with Tenant Id. Tenant Id of the dashboard can't be changed. */
  tenantId?: TbTenantId
  /** Same as title of the dashboard. Read-only field. Update the 'title' to change the 'name' of the dashboard. */
  name?: string
  /** Title of the dashboard. */
  title: string
  /**
   * List of assigned customers with their info.
   * @uniqueItems true
   */
  assignedCustomers?: TbShortCustomerInfo[]
  /**
   * Hide dashboard from mobile devices. Useful if the dashboard is not designed for small screens.
   * @example false
   */
  mobileHide?: boolean
  /**
   * Order on mobile devices. Useful to adjust sorting of the dashboards for mobile applications
   * @format int32
   */
  mobileOrder?: number
  /** Thumbnail picture for rendering of the dashboards in a grid view on mobile devices. */
  image?: string
  /** JSON object with main configuration of the dashboard: layouts, widgets, aliases, etc. The JSON structure of the dashboard configuration is quite complex. The easiest way to learn it is to export existing dashboard to JSON. */
  configuration?: TbJsonNode
}

/** DashboardId */
export interface TbDashboardId {
  /**
   * ID of the entity, time-based UUID v1
   * @format uuid
   * @example "784f394c-42b6-435a-983c-b7beff2784f9"
   */
  id: string
  /**
   * string
   * @example "DASHBOARD"
   */
  entityType: 'DASHBOARD'
}

/** DashboardInfo */
export interface TbDashboardInfo {
  /** JSON object with the dashboard Id. Specify existing dashboard Id to update the dashboard. Referencing non-existing dashboard id will cause error. Omit this field to create new dashboard. */
  id?: TbDashboardId
  /**
   * Timestamp of the dashboard creation, in milliseconds
   * @format int64
   * @example 1609459200000
   */
  createdTime?: number
  /** JSON object with Tenant Id. Tenant Id of the dashboard can't be changed. */
  tenantId?: TbTenantId
  /** Same as title of the dashboard. Read-only field. Update the 'title' to change the 'name' of the dashboard. */
  name?: string
  /** Title of the dashboard. */
  title: string
  /**
   * List of assigned customers with their info.
   * @uniqueItems true
   */
  assignedCustomers?: TbShortCustomerInfo[]
  /**
   * Hide dashboard from mobile devices. Useful if the dashboard is not designed for small screens.
   * @example false
   */
  mobileHide?: boolean
  /**
   * Order on mobile devices. Useful to adjust sorting of the dashboards for mobile applications
   * @format int32
   */
  mobileOrder?: number
  /** Thumbnail picture for rendering of the dashboards in a grid view on mobile devices. */
  image?: string
}

/** DefaultCoapDeviceTypeConfiguration */
export type TbDefaultCoapDeviceTypeConfiguration =
  (TbCoapDeviceTypeConfiguration & {
    transportPayloadTypeConfiguration?: TbTransportPayloadTypeConfiguration
  }) & {
    transportPayloadTypeConfiguration?: TbTransportPayloadTypeConfiguration
  }

/** DefaultDeviceConfiguration */
export type TbDefaultDeviceConfiguration = TbDeviceConfiguration & object

/** DefaultDeviceProfileConfiguration */
export type TbDefaultDeviceProfileConfiguration = object

/** DefaultDeviceProfileTransportConfiguration */
export type TbDefaultDeviceProfileTransportConfiguration = object

/** DefaultDeviceTransportConfiguration */
export type TbDefaultDeviceTransportConfiguration =
  TbDeviceTransportConfiguration & object

/** DefaultRuleChainCreateRequest */
export interface TbDefaultRuleChainCreateRequest {
  /**
   * Name of the new rule chain
   * @example "Root Rule Chain"
   */
  name: string
}

/** DefaultTenantProfileConfiguration */
export interface TbDefaultTenantProfileConfiguration {
  /** @format int32 */
  alarmsTtlDays?: number
  cassandraQueryTenantRateLimitsConfiguration?: string
  customerServerRestLimitsConfiguration?: string
  /** @format int32 */
  defaultStorageTtlDays?: number
  /** @format int64 */
  maxAssets?: number
  /** @format int64 */
  maxCreatedAlarms?: number
  /** @format int64 */
  maxCustomers?: number
  /** @format int64 */
  maxDPStorageDays?: number
  /** @format int64 */
  maxDashboards?: number
  /** @format int64 */
  maxDevices?: number
  /** @format int64 */
  maxEmails?: number
  /** @format int64 */
  maxJSExecutions?: number
  /** @format int64 */
  maxOtaPackagesInBytes?: number
  /** @format int64 */
  maxREExecutions?: number
  /** @format int64 */
  maxResourceSize?: number
  /** @format int64 */
  maxResourcesInBytes?: number
  /** @format int64 */
  maxRuleChains?: number
  /** @format int32 */
  maxRuleNodeExecutionsPerMessage?: number
  /** @format int64 */
  maxSms?: number
  /** @format int64 */
  maxTbelExecutions?: number
  /** @format int64 */
  maxTransportDataPoints?: number
  /** @format int64 */
  maxTransportMessages?: number
  /** @format int64 */
  maxUsers?: number
  /** @format int32 */
  maxWsSessionsPerCustomer?: number
  /** @format int32 */
  maxWsSessionsPerPublicUser?: number
  /** @format int32 */
  maxWsSessionsPerRegularUser?: number
  /** @format int32 */
  maxWsSessionsPerTenant?: number
  /** @format int64 */
  maxWsSubscriptionsPerCustomer?: number
  /** @format int64 */
  maxWsSubscriptionsPerPublicUser?: number
  /** @format int64 */
  maxWsSubscriptionsPerRegularUser?: number
  /** @format int64 */
  maxWsSubscriptionsPerTenant?: number
  /** @format int32 */
  queueStatsTtlDays?: number
  /** @format int32 */
  rpcTtlDays?: number
  /** @format int32 */
  ruleEngineExceptionsTtlDays?: number
  smsEnabled?: boolean
  tenantEntityExportRateLimit?: string
  tenantEntityImportRateLimit?: string
  tenantNotificationRequestsPerRuleRateLimit?: string
  tenantNotificationRequestsRateLimit?: string
  tenantServerRestLimitsConfiguration?: string
  transportDeviceMsgRateLimit?: string
  transportDeviceTelemetryDataPointsRateLimit?: string
  transportDeviceTelemetryMsgRateLimit?: string
  transportTenantMsgRateLimit?: string
  transportTenantTelemetryDataPointsRateLimit?: string
  transportTenantTelemetryMsgRateLimit?: string
  /** @format double */
  warnThreshold?: number
  /** @format int32 */
  wsMsgQueueLimitPerSession?: number
  wsUpdatesPerSessionRateLimit?: string
}

/** DeferredResult«EntityDataDiff» */
export interface TbDeferredResultEntityDataDiff {
  result?: object
  setOrExpired?: boolean
}

/** DeferredResult«EntityDataInfo» */
export interface TbDeferredResultEntityDataInfo {
  result?: object
  setOrExpired?: boolean
}

/** DeferredResult«List«BranchInfo»» */
export interface TbDeferredResultListBranchInfo {
  result?: object
  setOrExpired?: boolean
}

/** DeferredResult«List«VersionedEntityInfo»» */
export interface TbDeferredResultListVersionedEntityInfo {
  result?: object
  setOrExpired?: boolean
}

/** DeferredResult«PageData«EntityVersion»» */
export interface TbDeferredResultPageDataEntityVersion {
  result?: object
  setOrExpired?: boolean
}

/** DeferredResult«RepositorySettings» */
export interface TbDeferredResultRepositorySettings {
  result?: object
  setOrExpired?: boolean
}

/** DeferredResult«ResponseEntity» */
export interface TbDeferredResultResponseEntity {
  result?: object
  setOrExpired?: boolean
}

/** DeferredResult«Void» */
export interface TbDeferredResultVoid {
  result?: object
  setOrExpired?: boolean
}

/** DeferredResult«uuid» */
export interface TbDeferredResultUuid {
  result?: object
  setOrExpired?: boolean
}

/** DeliveryMethodNotificationTemplate */
export interface TbDeliveryMethodNotificationTemplate {
  body?: string
  enabled?: boolean
}

/** Device */
export interface TbDevice {
  /** JSON object with the Device Id. Specify this field to update the Device. Referencing non-existing Device Id will cause error. Omit this field to create new Device. */
  id?: TbDeviceId
  /**
   * Timestamp of the device creation, in milliseconds
   * @format int64
   * @example 1609459200000
   */
  createdTime?: number
  /** JSON object with Tenant Id. Use 'assignDeviceToTenant' to change the Tenant Id. */
  tenantId?: TbTenantId
  /** JSON object with Customer Id. Use 'assignDeviceToCustomer' to change the Customer Id. */
  customerId?: TbCustomerId
  /**
   * Unique Device Name in scope of Tenant
   * @example "A4B72CCDFF33"
   */
  name: string
  /**
   * Device Profile Name
   * @example "Temperature Sensor"
   */
  type?: string
  /**
   * Label that may be used in widgets
   * @example "Room 234 Sensor"
   */
  label?: string
  /** JSON object with Device Profile Id. */
  deviceProfileId: TbDeviceProfileId
  /** JSON object with content specific to type of transport in the device profile. */
  deviceData?: TbDeviceData
  /** JSON object with Ota Package Id. */
  firmwareId?: TbOtaPackageId
  /** JSON object with Ota Package Id. */
  softwareId?: TbOtaPackageId
  /** Additional parameters of the device */
  additionalInfo?: TbJsonNode
}

/** DeviceActivityNotificationRuleTriggerConfig */
export interface TbDeviceActivityNotificationRuleTriggerConfig {
  /** @uniqueItems true */
  deviceProfiles?: string[]
  /** @uniqueItems true */
  devices?: string[]
  /** @uniqueItems true */
  notifyOn?: ('ACTIVE' | 'INACTIVE')[]
  triggerType?:
    | 'ALARM'
    | 'ALARM_ASSIGNMENT'
    | 'ALARM_COMMENT'
    | 'API_USAGE_LIMIT'
    | 'DEVICE_ACTIVITY'
    | 'ENTITIES_LIMIT'
    | 'ENTITY_ACTION'
    | 'NEW_PLATFORM_VERSION'
    | 'RATE_LIMITS'
    | 'RULE_ENGINE_COMPONENT_LIFECYCLE_EVENT'
}

/** DeviceConfiguration */
export type TbDeviceConfiguration = object

/** DeviceCredentials */
export interface TbDeviceCredentials {
  /**
   * The Id is automatically generated during device creation. Use 'getDeviceCredentialsByDeviceId' to obtain the id based on device id. Use 'updateDeviceCredentials' to update device credentials.
   * @example "784f394c-42b6-435a-983c-b7beff2784f9"
   */
  id: TbDeviceCredentialsId
  /**
   * Timestamp of the device credentials creation, in milliseconds
   * @format int64
   * @example 1609459200000
   */
  createdTime?: number
  /** JSON object with the device Id. */
  deviceId: TbDeviceId
  /** Type of the credentials */
  credentialsType?:
    | 'ACCESS_TOKEN'
    | 'LWM2M_CREDENTIALS'
    | 'MQTT_BASIC'
    | 'X509_CERTIFICATE'
  /**
   * Unique Credentials Id per platform instance. Used to lookup credentials from the database. By default, new access token for your device. Depends on the type of the credentials.
   * @example "Access token or other value that depends on the credentials type"
   */
  credentialsId: string
  /**
   * Value of the credentials. Null in case of ACCESS_TOKEN credentials type. Base64 value in case of X509_CERTIFICATE. Complex object in case of MQTT_BASIC and LWM2M_CREDENTIALS
   * @example "Null in case of ACCESS_TOKEN. See model definition."
   */
  credentialsValue?: string
}

/** DeviceCredentialsId */
export interface TbDeviceCredentialsId {
  /**
   * string
   * @format uuid
   * @example "784f394c-42b6-435a-983c-b7beff2784f9"
   */
  id: string
}

/** DeviceData */
export interface TbDeviceData {
  /** Device configuration for device profile type. DEFAULT is only supported value for now */
  configuration?: TbDeviceConfiguration
  /** Device transport configuration used to connect the device */
  transportConfiguration?: TbDeviceTransportConfiguration
}

/** DeviceExportData */
export type TbDeviceExportData = (TbEntityExportDataObject & {
  attributes?: Record<string, TbAttributeExportData[]>
  credentials?: TbDeviceCredentials
  entity?: TbDevice
  entityType?:
    | 'ALARM'
    | 'API_USAGE_STATE'
    | 'ASSET'
    | 'ASSET_PROFILE'
    | 'CUSTOMER'
    | 'DASHBOARD'
    | 'DEVICE'
    | 'DEVICE_PROFILE'
    | 'EDGE'
    | 'ENTITY_VIEW'
    | 'NOTIFICATION'
    | 'NOTIFICATION_REQUEST'
    | 'NOTIFICATION_RULE'
    | 'NOTIFICATION_TARGET'
    | 'NOTIFICATION_TEMPLATE'
    | 'OTA_PACKAGE'
    | 'QUEUE'
    | 'RPC'
    | 'RULE_CHAIN'
    | 'RULE_NODE'
    | 'TB_RESOURCE'
    | 'TENANT'
    | 'TENANT_PROFILE'
    | 'USER'
    | 'WIDGETS_BUNDLE'
    | 'WIDGET_TYPE'
  relations?: TbEntityRelation[]
}) & {
  attributes?: Record<string, TbAttributeExportData[]>
  credentials?: TbDeviceCredentials
  entity?: TbDevice
  entityType?:
    | 'ALARM'
    | 'API_USAGE_STATE'
    | 'ASSET'
    | 'ASSET_PROFILE'
    | 'CUSTOMER'
    | 'DASHBOARD'
    | 'DEVICE'
    | 'DEVICE_PROFILE'
    | 'EDGE'
    | 'ENTITY_VIEW'
    | 'NOTIFICATION'
    | 'NOTIFICATION_REQUEST'
    | 'NOTIFICATION_RULE'
    | 'NOTIFICATION_TARGET'
    | 'NOTIFICATION_TEMPLATE'
    | 'OTA_PACKAGE'
    | 'QUEUE'
    | 'RPC'
    | 'RULE_CHAIN'
    | 'RULE_NODE'
    | 'TB_RESOURCE'
    | 'TENANT'
    | 'TENANT_PROFILE'
    | 'USER'
    | 'WIDGETS_BUNDLE'
    | 'WIDGET_TYPE'
  relations?: TbEntityRelation[]
}

/** DeviceId */
export interface TbDeviceId {
  /**
   * ID of the entity, time-based UUID v1
   * @format uuid
   * @example "784f394c-42b6-435a-983c-b7beff2784f9"
   */
  id: string
  /**
   * string
   * @example "DEVICE"
   */
  entityType: 'DEVICE'
}

/** DeviceInfo */
export interface TbDeviceInfo {
  /** JSON object with the Device Id. Specify this field to update the Device. Referencing non-existing Device Id will cause error. Omit this field to create new Device. */
  id?: TbDeviceId
  /**
   * Timestamp of the device creation, in milliseconds
   * @format int64
   * @example 1609459200000
   */
  createdTime?: number
  /** JSON object with Tenant Id. Use 'assignDeviceToTenant' to change the Tenant Id. */
  tenantId?: TbTenantId
  /** JSON object with Customer Id. Use 'assignDeviceToCustomer' to change the Customer Id. */
  customerId?: TbCustomerId
  /**
   * Unique Device Name in scope of Tenant
   * @example "A4B72CCDFF33"
   */
  name: string
  /**
   * Device Profile Name
   * @example "Temperature Sensor"
   */
  type?: string
  /**
   * Label that may be used in widgets
   * @example "Room 234 Sensor"
   */
  label?: string
  /** JSON object with Device Profile Id. */
  deviceProfileId: TbDeviceProfileId
  /** JSON object with content specific to type of transport in the device profile. */
  deviceData?: TbDeviceData
  /** JSON object with Ota Package Id. */
  firmwareId?: TbOtaPackageId
  /** JSON object with Ota Package Id. */
  softwareId?: TbOtaPackageId
  /** Additional parameters of the device */
  additionalInfo?: TbJsonNode
  /** Title of the Customer that owns the device. */
  customerTitle?: string
  /**
   * Indicates special 'Public' Customer that is auto-generated to use the devices on public dashboards.
   * @example false
   */
  customerIsPublic?: boolean
  /** Name of the corresponding Device Profile. */
  deviceProfileName?: string
  /**
   * Device active flag.
   * @example false
   */
  active?: boolean
}

/** DeviceProfile */
export interface TbDeviceProfile {
  /** JSON object with the device profile Id. Specify this field to update the device profile. Referencing non-existing device profile Id will cause error. Omit this field to create new device profile. */
  id?: TbDeviceProfileId
  /**
   * Timestamp of the profile creation, in milliseconds
   * @format int64
   * @example 1609459200000
   */
  createdTime?: number
  /** JSON object with Tenant Id that owns the profile. */
  tenantId?: TbTenantId
  /**
   * Unique Device Profile Name in scope of Tenant.
   * @example "Moisture Sensor"
   */
  name?: string
  /**
   * Used to mark the default profile. Default profile is used when the device profile is not specified during device creation.
   * @example false
   */
  default?: boolean
  /** Reference to the dashboard. Used in the mobile application to open the default dashboard when user navigates to device details. */
  defaultDashboardId?: TbDashboardId
  /** Reference to the rule chain. If present, the specified rule chain will be used to process all messages related to device, including telemetry, attribute updates, etc. Otherwise, the root rule chain will be used to process those messages. */
  defaultRuleChainId?: TbRuleChainId
  /** Rule engine queue name. If present, the specified queue will be used to store all unprocessed messages related to device, including telemetry, attribute updates, etc. Otherwise, the 'Main' queue will be used to store those messages. */
  defaultQueueName?: string
  /** Reference to the firmware OTA package. If present, the specified package will be used as default device firmware.  */
  firmwareId?: TbOtaPackageId
  /** Reference to the software OTA package. If present, the specified package will be used as default device software.  */
  softwareId?: TbOtaPackageId
  /** Device Profile description.  */
  description?: string
  /** Either URL or Base64 data of the icon. Used in the mobile application to visualize set of device profiles in the grid view.  */
  image?: string
  /** Unique provisioning key used by 'Device Provisioning' feature. */
  provisionDeviceKey?: string
  /** Type of the transport used to connect the device. Default transport supports HTTP, CoAP and MQTT. */
  transportType?: 'COAP' | 'DEFAULT' | 'LWM2M' | 'MQTT' | 'SNMP'
  /** Provisioning strategy. */
  provisionType?:
    | 'ALLOW_CREATE_NEW_DEVICES'
    | 'CHECK_PRE_PROVISIONED_DEVICES'
    | 'DISABLED'
    | 'X509_CERTIFICATE_CHAIN'
  /** Complex JSON object that includes addition device profile configuration (transport, alarm rules, etc). */
  profileData?: TbDeviceProfileData
  /** Type of the profile. Always 'DEFAULT' for now. Reserved for future use. */
  type?: 'DEFAULT'
  /** Reference to the edge rule chain. If present, the specified edge rule chain will be used on the edge to process all messages related to device, including telemetry, attribute updates, etc. Otherwise, the edge root rule chain will be used to process those messages. */
  defaultEdgeRuleChainId?: TbRuleChainId
}

/** DeviceProfileAlarm */
export interface TbDeviceProfileAlarm {
  /**
   * String value representing the alarm rule id
   * @example "highTemperatureAlarmID"
   */
  id?: string
  /**
   * String value representing type of the alarm
   * @example "High Temperature Alarm"
   */
  alarmType?: string
  /** Complex JSON object representing create alarm rules. The unique create alarm rule can be created for each alarm severity type. There can be 5 create alarm rules configured per a single alarm type. See method implementation notes and AlarmRule model for more details */
  createRules?: Record<string, TbAlarmRule>
  /** JSON object representing clear alarm rule */
  clearRule?: TbAlarmRule
  /**
   * Propagation flag to specify if alarm should be propagated to parent entities of alarm originator
   * @example true
   */
  propagate?: boolean
  /**
   * Propagation flag to specify if alarm should be propagated to the owner (tenant or customer) of alarm originator
   * @example true
   */
  propagateToOwner?: boolean
  /**
   * Propagation flag to specify if alarm should be propagated to the tenant entity
   * @example true
   */
  propagateToTenant?: boolean
  /** JSON array of relation types that should be used for propagation. By default, 'propagateRelationTypes' array is empty which means that the alarm will be propagated based on any relation type to parent entities. This parameter should be used only in case when 'propagate' parameter is set to true, otherwise, 'propagateRelationTypes' array will be ignored. */
  propagateRelationTypes?: string[]
}

/** DeviceProfileConfiguration */
export type TbDeviceProfileConfiguration = object

/** DeviceProfileData */
export interface TbDeviceProfileData {
  /** JSON object of device profile configuration */
  configuration?: TbDeviceProfileConfiguration
  /** JSON object of device profile transport configuration */
  transportConfiguration?: TbDeviceProfileTransportConfiguration
  /** JSON object of provisioning strategy type per device profile */
  provisionConfiguration?: TbDeviceProfileProvisionConfiguration
  /** JSON array of alarm rules configuration per device profile */
  alarms?: TbDeviceProfileAlarm[]
}

/** DeviceProfileId */
export interface TbDeviceProfileId {
  /**
   * ID of the entity, time-based UUID v1
   * @format uuid
   * @example "784f394c-42b6-435a-983c-b7beff2784f9"
   */
  id: string
  /**
   * string
   * @example "DEVICE_PROFILE"
   */
  entityType: 'DEVICE_PROFILE'
}

/** DeviceProfileInfo */
export interface TbDeviceProfileInfo {
  /** JSON object with the entity Id.  */
  id?: TbEntityId
  /** Entity Name */
  name?: string
  /** Either URL or Base64 data of the icon. Used in the mobile application to visualize set of device profiles in the grid view.  */
  image?: string
  /** Reference to the dashboard. Used in the mobile application to open the default dashboard when user navigates to device details. */
  defaultDashboardId?: TbDashboardId
  /** Type of the profile. Always 'DEFAULT' for now. Reserved for future use. */
  type?: 'DEFAULT'
  /** Type of the transport used to connect the device. Default transport supports HTTP, CoAP and MQTT. */
  transportType?: 'COAP' | 'DEFAULT' | 'LWM2M' | 'MQTT' | 'SNMP'
  /** Tenant id. */
  tenantId?: TbTenantId
}

/** DeviceProfileProvisionConfiguration */
export interface TbDeviceProfileProvisionConfiguration {
  provisionDeviceSecret?: string
}

/** DeviceProfileTransportConfiguration */
export type TbDeviceProfileTransportConfiguration = object

/** DeviceSearchQuery */
export interface TbDeviceSearchQuery {
  /** Type of the relation between root entity and device (e.g. 'Contains' or 'Manages'). */
  relationType?: string
  /** Array of device types to filter the related entities (e.g. 'Temperature Sensor', 'Smoke Sensor'). */
  deviceTypes?: string[]
  /** Main search parameters. */
  parameters?: TbRelationsSearchParameters
}

/** DeviceSearchQueryFilter */
export type TbDeviceSearchQueryFilter = (TbEntityFilter & {
  deviceTypes?: string[]
  direction?: 'FROM' | 'TO'
  fetchLastLevelOnly?: boolean
  /** @format int32 */
  maxLevel?: number
  relationType?: string
  rootEntity?: TbEntityId
}) & {
  deviceTypes?: string[]
  direction?: 'FROM' | 'TO'
  fetchLastLevelOnly?: boolean
  /** @format int32 */
  maxLevel?: number
  relationType?: string
  rootEntity?: TbEntityId
}

/** DeviceTransportConfiguration */
export type TbDeviceTransportConfiguration = object

/** DeviceTypeFilter */
export type TbDeviceTypeFilter = (TbEntityFilter & {
  deviceNameFilter?: string
  deviceTypes?: string[]
}) & {
  deviceNameFilter?: string
  deviceTypes?: string[]
}

/** DisabledDeviceProfileProvisionConfiguration */
export type TbDisabledDeviceProfileProvisionConfiguration =
  (TbDeviceProfileProvisionConfiguration & {
    provisionDeviceSecret?: string
  }) & {
    provisionDeviceSecret?: string
  }

/** DurationAlarmConditionSpec */
export type TbDurationAlarmConditionSpec = (TbAlarmConditionSpec & {
  predicate?: TbFilterPredicateValueLong
  unit?:
    | 'DAYS'
    | 'HOURS'
    | 'MICROSECONDS'
    | 'MILLISECONDS'
    | 'MINUTES'
    | 'NANOSECONDS'
    | 'SECONDS'
}) & {
  predicate?: TbFilterPredicateValueLong
  unit?:
    | 'DAYS'
    | 'HOURS'
    | 'MICROSECONDS'
    | 'MILLISECONDS'
    | 'MINUTES'
    | 'NANOSECONDS'
    | 'SECONDS'
}

/** DynamicValue«boolean» */
export interface TbDynamicValueBoolean {
  inherit?: boolean
  sourceAttribute?: string
  sourceType?:
    | 'CURRENT_CUSTOMER'
    | 'CURRENT_DEVICE'
    | 'CURRENT_TENANT'
    | 'CURRENT_USER'
}

/** DynamicValue«double» */
export interface TbDynamicValueDouble {
  inherit?: boolean
  sourceAttribute?: string
  sourceType?:
    | 'CURRENT_CUSTOMER'
    | 'CURRENT_DEVICE'
    | 'CURRENT_TENANT'
    | 'CURRENT_USER'
}

/** DynamicValue«int» */
export interface TbDynamicValueInt {
  inherit?: boolean
  sourceAttribute?: string
  sourceType?:
    | 'CURRENT_CUSTOMER'
    | 'CURRENT_DEVICE'
    | 'CURRENT_TENANT'
    | 'CURRENT_USER'
}

/** DynamicValue«long» */
export interface TbDynamicValueLong {
  inherit?: boolean
  sourceAttribute?: string
  sourceType?:
    | 'CURRENT_CUSTOMER'
    | 'CURRENT_DEVICE'
    | 'CURRENT_TENANT'
    | 'CURRENT_USER'
}

/** DynamicValue«string» */
export interface TbDynamicValueString {
  inherit?: boolean
  sourceAttribute?: string
  sourceType?:
    | 'CURRENT_CUSTOMER'
    | 'CURRENT_DEVICE'
    | 'CURRENT_TENANT'
    | 'CURRENT_USER'
}

/** Edge */
export interface TbEdge {
  additionalInfo?: TbJsonNode
  /** JSON object with the Edge Id. Specify this field to update the Edge. Referencing non-existing Edge Id will cause error. Omit this field to create new Edge. */
  id?: TbEdgeId
  /**
   * Timestamp of the edge creation, in milliseconds
   * @format int64
   * @example 1609459200000
   */
  createdTime?: number
  /** JSON object with Tenant Id. Use 'assignDeviceToTenant' to change the Tenant Id. */
  tenantId?: TbTenantId
  /** JSON object with Customer Id. Use 'assignEdgeToCustomer' to change the Customer Id. */
  customerId?: TbCustomerId
  /** JSON object with Root Rule Chain Id. Use 'setEdgeRootRuleChain' to change the Root Rule Chain Id. */
  rootRuleChainId?: TbRuleChainId
  /**
   * Unique Edge Name in scope of Tenant
   * @example "Silo_A_Edge"
   */
  name: string
  /**
   * Edge type
   * @example "Silos"
   */
  type: string
  /**
   * Label that may be used in widgets
   * @example "Silo Edge on far field"
   */
  label?: string
  /** Edge routing key ('username') to authorize on cloud */
  routingKey: string
  /** Edge secret ('password') to authorize on cloud */
  secret: string
}

/** EdgeEvent */
export interface TbEdgeEvent {
  action?:
    | 'ADDED'
    | 'ALARM_ACK'
    | 'ALARM_ASSIGNED'
    | 'ALARM_CLEAR'
    | 'ALARM_UNASSIGNED'
    | 'ASSIGNED_TO_CUSTOMER'
    | 'ASSIGNED_TO_EDGE'
    | 'ATTRIBUTES_DELETED'
    | 'ATTRIBUTES_UPDATED'
    | 'CREDENTIALS_REQUEST'
    | 'CREDENTIALS_UPDATED'
    | 'DELETED'
    | 'ENTITY_MERGE_REQUEST'
    | 'POST_ATTRIBUTES'
    | 'RELATION_ADD_OR_UPDATE'
    | 'RELATION_DELETED'
    | 'RPC_CALL'
    | 'TIMESERIES_UPDATED'
    | 'UNASSIGNED_FROM_CUSTOMER'
    | 'UNASSIGNED_FROM_EDGE'
    | 'UPDATED'
  body?: TbJsonNode
  /** @format int64 */
  createdTime?: number
  edgeId?: TbEdgeId
  /** @format uuid */
  entityId?: string
  id?: TbEdgeEventId
  /** @format int64 */
  seqId?: number
  tenantId?: TbTenantId
  type?:
    | 'ADMIN_SETTINGS'
    | 'ALARM'
    | 'ASSET'
    | 'ASSET_PROFILE'
    | 'CUSTOMER'
    | 'DASHBOARD'
    | 'DEVICE'
    | 'DEVICE_PROFILE'
    | 'EDGE'
    | 'ENTITY_VIEW'
    | 'OTA_PACKAGE'
    | 'QUEUE'
    | 'RELATION'
    | 'RULE_CHAIN'
    | 'RULE_CHAIN_METADATA'
    | 'TB_RESOURCE'
    | 'TENANT'
    | 'TENANT_PROFILE'
    | 'USER'
    | 'WIDGETS_BUNDLE'
    | 'WIDGET_TYPE'
  uid?: string
}

/** EdgeEventId */
export interface TbEdgeEventId {
  /**
   * string
   * @format uuid
   * @example "784f394c-42b6-435a-983c-b7beff2784f9"
   */
  id: string
}

/** EdgeId */
export interface TbEdgeId {
  /**
   * ID of the entity, time-based UUID v1
   * @format uuid
   * @example "784f394c-42b6-435a-983c-b7beff2784f9"
   */
  id: string
  /**
   * string
   * @example "EDGE"
   */
  entityType: 'EDGE'
}

/** EdgeInfo */
export interface TbEdgeInfo {
  additionalInfo?: TbJsonNode
  customerIsPublic?: boolean
  customerTitle?: string
  /** JSON object with the Edge Id. Specify this field to update the Edge. Referencing non-existing Edge Id will cause error. Omit this field to create new Edge. */
  id?: TbEdgeId
  /**
   * Timestamp of the edge creation, in milliseconds
   * @format int64
   * @example 1609459200000
   */
  createdTime?: number
  /** JSON object with Tenant Id. Use 'assignDeviceToTenant' to change the Tenant Id. */
  tenantId?: TbTenantId
  /** JSON object with Customer Id. Use 'assignEdgeToCustomer' to change the Customer Id. */
  customerId?: TbCustomerId
  /** JSON object with Root Rule Chain Id. Use 'setEdgeRootRuleChain' to change the Root Rule Chain Id. */
  rootRuleChainId?: TbRuleChainId
  /**
   * Unique Edge Name in scope of Tenant
   * @example "Silo_A_Edge"
   */
  name: string
  /**
   * Edge type
   * @example "Silos"
   */
  type: string
  /**
   * Label that may be used in widgets
   * @example "Silo Edge on far field"
   */
  label?: string
  /** Edge routing key ('username') to authorize on cloud */
  routingKey: string
  /** Edge secret ('password') to authorize on cloud */
  secret: string
}

/** EdgeInstructions */
export interface TbEdgeInstructions {
  /** Markdown with install/upgrade instructions */
  instructions?: string
}

/** EdgeSearchQuery */
export interface TbEdgeSearchQuery {
  /** Type of the relation between root entity and edge (e.g. 'Contains' or 'Manages'). */
  relationType?: string
  /** Array of edge types to filter the related entities (e.g. 'Silos', 'Stores'). */
  edgeTypes?: string[]
  /** Main search parameters. */
  parameters?: TbRelationsSearchParameters
}

/** EdgeSearchQueryFilter */
export type TbEdgeSearchQueryFilter = (TbEntityFilter & {
  direction?: 'FROM' | 'TO'
  edgeTypes?: string[]
  fetchLastLevelOnly?: boolean
  /** @format int32 */
  maxLevel?: number
  relationType?: string
  rootEntity?: TbEntityId
}) & {
  direction?: 'FROM' | 'TO'
  edgeTypes?: string[]
  fetchLastLevelOnly?: boolean
  /** @format int32 */
  maxLevel?: number
  relationType?: string
  rootEntity?: TbEntityId
}

/** EdgeTypeFilter */
export type TbEdgeTypeFilter = (TbEntityFilter & {
  edgeNameFilter?: string
  edgeTypes?: string[]
}) & {
  edgeNameFilter?: string
  edgeTypes?: string[]
}

/** EfentoCoapDeviceTypeConfiguration */
export type TbEfentoCoapDeviceTypeConfiguration = object

/** EmailDeliveryMethodNotificationTemplate */
export type TbEmailDeliveryMethodNotificationTemplate =
  (TbDeliveryMethodNotificationTemplate & {
    body?: string
    enabled?: boolean
    subject?: string
  }) & {
    body?: string
    enabled?: boolean
    subject?: string
  }

/** EmailTwoFaAccountConfig */
export interface TbEmailTwoFaAccountConfig {
  email: string
  useByDefault?: boolean
}

/** EmailTwoFaProviderConfig */
export type TbEmailTwoFaProviderConfig = (TbTwoFaProviderConfig & {
  /** @format int32 */
  verificationCodeLifetime?: number
}) & {
  /** @format int32 */
  verificationCodeLifetime?: number
}

/** EntitiesLimitNotificationRuleTriggerConfig */
export type TbEntitiesLimitNotificationRuleTriggerConfig =
  (TbNotificationRuleTriggerConfig & {
    /** @uniqueItems true */
    entityTypes?: (
      | 'ALARM'
      | 'API_USAGE_STATE'
      | 'ASSET'
      | 'ASSET_PROFILE'
      | 'CUSTOMER'
      | 'DASHBOARD'
      | 'DEVICE'
      | 'DEVICE_PROFILE'
      | 'EDGE'
      | 'ENTITY_VIEW'
      | 'NOTIFICATION'
      | 'NOTIFICATION_REQUEST'
      | 'NOTIFICATION_RULE'
      | 'NOTIFICATION_TARGET'
      | 'NOTIFICATION_TEMPLATE'
      | 'OTA_PACKAGE'
      | 'QUEUE'
      | 'RPC'
      | 'RULE_CHAIN'
      | 'RULE_NODE'
      | 'TB_RESOURCE'
      | 'TENANT'
      | 'TENANT_PROFILE'
      | 'USER'
      | 'WIDGETS_BUNDLE'
      | 'WIDGET_TYPE'
    )[]
    /**
     * @format float
     * @max 1
     * @exclusiveMax false
     */
    threshold?: number
    triggerType?:
      | 'ALARM'
      | 'ALARM_ASSIGNMENT'
      | 'ALARM_COMMENT'
      | 'API_USAGE_LIMIT'
      | 'DEVICE_ACTIVITY'
      | 'ENTITIES_LIMIT'
      | 'ENTITY_ACTION'
      | 'NEW_PLATFORM_VERSION'
      | 'RATE_LIMITS'
      | 'RULE_ENGINE_COMPONENT_LIFECYCLE_EVENT'
  }) & {
    /** @uniqueItems true */
    entityTypes?: (
      | 'ALARM'
      | 'API_USAGE_STATE'
      | 'ASSET'
      | 'ASSET_PROFILE'
      | 'CUSTOMER'
      | 'DASHBOARD'
      | 'DEVICE'
      | 'DEVICE_PROFILE'
      | 'EDGE'
      | 'ENTITY_VIEW'
      | 'NOTIFICATION'
      | 'NOTIFICATION_REQUEST'
      | 'NOTIFICATION_RULE'
      | 'NOTIFICATION_TARGET'
      | 'NOTIFICATION_TEMPLATE'
      | 'OTA_PACKAGE'
      | 'QUEUE'
      | 'RPC'
      | 'RULE_CHAIN'
      | 'RULE_NODE'
      | 'TB_RESOURCE'
      | 'TENANT'
      | 'TENANT_PROFILE'
      | 'USER'
      | 'WIDGETS_BUNDLE'
      | 'WIDGET_TYPE'
    )[]
    /**
     * @format float
     * @max 1
     * @exclusiveMax false
     */
    threshold?: number
    triggerType?:
      | 'ALARM'
      | 'ALARM_ASSIGNMENT'
      | 'ALARM_COMMENT'
      | 'API_USAGE_LIMIT'
      | 'DEVICE_ACTIVITY'
      | 'ENTITIES_LIMIT'
      | 'ENTITY_ACTION'
      | 'NEW_PLATFORM_VERSION'
      | 'RATE_LIMITS'
      | 'RULE_ENGINE_COMPONENT_LIFECYCLE_EVENT'
  }

/** EntityActionNotificationRuleTriggerConfig */
export type TbEntityActionNotificationRuleTriggerConfig =
  (TbNotificationRuleTriggerConfig & {
    created?: boolean
    deleted?: boolean
    /** @uniqueItems true */
    entityTypes?: (
      | 'ALARM'
      | 'API_USAGE_STATE'
      | 'ASSET'
      | 'ASSET_PROFILE'
      | 'CUSTOMER'
      | 'DASHBOARD'
      | 'DEVICE'
      | 'DEVICE_PROFILE'
      | 'EDGE'
      | 'ENTITY_VIEW'
      | 'NOTIFICATION'
      | 'NOTIFICATION_REQUEST'
      | 'NOTIFICATION_RULE'
      | 'NOTIFICATION_TARGET'
      | 'NOTIFICATION_TEMPLATE'
      | 'OTA_PACKAGE'
      | 'QUEUE'
      | 'RPC'
      | 'RULE_CHAIN'
      | 'RULE_NODE'
      | 'TB_RESOURCE'
      | 'TENANT'
      | 'TENANT_PROFILE'
      | 'USER'
      | 'WIDGETS_BUNDLE'
      | 'WIDGET_TYPE'
    )[]
    triggerType?:
      | 'ALARM'
      | 'ALARM_ASSIGNMENT'
      | 'ALARM_COMMENT'
      | 'API_USAGE_LIMIT'
      | 'DEVICE_ACTIVITY'
      | 'ENTITIES_LIMIT'
      | 'ENTITY_ACTION'
      | 'NEW_PLATFORM_VERSION'
      | 'RATE_LIMITS'
      | 'RULE_ENGINE_COMPONENT_LIFECYCLE_EVENT'
    updated?: boolean
  }) & {
    created?: boolean
    deleted?: boolean
    /** @uniqueItems true */
    entityTypes?: (
      | 'ALARM'
      | 'API_USAGE_STATE'
      | 'ASSET'
      | 'ASSET_PROFILE'
      | 'CUSTOMER'
      | 'DASHBOARD'
      | 'DEVICE'
      | 'DEVICE_PROFILE'
      | 'EDGE'
      | 'ENTITY_VIEW'
      | 'NOTIFICATION'
      | 'NOTIFICATION_REQUEST'
      | 'NOTIFICATION_RULE'
      | 'NOTIFICATION_TARGET'
      | 'NOTIFICATION_TEMPLATE'
      | 'OTA_PACKAGE'
      | 'QUEUE'
      | 'RPC'
      | 'RULE_CHAIN'
      | 'RULE_NODE'
      | 'TB_RESOURCE'
      | 'TENANT'
      | 'TENANT_PROFILE'
      | 'USER'
      | 'WIDGETS_BUNDLE'
      | 'WIDGET_TYPE'
    )[]
    triggerType?:
      | 'ALARM'
      | 'ALARM_ASSIGNMENT'
      | 'ALARM_COMMENT'
      | 'API_USAGE_LIMIT'
      | 'DEVICE_ACTIVITY'
      | 'ENTITIES_LIMIT'
      | 'ENTITY_ACTION'
      | 'NEW_PLATFORM_VERSION'
      | 'RATE_LIMITS'
      | 'RULE_ENGINE_COMPONENT_LIFECYCLE_EVENT'
    updated?: boolean
  }

/** EntityCountQuery */
export interface TbEntityCountQuery {
  entityFilter?: TbEntityFilter
  keyFilters?: TbKeyFilter[]
}

/** EntityData */
export interface TbEntityData {
  aggLatest?: Record<string, TbComparisonTsValue>
  entityId?: TbEntityId
  latest?: Record<string, object>
  timeseries?: Record<string, TbTsValue[]>
}

/** EntityDataDiff */
export interface TbEntityDataDiff {
  currentVersion?: TbEntityExportDataObject
  otherVersion?: TbEntityExportDataObject
}

/** EntityDataInfo */
export interface TbEntityDataInfo {
  hasAttributes?: boolean
  hasCredentials?: boolean
  hasRelations?: boolean
}

/** EntityDataPageLink */
export interface TbEntityDataPageLink {
  dynamic?: boolean
  /** @format int32 */
  page?: number
  /** @format int32 */
  pageSize?: number
  sortOrder?: TbEntityDataSortOrder
  textSearch?: string
}

/** EntityDataQuery */
export interface TbEntityDataQuery {
  entityFields?: TbEntityKey[]
  entityFilter?: TbEntityFilter
  keyFilters?: TbKeyFilter[]
  latestValues?: TbEntityKey[]
  pageLink?: TbEntityDataPageLink
}

/** EntityDataSortOrder */
export interface TbEntityDataSortOrder {
  direction?: 'ASC' | 'DESC'
  key?: TbEntityKey
}

/** EntityExportData«object» */
export interface TbEntityExportDataObject {
  attributes?: Record<string, TbAttributeExportData[]>
  entity?: object
  entityType?:
    | 'ALARM'
    | 'API_USAGE_STATE'
    | 'ASSET'
    | 'ASSET_PROFILE'
    | 'CUSTOMER'
    | 'DASHBOARD'
    | 'DEVICE'
    | 'DEVICE_PROFILE'
    | 'EDGE'
    | 'ENTITY_VIEW'
    | 'NOTIFICATION'
    | 'NOTIFICATION_REQUEST'
    | 'NOTIFICATION_RULE'
    | 'NOTIFICATION_TARGET'
    | 'NOTIFICATION_TEMPLATE'
    | 'OTA_PACKAGE'
    | 'QUEUE'
    | 'RPC'
    | 'RULE_CHAIN'
    | 'RULE_NODE'
    | 'TB_RESOURCE'
    | 'TENANT'
    | 'TENANT_PROFILE'
    | 'USER'
    | 'WIDGETS_BUNDLE'
    | 'WIDGET_TYPE'
  relations?: TbEntityRelation[]
}

/** EntityFilter */
export type TbEntityFilter = object

/** EntityId */
export interface TbEntityId {
  /**
   * ID of the entity, time-based UUID v1
   * @format uuid
   * @example "784f394c-42b6-435a-983c-b7beff2784f9"
   */
  id: string
  /** @example "DEVICE" */
  entityType:
    | 'ALARM'
    | 'API_USAGE_STATE'
    | 'ASSET'
    | 'ASSET_PROFILE'
    | 'CUSTOMER'
    | 'DASHBOARD'
    | 'DEVICE'
    | 'DEVICE_PROFILE'
    | 'EDGE'
    | 'ENTITY_VIEW'
    | 'NOTIFICATION'
    | 'NOTIFICATION_REQUEST'
    | 'NOTIFICATION_RULE'
    | 'NOTIFICATION_TARGET'
    | 'NOTIFICATION_TEMPLATE'
    | 'OTA_PACKAGE'
    | 'QUEUE'
    | 'RPC'
    | 'RULE_CHAIN'
    | 'RULE_NODE'
    | 'TB_RESOURCE'
    | 'TENANT'
    | 'TENANT_PROFILE'
    | 'USER'
    | 'WIDGETS_BUNDLE'
    | 'WIDGET_TYPE'
}

/** EntityInfo */
export interface TbEntityInfo {
  /** JSON object with the entity Id.  */
  id?: TbEntityId
  /** Entity Name */
  name?: string
}

/** EntityKey */
export interface TbEntityKey {
  key?: string
  type?:
    | 'ALARM_FIELD'
    | 'ATTRIBUTE'
    | 'CLIENT_ATTRIBUTE'
    | 'ENTITY_FIELD'
    | 'SERVER_ATTRIBUTE'
    | 'SHARED_ATTRIBUTE'
    | 'TIME_SERIES'
}

/** EntityListFilter */
export type TbEntityListFilter = (TbEntityFilter & {
  entityList?: string[]
  entityType?:
    | 'ALARM'
    | 'API_USAGE_STATE'
    | 'ASSET'
    | 'ASSET_PROFILE'
    | 'CUSTOMER'
    | 'DASHBOARD'
    | 'DEVICE'
    | 'DEVICE_PROFILE'
    | 'EDGE'
    | 'ENTITY_VIEW'
    | 'NOTIFICATION'
    | 'NOTIFICATION_REQUEST'
    | 'NOTIFICATION_RULE'
    | 'NOTIFICATION_TARGET'
    | 'NOTIFICATION_TEMPLATE'
    | 'OTA_PACKAGE'
    | 'QUEUE'
    | 'RPC'
    | 'RULE_CHAIN'
    | 'RULE_NODE'
    | 'TB_RESOURCE'
    | 'TENANT'
    | 'TENANT_PROFILE'
    | 'USER'
    | 'WIDGETS_BUNDLE'
    | 'WIDGET_TYPE'
}) & {
  entityList?: string[]
  entityType?:
    | 'ALARM'
    | 'API_USAGE_STATE'
    | 'ASSET'
    | 'ASSET_PROFILE'
    | 'CUSTOMER'
    | 'DASHBOARD'
    | 'DEVICE'
    | 'DEVICE_PROFILE'
    | 'EDGE'
    | 'ENTITY_VIEW'
    | 'NOTIFICATION'
    | 'NOTIFICATION_REQUEST'
    | 'NOTIFICATION_RULE'
    | 'NOTIFICATION_TARGET'
    | 'NOTIFICATION_TEMPLATE'
    | 'OTA_PACKAGE'
    | 'QUEUE'
    | 'RPC'
    | 'RULE_CHAIN'
    | 'RULE_NODE'
    | 'TB_RESOURCE'
    | 'TENANT'
    | 'TENANT_PROFILE'
    | 'USER'
    | 'WIDGETS_BUNDLE'
    | 'WIDGET_TYPE'
}

/** EntityLoadError */
export interface TbEntityLoadError {
  message?: string
  source?: TbEntityId
  target?: TbEntityId
  type?: string
}

/** EntityNameFilter */
export type TbEntityNameFilter = (TbEntityFilter & {
  entityNameFilter?: string
  entityType?:
    | 'ALARM'
    | 'API_USAGE_STATE'
    | 'ASSET'
    | 'ASSET_PROFILE'
    | 'CUSTOMER'
    | 'DASHBOARD'
    | 'DEVICE'
    | 'DEVICE_PROFILE'
    | 'EDGE'
    | 'ENTITY_VIEW'
    | 'NOTIFICATION'
    | 'NOTIFICATION_REQUEST'
    | 'NOTIFICATION_RULE'
    | 'NOTIFICATION_TARGET'
    | 'NOTIFICATION_TEMPLATE'
    | 'OTA_PACKAGE'
    | 'QUEUE'
    | 'RPC'
    | 'RULE_CHAIN'
    | 'RULE_NODE'
    | 'TB_RESOURCE'
    | 'TENANT'
    | 'TENANT_PROFILE'
    | 'USER'
    | 'WIDGETS_BUNDLE'
    | 'WIDGET_TYPE'
}) & {
  entityNameFilter?: string
  entityType?:
    | 'ALARM'
    | 'API_USAGE_STATE'
    | 'ASSET'
    | 'ASSET_PROFILE'
    | 'CUSTOMER'
    | 'DASHBOARD'
    | 'DEVICE'
    | 'DEVICE_PROFILE'
    | 'EDGE'
    | 'ENTITY_VIEW'
    | 'NOTIFICATION'
    | 'NOTIFICATION_REQUEST'
    | 'NOTIFICATION_RULE'
    | 'NOTIFICATION_TARGET'
    | 'NOTIFICATION_TEMPLATE'
    | 'OTA_PACKAGE'
    | 'QUEUE'
    | 'RPC'
    | 'RULE_CHAIN'
    | 'RULE_NODE'
    | 'TB_RESOURCE'
    | 'TENANT'
    | 'TENANT_PROFILE'
    | 'USER'
    | 'WIDGETS_BUNDLE'
    | 'WIDGET_TYPE'
}

/** EntityRelation */
export interface TbEntityRelation {
  /** JSON object with [from] Entity Id. */
  from?: TbEntityId
  /** JSON object with [to] Entity Id. */
  to?: TbEntityId
  /**
   * String value of relation type.
   * @example "Contains"
   */
  type?: string
  /**
   * Represents the type group of the relation.
   * @example "COMMON"
   */
  typeGroup?:
    | 'COMMON'
    | 'DASHBOARD'
    | 'EDGE'
    | 'EDGE_AUTO_ASSIGN_RULE_CHAIN'
    | 'RULE_CHAIN'
    | 'RULE_NODE'
  /** Additional parameters of the relation */
  additionalInfo?: TbJsonNode
}

/** EntityRelationInfo */
export interface TbEntityRelationInfo {
  /** JSON object with [from] Entity Id. */
  from?: TbEntityId
  /** JSON object with [to] Entity Id. */
  to?: TbEntityId
  /**
   * String value of relation type.
   * @example "Contains"
   */
  type?: string
  /**
   * Represents the type group of the relation.
   * @example "COMMON"
   */
  typeGroup?:
    | 'COMMON'
    | 'DASHBOARD'
    | 'EDGE'
    | 'EDGE_AUTO_ASSIGN_RULE_CHAIN'
    | 'RULE_CHAIN'
    | 'RULE_NODE'
  /** Additional parameters of the relation */
  additionalInfo?: TbJsonNode
  /**
   * Name of the entity for [from] direction.
   * @example "A4B72CCDFF33"
   */
  fromName?: string
  /**
   * Name of the entity for [to] direction.
   * @example "A4B72CCDFF35"
   */
  toName?: string
}

/** EntityRelationsQuery */
export interface TbEntityRelationsQuery {
  /** Main filters. */
  filters?: TbRelationEntityTypeFilter[]
  /** Main search parameters. */
  parameters?: TbRelationsSearchParameters
}

/** EntitySubtype */
export interface TbEntitySubtype {
  entityType?:
    | 'ALARM'
    | 'API_USAGE_STATE'
    | 'ASSET'
    | 'ASSET_PROFILE'
    | 'CUSTOMER'
    | 'DASHBOARD'
    | 'DEVICE'
    | 'DEVICE_PROFILE'
    | 'EDGE'
    | 'ENTITY_VIEW'
    | 'NOTIFICATION'
    | 'NOTIFICATION_REQUEST'
    | 'NOTIFICATION_RULE'
    | 'NOTIFICATION_TARGET'
    | 'NOTIFICATION_TEMPLATE'
    | 'OTA_PACKAGE'
    | 'QUEUE'
    | 'RPC'
    | 'RULE_CHAIN'
    | 'RULE_NODE'
    | 'TB_RESOURCE'
    | 'TENANT'
    | 'TENANT_PROFILE'
    | 'USER'
    | 'WIDGETS_BUNDLE'
    | 'WIDGET_TYPE'
  tenantId?: TbTenantId
  type?: string
}

/** EntityTypeFilter */
export type TbEntityTypeFilter = (TbEntityFilter & {
  entityType?:
    | 'ALARM'
    | 'API_USAGE_STATE'
    | 'ASSET'
    | 'ASSET_PROFILE'
    | 'CUSTOMER'
    | 'DASHBOARD'
    | 'DEVICE'
    | 'DEVICE_PROFILE'
    | 'EDGE'
    | 'ENTITY_VIEW'
    | 'NOTIFICATION'
    | 'NOTIFICATION_REQUEST'
    | 'NOTIFICATION_RULE'
    | 'NOTIFICATION_TARGET'
    | 'NOTIFICATION_TEMPLATE'
    | 'OTA_PACKAGE'
    | 'QUEUE'
    | 'RPC'
    | 'RULE_CHAIN'
    | 'RULE_NODE'
    | 'TB_RESOURCE'
    | 'TENANT'
    | 'TENANT_PROFILE'
    | 'USER'
    | 'WIDGETS_BUNDLE'
    | 'WIDGET_TYPE'
}) & {
  entityType?:
    | 'ALARM'
    | 'API_USAGE_STATE'
    | 'ASSET'
    | 'ASSET_PROFILE'
    | 'CUSTOMER'
    | 'DASHBOARD'
    | 'DEVICE'
    | 'DEVICE_PROFILE'
    | 'EDGE'
    | 'ENTITY_VIEW'
    | 'NOTIFICATION'
    | 'NOTIFICATION_REQUEST'
    | 'NOTIFICATION_RULE'
    | 'NOTIFICATION_TARGET'
    | 'NOTIFICATION_TEMPLATE'
    | 'OTA_PACKAGE'
    | 'QUEUE'
    | 'RPC'
    | 'RULE_CHAIN'
    | 'RULE_NODE'
    | 'TB_RESOURCE'
    | 'TENANT'
    | 'TENANT_PROFILE'
    | 'USER'
    | 'WIDGETS_BUNDLE'
    | 'WIDGET_TYPE'
}

/** EntityTypeLoadResult */
export interface TbEntityTypeLoadResult {
  /** @format int32 */
  created?: number
  /** @format int32 */
  deleted?: number
  entityType?:
    | 'ALARM'
    | 'API_USAGE_STATE'
    | 'ASSET'
    | 'ASSET_PROFILE'
    | 'CUSTOMER'
    | 'DASHBOARD'
    | 'DEVICE'
    | 'DEVICE_PROFILE'
    | 'EDGE'
    | 'ENTITY_VIEW'
    | 'NOTIFICATION'
    | 'NOTIFICATION_REQUEST'
    | 'NOTIFICATION_RULE'
    | 'NOTIFICATION_TARGET'
    | 'NOTIFICATION_TEMPLATE'
    | 'OTA_PACKAGE'
    | 'QUEUE'
    | 'RPC'
    | 'RULE_CHAIN'
    | 'RULE_NODE'
    | 'TB_RESOURCE'
    | 'TENANT'
    | 'TENANT_PROFILE'
    | 'USER'
    | 'WIDGETS_BUNDLE'
    | 'WIDGET_TYPE'
  /** @format int32 */
  updated?: number
}

/** EntityTypeVersionCreateConfig */
export interface TbEntityTypeVersionCreateConfig {
  allEntities?: boolean
  entityIds?: string[]
  saveAttributes?: boolean
  saveCredentials?: boolean
  saveRelations?: boolean
  syncStrategy?: 'MERGE' | 'OVERWRITE'
}

/** EntityTypeVersionLoadConfig */
export interface TbEntityTypeVersionLoadConfig {
  findExistingEntityByName?: boolean
  loadAttributes?: boolean
  loadCredentials?: boolean
  loadRelations?: boolean
  removeOtherEntities?: boolean
}

/** EntityTypeVersionLoadRequest */
export type TbEntityTypeVersionLoadRequest = (TbVersionLoadRequest & {
  entityTypes?: Record<string, TbEntityTypeVersionLoadConfig>
  type?: 'ENTITY_TYPE' | 'SINGLE_ENTITY'
  versionId?: string
}) & {
  entityTypes?: Record<string, TbEntityTypeVersionLoadConfig>
  type?: 'ENTITY_TYPE' | 'SINGLE_ENTITY'
  versionId?: string
}

/** EntityVersion */
export interface TbEntityVersion {
  author?: string
  id?: string
  name?: string
  /** @format int64 */
  timestamp?: number
}

/** EntityView */
export interface TbEntityView {
  /** JSON object with the Entity View Id. Specify this field to update the Entity View. Referencing non-existing Entity View Id will cause error. Omit this field to create new Entity View. */
  id?: TbEntityViewId
  /**
   * Timestamp of the Entity View creation, in milliseconds
   * @format int64
   * @example 1609459200000
   */
  createdTime?: number
  /** JSON object with Tenant Id. */
  tenantId?: TbTenantId
  /** JSON object with Customer Id. Use 'assignEntityViewToCustomer' to change the Customer Id. */
  customerId?: TbCustomerId
  /**
   * Entity View name
   * @example "A4B72CCDFF33"
   */
  name: string
  /**
   * Device Profile Name
   * @example "Temperature Sensor"
   */
  type: string
  /** JSON object with the referenced Entity Id (Device or Asset). */
  entityId?: TbEntityId
  /** Set of telemetry and attribute keys to expose via Entity View. */
  keys?: TbTelemetryEntityView
  /**
   * Represents the start time of the interval that is used to limit access to target device telemetry. Customer will not be able to see entity telemetry that is outside the specified interval;
   * @format int64
   */
  startTimeMs?: number
  /**
   * Represents the end time of the interval that is used to limit access to target device telemetry. Customer will not be able to see entity telemetry that is outside the specified interval;
   * @format int64
   */
  endTimeMs?: number
  /** Additional parameters of the device */
  additionalInfo?: TbJsonNode
}

/** EntityViewId */
export interface TbEntityViewId {
  /**
   * ID of the entity, time-based UUID v1
   * @format uuid
   * @example "784f394c-42b6-435a-983c-b7beff2784f9"
   */
  id: string
  /**
   * string
   * @example "ENTITY_VIEW"
   */
  entityType: 'ENTITY_VIEW'
}

/** EntityViewInfo */
export interface TbEntityViewInfo {
  /** JSON object with the Entity View Id. Specify this field to update the Entity View. Referencing non-existing Entity View Id will cause error. Omit this field to create new Entity View. */
  id?: TbEntityViewId
  /**
   * Timestamp of the Entity View creation, in milliseconds
   * @format int64
   * @example 1609459200000
   */
  createdTime?: number
  /** JSON object with Tenant Id. */
  tenantId?: TbTenantId
  /** JSON object with Customer Id. Use 'assignEntityViewToCustomer' to change the Customer Id. */
  customerId?: TbCustomerId
  /**
   * Entity View name
   * @example "A4B72CCDFF33"
   */
  name: string
  /**
   * Device Profile Name
   * @example "Temperature Sensor"
   */
  type: string
  /** JSON object with the referenced Entity Id (Device or Asset). */
  entityId?: TbEntityId
  /** Set of telemetry and attribute keys to expose via Entity View. */
  keys?: TbTelemetryEntityView
  /**
   * Represents the start time of the interval that is used to limit access to target device telemetry. Customer will not be able to see entity telemetry that is outside the specified interval;
   * @format int64
   */
  startTimeMs?: number
  /**
   * Represents the end time of the interval that is used to limit access to target device telemetry. Customer will not be able to see entity telemetry that is outside the specified interval;
   * @format int64
   */
  endTimeMs?: number
  /** Additional parameters of the device */
  additionalInfo?: TbJsonNode
  /** Title of the Customer that owns the entity view. */
  customerTitle?: string
  /**
   * Indicates special 'Public' Customer that is auto-generated to use the entity view on public dashboards.
   * @example false
   */
  customerIsPublic?: boolean
}

/** EntityViewSearchQuery */
export interface TbEntityViewSearchQuery {
  /** Type of the relation between root entity and device (e.g. 'Contains' or 'Manages'). */
  relationType?: string
  /** Array of entity view types to filter the related entities (e.g. 'Temperature Sensor', 'Smoke Sensor'). */
  entityViewTypes?: string[]
  /** Main search parameters. */
  parameters?: TbRelationsSearchParameters
}

/** EntityViewSearchQueryFilter */
export type TbEntityViewSearchQueryFilter = (TbEntityFilter & {
  direction?: 'FROM' | 'TO'
  entityViewTypes?: string[]
  fetchLastLevelOnly?: boolean
  /** @format int32 */
  maxLevel?: number
  relationType?: string
  rootEntity?: TbEntityId
}) & {
  direction?: 'FROM' | 'TO'
  entityViewTypes?: string[]
  fetchLastLevelOnly?: boolean
  /** @format int32 */
  maxLevel?: number
  relationType?: string
  rootEntity?: TbEntityId
}

/** EntityViewTypeFilter */
export type TbEntityViewTypeFilter = (TbEntityFilter & {
  entityViewNameFilter?: string
  entityViewTypes?: string[]
}) & {
  entityViewNameFilter?: string
  entityViewTypes?: string[]
}

/** ErrorEventFilter */
export type TbErrorEventFilter = (TbEventFilter & {
  notEmpty?: boolean
  /**
   * String value representing the event type
   * @example "STATS"
   */
  eventType:
    | 'DEBUG_RULE_CHAIN'
    | 'DEBUG_RULE_NODE'
    | 'ERROR'
    | 'LC_EVENT'
    | 'STATS'
  /**
   * String value representing the server name, identifier or ip address where the platform is running
   * @example "ip-172-31-24-152"
   */
  server?: string
  /**
   * String value representing the method name when the error happened
   * @example "onClusterEventMsg"
   */
  method?: string
  /**
   * The case insensitive 'contains' filter based on error message
   * @example "not present in the DB"
   */
  errorStr?: string
}) & {
  notEmpty?: boolean
  /**
   * String value representing the event type
   * @example "STATS"
   */
  eventType?:
    | 'DEBUG_RULE_CHAIN'
    | 'DEBUG_RULE_NODE'
    | 'ERROR'
    | 'LC_EVENT'
    | 'STATS'
  /**
   * String value representing the server name, identifier or ip address where the platform is running
   * @example "ip-172-31-24-152"
   */
  server?: string
  /**
   * String value representing the method name when the error happened
   * @example "onClusterEventMsg"
   */
  method?: string
  /**
   * The case insensitive 'contains' filter based on error message
   * @example "not present in the DB"
   */
  errorStr?: string
}

/** EscalatedNotificationRuleRecipientsConfig */
export interface TbEscalatedNotificationRuleRecipientsConfig {
  escalationTable?: Record<string, string[]>
  triggerType:
    | 'ALARM'
    | 'ALARM_ASSIGNMENT'
    | 'ALARM_COMMENT'
    | 'API_USAGE_LIMIT'
    | 'DEVICE_ACTIVITY'
    | 'ENTITIES_LIMIT'
    | 'ENTITY_ACTION'
    | 'NEW_PLATFORM_VERSION'
    | 'RATE_LIMITS'
    | 'RULE_ENGINE_COMPONENT_LIFECYCLE_EVENT'
}

/** EventFilter */
export interface TbEventFilter {
  notEmpty?: boolean
  /**
   * String value representing the event type
   * @example "STATS"
   */
  eventType:
    | 'DEBUG_RULE_CHAIN'
    | 'DEBUG_RULE_NODE'
    | 'ERROR'
    | 'LC_EVENT'
    | 'STATS'
}

/** EventId */
export interface TbEventId {
  /**
   * string
   * @format uuid
   * @example "784f394c-42b6-435a-983c-b7beff2784f9"
   */
  id: string
}

/** EventInfo */
export interface TbEventInfo {
  id?: TbEventId
  /** JSON object with Tenant Id. */
  tenantId?: TbTenantId
  /**
   * Event type
   * @example "STATS"
   */
  type?: string
  /**
   * string
   * @example "784f394c-42b6-435a-983c-b7beff2784f9"
   */
  uid?: string
  /** JSON object with Entity Id for which event is created. */
  entityId?: TbEntityId
  /** Event body. */
  body?: TbJsonNode
  /**
   * Timestamp of the event creation, in milliseconds
   * @format int64
   * @example 1609459200000
   */
  createdTime?: number
}

/** FeaturesInfo */
export interface TbFeaturesInfo {
  emailEnabled?: boolean
  notificationEnabled?: boolean
  oauthEnabled?: boolean
  smsEnabled?: boolean
  twoFaEnabled?: boolean
}

/** FilterPredicateValue«boolean» */
export interface TbFilterPredicateValueBoolean {
  defaultValue?: boolean
  dynamicValue?: TbDynamicValueBoolean
  userValue?: boolean
}

/** FilterPredicateValue«double» */
export interface TbFilterPredicateValueDouble {
  /** @format double */
  defaultValue?: number
  dynamicValue?: TbDynamicValueDouble
  /** @format double */
  userValue?: number
}

/** FilterPredicateValue«int» */
export interface TbFilterPredicateValueInt {
  /** @format int32 */
  defaultValue?: number
  dynamicValue?: TbDynamicValueInt
  /** @format int32 */
  userValue?: number
}

/** FilterPredicateValue«long» */
export interface TbFilterPredicateValueLong {
  /** @format int64 */
  defaultValue?: number
  dynamicValue?: TbDynamicValueLong
  /** @format int64 */
  userValue?: number
}

/** FilterPredicateValue«string» */
export interface TbFilterPredicateValueString {
  defaultValue?: string
  dynamicValue?: TbDynamicValueString
  userValue?: string
}

/** HasId«object» */
export interface TbHasIdObject {
  id?: object
}

/** HomeDashboard */
export interface TbHomeDashboard {
  /**
   * Timestamp of the dashboard creation, in milliseconds
   * @format int64
   * @example 1609459200000
   */
  createdTime?: number
  /** JSON object with Tenant Id. Tenant Id of the dashboard can't be changed. */
  tenantId?: TbTenantId
  /** Same as title of the dashboard. Read-only field. Update the 'title' to change the 'name' of the dashboard. */
  name?: string
  /** Title of the dashboard. */
  title: string
  /**
   * List of assigned customers with their info.
   * @uniqueItems true
   */
  assignedCustomers?: TbShortCustomerInfo[]
  /**
   * Hide dashboard from mobile devices. Useful if the dashboard is not designed for small screens.
   * @example false
   */
  mobileHide?: boolean
  /**
   * Order on mobile devices. Useful to adjust sorting of the dashboards for mobile applications
   * @format int32
   */
  mobileOrder?: number
  /** Thumbnail picture for rendering of the dashboards in a grid view on mobile devices. */
  image?: string
  /** JSON object with main configuration of the dashboard: layouts, widgets, aliases, etc. The JSON structure of the dashboard configuration is quite complex. The easiest way to learn it is to export existing dashboard to JSON. */
  configuration?: TbJsonNode
  /**
   * Hide dashboard toolbar flag. Useful for rendering dashboards on mobile.
   * @example false
   */
  hideDashboardToolbar?: boolean
}

/** HomeDashboardInfo */
export interface TbHomeDashboardInfo {
  /** JSON object with the dashboard Id. */
  dashboardId?: TbDashboardId
  /**
   * Hide dashboard toolbar flag. Useful for rendering dashboards on mobile.
   * @example false
   */
  hideDashboardToolbar?: boolean
}

/** ImageExportData */
export interface TbImageExportData {
  data?: string
  fileName?: string
  mediaType?: string
  public?: boolean
  publicResourceKey?: string
  resourceKey?: string
  title?: string
}

/** InputStream */
export type TbInputStream = object

/** JWT Pair */
export interface TbJWTPair {
  scope?:
    | 'CUSTOMER_USER'
    | 'PRE_VERIFICATION_TOKEN'
    | 'REFRESH_TOKEN'
    | 'SYS_ADMIN'
    | 'TENANT_ADMIN'
  /**
   * The JWT Refresh Token. Used to get new JWT Access Token if old one has expired.
   * @example "AAB254FF67D.."
   */
  refreshToken?: string
  /**
   * The JWT Access Token. Used to perform API calls.
   * @example "AAB254FF67D.."
   */
  token?: string
}

/** JWT Settings */
export interface TbJWTSettings {
  /**
   * The JWT will expire after seconds.
   * @format int32
   * @example 9000
   */
  tokenExpirationTime?: number
  /**
   * The JWT can be refreshed during seconds.
   * @format int32
   * @example 604800
   */
  refreshTokenExpTime?: number
  /**
   * The JWT issuer.
   * @example "thingsboard.io"
   */
  tokenIssuer?: string
  /**
   * The JWT key is used to sing token. Base64 encoded.
   * @example "cTU4WnNqemI2aU5wbWVjdm1vYXRzanhjNHRUcXliMjE="
   */
  tokenSigningKey?: string
}

/** JsonNode */
export type TbJsonNode = object

/** JsonTransportPayloadConfiguration */
export type TbJsonTransportPayloadConfiguration =
  TbTransportPayloadTypeConfiguration & object

/** KeyFilter */
export interface TbKeyFilter {
  key?: TbEntityKey
  predicate?: TbKeyFilterPredicate
  valueType?: 'BOOLEAN' | 'DATE_TIME' | 'NUMERIC' | 'STRING'
}

/** KeyFilterPredicate */
export type TbKeyFilterPredicate = object

/** LastVisitedDashboardInfo */
export interface TbLastVisitedDashboardInfo {
  /**
   * JSON object with Dashboard id.
   * @format uuid
   */
  id?: string
  /** Title of the dashboard. */
  title?: string
  /**
   * Starred flag
   * @example false
   */
  starred?: boolean
  /**
   * Last visit timestamp
   * @format int64
   */
  lastVisited?: number
}

/** LifeCycleEventFilter */
export type TbLifeCycleEventFilter = (TbEventFilter & {
  notEmpty?: boolean
  /**
   * String value representing the event type
   * @example "STATS"
   */
  eventType:
    | 'DEBUG_RULE_CHAIN'
    | 'DEBUG_RULE_NODE'
    | 'ERROR'
    | 'LC_EVENT'
    | 'STATS'
  /**
   * String value representing the server name, identifier or ip address where the platform is running
   * @example "ip-172-31-24-152"
   */
  server?: string
  /**
   * String value representing the lifecycle event type
   * @example "STARTED"
   */
  event?: string
  /** String value representing status of the lifecycle event */
  status?: 'Failure' | 'Success'
  /**
   * The case insensitive 'contains' filter based on error message
   * @example "not present in the DB"
   */
  errorStr?: string
}) & {
  notEmpty?: boolean
  /**
   * String value representing the event type
   * @example "STATS"
   */
  eventType?:
    | 'DEBUG_RULE_CHAIN'
    | 'DEBUG_RULE_NODE'
    | 'ERROR'
    | 'LC_EVENT'
    | 'STATS'
  /**
   * String value representing the server name, identifier or ip address where the platform is running
   * @example "ip-172-31-24-152"
   */
  server?: string
  /**
   * String value representing the lifecycle event type
   * @example "STARTED"
   */
  event?: string
  /** String value representing status of the lifecycle event */
  status?: 'Failure' | 'Success'
  /**
   * The case insensitive 'contains' filter based on error message
   * @example "not present in the DB"
   */
  errorStr?: string
}

/** LoginRequest */
export interface TbLoginRequest {
  /**
   * User email
   * @example "tenant@thingsboard.org"
   */
  username: string
  /**
   * User password
   * @example "tenant"
   */
  password: string
}

/** LoginResponse */
export interface TbLoginResponse {
  /**
   * JWT token
   * @example "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZW5hbnRAdGhpbmdzYm9hcmQub3JnIi..."
   */
  token: string
  /**
   * Refresh token
   * @example "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZW5hbnRAdGhpbmdzYm9hcmQub3JnIi..."
   */
  refreshToken: string
}

/** LwM2MBootstrapServerCredential */
export type TbLwM2MBootstrapServerCredential = object

/** LwM2MServerSecurityConfigDefault */
export interface TbLwM2MServerSecurityConfigDefault {
  /**
   * Server short Id. Used as link to associate server Object Instance. This identifier uniquely identifies each LwM2M Server configured for the LwM2M Client. This Resource MUST be set when the Bootstrap-Server Resource has a value of 'false'. The values ID:0 and ID:65535 values MUST NOT be used for identifying the LwM2M Server.
   * @format int32
   * @example 123
   */
  shortServerId?: number
  /**
   * Is Bootstrap Server or Lwm2m Server. The LwM2M Client MAY be configured to use one or more LwM2M Server Account(s). The LwM2M Client MUST have at most one LwM2M Bootstrap-Server Account. (*) The LwM2M client MUST have at least one LwM2M server account after completing the boot sequence specified.
   * @example false
   */
  bootstrapServerIs?: boolean
  /**
   * Host for 'No Security' mode
   * @example "0.0.0.0"
   */
  host?: string
  /**
   * Port for  Lwm2m Server: 'No Security' mode: Lwm2m Server or Bootstrap Server
   * @format int32
   */
  port?: number
  /**
   * Host for 'Security' mode (DTLS)
   * @example "0.0.0.0"
   */
  securityHost?: string
  /**
   * Port for 'Security' mode (DTLS): Lwm2m Server or Bootstrap Server
   * @format int32
   */
  securityPort?: number
  /**
   * Client Hold Off Time. The number of seconds to wait before initiating a Client Initiated Bootstrap once the LwM2M Client has determined it should initiate this bootstrap mode. (This information is relevant for use with a Bootstrap-Server only.)
   * @format int32
   * @example 1
   */
  clientHoldOffTime?: number
  /**
   * Server Public Key for 'Security' mode (DTLS): RPK or X509. Format: base64 encoded
   * @example "MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEAZ0pSaGKHk/GrDaUDnQZpeEdGwX7m3Ws+U/kiVat
   * +44sgk3c8g0LotfMpLlZJPhPwJ6ipXV+O1r7IZUjBs3LNA=="
   */
  serverPublicKey?: string
  /**
   * Server Public Key for 'Security' mode (DTLS): X509. Format: base64 encoded
   * @example "MMIICODCCAd6gAwIBAgIUI88U1zowOdrxDK/dOV+36gJxI2MwCgYIKoZIzj0EAwIwejELMAkGA1UEBhMCVUs
   * xEjAQBgNVBAgTCUt5aXYgY2l0eTENMAsGA1UEBxMES3lpdjEUMBIGA1UEChMLVGhpbmdzYm9hcmQxFzAVBgNVBAsMDkRFVkVMT1BFUl9URVNUMRkwFwYDVQQDDBBpbnRlcm1lZGlhdGVfY2EwMB4XDTIyMDEwOTEzMDMwMFoXDTI3MDEwODEzMDMwMFowFDESMBAGA1UEAxM
   * JbG9jYWxob3N0MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEUO3vBo/JTv0eooY7XHiKAIVDoWKFqtrU7C6q8AIKqpLcqhCdW+haFeBOH3PjY6EwaWkY04Bir4oanU0s7tz2uKOBpzCBpDAOBgNVHQ8BAf8EBAMCBaAwEwYDVR0lBAwwCgYIKwYBBQUHAwEwDAYDVR0TAQH/
   * BAIwADAdBgNVHQ4EFgQUEjc3Q4a0TxzP/3x3EV4fHxYUg0YwHwYDVR0jBBgwFoAUuSquGycMU6Q0SYNcbtSkSD3TfH0wLwYDVR0RBCgwJoIVbG9jYWxob3N0LmxvY2FsZG9tYWlugglsb2NhbGhvc3SCAiAtMAoGCCqGSM49BAMCA0gAMEUCIQD7dbZObyUaoDiNbX+9fUNp
   * AWrD7N7XuJUwZ9FcN75R3gIgb2RNjDkHoyUyF1YajwkBk+7XmIXNClmizNJigj908mw="
   */
  serverCertificate?: string
  /**
   * Bootstrap Server Account Timeout (If the value is set to 0, or if this resource is not instantiated, the Bootstrap-Server Account lifetime is infinite.)
   * @format int32
   * @example 0
   */
  bootstrapServerAccountTimeout?: number
  /**
   * Specify the lifetime of the registration in seconds.
   * @format int32
   * @example 300
   */
  lifetime?: number
  /**
   * The default value the LwM2M Client should use for the Minimum Period of an Observation in the absence of this parameter being included in an Observation. If this Resource doesn’t exist, the default value is 0.
   * @format int32
   * @example 1
   */
  defaultMinPeriod?: number
  /**
   * If true, the LwM2M Client stores “Notify” operations to the LwM2M Server while the LwM2M Server account is disabled or the LwM2M Client is offline. After the LwM2M Server account is enabled or the LwM2M Client is online, the LwM2M Client reports the stored “Notify” operations to the Server. If false, the LwM2M Client discards all the “Notify” operations or temporarily disables the Observe function while the LwM2M Server is disabled or the LwM2M Client is offline. The default value is true.
   * @example true
   */
  notifIfDisabled?: boolean
  /**
   * This Resource defines the transport binding configured for the LwM2M Client. If the LwM2M Client supports the binding specified in this Resource, the LwM2M Client MUST use that transport for the Current Binding Mode.
   * @example "U"
   */
  binding?: string
}

/** LwM2mInstance */
export interface TbLwM2MInstance {
  /**
   * LwM2M Instance id.
   * @format int32
   * @example 0
   */
  id?: number
  /** LwM2M Resource observe. */
  resources?: TbLwM2MResourceObserve[]
}

/** LwM2mObject */
export interface TbLwM2MObject {
  /**
   * LwM2M Object id.
   * @format int32
   * @example 19
   */
  id?: number
  /**
   * LwM2M Object key id.
   * @example "19_1.0"
   */
  keyId?: string
  /**
   * LwM2M Object name.
   * @example "BinaryAppDataContainer"
   */
  name?: string
  /**
   * LwM2M Object multiple.
   * @example true
   */
  multiple?: boolean
  /**
   * LwM2M Object mandatory.
   * @example false
   */
  mandatory?: boolean
  /** LwM2M Object instances. */
  instances?: TbLwM2MInstance[]
}

/** LwM2mResourceObserve */
export interface TbLwM2MResourceObserve {
  /**
   * LwM2M Resource Observe id.
   * @format int32
   * @example 0
   */
  id?: number
  /**
   * LwM2M Resource Observe name.
   * @example "Data"
   */
  name?: string
  /**
   * LwM2M Resource Observe observe.
   * @example false
   */
  observe?: boolean
  /**
   * LwM2M Resource Observe attribute.
   * @example false
   */
  attribute?: boolean
  /**
   * LwM2M Resource Observe telemetry.
   * @example false
   */
  telemetry?: boolean
  /**
   * LwM2M Resource Observe key name.
   * @example "data"
   */
  keyName?: string
}

/** Lwm2mDeviceProfileTransportConfiguration */
export type TbLwm2MDeviceProfileTransportConfiguration =
  (TbDeviceProfileTransportConfiguration & {
    bootstrap?: TbLwM2MBootstrapServerCredential[]
    bootstrapServerUpdateEnable?: boolean
    clientLwM2mSettings?: TbOtherConfiguration
    observeAttr?: TbTelemetryMappingConfiguration
  }) & {
    bootstrap?: TbLwM2MBootstrapServerCredential[]
    bootstrapServerUpdateEnable?: boolean
    clientLwM2mSettings?: TbOtherConfiguration
    observeAttr?: TbTelemetryMappingConfiguration
  }

/** Lwm2mDeviceTransportConfiguration */
export type TbLwm2MDeviceTransportConfiguration =
  (TbDeviceTransportConfiguration & {
    /** @format int64 */
    edrxCycle?: number
    /** @format int64 */
    pagingTransmissionWindow?: number
    powerMode?: 'DRX' | 'E_DRX' | 'PSM'
    /** @format int64 */
    psmActivityTimer?: number
  }) & {
    /** @format int64 */
    edrxCycle?: number
    /** @format int64 */
    pagingTransmissionWindow?: number
    powerMode?: 'DRX' | 'E_DRX' | 'PSM'
    /** @format int64 */
    psmActivityTimer?: number
  }

/** Mapping */
export interface TbMapping {
  columns?: TbColumnMapping[]
  delimiter?: string
  header?: boolean
  update?: boolean
}

/** MicrosoftTeamsDeliveryMethodNotificationTemplate */
export interface TbMicrosoftTeamsDeliveryMethodNotificationTemplate {
  body?: string
  button?: TbButton
  enabled?: boolean
  subject?: string
  themeColor?: string
}

/** MicrosoftTeamsNotificationTargetConfig */
export type TbMicrosoftTeamsNotificationTargetConfig =
  (TbNotificationTargetConfig & {
    channelName?: string
    description?: string
    email?: string
    firstName?: string
    id?: object
    lastName?: string
    title?: string
    webhookUrl: string
  }) & {
    channelName?: string
    description?: string
    email?: string
    firstName?: string
    id?: object
    lastName?: string
    title?: string
    webhookUrl?: string
  }

/** MqttDeviceProfileTransportConfiguration */
export interface TbMqttDeviceProfileTransportConfiguration {
  deviceAttributesSubscribeTopic?: string
  deviceAttributesTopic?: string
  deviceTelemetryTopic?: string
  sendAckOnValidationException?: boolean
  sparkplug?: boolean
  /** @uniqueItems true */
  sparkplugAttributesMetricNames?: string[]
  transportPayloadTypeConfiguration?: TbTransportPayloadTypeConfiguration
}

/** MqttDeviceTransportConfiguration */
export type TbMqttDeviceTransportConfiguration =
  TbDeviceTransportConfiguration & object

/** NewPlatformVersionNotificationRuleTriggerConfig */
export interface TbNewPlatformVersionNotificationRuleTriggerConfig {
  triggerType?:
    | 'ALARM'
    | 'ALARM_ASSIGNMENT'
    | 'ALARM_COMMENT'
    | 'API_USAGE_LIMIT'
    | 'DEVICE_ACTIVITY'
    | 'ENTITIES_LIMIT'
    | 'ENTITY_ACTION'
    | 'NEW_PLATFORM_VERSION'
    | 'RATE_LIMITS'
    | 'RULE_ENGINE_COMPONENT_LIFECYCLE_EVENT'
}

/** NoSecLwM2MBootstrapServerCredential */
export interface TbNoSecLwM2MBootstrapServerCredential {
  /**
   * Server short Id. Used as link to associate server Object Instance. This identifier uniquely identifies each LwM2M Server configured for the LwM2M Client. This Resource MUST be set when the Bootstrap-Server Resource has a value of 'false'. The values ID:0 and ID:65535 values MUST NOT be used for identifying the LwM2M Server.
   * @format int32
   * @example 123
   */
  shortServerId?: number
  /**
   * Is Bootstrap Server or Lwm2m Server. The LwM2M Client MAY be configured to use one or more LwM2M Server Account(s). The LwM2M Client MUST have at most one LwM2M Bootstrap-Server Account. (*) The LwM2M client MUST have at least one LwM2M server account after completing the boot sequence specified.
   * @example false
   */
  bootstrapServerIs?: boolean
  /**
   * Host for 'No Security' mode
   * @example "0.0.0.0"
   */
  host?: string
  /**
   * Port for  Lwm2m Server: 'No Security' mode: Lwm2m Server or Bootstrap Server
   * @format int32
   */
  port?: number
  /**
   * Client Hold Off Time. The number of seconds to wait before initiating a Client Initiated Bootstrap once the LwM2M Client has determined it should initiate this bootstrap mode. (This information is relevant for use with a Bootstrap-Server only.)
   * @format int32
   * @example 1
   */
  clientHoldOffTime?: number
  /**
   * Server Public Key for 'Security' mode (DTLS): RPK or X509. Format: base64 encoded
   * @example "MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEAZ0pSaGKHk/GrDaUDnQZpeEdGwX7m3Ws+U/kiVat
   * +44sgk3c8g0LotfMpLlZJPhPwJ6ipXV+O1r7IZUjBs3LNA=="
   */
  serverPublicKey?: string
  /**
   * Server Public Key for 'Security' mode (DTLS): X509. Format: base64 encoded
   * @example "MMIICODCCAd6gAwIBAgIUI88U1zowOdrxDK/dOV+36gJxI2MwCgYIKoZIzj0EAwIwejELMAkGA1UEBhMCVUs
   * xEjAQBgNVBAgTCUt5aXYgY2l0eTENMAsGA1UEBxMES3lpdjEUMBIGA1UEChMLVGhpbmdzYm9hcmQxFzAVBgNVBAsMDkRFVkVMT1BFUl9URVNUMRkwFwYDVQQDDBBpbnRlcm1lZGlhdGVfY2EwMB4XDTIyMDEwOTEzMDMwMFoXDTI3MDEwODEzMDMwMFowFDESMBAGA1UEAxM
   * JbG9jYWxob3N0MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEUO3vBo/JTv0eooY7XHiKAIVDoWKFqtrU7C6q8AIKqpLcqhCdW+haFeBOH3PjY6EwaWkY04Bir4oanU0s7tz2uKOBpzCBpDAOBgNVHQ8BAf8EBAMCBaAwEwYDVR0lBAwwCgYIKwYBBQUHAwEwDAYDVR0TAQH/
   * BAIwADAdBgNVHQ4EFgQUEjc3Q4a0TxzP/3x3EV4fHxYUg0YwHwYDVR0jBBgwFoAUuSquGycMU6Q0SYNcbtSkSD3TfH0wLwYDVR0RBCgwJoIVbG9jYWxob3N0LmxvY2FsZG9tYWlugglsb2NhbGhvc3SCAiAtMAoGCCqGSM49BAMCA0gAMEUCIQD7dbZObyUaoDiNbX+9fUNp
   * AWrD7N7XuJUwZ9FcN75R3gIgb2RNjDkHoyUyF1YajwkBk+7XmIXNClmizNJigj908mw="
   */
  serverCertificate?: string
  /**
   * Bootstrap Server Account Timeout (If the value is set to 0, or if this resource is not instantiated, the Bootstrap-Server Account lifetime is infinite.)
   * @format int32
   * @example 0
   */
  bootstrapServerAccountTimeout?: number
  /**
   * Specify the lifetime of the registration in seconds.
   * @format int32
   * @example 300
   */
  lifetime?: number
  /**
   * The default value the LwM2M Client should use for the Minimum Period of an Observation in the absence of this parameter being included in an Observation. If this Resource doesn’t exist, the default value is 0.
   * @format int32
   * @example 1
   */
  defaultMinPeriod?: number
  /**
   * If true, the LwM2M Client stores “Notify” operations to the LwM2M Server while the LwM2M Server account is disabled or the LwM2M Client is offline. After the LwM2M Server account is enabled or the LwM2M Client is online, the LwM2M Client reports the stored “Notify” operations to the Server. If false, the LwM2M Client discards all the “Notify” operations or temporarily disables the Observe function while the LwM2M Server is disabled or the LwM2M Client is offline. The default value is true.
   * @example true
   */
  notifIfDisabled?: boolean
  /**
   * This Resource defines the transport binding configured for the LwM2M Client. If the LwM2M Client supports the binding specified in this Resource, the LwM2M Client MUST use that transport for the Current Binding Mode.
   * @example "U"
   */
  binding?: string
}

/** NodeConnectionInfo */
export interface TbNodeConnectionInfo {
  /**
   * Index of rule node in the 'nodes' array of the RuleChainMetaData. Indicates the 'from' part of the connection.
   * @format int32
   */
  fromIndex: number
  /**
   * Index of rule node in the 'nodes' array of the RuleChainMetaData. Indicates the 'to' part of the connection.
   * @format int32
   */
  toIndex: number
  /** Type of the relation. Typically indicated the result of processing by the 'from' rule node. For example, 'Success' or 'Failure' */
  type: string
}

/** Notification */
export interface TbNotification {
  additionalConfig?: TbJsonNode
  /** @format int64 */
  createdTime?: number
  id?: TbNotificationId
  info?: TbNotificationInfo
  recipientId?: TbUserId
  requestId?: TbNotificationRequestId
  status?: 'READ' | 'SENT'
  subject?: string
  text?: string
  type?:
    | 'ALARM'
    | 'ALARM_ASSIGNMENT'
    | 'ALARM_COMMENT'
    | 'API_USAGE_LIMIT'
    | 'DEVICE_ACTIVITY'
    | 'ENTITIES_LIMIT'
    | 'ENTITY_ACTION'
    | 'GENERAL'
    | 'NEW_PLATFORM_VERSION'
    | 'RATE_LIMITS'
    | 'RULE_ENGINE_COMPONENT_LIFECYCLE_EVENT'
    | 'RULE_NODE'
}

/** NotificationDeliveryMethodConfig */
export type TbNotificationDeliveryMethodConfig = object

/** NotificationId */
export interface TbNotificationId {
  /**
   * ID of the entity, time-based UUID v1
   * @format uuid
   * @example "784f394c-42b6-435a-983c-b7beff2784f9"
   */
  id: string
  /**
   * string
   * @example "NOTIFICATION"
   */
  entityType: 'NOTIFICATION'
}

/** NotificationInfo */
export interface TbNotificationInfo {
  stateEntityId?: TbEntityId
}

/** NotificationPref */
export interface TbNotificationPref {
  enabled?: boolean
  enabledDeliveryMethods: Record<string, boolean>
}

/** NotificationRequest */
export interface TbNotificationRequest {
  additionalConfig?: TbNotificationRequestConfig
  /** @format int64 */
  createdTime?: number
  id?: TbNotificationRequestId
  info?: TbNotificationInfo
  originatorEntityId?: TbEntityId
  ruleId?: TbNotificationRuleId
  stats?: TbNotificationRequestStats
  status?: 'PROCESSING' | 'SCHEDULED' | 'SENT'
  targets?: string[]
  template?: TbNotificationTemplate
  templateId?: TbNotificationTemplateId
  tenantId?: TbTenantId
}

/** NotificationRequestConfig */
export interface TbNotificationRequestConfig {
  /** @format int32 */
  sendingDelayInSec?: number
}

/** NotificationRequestId */
export interface TbNotificationRequestId {
  /**
   * ID of the entity, time-based UUID v1
   * @format uuid
   * @example "784f394c-42b6-435a-983c-b7beff2784f9"
   */
  id: string
  /**
   * string
   * @example "NOTIFICATION_REQUEST"
   */
  entityType: 'NOTIFICATION_REQUEST'
}

/** NotificationRequestInfo */
export interface TbNotificationRequestInfo {
  additionalConfig?: TbNotificationRequestConfig
  /** @format int64 */
  createdTime?: number
  deliveryMethods?: ('EMAIL' | 'MICROSOFT_TEAMS' | 'SLACK' | 'SMS' | 'WEB')[]
  id?: TbNotificationRequestId
  info?: TbNotificationInfo
  originatorEntityId?: TbEntityId
  ruleId?: TbNotificationRuleId
  stats?: TbNotificationRequestStats
  status?: 'PROCESSING' | 'SCHEDULED' | 'SENT'
  targets?: string[]
  template?: TbNotificationTemplate
  templateId?: TbNotificationTemplateId
  templateName?: string
  tenantId?: TbTenantId
}

/** NotificationRequestPreview */
export interface TbNotificationRequestPreview {
  processedTemplates?: Record<string, TbDeliveryMethodNotificationTemplate>
  recipientsCountByTarget?: Record<string, number>
  recipientsPreview?: string[]
  /** @format int32 */
  totalRecipientsCount?: number
}

/** NotificationRequestStats */
export interface TbNotificationRequestStats {
  error?: string
  errors?: Record<string, object>
  sent?: Record<string, TbAtomicInteger>
}

/** NotificationRule */
export interface TbNotificationRule {
  additionalConfig?: TbNotificationRuleConfig
  /** @format int64 */
  createdTime?: number
  enabled?: boolean
  name: string
  recipientsConfig: TbNotificationRuleRecipientsConfig
  templateId: TbNotificationTemplateId
  tenantId?: TbTenantId
  triggerConfig: TbNotificationRuleTriggerConfig
  triggerType:
    | 'ALARM'
    | 'ALARM_ASSIGNMENT'
    | 'ALARM_COMMENT'
    | 'API_USAGE_LIMIT'
    | 'DEVICE_ACTIVITY'
    | 'ENTITIES_LIMIT'
    | 'ENTITY_ACTION'
    | 'NEW_PLATFORM_VERSION'
    | 'RATE_LIMITS'
    | 'RULE_ENGINE_COMPONENT_LIFECYCLE_EVENT'
}

/** NotificationRuleConfig */
export interface TbNotificationRuleConfig {
  description?: string
}

/** NotificationRuleId */
export interface TbNotificationRuleId {
  /**
   * ID of the entity, time-based UUID v1
   * @format uuid
   * @example "784f394c-42b6-435a-983c-b7beff2784f9"
   */
  id: string
  /**
   * string
   * @example "NOTIFICATION_RULE"
   */
  entityType: 'NOTIFICATION_RULE'
}

/** NotificationRuleInfo */
export interface TbNotificationRuleInfo {
  additionalConfig?: TbNotificationRuleConfig
  /** @format int64 */
  createdTime?: number
  deliveryMethods?: ('EMAIL' | 'MICROSOFT_TEAMS' | 'SLACK' | 'SMS' | 'WEB')[]
  enabled?: boolean
  name: string
  recipientsConfig: TbNotificationRuleRecipientsConfig
  templateId: TbNotificationTemplateId
  templateName?: string
  tenantId?: TbTenantId
  triggerConfig: TbNotificationRuleTriggerConfig
  triggerType:
    | 'ALARM'
    | 'ALARM_ASSIGNMENT'
    | 'ALARM_COMMENT'
    | 'API_USAGE_LIMIT'
    | 'DEVICE_ACTIVITY'
    | 'ENTITIES_LIMIT'
    | 'ENTITY_ACTION'
    | 'NEW_PLATFORM_VERSION'
    | 'RATE_LIMITS'
    | 'RULE_ENGINE_COMPONENT_LIFECYCLE_EVENT'
}

/** NotificationRuleRecipientsConfig */
export interface TbNotificationRuleRecipientsConfig {
  triggerType:
    | 'ALARM'
    | 'ALARM_ASSIGNMENT'
    | 'ALARM_COMMENT'
    | 'API_USAGE_LIMIT'
    | 'DEVICE_ACTIVITY'
    | 'ENTITIES_LIMIT'
    | 'ENTITY_ACTION'
    | 'NEW_PLATFORM_VERSION'
    | 'RATE_LIMITS'
    | 'RULE_ENGINE_COMPONENT_LIFECYCLE_EVENT'
}

/** NotificationRuleTriggerConfig */
export interface TbNotificationRuleTriggerConfig {
  triggerType?:
    | 'ALARM'
    | 'ALARM_ASSIGNMENT'
    | 'ALARM_COMMENT'
    | 'API_USAGE_LIMIT'
    | 'DEVICE_ACTIVITY'
    | 'ENTITIES_LIMIT'
    | 'ENTITY_ACTION'
    | 'NEW_PLATFORM_VERSION'
    | 'RATE_LIMITS'
    | 'RULE_ENGINE_COMPONENT_LIFECYCLE_EVENT'
}

/** NotificationSettings */
export interface TbNotificationSettings {
  deliveryMethodsConfigs: Record<string, TbNotificationDeliveryMethodConfig>
}

/** NotificationTarget */
export interface TbNotificationTarget {
  configuration: TbNotificationTargetConfig
  /** @format int64 */
  createdTime?: number
  name: string
  tenantId?: TbTenantId
}

/** NotificationTargetConfig */
export interface TbNotificationTargetConfig {
  description?: string
}

/** NotificationTemplate */
export interface TbNotificationTemplate {
  configuration: TbNotificationTemplateConfig
  /** @format int64 */
  createdTime?: number
  name?: string
  notificationType:
    | 'ALARM'
    | 'ALARM_ASSIGNMENT'
    | 'ALARM_COMMENT'
    | 'API_USAGE_LIMIT'
    | 'DEVICE_ACTIVITY'
    | 'ENTITIES_LIMIT'
    | 'ENTITY_ACTION'
    | 'GENERAL'
    | 'NEW_PLATFORM_VERSION'
    | 'RATE_LIMITS'
    | 'RULE_ENGINE_COMPONENT_LIFECYCLE_EVENT'
    | 'RULE_NODE'
  tenantId?: TbTenantId
}

/** NotificationTemplateConfig */
export interface TbNotificationTemplateConfig {
  deliveryMethodsTemplates?: Record<
    string,
    TbDeliveryMethodNotificationTemplate
  >
}

/** NotificationTemplateId */
export interface TbNotificationTemplateId {
  /**
   * ID of the entity, time-based UUID v1
   * @format uuid
   * @example "784f394c-42b6-435a-983c-b7beff2784f9"
   */
  id: string
  /**
   * string
   * @example "NOTIFICATION_TEMPLATE"
   */
  entityType: 'NOTIFICATION_TEMPLATE'
}

/** NumericFilterPredicate */
export type TbNumericFilterPredicate = (TbKeyFilterPredicate & {
  operation?:
    | 'EQUAL'
    | 'GREATER'
    | 'GREATER_OR_EQUAL'
    | 'LESS'
    | 'LESS_OR_EQUAL'
    | 'NOT_EQUAL'
  value?: TbFilterPredicateValueDouble
}) & {
  operation?:
    | 'EQUAL'
    | 'GREATER'
    | 'GREATER_OR_EQUAL'
    | 'LESS'
    | 'LESS_OR_EQUAL'
    | 'NOT_EQUAL'
  value?: TbFilterPredicateValueDouble
}

/** OAuth2BasicMapperConfig */
export interface TbOAuth2BasicMapperConfig {
  /**
   * Whether default dashboard should be open in full screen
   * @example false
   */
  alwaysFullScreen?: boolean
  /** Customer name pattern. When creating a user on the first OAuth2 log in, if specified, customer name will be used to create or find existing customer in the platform and assign customerId to the user */
  customerNamePattern?: string
  /** Name of the tenant's dashboard to set as default dashboard for newly created user */
  defaultDashboardName?: string
  /** Email attribute key of OAuth2 principal attributes. Must be specified for BASIC mapper type and cannot be specified for GITHUB type */
  emailAttributeKey?: string
  /** First name attribute key */
  firstNameAttributeKey?: string
  /** Last name attribute key */
  lastNameAttributeKey?: string
  /**
   * Tenant name pattern for CUSTOM naming strategy. OAuth2 attributes in the pattern can be used by enclosing attribute key in '%{' and '}'
   * @example "%{email}"
   */
  tenantNamePattern?: string
  /** Tenant naming strategy. For DOMAIN type, domain for tenant name will be taken from the email (substring before '@') */
  tenantNameStrategy: 'CUSTOM' | 'DOMAIN' | 'EMAIL'
}

/** OAuth2ClientInfo */
export interface TbOAuth2ClientInfo {
  /**
   * Name of the icon, displayed on OAuth2 log in button
   * @example "github-logo"
   */
  icon?: string
  /**
   * OAuth2 client name
   * @example "GitHub"
   */
  name?: string
  /**
   * URI for OAuth2 log in. On HTTP GET request to this URI, it redirects to the OAuth2 provider page
   * @example "/oauth2/authorization/8352f191-2b4d-11ec-9ed1-cbf57c026ecc"
   */
  url?: string
}

/** OAuth2ClientRegistrationTemplate */
export interface TbOAuth2ClientRegistrationTemplate {
  /** Default access token URI of the OAuth2 provider */
  accessTokenUri?: string
  additionalInfo?: TbJsonNode
  /** Default authorization URI of the OAuth2 provider */
  authorizationUri?: string
  /** Default client authentication method to use: 'BASIC' or 'POST' */
  clientAuthenticationMethod?: string
  /** Comment for OAuth2 provider */
  comment?: string
  /** @format int64 */
  createdTime?: number
  /** Help link for OAuth2 provider */
  helpLink?: string
  id?: TbOAuth2ClientRegistrationTemplateId
  /** Default JSON Web Key URI of the OAuth2 provider */
  jwkSetUri?: string
  /** Default log in button icon for OAuth2 provider */
  loginButtonIcon?: string
  /** Default OAuth2 provider label */
  loginButtonLabel?: string
  /** Default config for mapping OAuth2 log in response to platform entities */
  mapperConfig?: TbOAuth2MapperConfig
  name?: string
  /** OAuth2 provider identifier (e.g. its name) */
  providerId: string
  /** Default OAuth scopes that will be requested from OAuth2 platform */
  scope?: string[]
  /** Default user info URI of the OAuth2 provider */
  userInfoUri?: string
  /** Default name of the username attribute in OAuth2 provider log in response */
  userNameAttributeName?: string
}

/** OAuth2ClientRegistrationTemplateId */
export interface TbOAuth2ClientRegistrationTemplateId {
  /**
   * string
   * @format uuid
   * @example "784f394c-42b6-435a-983c-b7beff2784f9"
   */
  id: string
}

/** OAuth2CustomMapperConfig */
export interface TbOAuth2CustomMapperConfig {
  password?: string
  sendToken?: boolean
  url?: string
  username?: string
}

/** OAuth2DomainInfo */
export interface TbOAuth2DomainInfo {
  /** Domain name. Cannot be empty */
  name: string
  /** Domain scheme. Mixed scheme means than both HTTP and HTTPS are going to be used */
  scheme: 'HTTP' | 'HTTPS' | 'MIXED'
}

/** OAuth2Info */
export interface TbOAuth2Info {
  /**
   * Whether OAuth2 settings are enabled or not
   * @example false
   */
  enabled?: boolean
  /** List of configured OAuth2 clients. Cannot contain null values */
  oauth2ParamsInfos: TbOAuth2ParamsInfo[]
}

/** OAuth2MapperConfig */
export interface TbOAuth2MapperConfig {
  /**
   * Whether user credentials should be activated when user is created after successful authentication
   * @example false
   */
  activateUser?: boolean
  /**
   * Whether user should be created if not yet present on the platform after successful authentication
   * @example false
   */
  allowUserCreation?: boolean
  /** Mapper config for BASIC and GITHUB mapper types */
  basic?: TbOAuth2BasicMapperConfig
  /** Mapper config for CUSTOM mapper type */
  custom?: TbOAuth2CustomMapperConfig
  /** Type of OAuth2 mapper. Depending on this param, different mapper config fields must be specified */
  type: 'APPLE' | 'BASIC' | 'CUSTOM' | 'GITHUB'
}

/** OAuth2MobileInfo */
export interface TbOAuth2MobileInfo {
  /** Application secret. The length must be at least 16 characters */
  appSecret: string
  /** Application package name. Cannot be empty */
  pkgName: string
}

/** OAuth2ParamsInfo */
export interface TbOAuth2ParamsInfo {
  /** List of OAuth2 provider settings. Cannot be empty */
  clientRegistrations: TbOAuth2RegistrationInfo[]
  /** List of configured domains where OAuth2 platform will redirect a user after successful authentication. Cannot be empty. There have to be only one domain with specific name with scheme type 'MIXED'. Configured domains with the same name must have different scheme types */
  domainInfos: TbOAuth2DomainInfo[]
  /** Mobile applications settings. Application package name must be unique within the list */
  mobileInfos: TbOAuth2MobileInfo[]
}

/** OAuth2RegistrationInfo */
export interface TbOAuth2RegistrationInfo {
  /** Access token URI of the OAuth2 provider. Cannot be empty */
  accessTokenUri: string
  /** Additional info of OAuth2 client (e.g. providerName) */
  additionalInfo: TbJsonNode
  /** Authorization URI of the OAuth2 provider. Cannot be empty */
  authorizationUri: string
  /** Client authentication method to use: 'BASIC' or 'POST'. Cannot be empty */
  clientAuthenticationMethod: string
  /** OAuth2 client ID. Cannot be empty */
  clientId: string
  /** OAuth2 client secret. Cannot be empty */
  clientSecret: string
  /** JSON Web Key URI of the OAuth2 provider */
  jwkSetUri?: string
  /** Log in button icon for OAuth2 provider */
  loginButtonIcon?: string
  /** OAuth2 provider label. Cannot be empty */
  loginButtonLabel: string
  /** Config for mapping OAuth2 log in response to platform entities */
  mapperConfig: TbOAuth2MapperConfig
  /** List of platforms for which usage of the OAuth2 client is allowed (empty for all allowed) */
  platforms?: ('ANDROID' | 'IOS' | 'WEB')[]
  /** OAuth scopes that will be requested from OAuth2 platform. Cannot be empty */
  scope: string[]
  /** User info URI of the OAuth2 provider */
  userInfoUri?: string
  /** Name of the username attribute in OAuth2 provider response. Cannot be empty */
  userNameAttributeName?: string
}

/** ObjectAttributes */
export interface TbObjectAttributes {
  /** @format int64 */
  dim?: number
  /** @format double */
  gt?: number
  /** @format double */
  lt?: number
  /** @format int64 */
  pmax?: number
  /** @format int64 */
  pmin?: number
  /** @format double */
  st?: number
  ver?: string
}

/** ObjectNode */
export type TbObjectNode = object

/** OriginatorEntityOwnerUsersFilter */
export type TbOriginatorEntityOwnerUsersFilter = object

/** OtaPackage */
export interface TbOtaPackage {
  /** JSON object with the ota package Id. Specify existing ota package Id to update the ota package. Referencing non-existing ota package id will cause error. Omit this field to create new ota package. */
  id?: TbOtaPackageId
  /**
   * Timestamp of the ota package creation, in milliseconds
   * @format int64
   * @example 1609459200000
   */
  createdTime?: number
  /** JSON object with Tenant Id. Tenant Id of the ota package can't be changed. */
  tenantId?: TbTenantId
  /** JSON object with Device Profile Id. Device Profile Id of the ota package can't be changed. */
  deviceProfileId?: TbDeviceProfileId
  /**
   * OTA Package type.
   * @example "FIRMWARE"
   */
  type?: 'FIRMWARE' | 'SOFTWARE'
  /**
   * OTA Package title.
   * @example "fw"
   */
  title?: string
  /**
   * OTA Package version.
   * @example "1.0"
   */
  version?: string
  /**
   * OTA Package tag.
   * @example "fw_1.0"
   */
  tag?: string
  /**
   * OTA Package url.
   * @example "http://thingsboard.org/fw/1"
   */
  url?: string
  /**
   * Indicates OTA Package 'has data'. Field is returned from DB ('true' if data exists or url is set).  If OTA Package 'has data' is 'false' we can not assign the OTA Package to the Device or Device Profile.
   * @example true
   */
  hasData?: boolean
  /**
   * OTA Package file name.
   * @example "fw_1.0"
   */
  fileName?: string
  /**
   * OTA Package content type.
   * @example "APPLICATION_OCTET_STREAM"
   */
  contentType?: string
  /**
   * OTA Package checksum algorithm.
   * @example "CRC32"
   */
  checksumAlgorithm?:
    | 'CRC32'
    | 'MD5'
    | 'MURMUR3_128'
    | 'MURMUR3_32'
    | 'SHA256'
    | 'SHA384'
    | 'SHA512'
  /**
   * OTA Package checksum.
   * @example "0xd87f7e0c"
   */
  checksum?: string
  /**
   * OTA Package data size.
   * @format int64
   * @example 8
   */
  dataSize?: number
  /** OTA Package data. */
  data?: TbByteBuffer
  /**
   * OTA Package description.
   * @example "Description for the OTA Package fw_1.0"
   */
  additionalInfo?: TbJsonNode
}

/** OtaPackageId */
export interface TbOtaPackageId {
  /**
   * ID of the entity, time-based UUID v1
   * @format uuid
   * @example "784f394c-42b6-435a-983c-b7beff2784f9"
   */
  id: string
  /**
   * string
   * @example "OTA_PACKAGE"
   */
  entityType: 'OTA_PACKAGE'
}

/** OtaPackageInfo */
export interface TbOtaPackageInfo {
  /** JSON object with the ota package Id. Specify existing ota package Id to update the ota package. Referencing non-existing ota package id will cause error. Omit this field to create new ota package. */
  id?: TbOtaPackageId
  /**
   * Timestamp of the ota package creation, in milliseconds
   * @format int64
   * @example 1609459200000
   */
  createdTime?: number
  /** JSON object with Tenant Id. Tenant Id of the ota package can't be changed. */
  tenantId?: TbTenantId
  /** JSON object with Device Profile Id. Device Profile Id of the ota package can't be changed. */
  deviceProfileId?: TbDeviceProfileId
  /**
   * OTA Package type.
   * @example "FIRMWARE"
   */
  type?: 'FIRMWARE' | 'SOFTWARE'
  /**
   * OTA Package title.
   * @example "fw"
   */
  title?: string
  /**
   * OTA Package version.
   * @example "1.0"
   */
  version?: string
  /**
   * OTA Package tag.
   * @example "fw_1.0"
   */
  tag?: string
  /**
   * OTA Package url.
   * @example "http://thingsboard.org/fw/1"
   */
  url?: string
  /**
   * Indicates OTA Package 'has data'. Field is returned from DB ('true' if data exists or url is set).  If OTA Package 'has data' is 'false' we can not assign the OTA Package to the Device or Device Profile.
   * @example true
   */
  hasData?: boolean
  /**
   * OTA Package file name.
   * @example "fw_1.0"
   */
  fileName?: string
  /**
   * OTA Package content type.
   * @example "APPLICATION_OCTET_STREAM"
   */
  contentType?: string
  /**
   * OTA Package checksum algorithm.
   * @example "CRC32"
   */
  checksumAlgorithm?:
    | 'CRC32'
    | 'MD5'
    | 'MURMUR3_128'
    | 'MURMUR3_32'
    | 'SHA256'
    | 'SHA384'
    | 'SHA512'
  /**
   * OTA Package checksum.
   * @example "0xd87f7e0c"
   */
  checksum?: string
  /**
   * OTA Package data size.
   * @format int64
   * @example 8
   */
  dataSize?: number
  /**
   * OTA Package description.
   * @example "Description for the OTA Package fw_1.0"
   */
  additionalInfo?: TbJsonNode
}

/** OtherConfiguration */
export interface TbOtherConfiguration {
  /** @format int32 */
  clientOnlyObserveAfterConnect?: number
  /** @format int64 */
  edrxCycle?: number
  fwUpdateResource?: string
  /** @format int32 */
  fwUpdateStrategy?: number
  /** @format int64 */
  pagingTransmissionWindow?: number
  powerMode?: 'DRX' | 'E_DRX' | 'PSM'
  /** @format int64 */
  psmActivityTimer?: number
  swUpdateResource?: string
  /** @format int32 */
  swUpdateStrategy?: number
}

/** PSKLwM2MBootstrapServerCredential */
export type TbPSKLwM2MBootstrapServerCredential =
  (TbLwM2MBootstrapServerCredential & {
    /**
     * Server short Id. Used as link to associate server Object Instance. This identifier uniquely identifies each LwM2M Server configured for the LwM2M Client. This Resource MUST be set when the Bootstrap-Server Resource has a value of 'false'. The values ID:0 and ID:65535 values MUST NOT be used for identifying the LwM2M Server.
     * @format int32
     * @example 123
     */
    shortServerId?: number
    /**
     * Is Bootstrap Server or Lwm2m Server. The LwM2M Client MAY be configured to use one or more LwM2M Server Account(s). The LwM2M Client MUST have at most one LwM2M Bootstrap-Server Account. (*) The LwM2M client MUST have at least one LwM2M server account after completing the boot sequence specified.
     * @example false
     */
    bootstrapServerIs?: boolean
    /**
     * Host for 'No Security' mode
     * @example "0.0.0.0"
     */
    host?: string
    /**
     * Port for  Lwm2m Server: 'No Security' mode: Lwm2m Server or Bootstrap Server
     * @format int32
     */
    port?: number
    /**
     * Client Hold Off Time. The number of seconds to wait before initiating a Client Initiated Bootstrap once the LwM2M Client has determined it should initiate this bootstrap mode. (This information is relevant for use with a Bootstrap-Server only.)
     * @format int32
     * @example 1
     */
    clientHoldOffTime?: number
    /**
     * Server Public Key for 'Security' mode (DTLS): RPK or X509. Format: base64 encoded
     * @example "MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEAZ0pSaGKHk/GrDaUDnQZpeEdGwX7m3Ws+U/kiVat
     * +44sgk3c8g0LotfMpLlZJPhPwJ6ipXV+O1r7IZUjBs3LNA=="
     */
    serverPublicKey?: string
    /**
     * Server Public Key for 'Security' mode (DTLS): X509. Format: base64 encoded
     * @example "MMIICODCCAd6gAwIBAgIUI88U1zowOdrxDK/dOV+36gJxI2MwCgYIKoZIzj0EAwIwejELMAkGA1UEBhMCVUs
     * xEjAQBgNVBAgTCUt5aXYgY2l0eTENMAsGA1UEBxMES3lpdjEUMBIGA1UEChMLVGhpbmdzYm9hcmQxFzAVBgNVBAsMDkRFVkVMT1BFUl9URVNUMRkwFwYDVQQDDBBpbnRlcm1lZGlhdGVfY2EwMB4XDTIyMDEwOTEzMDMwMFoXDTI3MDEwODEzMDMwMFowFDESMBAGA1UEAxM
     * JbG9jYWxob3N0MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEUO3vBo/JTv0eooY7XHiKAIVDoWKFqtrU7C6q8AIKqpLcqhCdW+haFeBOH3PjY6EwaWkY04Bir4oanU0s7tz2uKOBpzCBpDAOBgNVHQ8BAf8EBAMCBaAwEwYDVR0lBAwwCgYIKwYBBQUHAwEwDAYDVR0TAQH/
     * BAIwADAdBgNVHQ4EFgQUEjc3Q4a0TxzP/3x3EV4fHxYUg0YwHwYDVR0jBBgwFoAUuSquGycMU6Q0SYNcbtSkSD3TfH0wLwYDVR0RBCgwJoIVbG9jYWxob3N0LmxvY2FsZG9tYWlugglsb2NhbGhvc3SCAiAtMAoGCCqGSM49BAMCA0gAMEUCIQD7dbZObyUaoDiNbX+9fUNp
     * AWrD7N7XuJUwZ9FcN75R3gIgb2RNjDkHoyUyF1YajwkBk+7XmIXNClmizNJigj908mw="
     */
    serverCertificate?: string
    /**
     * Bootstrap Server Account Timeout (If the value is set to 0, or if this resource is not instantiated, the Bootstrap-Server Account lifetime is infinite.)
     * @format int32
     * @example 0
     */
    bootstrapServerAccountTimeout?: number
    /**
     * Specify the lifetime of the registration in seconds.
     * @format int32
     * @example 300
     */
    lifetime?: number
    /**
     * The default value the LwM2M Client should use for the Minimum Period of an Observation in the absence of this parameter being included in an Observation. If this Resource doesn’t exist, the default value is 0.
     * @format int32
     * @example 1
     */
    defaultMinPeriod?: number
    /**
     * If true, the LwM2M Client stores “Notify” operations to the LwM2M Server while the LwM2M Server account is disabled or the LwM2M Client is offline. After the LwM2M Server account is enabled or the LwM2M Client is online, the LwM2M Client reports the stored “Notify” operations to the Server. If false, the LwM2M Client discards all the “Notify” operations or temporarily disables the Observe function while the LwM2M Server is disabled or the LwM2M Client is offline. The default value is true.
     * @example true
     */
    notifIfDisabled?: boolean
    /**
     * This Resource defines the transport binding configured for the LwM2M Client. If the LwM2M Client supports the binding specified in this Resource, the LwM2M Client MUST use that transport for the Current Binding Mode.
     * @example "U"
     */
    binding?: string
  }) & {
    /**
     * Server short Id. Used as link to associate server Object Instance. This identifier uniquely identifies each LwM2M Server configured for the LwM2M Client. This Resource MUST be set when the Bootstrap-Server Resource has a value of 'false'. The values ID:0 and ID:65535 values MUST NOT be used for identifying the LwM2M Server.
     * @format int32
     * @example 123
     */
    shortServerId?: number
    /**
     * Is Bootstrap Server or Lwm2m Server. The LwM2M Client MAY be configured to use one or more LwM2M Server Account(s). The LwM2M Client MUST have at most one LwM2M Bootstrap-Server Account. (*) The LwM2M client MUST have at least one LwM2M server account after completing the boot sequence specified.
     * @example false
     */
    bootstrapServerIs?: boolean
    /**
     * Host for 'No Security' mode
     * @example "0.0.0.0"
     */
    host?: string
    /**
     * Port for  Lwm2m Server: 'No Security' mode: Lwm2m Server or Bootstrap Server
     * @format int32
     */
    port?: number
    /**
     * Client Hold Off Time. The number of seconds to wait before initiating a Client Initiated Bootstrap once the LwM2M Client has determined it should initiate this bootstrap mode. (This information is relevant for use with a Bootstrap-Server only.)
     * @format int32
     * @example 1
     */
    clientHoldOffTime?: number
    /**
     * Server Public Key for 'Security' mode (DTLS): RPK or X509. Format: base64 encoded
     * @example "MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEAZ0pSaGKHk/GrDaUDnQZpeEdGwX7m3Ws+U/kiVat
     * +44sgk3c8g0LotfMpLlZJPhPwJ6ipXV+O1r7IZUjBs3LNA=="
     */
    serverPublicKey?: string
    /**
     * Server Public Key for 'Security' mode (DTLS): X509. Format: base64 encoded
     * @example "MMIICODCCAd6gAwIBAgIUI88U1zowOdrxDK/dOV+36gJxI2MwCgYIKoZIzj0EAwIwejELMAkGA1UEBhMCVUs
     * xEjAQBgNVBAgTCUt5aXYgY2l0eTENMAsGA1UEBxMES3lpdjEUMBIGA1UEChMLVGhpbmdzYm9hcmQxFzAVBgNVBAsMDkRFVkVMT1BFUl9URVNUMRkwFwYDVQQDDBBpbnRlcm1lZGlhdGVfY2EwMB4XDTIyMDEwOTEzMDMwMFoXDTI3MDEwODEzMDMwMFowFDESMBAGA1UEAxM
     * JbG9jYWxob3N0MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEUO3vBo/JTv0eooY7XHiKAIVDoWKFqtrU7C6q8AIKqpLcqhCdW+haFeBOH3PjY6EwaWkY04Bir4oanU0s7tz2uKOBpzCBpDAOBgNVHQ8BAf8EBAMCBaAwEwYDVR0lBAwwCgYIKwYBBQUHAwEwDAYDVR0TAQH/
     * BAIwADAdBgNVHQ4EFgQUEjc3Q4a0TxzP/3x3EV4fHxYUg0YwHwYDVR0jBBgwFoAUuSquGycMU6Q0SYNcbtSkSD3TfH0wLwYDVR0RBCgwJoIVbG9jYWxob3N0LmxvY2FsZG9tYWlugglsb2NhbGhvc3SCAiAtMAoGCCqGSM49BAMCA0gAMEUCIQD7dbZObyUaoDiNbX+9fUNp
     * AWrD7N7XuJUwZ9FcN75R3gIgb2RNjDkHoyUyF1YajwkBk+7XmIXNClmizNJigj908mw="
     */
    serverCertificate?: string
    /**
     * Bootstrap Server Account Timeout (If the value is set to 0, or if this resource is not instantiated, the Bootstrap-Server Account lifetime is infinite.)
     * @format int32
     * @example 0
     */
    bootstrapServerAccountTimeout?: number
    /**
     * Specify the lifetime of the registration in seconds.
     * @format int32
     * @example 300
     */
    lifetime?: number
    /**
     * The default value the LwM2M Client should use for the Minimum Period of an Observation in the absence of this parameter being included in an Observation. If this Resource doesn’t exist, the default value is 0.
     * @format int32
     * @example 1
     */
    defaultMinPeriod?: number
    /**
     * If true, the LwM2M Client stores “Notify” operations to the LwM2M Server while the LwM2M Server account is disabled or the LwM2M Client is offline. After the LwM2M Server account is enabled or the LwM2M Client is online, the LwM2M Client reports the stored “Notify” operations to the Server. If false, the LwM2M Client discards all the “Notify” operations or temporarily disables the Observe function while the LwM2M Server is disabled or the LwM2M Client is offline. The default value is true.
     * @example true
     */
    notifIfDisabled?: boolean
    /**
     * This Resource defines the transport binding configured for the LwM2M Client. If the LwM2M Client supports the binding specified in this Resource, the LwM2M Client MUST use that transport for the Current Binding Mode.
     * @example "U"
     */
    binding?: string
  }

/** PageData«AlarmCommentInfo» */
export interface TbPageDataAlarmCommentInfo {
  /** Array of the entities */
  data?: TbAlarmCommentInfo[]
  /**
   * Total number of available pages. Calculated based on the 'pageSize' request parameter and total number of entities that match search criteria
   * @format int32
   */
  totalPages?: number
  /**
   * Total number of elements in all available pages
   * @format int64
   */
  totalElements?: number
  /**
   * 'false' value indicates the end of the result set
   * @example false
   */
  hasNext?: boolean
}

/** PageData«AlarmData» */
export interface TbPageDataAlarmData {
  /** Array of the entities */
  data?: TbAlarmData[]
  /**
   * Total number of available pages. Calculated based on the 'pageSize' request parameter and total number of entities that match search criteria
   * @format int32
   */
  totalPages?: number
  /**
   * Total number of elements in all available pages
   * @format int64
   */
  totalElements?: number
  /**
   * 'false' value indicates the end of the result set
   * @example false
   */
  hasNext?: boolean
}

/** PageData«AlarmInfo» */
export interface TbPageDataAlarmInfo {
  /** Array of the entities */
  data?: TbAlarmInfo[]
  /**
   * Total number of available pages. Calculated based on the 'pageSize' request parameter and total number of entities that match search criteria
   * @format int32
   */
  totalPages?: number
  /**
   * Total number of elements in all available pages
   * @format int64
   */
  totalElements?: number
  /**
   * 'false' value indicates the end of the result set
   * @example false
   */
  hasNext?: boolean
}

/** PageData«AssetInfo» */
export interface TbPageDataAssetInfo {
  /** Array of the entities */
  data?: TbAssetInfo[]
  /**
   * Total number of available pages. Calculated based on the 'pageSize' request parameter and total number of entities that match search criteria
   * @format int32
   */
  totalPages?: number
  /**
   * Total number of elements in all available pages
   * @format int64
   */
  totalElements?: number
  /**
   * 'false' value indicates the end of the result set
   * @example false
   */
  hasNext?: boolean
}

/** PageData«AssetProfileInfo» */
export interface TbPageDataAssetProfileInfo {
  /** Array of the entities */
  data?: TbAssetProfileInfo[]
  /**
   * Total number of available pages. Calculated based on the 'pageSize' request parameter and total number of entities that match search criteria
   * @format int32
   */
  totalPages?: number
  /**
   * Total number of elements in all available pages
   * @format int64
   */
  totalElements?: number
  /**
   * 'false' value indicates the end of the result set
   * @example false
   */
  hasNext?: boolean
}

/** PageData«AssetProfile» */
export interface TbPageDataAssetProfile {
  /** Array of the entities */
  data?: TbAssetProfile[]
  /**
   * Total number of available pages. Calculated based on the 'pageSize' request parameter and total number of entities that match search criteria
   * @format int32
   */
  totalPages?: number
  /**
   * Total number of elements in all available pages
   * @format int64
   */
  totalElements?: number
  /**
   * 'false' value indicates the end of the result set
   * @example false
   */
  hasNext?: boolean
}

/** PageData«Asset» */
export interface TbPageDataAsset {
  /** Array of the entities */
  data?: TbAsset[]
  /**
   * Total number of available pages. Calculated based on the 'pageSize' request parameter and total number of entities that match search criteria
   * @format int32
   */
  totalPages?: number
  /**
   * Total number of elements in all available pages
   * @format int64
   */
  totalElements?: number
  /**
   * 'false' value indicates the end of the result set
   * @example false
   */
  hasNext?: boolean
}

/** PageData«AuditLog» */
export interface TbPageDataAuditLog {
  /** Array of the entities */
  data?: TbAuditLog[]
  /**
   * Total number of available pages. Calculated based on the 'pageSize' request parameter and total number of entities that match search criteria
   * @format int32
   */
  totalPages?: number
  /**
   * Total number of elements in all available pages
   * @format int64
   */
  totalElements?: number
  /**
   * 'false' value indicates the end of the result set
   * @example false
   */
  hasNext?: boolean
}

/** PageData«Customer» */
export interface TbPageDataCustomer {
  /** Array of the entities */
  data?: TbCustomer[]
  /**
   * Total number of available pages. Calculated based on the 'pageSize' request parameter and total number of entities that match search criteria
   * @format int32
   */
  totalPages?: number
  /**
   * Total number of elements in all available pages
   * @format int64
   */
  totalElements?: number
  /**
   * 'false' value indicates the end of the result set
   * @example false
   */
  hasNext?: boolean
}

/** PageData«DashboardInfo» */
export interface TbPageDataDashboardInfo {
  /** Array of the entities */
  data?: TbDashboardInfo[]
  /**
   * Total number of available pages. Calculated based on the 'pageSize' request parameter and total number of entities that match search criteria
   * @format int32
   */
  totalPages?: number
  /**
   * Total number of elements in all available pages
   * @format int64
   */
  totalElements?: number
  /**
   * 'false' value indicates the end of the result set
   * @example false
   */
  hasNext?: boolean
}

/** PageData«DeviceInfo» */
export interface TbPageDataDeviceInfo {
  /** Array of the entities */
  data?: TbDeviceInfo[]
  /**
   * Total number of available pages. Calculated based on the 'pageSize' request parameter and total number of entities that match search criteria
   * @format int32
   */
  totalPages?: number
  /**
   * Total number of elements in all available pages
   * @format int64
   */
  totalElements?: number
  /**
   * 'false' value indicates the end of the result set
   * @example false
   */
  hasNext?: boolean
}

/** PageData«DeviceProfileInfo» */
export interface TbPageDataDeviceProfileInfo {
  /** Array of the entities */
  data?: TbDeviceProfileInfo[]
  /**
   * Total number of available pages. Calculated based on the 'pageSize' request parameter and total number of entities that match search criteria
   * @format int32
   */
  totalPages?: number
  /**
   * Total number of elements in all available pages
   * @format int64
   */
  totalElements?: number
  /**
   * 'false' value indicates the end of the result set
   * @example false
   */
  hasNext?: boolean
}

/** PageData«DeviceProfile» */
export interface TbPageDataDeviceProfile {
  /** Array of the entities */
  data?: TbDeviceProfile[]
  /**
   * Total number of available pages. Calculated based on the 'pageSize' request parameter and total number of entities that match search criteria
   * @format int32
   */
  totalPages?: number
  /**
   * Total number of elements in all available pages
   * @format int64
   */
  totalElements?: number
  /**
   * 'false' value indicates the end of the result set
   * @example false
   */
  hasNext?: boolean
}

/** PageData«Device» */
export interface TbPageDataDevice {
  /** Array of the entities */
  data?: TbDevice[]
  /**
   * Total number of available pages. Calculated based on the 'pageSize' request parameter and total number of entities that match search criteria
   * @format int32
   */
  totalPages?: number
  /**
   * Total number of elements in all available pages
   * @format int64
   */
  totalElements?: number
  /**
   * 'false' value indicates the end of the result set
   * @example false
   */
  hasNext?: boolean
}

/** PageData«EdgeEvent» */
export interface TbPageDataEdgeEvent {
  /** Array of the entities */
  data?: TbEdgeEvent[]
  /**
   * Total number of available pages. Calculated based on the 'pageSize' request parameter and total number of entities that match search criteria
   * @format int32
   */
  totalPages?: number
  /**
   * Total number of elements in all available pages
   * @format int64
   */
  totalElements?: number
  /**
   * 'false' value indicates the end of the result set
   * @example false
   */
  hasNext?: boolean
}

/** PageData«EdgeInfo» */
export interface TbPageDataEdgeInfo {
  /** Array of the entities */
  data?: TbEdgeInfo[]
  /**
   * Total number of available pages. Calculated based on the 'pageSize' request parameter and total number of entities that match search criteria
   * @format int32
   */
  totalPages?: number
  /**
   * Total number of elements in all available pages
   * @format int64
   */
  totalElements?: number
  /**
   * 'false' value indicates the end of the result set
   * @example false
   */
  hasNext?: boolean
}

/** PageData«Edge» */
export interface TbPageDataEdge {
  /** Array of the entities */
  data?: TbEdge[]
  /**
   * Total number of available pages. Calculated based on the 'pageSize' request parameter and total number of entities that match search criteria
   * @format int32
   */
  totalPages?: number
  /**
   * Total number of elements in all available pages
   * @format int64
   */
  totalElements?: number
  /**
   * 'false' value indicates the end of the result set
   * @example false
   */
  hasNext?: boolean
}

/** PageData«EntityData» */
export interface TbPageDataEntityData {
  /** Array of the entities */
  data?: TbEntityData[]
  /**
   * Total number of available pages. Calculated based on the 'pageSize' request parameter and total number of entities that match search criteria
   * @format int32
   */
  totalPages?: number
  /**
   * Total number of elements in all available pages
   * @format int64
   */
  totalElements?: number
  /**
   * 'false' value indicates the end of the result set
   * @example false
   */
  hasNext?: boolean
}

/** PageData«EntityInfo» */
export interface TbPageDataEntityInfo {
  /** Array of the entities */
  data?: TbEntityInfo[]
  /**
   * Total number of available pages. Calculated based on the 'pageSize' request parameter and total number of entities that match search criteria
   * @format int32
   */
  totalPages?: number
  /**
   * Total number of elements in all available pages
   * @format int64
   */
  totalElements?: number
  /**
   * 'false' value indicates the end of the result set
   * @example false
   */
  hasNext?: boolean
}

/** PageData«EntitySubtype» */
export interface TbPageDataEntitySubtype {
  /** Array of the entities */
  data?: TbEntitySubtype[]
  /**
   * Total number of available pages. Calculated based on the 'pageSize' request parameter and total number of entities that match search criteria
   * @format int32
   */
  totalPages?: number
  /**
   * Total number of elements in all available pages
   * @format int64
   */
  totalElements?: number
  /**
   * 'false' value indicates the end of the result set
   * @example false
   */
  hasNext?: boolean
}

/** PageData«EntityVersion» */
export interface TbPageDataEntityVersion {
  /** Array of the entities */
  data?: TbEntityVersion[]
  /**
   * Total number of available pages. Calculated based on the 'pageSize' request parameter and total number of entities that match search criteria
   * @format int32
   */
  totalPages?: number
  /**
   * Total number of elements in all available pages
   * @format int64
   */
  totalElements?: number
  /**
   * 'false' value indicates the end of the result set
   * @example false
   */
  hasNext?: boolean
}

/** PageData«EntityViewInfo» */
export interface TbPageDataEntityViewInfo {
  /** Array of the entities */
  data?: TbEntityViewInfo[]
  /**
   * Total number of available pages. Calculated based on the 'pageSize' request parameter and total number of entities that match search criteria
   * @format int32
   */
  totalPages?: number
  /**
   * Total number of elements in all available pages
   * @format int64
   */
  totalElements?: number
  /**
   * 'false' value indicates the end of the result set
   * @example false
   */
  hasNext?: boolean
}

/** PageData«EntityView» */
export interface TbPageDataEntityView {
  /** Array of the entities */
  data?: TbEntityView[]
  /**
   * Total number of available pages. Calculated based on the 'pageSize' request parameter and total number of entities that match search criteria
   * @format int32
   */
  totalPages?: number
  /**
   * Total number of elements in all available pages
   * @format int64
   */
  totalElements?: number
  /**
   * 'false' value indicates the end of the result set
   * @example false
   */
  hasNext?: boolean
}

/** PageData«EventInfo» */
export interface TbPageDataEventInfo {
  /** Array of the entities */
  data?: TbEventInfo[]
  /**
   * Total number of available pages. Calculated based on the 'pageSize' request parameter and total number of entities that match search criteria
   * @format int32
   */
  totalPages?: number
  /**
   * Total number of elements in all available pages
   * @format int64
   */
  totalElements?: number
  /**
   * 'false' value indicates the end of the result set
   * @example false
   */
  hasNext?: boolean
}

/** PageData«NotificationRequestInfo» */
export interface TbPageDataNotificationRequestInfo {
  /** Array of the entities */
  data?: TbNotificationRequestInfo[]
  /**
   * Total number of available pages. Calculated based on the 'pageSize' request parameter and total number of entities that match search criteria
   * @format int32
   */
  totalPages?: number
  /**
   * Total number of elements in all available pages
   * @format int64
   */
  totalElements?: number
  /**
   * 'false' value indicates the end of the result set
   * @example false
   */
  hasNext?: boolean
}

/** PageData«NotificationRuleInfo» */
export interface TbPageDataNotificationRuleInfo {
  /** Array of the entities */
  data?: TbNotificationRuleInfo[]
  /**
   * Total number of available pages. Calculated based on the 'pageSize' request parameter and total number of entities that match search criteria
   * @format int32
   */
  totalPages?: number
  /**
   * Total number of elements in all available pages
   * @format int64
   */
  totalElements?: number
  /**
   * 'false' value indicates the end of the result set
   * @example false
   */
  hasNext?: boolean
}

/** PageData«NotificationTarget» */
export interface TbPageDataNotificationTarget {
  /** Array of the entities */
  data?: TbNotificationTarget[]
  /**
   * Total number of available pages. Calculated based on the 'pageSize' request parameter and total number of entities that match search criteria
   * @format int32
   */
  totalPages?: number
  /**
   * Total number of elements in all available pages
   * @format int64
   */
  totalElements?: number
  /**
   * 'false' value indicates the end of the result set
   * @example false
   */
  hasNext?: boolean
}

/** PageData«NotificationTemplate» */
export interface TbPageDataNotificationTemplate {
  /** Array of the entities */
  data?: TbNotificationTemplate[]
  /**
   * Total number of available pages. Calculated based on the 'pageSize' request parameter and total number of entities that match search criteria
   * @format int32
   */
  totalPages?: number
  /**
   * Total number of elements in all available pages
   * @format int64
   */
  totalElements?: number
  /**
   * 'false' value indicates the end of the result set
   * @example false
   */
  hasNext?: boolean
}

/** PageData«Notification» */
export interface TbPageDataNotification {
  /** Array of the entities */
  data?: TbNotification[]
  /**
   * Total number of available pages. Calculated based on the 'pageSize' request parameter and total number of entities that match search criteria
   * @format int32
   */
  totalPages?: number
  /**
   * Total number of elements in all available pages
   * @format int64
   */
  totalElements?: number
  /**
   * 'false' value indicates the end of the result set
   * @example false
   */
  hasNext?: boolean
}

/** PageData«OtaPackageInfo» */
export interface TbPageDataOtaPackageInfo {
  /** Array of the entities */
  data?: TbOtaPackageInfo[]
  /**
   * Total number of available pages. Calculated based on the 'pageSize' request parameter and total number of entities that match search criteria
   * @format int32
   */
  totalPages?: number
  /**
   * Total number of elements in all available pages
   * @format int64
   */
  totalElements?: number
  /**
   * 'false' value indicates the end of the result set
   * @example false
   */
  hasNext?: boolean
}

/** PageData«Queue» */
export interface TbPageDataQueue {
  /** Array of the entities */
  data?: TbQueue[]
  /**
   * Total number of available pages. Calculated based on the 'pageSize' request parameter and total number of entities that match search criteria
   * @format int32
   */
  totalPages?: number
  /**
   * Total number of elements in all available pages
   * @format int64
   */
  totalElements?: number
  /**
   * 'false' value indicates the end of the result set
   * @example false
   */
  hasNext?: boolean
}

/** PageData«RuleChain» */
export interface TbPageDataRuleChain {
  /** Array of the entities */
  data?: TbRuleChain[]
  /**
   * Total number of available pages. Calculated based on the 'pageSize' request parameter and total number of entities that match search criteria
   * @format int32
   */
  totalPages?: number
  /**
   * Total number of elements in all available pages
   * @format int64
   */
  totalElements?: number
  /**
   * 'false' value indicates the end of the result set
   * @example false
   */
  hasNext?: boolean
}

/** PageData«TbResourceInfo» */
export interface TbPageDataTbResourceInfo {
  /** Array of the entities */
  data?: TbTbResourceInfo[]
  /**
   * Total number of available pages. Calculated based on the 'pageSize' request parameter and total number of entities that match search criteria
   * @format int32
   */
  totalPages?: number
  /**
   * Total number of elements in all available pages
   * @format int64
   */
  totalElements?: number
  /**
   * 'false' value indicates the end of the result set
   * @example false
   */
  hasNext?: boolean
}

/** PageData«TenantInfo» */
export interface TbPageDataTenantInfo {
  /** Array of the entities */
  data?: TbTenantInfo[]
  /**
   * Total number of available pages. Calculated based on the 'pageSize' request parameter and total number of entities that match search criteria
   * @format int32
   */
  totalPages?: number
  /**
   * Total number of elements in all available pages
   * @format int64
   */
  totalElements?: number
  /**
   * 'false' value indicates the end of the result set
   * @example false
   */
  hasNext?: boolean
}

/** PageData«TenantProfile» */
export interface TbPageDataTenantProfile {
  /** Array of the entities */
  data?: TbTenantProfile[]
  /**
   * Total number of available pages. Calculated based on the 'pageSize' request parameter and total number of entities that match search criteria
   * @format int32
   */
  totalPages?: number
  /**
   * Total number of elements in all available pages
   * @format int64
   */
  totalElements?: number
  /**
   * 'false' value indicates the end of the result set
   * @example false
   */
  hasNext?: boolean
}

/** PageData«Tenant» */
export interface TbPageDataTenant {
  /** Array of the entities */
  data?: TbTenant[]
  /**
   * Total number of available pages. Calculated based on the 'pageSize' request parameter and total number of entities that match search criteria
   * @format int32
   */
  totalPages?: number
  /**
   * Total number of elements in all available pages
   * @format int64
   */
  totalElements?: number
  /**
   * 'false' value indicates the end of the result set
   * @example false
   */
  hasNext?: boolean
}

/** PageData«UserEmailInfo» */
export interface TbPageDataUserEmailInfo {
  /** Array of the entities */
  data?: TbUserEmailInfo[]
  /**
   * Total number of available pages. Calculated based on the 'pageSize' request parameter and total number of entities that match search criteria
   * @format int32
   */
  totalPages?: number
  /**
   * Total number of elements in all available pages
   * @format int64
   */
  totalElements?: number
  /**
   * 'false' value indicates the end of the result set
   * @example false
   */
  hasNext?: boolean
}

/** PageData«User» */
export interface TbPageDataUser {
  /** Array of the entities */
  data?: TbUser[]
  /**
   * Total number of available pages. Calculated based on the 'pageSize' request parameter and total number of entities that match search criteria
   * @format int32
   */
  totalPages?: number
  /**
   * Total number of elements in all available pages
   * @format int64
   */
  totalElements?: number
  /**
   * 'false' value indicates the end of the result set
   * @example false
   */
  hasNext?: boolean
}

/** PageData«WidgetTypeInfo» */
export interface TbPageDataWidgetTypeInfo {
  /** Array of the entities */
  data?: TbWidgetTypeInfo[]
  /**
   * Total number of available pages. Calculated based on the 'pageSize' request parameter and total number of entities that match search criteria
   * @format int32
   */
  totalPages?: number
  /**
   * Total number of elements in all available pages
   * @format int64
   */
  totalElements?: number
  /**
   * 'false' value indicates the end of the result set
   * @example false
   */
  hasNext?: boolean
}

/** PageData«WidgetsBundle» */
export interface TbPageDataWidgetsBundle {
  /** Array of the entities */
  data?: TbWidgetsBundle[]
  /**
   * Total number of available pages. Calculated based on the 'pageSize' request parameter and total number of entities that match search criteria
   * @format int32
   */
  totalPages?: number
  /**
   * Total number of elements in all available pages
   * @format int64
   */
  totalElements?: number
  /**
   * 'false' value indicates the end of the result set
   * @example false
   */
  hasNext?: boolean
}

/** PlatformTwoFaSettings */
export interface TbPlatformTwoFaSettings {
  /** @format int32 */
  maxVerificationFailuresBeforeUserLockout?: number
  /** @format int32 */
  minVerificationCodeSendPeriod: number
  providers: TbTwoFaProviderConfig[]
  /** @format int32 */
  totalAllowedTimeForVerification: number
  /** @pattern [1-9]\d*:[1-9]\d* */
  verificationCodeCheckRateLimit?: string
}

/** PlatformUsersNotificationTargetConfig */
export type TbPlatformUsersNotificationTargetConfig =
  (TbNotificationTargetConfig & {
    description?: string
    usersFilter: TbUsersFilter
  }) & {
    description?: string
    usersFilter?: TbUsersFilter
  }

/** PowerSavingConfiguration */
export interface TbPowerSavingConfiguration {
  /** @format int64 */
  edrxCycle?: number
  /** @format int64 */
  pagingTransmissionWindow?: number
  powerMode?: 'DRX' | 'E_DRX' | 'PSM'
  /** @format int64 */
  psmActivityTimer?: number
}

/** ProcessingStrategy */
export interface TbProcessingStrategy {
  /** @format double */
  failurePercentage?: number
  /** @format int64 */
  maxPauseBetweenRetries?: number
  /** @format int64 */
  pauseBetweenRetries?: number
  /** @format int32 */
  retries?: number
  type?:
    | 'RETRY_ALL'
    | 'RETRY_FAILED'
    | 'RETRY_FAILED_AND_TIMED_OUT'
    | 'RETRY_TIMED_OUT'
    | 'SKIP_ALL_FAILURES'
    | 'SKIP_ALL_FAILURES_AND_TIMED_OUT'
}

/** ProtoTransportPayloadConfiguration */
export type TbProtoTransportPayloadConfiguration =
  (TbTransportPayloadTypeConfiguration & {
    deviceAttributesProtoSchema?: string
    deviceRpcRequestProtoSchema?: string
    deviceRpcResponseProtoSchema?: string
    deviceTelemetryProtoSchema?: string
    enableCompatibilityWithJsonPayloadFormat?: boolean
    useJsonPayloadFormatForDefaultDownlinkTopics?: boolean
  }) & {
    deviceAttributesProtoSchema?: string
    deviceRpcRequestProtoSchema?: string
    deviceRpcResponseProtoSchema?: string
    deviceTelemetryProtoSchema?: string
    enableCompatibilityWithJsonPayloadFormat?: boolean
    useJsonPayloadFormatForDefaultDownlinkTopics?: boolean
  }

/** Queue */
export interface TbQueue {
  additionalInfo?: TbJsonNode
  consumerPerPartition?: boolean
  /** @format int64 */
  createdTime?: number
  id?: TbQueueId
  name?: string
  /** @format int64 */
  packProcessingTimeout?: number
  /** @format int32 */
  partitions?: number
  /** @format int32 */
  pollInterval?: number
  processingStrategy?: TbProcessingStrategy
  submitStrategy?: TbSubmitStrategy
  tenantId?: TbTenantId
  topic?: string
}

/** QueueId */
export interface TbQueueId {
  /**
   * ID of the entity, time-based UUID v1
   * @format uuid
   * @example "784f394c-42b6-435a-983c-b7beff2784f9"
   */
  id: string
  /**
   * string
   * @example "QUEUE"
   */
  entityType: 'QUEUE'
}

/** RPKLwM2MBootstrapServerCredential */
export interface TbRPKLwM2MBootstrapServerCredential {
  /**
   * Server short Id. Used as link to associate server Object Instance. This identifier uniquely identifies each LwM2M Server configured for the LwM2M Client. This Resource MUST be set when the Bootstrap-Server Resource has a value of 'false'. The values ID:0 and ID:65535 values MUST NOT be used for identifying the LwM2M Server.
   * @format int32
   * @example 123
   */
  shortServerId?: number
  /**
   * Is Bootstrap Server or Lwm2m Server. The LwM2M Client MAY be configured to use one or more LwM2M Server Account(s). The LwM2M Client MUST have at most one LwM2M Bootstrap-Server Account. (*) The LwM2M client MUST have at least one LwM2M server account after completing the boot sequence specified.
   * @example false
   */
  bootstrapServerIs?: boolean
  /**
   * Host for 'No Security' mode
   * @example "0.0.0.0"
   */
  host?: string
  /**
   * Port for  Lwm2m Server: 'No Security' mode: Lwm2m Server or Bootstrap Server
   * @format int32
   */
  port?: number
  /**
   * Client Hold Off Time. The number of seconds to wait before initiating a Client Initiated Bootstrap once the LwM2M Client has determined it should initiate this bootstrap mode. (This information is relevant for use with a Bootstrap-Server only.)
   * @format int32
   * @example 1
   */
  clientHoldOffTime?: number
  /**
   * Server Public Key for 'Security' mode (DTLS): RPK or X509. Format: base64 encoded
   * @example "MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEAZ0pSaGKHk/GrDaUDnQZpeEdGwX7m3Ws+U/kiVat
   * +44sgk3c8g0LotfMpLlZJPhPwJ6ipXV+O1r7IZUjBs3LNA=="
   */
  serverPublicKey?: string
  /**
   * Server Public Key for 'Security' mode (DTLS): X509. Format: base64 encoded
   * @example "MMIICODCCAd6gAwIBAgIUI88U1zowOdrxDK/dOV+36gJxI2MwCgYIKoZIzj0EAwIwejELMAkGA1UEBhMCVUs
   * xEjAQBgNVBAgTCUt5aXYgY2l0eTENMAsGA1UEBxMES3lpdjEUMBIGA1UEChMLVGhpbmdzYm9hcmQxFzAVBgNVBAsMDkRFVkVMT1BFUl9URVNUMRkwFwYDVQQDDBBpbnRlcm1lZGlhdGVfY2EwMB4XDTIyMDEwOTEzMDMwMFoXDTI3MDEwODEzMDMwMFowFDESMBAGA1UEAxM
   * JbG9jYWxob3N0MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEUO3vBo/JTv0eooY7XHiKAIVDoWKFqtrU7C6q8AIKqpLcqhCdW+haFeBOH3PjY6EwaWkY04Bir4oanU0s7tz2uKOBpzCBpDAOBgNVHQ8BAf8EBAMCBaAwEwYDVR0lBAwwCgYIKwYBBQUHAwEwDAYDVR0TAQH/
   * BAIwADAdBgNVHQ4EFgQUEjc3Q4a0TxzP/3x3EV4fHxYUg0YwHwYDVR0jBBgwFoAUuSquGycMU6Q0SYNcbtSkSD3TfH0wLwYDVR0RBCgwJoIVbG9jYWxob3N0LmxvY2FsZG9tYWlugglsb2NhbGhvc3SCAiAtMAoGCCqGSM49BAMCA0gAMEUCIQD7dbZObyUaoDiNbX+9fUNp
   * AWrD7N7XuJUwZ9FcN75R3gIgb2RNjDkHoyUyF1YajwkBk+7XmIXNClmizNJigj908mw="
   */
  serverCertificate?: string
  /**
   * Bootstrap Server Account Timeout (If the value is set to 0, or if this resource is not instantiated, the Bootstrap-Server Account lifetime is infinite.)
   * @format int32
   * @example 0
   */
  bootstrapServerAccountTimeout?: number
  /**
   * Specify the lifetime of the registration in seconds.
   * @format int32
   * @example 300
   */
  lifetime?: number
  /**
   * The default value the LwM2M Client should use for the Minimum Period of an Observation in the absence of this parameter being included in an Observation. If this Resource doesn’t exist, the default value is 0.
   * @format int32
   * @example 1
   */
  defaultMinPeriod?: number
  /**
   * If true, the LwM2M Client stores “Notify” operations to the LwM2M Server while the LwM2M Server account is disabled or the LwM2M Client is offline. After the LwM2M Server account is enabled or the LwM2M Client is online, the LwM2M Client reports the stored “Notify” operations to the Server. If false, the LwM2M Client discards all the “Notify” operations or temporarily disables the Observe function while the LwM2M Server is disabled or the LwM2M Client is offline. The default value is true.
   * @example true
   */
  notifIfDisabled?: boolean
  /**
   * This Resource defines the transport binding configured for the LwM2M Client. If the LwM2M Client supports the binding specified in this Resource, the LwM2M Client MUST use that transport for the Current Binding Mode.
   * @example "U"
   */
  binding?: string
}

/** RateLimitsNotificationRuleTriggerConfig */
export interface TbRateLimitsNotificationRuleTriggerConfig {
  /** @uniqueItems true */
  apis?: (
    | 'CASSANDRA_QUERIES'
    | 'ENTITY_EXPORT'
    | 'ENTITY_IMPORT'
    | 'NOTIFICATION_REQUESTS'
    | 'NOTIFICATION_REQUESTS_PER_RULE'
    | 'PASSWORD_RESET'
    | 'REST_REQUESTS_PER_CUSTOMER'
    | 'REST_REQUESTS_PER_TENANT'
    | 'TRANSPORT_MESSAGES_PER_DEVICE'
    | 'TRANSPORT_MESSAGES_PER_TENANT'
    | 'TWO_FA_VERIFICATION_CODE_CHECK'
    | 'TWO_FA_VERIFICATION_CODE_SEND'
    | 'WS_UPDATES_PER_SESSION'
  )[]
  triggerType?:
    | 'ALARM'
    | 'ALARM_ASSIGNMENT'
    | 'ALARM_COMMENT'
    | 'API_USAGE_LIMIT'
    | 'DEVICE_ACTIVITY'
    | 'ENTITIES_LIMIT'
    | 'ENTITY_ACTION'
    | 'NEW_PLATFORM_VERSION'
    | 'RATE_LIMITS'
    | 'RULE_ENGINE_COMPONENT_LIFECYCLE_EVENT'
}

/** RelationEntityTypeFilter */
export interface TbRelationEntityTypeFilter {
  /**
   * Type of the relation between root entity and other entity (e.g. 'Contains' or 'Manages').
   * @example "Contains"
   */
  relationType?: string
  /** Array of entity types to filter the related entities (e.g. 'DEVICE', 'ASSET'). */
  entityTypes?: (
    | 'ALARM'
    | 'API_USAGE_STATE'
    | 'ASSET'
    | 'ASSET_PROFILE'
    | 'CUSTOMER'
    | 'DASHBOARD'
    | 'DEVICE'
    | 'DEVICE_PROFILE'
    | 'EDGE'
    | 'ENTITY_VIEW'
    | 'NOTIFICATION'
    | 'NOTIFICATION_REQUEST'
    | 'NOTIFICATION_RULE'
    | 'NOTIFICATION_TARGET'
    | 'NOTIFICATION_TEMPLATE'
    | 'OTA_PACKAGE'
    | 'QUEUE'
    | 'RPC'
    | 'RULE_CHAIN'
    | 'RULE_NODE'
    | 'TB_RESOURCE'
    | 'TENANT'
    | 'TENANT_PROFILE'
    | 'USER'
    | 'WIDGETS_BUNDLE'
    | 'WIDGET_TYPE'
  )[]
}

/** RelationsQueryFilter */
export type TbRelationsQueryFilter = (TbEntityFilter & {
  direction?: 'FROM' | 'TO'
  fetchLastLevelOnly?: boolean
  filters?: TbRelationEntityTypeFilter[]
  /** @format int32 */
  maxLevel?: number
  multiRoot?: boolean
  multiRootEntitiesType?:
    | 'ALARM'
    | 'API_USAGE_STATE'
    | 'ASSET'
    | 'ASSET_PROFILE'
    | 'CUSTOMER'
    | 'DASHBOARD'
    | 'DEVICE'
    | 'DEVICE_PROFILE'
    | 'EDGE'
    | 'ENTITY_VIEW'
    | 'NOTIFICATION'
    | 'NOTIFICATION_REQUEST'
    | 'NOTIFICATION_RULE'
    | 'NOTIFICATION_TARGET'
    | 'NOTIFICATION_TEMPLATE'
    | 'OTA_PACKAGE'
    | 'QUEUE'
    | 'RPC'
    | 'RULE_CHAIN'
    | 'RULE_NODE'
    | 'TB_RESOURCE'
    | 'TENANT'
    | 'TENANT_PROFILE'
    | 'USER'
    | 'WIDGETS_BUNDLE'
    | 'WIDGET_TYPE'
  /** @uniqueItems true */
  multiRootEntityIds?: string[]
  rootEntity?: TbEntityId
}) & {
  direction?: 'FROM' | 'TO'
  fetchLastLevelOnly?: boolean
  filters?: TbRelationEntityTypeFilter[]
  /** @format int32 */
  maxLevel?: number
  multiRoot?: boolean
  multiRootEntitiesType?:
    | 'ALARM'
    | 'API_USAGE_STATE'
    | 'ASSET'
    | 'ASSET_PROFILE'
    | 'CUSTOMER'
    | 'DASHBOARD'
    | 'DEVICE'
    | 'DEVICE_PROFILE'
    | 'EDGE'
    | 'ENTITY_VIEW'
    | 'NOTIFICATION'
    | 'NOTIFICATION_REQUEST'
    | 'NOTIFICATION_RULE'
    | 'NOTIFICATION_TARGET'
    | 'NOTIFICATION_TEMPLATE'
    | 'OTA_PACKAGE'
    | 'QUEUE'
    | 'RPC'
    | 'RULE_CHAIN'
    | 'RULE_NODE'
    | 'TB_RESOURCE'
    | 'TENANT'
    | 'TENANT_PROFILE'
    | 'USER'
    | 'WIDGETS_BUNDLE'
    | 'WIDGET_TYPE'
  /** @uniqueItems true */
  multiRootEntityIds?: string[]
  rootEntity?: TbEntityId
}

/** RelationsSearchParameters */
export interface TbRelationsSearchParameters {
  /**
   * Root entity id to start search from.
   * @format uuid
   * @example "784f394c-42b6-435a-983c-b7beff2784f9"
   */
  rootId?: string
  /** Type of the root entity. */
  rootType?:
    | 'ALARM'
    | 'API_USAGE_STATE'
    | 'ASSET'
    | 'ASSET_PROFILE'
    | 'CUSTOMER'
    | 'DASHBOARD'
    | 'DEVICE'
    | 'DEVICE_PROFILE'
    | 'EDGE'
    | 'ENTITY_VIEW'
    | 'NOTIFICATION'
    | 'NOTIFICATION_REQUEST'
    | 'NOTIFICATION_RULE'
    | 'NOTIFICATION_TARGET'
    | 'NOTIFICATION_TEMPLATE'
    | 'OTA_PACKAGE'
    | 'QUEUE'
    | 'RPC'
    | 'RULE_CHAIN'
    | 'RULE_NODE'
    | 'TB_RESOURCE'
    | 'TENANT'
    | 'TENANT_PROFILE'
    | 'USER'
    | 'WIDGETS_BUNDLE'
    | 'WIDGET_TYPE'
  /** Type of the root entity. */
  direction?: 'FROM' | 'TO'
  /** Type of the relation. */
  relationTypeGroup?:
    | 'COMMON'
    | 'DASHBOARD'
    | 'EDGE'
    | 'EDGE_AUTO_ASSIGN_RULE_CHAIN'
    | 'RULE_CHAIN'
    | 'RULE_NODE'
  /**
   * Maximum level of the search depth.
   * @format int32
   */
  maxLevel?: number
  /**
   * Fetch entities that match the last level of search. Useful to find Devices that are strictly 'maxLevel' relations away from the root entity.
   * @example false
   */
  fetchLastLevelOnly?: boolean
}

/** RepeatingAlarmConditionSpec */
export type TbRepeatingAlarmConditionSpec = (TbAlarmConditionSpec & {
  predicate?: TbFilterPredicateValueInt
}) & {
  predicate?: TbFilterPredicateValueInt
}

/** RepositorySettings */
export interface TbRepositorySettings {
  authMethod?: 'PRIVATE_KEY' | 'USERNAME_PASSWORD'
  defaultBranch?: string
  password?: string
  privateKey?: string
  privateKeyFileName?: string
  privateKeyPassword?: string
  readOnly?: boolean
  repositoryUri?: string
  showMergeCommits?: boolean
  username?: string
}

/** RepositorySettingsInfo */
export interface TbRepositorySettingsInfo {
  configured?: boolean
  readOnly?: boolean
}

/** ResetPasswordEmailRequest */
export interface TbResetPasswordEmailRequest {
  /**
   * The email of the user
   * @example "user@example.com"
   */
  email?: string
}

/** ResetPasswordRequest */
export interface TbResetPasswordRequest {
  /**
   * The reset token to verify
   * @example "AAB254FF67D.."
   */
  resetToken?: string
  /**
   * The new password to set
   * @example "secret"
   */
  password?: string
}

/** Resource */
export interface TbResource {
  description?: string
  /** @format binary */
  file?: File
  filename?: string
  inputStream?: TbInputStream
  open?: boolean
  readable?: boolean
  /** @format uri */
  uri?: string
  /** @format url */
  url?: string
}

/** ResponseEntity */
export interface TbResponseEntity {
  body?: object
  statusCode?:
    | 'ACCEPTED'
    | 'ALREADY_REPORTED'
    | 'BAD_GATEWAY'
    | 'BAD_REQUEST'
    | 'BANDWIDTH_LIMIT_EXCEEDED'
    | 'CHECKPOINT'
    | 'CONFLICT'
    | 'CONTINUE'
    | 'CREATED'
    | 'DESTINATION_LOCKED'
    | 'EXPECTATION_FAILED'
    | 'FAILED_DEPENDENCY'
    | 'FORBIDDEN'
    | 'FOUND'
    | 'GATEWAY_TIMEOUT'
    | 'GONE'
    | 'HTTP_VERSION_NOT_SUPPORTED'
    | 'IM_USED'
    | 'INSUFFICIENT_SPACE_ON_RESOURCE'
    | 'INSUFFICIENT_STORAGE'
    | 'INTERNAL_SERVER_ERROR'
    | 'I_AM_A_TEAPOT'
    | 'LENGTH_REQUIRED'
    | 'LOCKED'
    | 'LOOP_DETECTED'
    | 'METHOD_FAILURE'
    | 'METHOD_NOT_ALLOWED'
    | 'MOVED_PERMANENTLY'
    | 'MOVED_TEMPORARILY'
    | 'MULTIPLE_CHOICES'
    | 'MULTI_STATUS'
    | 'NETWORK_AUTHENTICATION_REQUIRED'
    | 'NON_AUTHORITATIVE_INFORMATION'
    | 'NOT_ACCEPTABLE'
    | 'NOT_EXTENDED'
    | 'NOT_FOUND'
    | 'NOT_IMPLEMENTED'
    | 'NOT_MODIFIED'
    | 'NO_CONTENT'
    | 'OK'
    | 'PARTIAL_CONTENT'
    | 'PAYLOAD_TOO_LARGE'
    | 'PAYMENT_REQUIRED'
    | 'PERMANENT_REDIRECT'
    | 'PRECONDITION_FAILED'
    | 'PRECONDITION_REQUIRED'
    | 'PROCESSING'
    | 'PROXY_AUTHENTICATION_REQUIRED'
    | 'REQUESTED_RANGE_NOT_SATISFIABLE'
    | 'REQUEST_ENTITY_TOO_LARGE'
    | 'REQUEST_HEADER_FIELDS_TOO_LARGE'
    | 'REQUEST_TIMEOUT'
    | 'REQUEST_URI_TOO_LONG'
    | 'RESET_CONTENT'
    | 'SEE_OTHER'
    | 'SERVICE_UNAVAILABLE'
    | 'SWITCHING_PROTOCOLS'
    | 'TEMPORARY_REDIRECT'
    | 'TOO_EARLY'
    | 'TOO_MANY_REQUESTS'
    | 'UNAUTHORIZED'
    | 'UNAVAILABLE_FOR_LEGAL_REASONS'
    | 'UNPROCESSABLE_ENTITY'
    | 'UNSUPPORTED_MEDIA_TYPE'
    | 'UPGRADE_REQUIRED'
    | 'URI_TOO_LONG'
    | 'USE_PROXY'
    | 'VARIANT_ALSO_NEGOTIATES'
  /** @format int32 */
  statusCodeValue?: number
}

/** Rpc */
export interface TbRpc {
  /** JSON object with the rpc Id. Referencing non-existing rpc Id will cause error. */
  id?: TbRpcId
  /**
   * Timestamp of the rpc creation, in milliseconds
   * @format int64
   * @example 1609459200000
   */
  createdTime?: number
  /** JSON object with Tenant Id. */
  tenantId?: TbTenantId
  /** JSON object with Device Id. */
  deviceId?: TbDeviceId
  /**
   * Expiration time of the request.
   * @format int64
   */
  expirationTime?: number
  /** The request body that will be used to send message to device. */
  request?: TbJsonNode
  /** The response from the device. */
  response?: TbJsonNode
  /** The current status of the RPC call. */
  status?:
    | 'DELETED'
    | 'DELIVERED'
    | 'EXPIRED'
    | 'FAILED'
    | 'QUEUED'
    | 'SENT'
    | 'SUCCESSFUL'
    | 'TIMEOUT'
  /** Additional info used in the rule engine to process the updates to the RPC state. */
  additionalInfo?: TbJsonNode
}

/** RpcId */
export interface TbRpcId {
  /**
   * ID of the entity, time-based UUID v1
   * @format uuid
   * @example "784f394c-42b6-435a-983c-b7beff2784f9"
   */
  id: string
  /**
   * string
   * @example "RPC"
   */
  entityType: 'RPC'
}

/** RuleChain */
export interface TbRuleChain {
  additionalInfo?: TbJsonNode
  /** JSON object with the Rule Chain Id. Specify this field to update the Rule Chain. Referencing non-existing Rule Chain Id will cause error. Omit this field to create new rule chain. */
  id?: TbRuleChainId
  /**
   * Timestamp of the rule chain creation, in milliseconds
   * @format int64
   * @example 1609459200000
   */
  createdTime?: number
  /** JSON object with Tenant Id. */
  tenantId: TbTenantId
  /**
   * Rule Chain name
   * @example "Humidity data processing"
   */
  name: string
  /**
   * Rule Chain type. 'EDGE' rule chains are processing messages on the edge devices only.
   * @example "A4B72CCDFF33"
   */
  type?: 'CORE' | 'EDGE'
  /** JSON object with Rule Chain Id. Pointer to the first rule node that should receive all messages pushed to this rule chain. */
  firstRuleNodeId?: TbRuleNodeId
  /**
   * Indicates root rule chain. The root rule chain process messages from all devices and entities by default. User may configure default rule chain per device profile.
   * @example false
   */
  root?: boolean
  /**
   * Reserved for future usage.
   * @example false
   */
  debugMode?: boolean
  /** Reserved for future usage. The actual list of rule nodes and their relations is stored in the database separately. */
  configuration?: TbJsonNode
}

/** RuleChainConnectionInfo */
export interface TbRuleChainConnectionInfo {
  /**
   * Index of rule node in the 'nodes' array of the RuleChainMetaData. Indicates the 'from' part of the connection.
   * @format int32
   */
  fromIndex: number
  /** JSON object with the Rule Chain Id. */
  targetRuleChainId: TbRuleChainId
  /** JSON object with the additional information about the connection. */
  additionalInfo: TbJsonNode
  /** Type of the relation. Typically indicated the result of processing by the 'from' rule node. For example, 'Success' or 'Failure' */
  type: string
}

/** RuleChainData */
export interface TbRuleChainData {
  /** List of the Rule Chain objects. */
  ruleChains: TbRuleChain[]
  /** List of the Rule Chain metadata objects. */
  metadata: TbRuleChainMetaData[]
}

/** RuleChainDebugEventFilter */
export type TbRuleChainDebugEventFilter = (TbEventFilter & {
  error?: boolean
  notEmpty?: boolean
  /**
   * String value representing the event type
   * @example "STATS"
   */
  eventType:
    | 'DEBUG_RULE_CHAIN'
    | 'DEBUG_RULE_NODE'
    | 'ERROR'
    | 'LC_EVENT'
    | 'STATS'
  /**
   * String value representing the server name, identifier or ip address where the platform is running
   * @example "ip-172-31-24-152"
   */
  server?: string
  /** String value representing the message */
  message?: string
  /**
   * The case insensitive 'contains' filter based on error message
   * @example "not present in the DB"
   */
  errorStr?: string
}) & {
  error?: boolean
  notEmpty?: boolean
  /**
   * String value representing the event type
   * @example "STATS"
   */
  eventType?:
    | 'DEBUG_RULE_CHAIN'
    | 'DEBUG_RULE_NODE'
    | 'ERROR'
    | 'LC_EVENT'
    | 'STATS'
  /**
   * String value representing the server name, identifier or ip address where the platform is running
   * @example "ip-172-31-24-152"
   */
  server?: string
  /** String value representing the message */
  message?: string
  /**
   * The case insensitive 'contains' filter based on error message
   * @example "not present in the DB"
   */
  errorStr?: string
}

/** RuleChainExportData */
export type TbRuleChainExportData = (TbEntityExportDataObject & {
  attributes?: Record<string, TbAttributeExportData[]>
  entity?: TbRuleChain
  entityType?:
    | 'ALARM'
    | 'API_USAGE_STATE'
    | 'ASSET'
    | 'ASSET_PROFILE'
    | 'CUSTOMER'
    | 'DASHBOARD'
    | 'DEVICE'
    | 'DEVICE_PROFILE'
    | 'EDGE'
    | 'ENTITY_VIEW'
    | 'NOTIFICATION'
    | 'NOTIFICATION_REQUEST'
    | 'NOTIFICATION_RULE'
    | 'NOTIFICATION_TARGET'
    | 'NOTIFICATION_TEMPLATE'
    | 'OTA_PACKAGE'
    | 'QUEUE'
    | 'RPC'
    | 'RULE_CHAIN'
    | 'RULE_NODE'
    | 'TB_RESOURCE'
    | 'TENANT'
    | 'TENANT_PROFILE'
    | 'USER'
    | 'WIDGETS_BUNDLE'
    | 'WIDGET_TYPE'
  metaData?: TbRuleChainMetaData
  relations?: TbEntityRelation[]
}) & {
  attributes?: Record<string, TbAttributeExportData[]>
  entity?: TbRuleChain
  entityType?:
    | 'ALARM'
    | 'API_USAGE_STATE'
    | 'ASSET'
    | 'ASSET_PROFILE'
    | 'CUSTOMER'
    | 'DASHBOARD'
    | 'DEVICE'
    | 'DEVICE_PROFILE'
    | 'EDGE'
    | 'ENTITY_VIEW'
    | 'NOTIFICATION'
    | 'NOTIFICATION_REQUEST'
    | 'NOTIFICATION_RULE'
    | 'NOTIFICATION_TARGET'
    | 'NOTIFICATION_TEMPLATE'
    | 'OTA_PACKAGE'
    | 'QUEUE'
    | 'RPC'
    | 'RULE_CHAIN'
    | 'RULE_NODE'
    | 'TB_RESOURCE'
    | 'TENANT'
    | 'TENANT_PROFILE'
    | 'USER'
    | 'WIDGETS_BUNDLE'
    | 'WIDGET_TYPE'
  metaData?: TbRuleChainMetaData
  relations?: TbEntityRelation[]
}

/** RuleChainId */
export interface TbRuleChainId {
  /**
   * ID of the entity, time-based UUID v1
   * @format uuid
   * @example "784f394c-42b6-435a-983c-b7beff2784f9"
   */
  id: string
  /**
   * string
   * @example "RULE_CHAIN"
   */
  entityType: 'RULE_CHAIN'
}

/** RuleChainImportResult */
export interface TbRuleChainImportResult {
  error?: string
  ruleChainId?: TbRuleChainId
  ruleChainName?: string
  updated?: boolean
}

/** RuleChainMetaData */
export interface TbRuleChainMetaData {
  /** JSON object with Rule Chain Id. */
  ruleChainId: TbRuleChainId
  /**
   * Index of the first rule node in the 'nodes' list
   * @format int32
   */
  firstNodeIndex: number
  /** List of rule node JSON objects */
  nodes: TbRuleNode[]
  /** List of JSON objects that represent connections between rule nodes */
  connections: TbNodeConnectionInfo[]
  /** List of JSON objects that represent connections between rule nodes and other rule chains. */
  ruleChainConnections: TbRuleChainConnectionInfo[]
}

/** RuleChainOutputLabelsUsage */
export interface TbRuleChainOutputLabelsUsage {
  /** Rule Chain Id */
  ruleChainId: TbRuleChainId
  /** Rule Node Id */
  ruleNodeId: TbRuleNodeId
  /** Rule Chain Name */
  ruleChainName: string
  /** Rule Node Name */
  ruleNodeName: string
  /**
   * Output labels
   * @uniqueItems true
   */
  labels: string[]
}

/** RuleEngineComponentLifecycleEventNotificationRuleTriggerConfig */
export type TbRuleEngineComponentLifecycleEventNotificationRuleTriggerConfig =
  (TbNotificationRuleTriggerConfig & {
    onlyRuleChainLifecycleFailures?: boolean
    onlyRuleNodeLifecycleFailures?: boolean
    /** @uniqueItems true */
    ruleChainEvents?: (
      | 'ACTIVATED'
      | 'CREATED'
      | 'DEACTIVATED'
      | 'DELETED'
      | 'FAILED'
      | 'STARTED'
      | 'STOPPED'
      | 'SUSPENDED'
      | 'UPDATED'
    )[]
    /** @uniqueItems true */
    ruleChains?: string[]
    /** @uniqueItems true */
    ruleNodeEvents?: (
      | 'ACTIVATED'
      | 'CREATED'
      | 'DEACTIVATED'
      | 'DELETED'
      | 'FAILED'
      | 'STARTED'
      | 'STOPPED'
      | 'SUSPENDED'
      | 'UPDATED'
    )[]
    trackRuleNodeEvents?: boolean
    triggerType?:
      | 'ALARM'
      | 'ALARM_ASSIGNMENT'
      | 'ALARM_COMMENT'
      | 'API_USAGE_LIMIT'
      | 'DEVICE_ACTIVITY'
      | 'ENTITIES_LIMIT'
      | 'ENTITY_ACTION'
      | 'NEW_PLATFORM_VERSION'
      | 'RATE_LIMITS'
      | 'RULE_ENGINE_COMPONENT_LIFECYCLE_EVENT'
  }) & {
    onlyRuleChainLifecycleFailures?: boolean
    onlyRuleNodeLifecycleFailures?: boolean
    /** @uniqueItems true */
    ruleChainEvents?: (
      | 'ACTIVATED'
      | 'CREATED'
      | 'DEACTIVATED'
      | 'DELETED'
      | 'FAILED'
      | 'STARTED'
      | 'STOPPED'
      | 'SUSPENDED'
      | 'UPDATED'
    )[]
    /** @uniqueItems true */
    ruleChains?: string[]
    /** @uniqueItems true */
    ruleNodeEvents?: (
      | 'ACTIVATED'
      | 'CREATED'
      | 'DEACTIVATED'
      | 'DELETED'
      | 'FAILED'
      | 'STARTED'
      | 'STOPPED'
      | 'SUSPENDED'
      | 'UPDATED'
    )[]
    trackRuleNodeEvents?: boolean
    triggerType?:
      | 'ALARM'
      | 'ALARM_ASSIGNMENT'
      | 'ALARM_COMMENT'
      | 'API_USAGE_LIMIT'
      | 'DEVICE_ACTIVITY'
      | 'ENTITIES_LIMIT'
      | 'ENTITY_ACTION'
      | 'NEW_PLATFORM_VERSION'
      | 'RATE_LIMITS'
      | 'RULE_ENGINE_COMPONENT_LIFECYCLE_EVENT'
  }

/** RuleNode */
export interface TbRuleNode {
  externalId?: TbRuleNodeId
  /** JSON object with the Rule Node Id. Specify this field to update the Rule Node. Referencing non-existing Rule Node Id will cause error. Omit this field to create new rule node. */
  id?: TbRuleNodeId
  /**
   * Timestamp of the rule node creation, in milliseconds
   * @format int64
   * @example 1609459200000
   */
  createdTime?: number
  /** JSON object with the Rule Chain Id.  */
  ruleChainId?: TbRuleChainId
  /**
   * Full Java Class Name of the rule node implementation.
   * @example "com.mycompany.iot.rule.engine.ProcessingNode"
   */
  type?: string
  /**
   * User defined name of the rule node. Used on UI and for logging.
   * @example "Process sensor reading"
   */
  name?: string
  /**
   * Enable/disable debug.
   * @example false
   */
  debugMode?: boolean
  /**
   * Enable/disable singleton mode.
   * @example false
   */
  singletonMode?: boolean
  /**
   * Version of rule node configuration.
   * @format int32
   * @example 0
   */
  configurationVersion?: number
  /** JSON with the rule node configuration. Structure depends on the rule node implementation. */
  configuration?: TbJsonNode
  /** Additional parameters of the rule node. Contains 'layoutX' and 'layoutY' properties for visualization. */
  additionalInfo?: TbJsonNode
}

/** RuleNodeDebugEventFilter */
export type TbRuleNodeDebugEventFilter = (TbEventFilter & {
  error?: boolean
  notEmpty?: boolean
  /**
   * String value representing the event type
   * @example "STATS"
   */
  eventType:
    | 'DEBUG_RULE_CHAIN'
    | 'DEBUG_RULE_NODE'
    | 'ERROR'
    | 'LC_EVENT'
    | 'STATS'
  /**
   * String value representing the server name, identifier or ip address where the platform is running
   * @example "ip-172-31-24-152"
   */
  server?: string
  /** String value representing msg direction type (incoming to entity or outcoming from entity) */
  msgDirectionType?: 'IN' | 'OUT'
  /**
   * String value representing the entity id in the event body (originator of the message)
   * @example "de9d54a0-2b7a-11ec-a3cc-23386423d98f"
   */
  entityId?: string
  /** String value representing the entity type */
  entityType?: 'DEVICE'
  /**
   * String value representing the message id in the rule engine
   * @example "de9d54a0-2b7a-11ec-a3cc-23386423d98f"
   */
  msgId?: string
  /**
   * String value representing the message type
   * @example "POST_TELEMETRY_REQUEST"
   */
  msgType?: string
  /**
   * String value representing the type of message routing
   * @example "Success"
   */
  relationType?: string
  /**
   * The case insensitive 'contains' filter based on data (key and value) for the message.
   * @example "humidity"
   */
  dataSearch?: string
  /**
   * The case insensitive 'contains' filter based on metadata (key and value) for the message.
   * @example "deviceName"
   */
  metadataSearch?: string
  /**
   * The case insensitive 'contains' filter based on error message
   * @example "not present in the DB"
   */
  errorStr?: string
}) & {
  error?: boolean
  notEmpty?: boolean
  /**
   * String value representing the event type
   * @example "STATS"
   */
  eventType?:
    | 'DEBUG_RULE_CHAIN'
    | 'DEBUG_RULE_NODE'
    | 'ERROR'
    | 'LC_EVENT'
    | 'STATS'
  /**
   * String value representing the server name, identifier or ip address where the platform is running
   * @example "ip-172-31-24-152"
   */
  server?: string
  /** String value representing msg direction type (incoming to entity or outcoming from entity) */
  msgDirectionType?: 'IN' | 'OUT'
  /**
   * String value representing the entity id in the event body (originator of the message)
   * @example "de9d54a0-2b7a-11ec-a3cc-23386423d98f"
   */
  entityId?: string
  /** String value representing the entity type */
  entityType?: 'DEVICE'
  /**
   * String value representing the message id in the rule engine
   * @example "de9d54a0-2b7a-11ec-a3cc-23386423d98f"
   */
  msgId?: string
  /**
   * String value representing the message type
   * @example "POST_TELEMETRY_REQUEST"
   */
  msgType?: string
  /**
   * String value representing the type of message routing
   * @example "Success"
   */
  relationType?: string
  /**
   * The case insensitive 'contains' filter based on data (key and value) for the message.
   * @example "humidity"
   */
  dataSearch?: string
  /**
   * The case insensitive 'contains' filter based on metadata (key and value) for the message.
   * @example "deviceName"
   */
  metadataSearch?: string
  /**
   * The case insensitive 'contains' filter based on error message
   * @example "not present in the DB"
   */
  errorStr?: string
}

/** RuleNodeId */
export interface TbRuleNodeId {
  /**
   * ID of the entity, time-based UUID v1
   * @format uuid
   * @example "784f394c-42b6-435a-983c-b7beff2784f9"
   */
  id: string
  /**
   * string
   * @example "RULE_NODE"
   */
  entityType: 'RULE_NODE'
}

/** SaveDeviceWithCredentialsRequest */
export interface TbSaveDeviceWithCredentialsRequest {
  /** The JSON with device entity. */
  device: TbDevice
  /** The JSON with credentials entity. */
  credentials: TbDeviceCredentials
}

/** SaveOtaPackageInfoRequest */
export interface TbSaveOtaPackageInfoRequest {
  /** JSON object with the ota package Id. Specify existing ota package Id to update the ota package. Referencing non-existing ota package id will cause error. Omit this field to create new ota package. */
  id?: TbOtaPackageId
  /**
   * Timestamp of the ota package creation, in milliseconds
   * @format int64
   * @example 1609459200000
   */
  createdTime?: number
  /** JSON object with Tenant Id. Tenant Id of the ota package can't be changed. */
  tenantId?: TbTenantId
  /** JSON object with Device Profile Id. Device Profile Id of the ota package can't be changed. */
  deviceProfileId?: TbDeviceProfileId
  /**
   * OTA Package type.
   * @example "FIRMWARE"
   */
  type?: 'FIRMWARE' | 'SOFTWARE'
  /**
   * OTA Package title.
   * @example "fw"
   */
  title?: string
  /**
   * OTA Package version.
   * @example "1.0"
   */
  version?: string
  /**
   * OTA Package tag.
   * @example "fw_1.0"
   */
  tag?: string
  /**
   * OTA Package url.
   * @example "http://thingsboard.org/fw/1"
   */
  url?: string
  /**
   * Indicates OTA Package 'has data'. Field is returned from DB ('true' if data exists or url is set).  If OTA Package 'has data' is 'false' we can not assign the OTA Package to the Device or Device Profile.
   * @example true
   */
  hasData?: boolean
  /**
   * OTA Package file name.
   * @example "fw_1.0"
   */
  fileName?: string
  /**
   * OTA Package content type.
   * @example "APPLICATION_OCTET_STREAM"
   */
  contentType?: string
  /**
   * OTA Package checksum algorithm.
   * @example "CRC32"
   */
  checksumAlgorithm?:
    | 'CRC32'
    | 'MD5'
    | 'MURMUR3_128'
    | 'MURMUR3_32'
    | 'SHA256'
    | 'SHA384'
    | 'SHA512'
  /**
   * OTA Package checksum.
   * @example "0xd87f7e0c"
   */
  checksum?: string
  /**
   * OTA Package data size.
   * @format int64
   * @example 8
   */
  dataSize?: number
  /**
   * Indicates OTA Package uses url. Should be 'true' if uses url or 'false' if will be used data.
   * @example true
   */
  usesUrl?: boolean
  /**
   * OTA Package description.
   * @example "Description for the OTA Package fw_1.0"
   */
  additionalInfo?: TbJsonNode
}

/** SecuritySettings */
export interface TbSecuritySettings {
  /** The user password policy object. */
  passwordPolicy?: TbUserPasswordPolicy
  /**
   * Maximum number of failed login attempts allowed before user account is locked.
   * @format int32
   */
  maxFailedLoginAttempts?: number
  /** Email to use for notifications about locked users. */
  userLockoutNotificationEmail?: string
}

/** SharedAttributesSettingSnmpCommunicationConfig */
export type TbSharedAttributesSettingSnmpCommunicationConfig =
  (TbSnmpCommunicationConfig & {
    mappings?: TbSnmpMapping[]
    spec?:
      | 'CLIENT_ATTRIBUTES_QUERYING'
      | 'SHARED_ATTRIBUTES_SETTING'
      | 'TELEMETRY_QUERYING'
      | 'TO_DEVICE_RPC_REQUEST'
      | 'TO_SERVER_RPC_REQUEST'
  }) & {
    mappings?: TbSnmpMapping[]
    spec?:
      | 'CLIENT_ATTRIBUTES_QUERYING'
      | 'SHARED_ATTRIBUTES_SETTING'
      | 'TELEMETRY_QUERYING'
      | 'TO_DEVICE_RPC_REQUEST'
      | 'TO_SERVER_RPC_REQUEST'
  }

/** ShortCustomerInfo */
export interface TbShortCustomerInfo {
  public?: boolean
  /** JSON object with the customer Id. */
  customerId?: TbCustomerId
  /** Title of the customer. */
  title?: string
}

/** SimpleAlarmConditionSpec */
export type TbSimpleAlarmConditionSpec = TbAlarmConditionSpec & object

/** SingleEntityFilter */
export type TbSingleEntityFilter = (TbEntityFilter & {
  singleEntity?: TbEntityId
}) & {
  singleEntity?: TbEntityId
}

/** SingleEntityVersionCreateRequest */
export type TbSingleEntityVersionCreateRequest = (TbVersionCreateRequest & {
  branch?: string
  config?: TbVersionCreateConfig
  entityId?: TbEntityId
  type?: 'COMPLEX' | 'SINGLE_ENTITY'
  versionName?: string
}) & {
  branch?: string
  config?: TbVersionCreateConfig
  entityId?: TbEntityId
  type?: 'COMPLEX' | 'SINGLE_ENTITY'
  versionName?: string
}

/** SingleEntityVersionLoadRequest */
export type TbSingleEntityVersionLoadRequest = (TbVersionLoadRequest & {
  config?: TbVersionLoadConfig
  externalEntityId?: TbEntityId
  type?: 'ENTITY_TYPE' | 'SINGLE_ENTITY'
  versionId?: string
}) & {
  config?: TbVersionLoadConfig
  externalEntityId?: TbEntityId
  type?: 'ENTITY_TYPE' | 'SINGLE_ENTITY'
  versionId?: string
}

/** SlackConversation */
export interface TbSlackConversation {
  email?: string
  id?: string
  name?: string
  title?: string
  type: 'DIRECT' | 'PRIVATE_CHANNEL' | 'PUBLIC_CHANNEL'
  wholeName?: string
}

/** SlackDeliveryMethodNotificationTemplate */
export interface TbSlackDeliveryMethodNotificationTemplate {
  body?: string
  enabled?: boolean
}

/** SlackNotificationDeliveryMethodConfig */
export interface TbSlackNotificationDeliveryMethodConfig {
  botToken?: string
}

/** SlackNotificationTargetConfig */
export type TbSlackNotificationTargetConfig = (TbNotificationTargetConfig & {
  conversation: TbSlackConversation
  conversationType?: 'DIRECT' | 'PRIVATE_CHANNEL' | 'PUBLIC_CHANNEL'
  description?: string
}) & {
  conversation?: TbSlackConversation
  conversationType?: 'DIRECT' | 'PRIVATE_CHANNEL' | 'PUBLIC_CHANNEL'
  description?: string
}

/** SmppSmsProviderConfiguration */
export type TbSmppSmsProviderConfiguration = (TbSmsProviderConfiguration & {
  /** Address range */
  addressRange?: string
  /** TX - Transmitter, RX - Receiver, TRX - Transciever. By default TX is used */
  bindType?: 'RX' | 'TRX' | 'TX'
  /**
   * 0 - SMSC Default Alphabet (ASCII for short and long code and to GSM for toll-free, used as default)
   * 1 - IA5 (ASCII for short and long code, Latin 9 for toll-free (ISO-8859-9))
   * 2 - Octet Unspecified (8-bit binary)
   * 3 - Latin 1 (ISO-8859-1)
   * 4 - Octet Unspecified (8-bit binary)
   * 5 - JIS (X 0208-1990)
   * 6 - Cyrillic (ISO-8859-5)
   * 7 - Latin/Hebrew (ISO-8859-8)
   * 8 - UCS2/UTF-16 (ISO/IEC-10646)
   * 9 - Pictogram Encoding
   * 10 - Music Codes (ISO-2022-JP)
   * 13 - Extended Kanji JIS (X 0212-1990)
   * 14 - Korean Graphic Character Set (KS C 5601/KS X 1001)
   * @format byte
   */
  codingScheme?: string
  /**
   * Destination NPI (Numbering Plan Identification). 0 by default.
   * 0 - Unknown
   * 1 - ISDN/telephone numbering plan (E163/E164)
   * 3 - Data numbering plan (X.121)
   * 4 - Telex numbering plan (F.69)
   * 6 - Land Mobile (E.212) =6
   * 8 - National numbering plan
   * 9 - Private numbering plan
   * 10 - ERMES numbering plan (ETSI DE/PS 3 01-3)
   * 13 - Internet (IP)
   * 18 - WAP Client Id (to be defined by WAP Forum)
   * @format byte
   */
  destinationNpi?: string
  /**
   * Destination TON (Type of Number). 5 by default.
   * 0 - Unknown
   * 1 - International
   * 2 - National
   * 3 - Network Specific
   * 4 - Subscriber Number
   * 5 - Alphanumeric
   * 6 - Abbreviated
   * @format byte
   */
  destinationTon?: string
  /** SMPP host */
  host: string
  /** Password */
  password: string
  /**
   * SMPP port
   * @format int32
   */
  port: number
  /** SMPP version */
  protocolVersion: '3.3' | '3.4'
  /** Service type */
  serviceType?: string
  /** Source address */
  sourceAddress?: string
  /**
   * Source NPI (Numbering Plan Identification). Needed is source address is set. 0 by default.
   * 0 - Unknown
   * 1 - ISDN/telephone numbering plan (E163/E164)
   * 3 - Data numbering plan (X.121)
   * 4 - Telex numbering plan (F.69)
   * 6 - Land Mobile (E.212) =6
   * 8 - National numbering plan
   * 9 - Private numbering plan
   * 10 - ERMES numbering plan (ETSI DE/PS 3 01-3)
   * 13 - Internet (IP)
   * 18 - WAP Client Id (to be defined by WAP Forum)
   * @format byte
   */
  sourceNpi?: string
  /**
   * Source TON (Type of Number). Needed is source address is set. 5 by default.
   * 0 - Unknown
   * 1 - International
   * 2 - National
   * 3 - Network Specific
   * 4 - Subscriber Number
   * 5 - Alphanumeric
   * 6 - Abbreviated
   * @format byte
   */
  sourceTon?: string
  /** System ID */
  systemId: string
  /** System type */
  systemType?: string
}) & {
  /** Address range */
  addressRange?: string
  /** TX - Transmitter, RX - Receiver, TRX - Transciever. By default TX is used */
  bindType?: 'RX' | 'TRX' | 'TX'
  /**
   * 0 - SMSC Default Alphabet (ASCII for short and long code and to GSM for toll-free, used as default)
   * 1 - IA5 (ASCII for short and long code, Latin 9 for toll-free (ISO-8859-9))
   * 2 - Octet Unspecified (8-bit binary)
   * 3 - Latin 1 (ISO-8859-1)
   * 4 - Octet Unspecified (8-bit binary)
   * 5 - JIS (X 0208-1990)
   * 6 - Cyrillic (ISO-8859-5)
   * 7 - Latin/Hebrew (ISO-8859-8)
   * 8 - UCS2/UTF-16 (ISO/IEC-10646)
   * 9 - Pictogram Encoding
   * 10 - Music Codes (ISO-2022-JP)
   * 13 - Extended Kanji JIS (X 0212-1990)
   * 14 - Korean Graphic Character Set (KS C 5601/KS X 1001)
   * @format byte
   */
  codingScheme?: string
  /**
   * Destination NPI (Numbering Plan Identification). 0 by default.
   * 0 - Unknown
   * 1 - ISDN/telephone numbering plan (E163/E164)
   * 3 - Data numbering plan (X.121)
   * 4 - Telex numbering plan (F.69)
   * 6 - Land Mobile (E.212) =6
   * 8 - National numbering plan
   * 9 - Private numbering plan
   * 10 - ERMES numbering plan (ETSI DE/PS 3 01-3)
   * 13 - Internet (IP)
   * 18 - WAP Client Id (to be defined by WAP Forum)
   * @format byte
   */
  destinationNpi?: string
  /**
   * Destination TON (Type of Number). 5 by default.
   * 0 - Unknown
   * 1 - International
   * 2 - National
   * 3 - Network Specific
   * 4 - Subscriber Number
   * 5 - Alphanumeric
   * 6 - Abbreviated
   * @format byte
   */
  destinationTon?: string
  /** SMPP host */
  host?: string
  /** Password */
  password?: string
  /**
   * SMPP port
   * @format int32
   */
  port?: number
  /** SMPP version */
  protocolVersion?: '3.3' | '3.4'
  /** Service type */
  serviceType?: string
  /** Source address */
  sourceAddress?: string
  /**
   * Source NPI (Numbering Plan Identification). Needed is source address is set. 0 by default.
   * 0 - Unknown
   * 1 - ISDN/telephone numbering plan (E163/E164)
   * 3 - Data numbering plan (X.121)
   * 4 - Telex numbering plan (F.69)
   * 6 - Land Mobile (E.212) =6
   * 8 - National numbering plan
   * 9 - Private numbering plan
   * 10 - ERMES numbering plan (ETSI DE/PS 3 01-3)
   * 13 - Internet (IP)
   * 18 - WAP Client Id (to be defined by WAP Forum)
   * @format byte
   */
  sourceNpi?: string
  /**
   * Source TON (Type of Number). Needed is source address is set. 5 by default.
   * 0 - Unknown
   * 1 - International
   * 2 - National
   * 3 - Network Specific
   * 4 - Subscriber Number
   * 5 - Alphanumeric
   * 6 - Abbreviated
   * @format byte
   */
  sourceTon?: string
  /** System ID */
  systemId?: string
  /** System type */
  systemType?: string
}

/** SmsDeliveryMethodNotificationTemplate */
export interface TbSmsDeliveryMethodNotificationTemplate {
  body?: string
  enabled?: boolean
}

/** SmsProviderConfiguration */
export type TbSmsProviderConfiguration = object

/** SmsTwoFaAccountConfig */
export type TbSmsTwoFaAccountConfig = (TbTwoFaAccountConfig & {
  /** @pattern ^\+[1-9]\d{1,14}$ */
  phoneNumber: string
  useByDefault?: boolean
}) & {
  /** @pattern ^\+[1-9]\d{1,14}$ */
  phoneNumber?: string
  useByDefault?: boolean
}

/** SmsTwoFaProviderConfig */
export interface TbSmsTwoFaProviderConfig {
  /** @pattern .*\$\{code}.* */
  smsVerificationMessageTemplate: string
  /** @format int32 */
  verificationCodeLifetime?: number
}

/** SnmpCommunicationConfig */
export interface TbSnmpCommunicationConfig {
  spec?:
    | 'CLIENT_ATTRIBUTES_QUERYING'
    | 'SHARED_ATTRIBUTES_SETTING'
    | 'TELEMETRY_QUERYING'
    | 'TO_DEVICE_RPC_REQUEST'
    | 'TO_SERVER_RPC_REQUEST'
}

/** SnmpDeviceProfileTransportConfiguration */
export type TbSnmpDeviceProfileTransportConfiguration =
  (TbDeviceProfileTransportConfiguration & {
    communicationConfigs?: TbSnmpCommunicationConfig[]
    /** @format int32 */
    retries?: number
    /** @format int32 */
    timeoutMs?: number
  }) & {
    communicationConfigs?: TbSnmpCommunicationConfig[]
    /** @format int32 */
    retries?: number
    /** @format int32 */
    timeoutMs?: number
  }

/** SnmpDeviceTransportConfiguration */
export type TbSnmpDeviceTransportConfiguration =
  (TbDeviceTransportConfiguration & {
    authenticationPassphrase?: string
    authenticationProtocol?:
      | 'MD5'
      | 'SHA_1'
      | 'SHA_224'
      | 'SHA_256'
      | 'SHA_384'
      | 'SHA_512'
    community?: string
    contextName?: string
    engineId?: string
    host?: string
    /** @format int32 */
    port?: number
    privacyPassphrase?: string
    privacyProtocol?: 'AES_128' | 'AES_192' | 'AES_256' | 'DES'
    protocolVersion?: 'V1' | 'V2C' | 'V3'
    securityName?: string
    username?: string
  }) & {
    authenticationPassphrase?: string
    authenticationProtocol?:
      | 'MD5'
      | 'SHA_1'
      | 'SHA_224'
      | 'SHA_256'
      | 'SHA_384'
      | 'SHA_512'
    community?: string
    contextName?: string
    engineId?: string
    host?: string
    /** @format int32 */
    port?: number
    privacyPassphrase?: string
    privacyProtocol?: 'AES_128' | 'AES_192' | 'AES_256' | 'DES'
    protocolVersion?: 'V1' | 'V2C' | 'V3'
    securityName?: string
    username?: string
  }

/** SnmpMapping */
export interface TbSnmpMapping {
  dataType?: 'BOOLEAN' | 'DOUBLE' | 'JSON' | 'LONG' | 'STRING'
  key?: string
  oid?: string
}

/** SpecificTimeSchedule */
export interface TbSpecificTimeSchedule {
  /** @uniqueItems true */
  daysOfWeek?: number[]
  dynamicValue?: TbDynamicValueString
  /** @format int64 */
  endsOn?: number
  /** @format int64 */
  startsOn?: number
  timezone?: string
  type?: 'ANY_TIME' | 'CUSTOM' | 'SPECIFIC_TIME'
}

/** StarredDashboardInfo */
export interface TbStarredDashboardInfo {
  /**
   * JSON object with Dashboard id.
   * @format uuid
   */
  id?: string
  /** Title of the dashboard. */
  title?: string
  /**
   * Starred timestamp
   * @format int64
   */
  starredAt?: number
}

/** StatisticsEventFilter */
export type TbStatisticsEventFilter = (TbEventFilter & {
  notEmpty?: boolean
  /**
   * String value representing the event type
   * @example "STATS"
   */
  eventType:
    | 'DEBUG_RULE_CHAIN'
    | 'DEBUG_RULE_NODE'
    | 'ERROR'
    | 'LC_EVENT'
    | 'STATS'
  /**
   * String value representing the server name, identifier or ip address where the platform is running
   * @example "ip-172-31-24-152"
   */
  server?: string
  /**
   * The minimum number of successfully processed messages
   * @format int32
   * @example 25
   */
  minMessagesProcessed?: number
  /**
   * The maximum number of successfully processed messages
   * @format int32
   * @example 250
   */
  maxMessagesProcessed?: number
  /**
   * The minimum number of errors occurred during messages processing
   * @format int32
   * @example 30
   */
  minErrorsOccurred?: number
  /**
   * The maximum number of errors occurred during messages processing
   * @format int32
   * @example 300
   */
  maxErrorsOccurred?: number
}) & {
  notEmpty?: boolean
  /**
   * String value representing the event type
   * @example "STATS"
   */
  eventType?:
    | 'DEBUG_RULE_CHAIN'
    | 'DEBUG_RULE_NODE'
    | 'ERROR'
    | 'LC_EVENT'
    | 'STATS'
  /**
   * String value representing the server name, identifier or ip address where the platform is running
   * @example "ip-172-31-24-152"
   */
  server?: string
  /**
   * The minimum number of successfully processed messages
   * @format int32
   * @example 25
   */
  minMessagesProcessed?: number
  /**
   * The maximum number of successfully processed messages
   * @format int32
   * @example 250
   */
  maxMessagesProcessed?: number
  /**
   * The minimum number of errors occurred during messages processing
   * @format int32
   * @example 30
   */
  minErrorsOccurred?: number
  /**
   * The maximum number of errors occurred during messages processing
   * @format int32
   * @example 300
   */
  maxErrorsOccurred?: number
}

/** StringFilterPredicate */
export type TbStringFilterPredicate = (TbKeyFilterPredicate & {
  ignoreCase?: boolean
  operation?:
    | 'CONTAINS'
    | 'ENDS_WITH'
    | 'EQUAL'
    | 'IN'
    | 'NOT_CONTAINS'
    | 'NOT_EQUAL'
    | 'NOT_IN'
    | 'STARTS_WITH'
  value?: TbFilterPredicateValueString
}) & {
  ignoreCase?: boolean
  operation?:
    | 'CONTAINS'
    | 'ENDS_WITH'
    | 'EQUAL'
    | 'IN'
    | 'NOT_CONTAINS'
    | 'NOT_EQUAL'
    | 'NOT_IN'
    | 'STARTS_WITH'
  value?: TbFilterPredicateValueString
}

/** SubmitStrategy */
export interface TbSubmitStrategy {
  /** @format int32 */
  batchSize?: number
  type?:
    | 'BATCH'
    | 'BURST'
    | 'SEQUENTIAL'
    | 'SEQUENTIAL_BY_ORIGINATOR'
    | 'SEQUENTIAL_BY_TENANT'
}

/** SystemAdministratorsFilter */
export type TbSystemAdministratorsFilter = object

/** SystemInfo */
export interface TbSystemInfo {
  monolith?: boolean
  /** System data. */
  systemData?: TbSystemInfoData[]
}

/** SystemInfoData */
export interface TbSystemInfoData {
  /** Service Id. */
  serviceId?: string
  /** Service type. */
  serviceType?: string
  /**
   * CPU usage, in percent.
   * @format int64
   */
  cpuUsage?: number
  /**
   * Total CPU usage.
   * @format int64
   */
  cpuCount?: number
  /**
   * Memory usage, in percent.
   * @format int64
   */
  memoryUsage?: number
  /**
   * Total memory in bytes.
   * @format int64
   */
  totalMemory?: number
  /**
   * Disk usage, in percent.
   * @format int64
   */
  discUsage?: number
  /**
   * Total disc space in bytes.
   * @format int64
   */
  totalDiscSpace?: number
}

/** TbImageDeleteResult */
export interface TbTbImageDeleteResult {
  references?: Record<string, TbHasIdObject[]>
  success?: boolean
}

/** TbResource */
export interface TbTbResource {
  descriptor?: TbJsonNode
  link?: string
  name?: string
  preview?: string
  public?: boolean
  publicLink?: string
  publicResourceKey?: string
  /** JSON object with the Resource Id. Specify this field to update the Resource. Referencing non-existing Resource Id will cause error. Omit this field to create new Resource. */
  id?: TbTbResourceId
  /**
   * Timestamp of the resource creation, in milliseconds
   * @format int64
   * @example 1609459200000
   */
  createdTime?: number
  /** JSON object with Tenant Id. Tenant Id of the resource can't be changed. */
  tenantId?: TbTenantId
  /**
   * Resource title.
   * @example "BinaryAppDataContainer id=19 v1.0"
   */
  title?: string
  /**
   * Resource type.
   * @example "LWM2M_MODEL"
   */
  resourceType?: 'IMAGE' | 'JKS' | 'JS_MODULE' | 'LWM2M_MODEL' | 'PKCS_12'
  /**
   * Resource key.
   * @example "19_1.0"
   */
  resourceKey?: string
  /**
   * Resource etag.
   * @example "33a64df551425fcc55e4d42a148795d9f25f89d4"
   */
  etag?: string
  /**
   * Resource file name.
   * @example "19.xml"
   */
  fileName?: string
  /**
   * Resource data.
   * @example "77u/PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPCEtLQpGSUxFIElORk9STUFUSU9OCgpPTUEgUGVybWFuZW50IERvY3VtZW50CiAgIEZpbGU6IE9NQS1TVVAtTHdNMk1fQmluYXJ5QXBwRGF0YUNvbnRhaW5lci1WMV8wXzEtMjAxOTAyMjEtQQogICBUeXBlOiB4bWwKClB1YmxpYyBSZWFjaGFibGUgSW5mb3JtYXRpb24KICAgUGF0aDogaHR0cDovL3d3dy5vcGVubW9iaWxlYWxsaWFuY2Uub3JnL3RlY2gvcHJvZmlsZXMKICAgTmFtZTogTHdNMk1fQmluYXJ5QXBwRGF0YUNvbnRhaW5lci12MV8wXzEueG1sCgpOT1JNQVRJVkUgSU5GT1JNQVRJT04KCiAgSW5mb3JtYXRpb24gYWJvdXQgdGhpcyBmaWxlIGNhbiBiZSBmb3VuZCBpbiB0aGUgbGF0ZXN0IHJldmlzaW9uIG9mCgogIE9NQS1UUy1MV00yTV9CaW5hcnlBcHBEYXRhQ29udGFpbmVyLVYxXzBfMQoKICBUaGlzIGlzIGF2YWlsYWJsZSBhdCBodHRwOi8vd3d3Lm9wZW5tb2JpbGVhbGxpYW5jZS5vcmcvCgogIFNlbmQgY29tbWVudHMgdG8gaHR0cHM6Ly9naXRodWIuY29tL09wZW5Nb2JpbGVBbGxpYW5jZS9PTUFfTHdNMk1fZm9yX0RldmVsb3BlcnMvaXNzdWVzCgpDSEFOR0UgSElTVE9SWQoKMTUwNjIwMTggU3RhdHVzIGNoYW5nZWQgdG8gQXBwcm92ZWQgYnkgRE0sIERvYyBSZWYgIyBPTUEtRE0mU0UtMjAxOC0wMDYxLUlOUF9MV00yTV9BUFBEQVRBX1YxXzBfRVJQX2Zvcl9maW5hbF9BcHByb3ZhbAoyMTAyMjAxOSBTdGF0dXMgY2hhbmdlZCB0byBBcHByb3ZlZCBieSBJUFNPLCBEb2MgUmVmICMgT01BLUlQU08tMjAxOS0wMDI1LUlOUF9Md00yTV9PYmplY3RfQXBwX0RhdGFfQ29udGFpbmVyXzFfMF8xX2Zvcl9GaW5hbF9BcHByb3ZhbAoKTEVHQUwgRElTQ0xBSU1FUgoKQ29weXJpZ2h0IDIwMTkgT3BlbiBNb2JpbGUgQWxsaWFuY2UuCgpSZWRpc3RyaWJ1dGlvbiBhbmQgdXNlIGluIHNvdXJjZSBhbmQgYmluYXJ5IGZvcm1zLCB3aXRoIG9yIHdpdGhvdXQKbW9kaWZpY2F0aW9uLCBhcmUgcGVybWl0dGVkIHByb3ZpZGVkIHRoYXQgdGhlIGZvbGxvd2luZyBjb25kaXRpb25zCmFyZSBtZXQ6CgoxLiBSZWRpc3RyaWJ1dGlvbnMgb2Ygc291cmNlIGNvZGUgbXVzdCByZXRhaW4gdGhlIGFib3ZlIGNvcHlyaWdodApub3RpY2UsIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIuCjIuIFJlZGlzdHJpYnV0aW9ucyBpbiBiaW5hcnkgZm9ybSBtdXN0IHJlcHJvZHVjZSB0aGUgYWJvdmUgY29weXJpZ2h0Cm5vdGljZSwgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lciBpbiB0aGUKZG9jdW1lbnRhdGlvbiBhbmQvb3Igb3RoZXIgbWF0ZXJpYWxzIHByb3ZpZGVkIHdpdGggdGhlIGRpc3RyaWJ1dGlvbi4KMy4gTmVpdGhlciB0aGUgbmFtZSBvZiB0aGUgY29weXJpZ2h0IGhvbGRlciBub3IgdGhlIG5hbWVzIG9mIGl0cwpjb250cmlidXRvcnMgbWF5IGJlIHVzZWQgdG8gZW5kb3JzZSBvciBwcm9tb3RlIHByb2R1Y3RzIGRlcml2ZWQKZnJvbSB0aGlzIHNvZnR3YXJlIHdpdGhvdXQgc3BlY2lmaWMgcHJpb3Igd3JpdHRlbiBwZXJtaXNzaW9uLgoKVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQ09QWVJJR0hUIEhPTERFUlMgQU5EIENPTlRSSUJVVE9SUwoiQVMgSVMiIEFORCBBTlkgRVhQUkVTUyBPUiBJTVBMSUVEIFdBUlJBTlRJRVMsIElOQ0xVRElORywgQlVUIE5PVApMSU1JVEVEIFRPLCBUSEUgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSBBTkQgRklUTkVTUwpGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQVJFIERJU0NMQUlNRUQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRQpDT1BZUklHSFQgSE9MREVSIE9SIENPTlRSSUJVVE9SUyBCRSBMSUFCTEUgRk9SIEFOWSBESVJFQ1QsIElORElSRUNULApJTkNJREVOVEFMLCBTUEVDSUFMLCBFWEVNUExBUlksIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyAoSU5DTFVESU5HLApCVVQgTk9UIExJTUlURUQgVE8sIFBST0NVUkVNRU5UIE9GIFNVQlNUSVRVVEUgR09PRFMgT1IgU0VSVklDRVM7CkxPU1MgT0YgVVNFLCBEQVRBLCBPUiBQUk9GSVRTOyBPUiBCVVNJTkVTUyBJTlRFUlJVUFRJT04pIEhPV0VWRVIKQ0FVU0VEIEFORCBPTiBBTlkgVEhFT1JZIE9GIExJQUJJTElUWSwgV0hFVEhFUiBJTiBDT05UUkFDVCwgU1RSSUNUCkxJQUJJTElUWSwgT1IgVE9SVCAoSU5DTFVESU5HIE5FR0xJR0VOQ0UgT1IgT1RIRVJXSVNFKSBBUklTSU5HIElOCkFOWSBXQVkgT1VUIE9GIFRIRSBVU0UgT0YgVEhJUyBTT0ZUV0FSRSwgRVZFTiBJRiBBRFZJU0VEIE9GIFRIRQpQT1NTSUJJTElUWSBPRiBTVUNIIERBTUFHRS4KClRoZSBhYm92ZSBsaWNlbnNlIGlzIHVzZWQgYXMgYSBsaWNlbnNlIHVuZGVyIGNvcHlyaWdodCBvbmx5LiBQbGVhc2UKcmVmZXJlbmNlIHRoZSBPTUEgSVBSIFBvbGljeSBmb3IgcGF0ZW50IGxpY2Vuc2luZyB0ZXJtczoKaHR0cHM6Ly93d3cub21hc3BlY3dvcmtzLm9yZy9hYm91dC9pbnRlbGxlY3R1YWwtcHJvcGVydHktcmlnaHRzLwoKLS0+CjxMV00yTSB4bWxuczp4c2k9Imh0dHA6Ly93d3cudzMub3JnLzIwMDEvWE1MU2NoZW1hLWluc3RhbmNlIiB4c2k6bm9OYW1lc3BhY2VTY2hlbWFMb2NhdGlvbj0iaHR0cDovL29wZW5tb2JpbGVhbGxpYW5jZS5vcmcvdGVjaC9wcm9maWxlcy9MV00yTS54c2QiPgoJPE9iamVjdCBPYmplY3RUeXBlPSJNT0RlZmluaXRpb24iPgoJCTxOYW1lPkJpbmFyeUFwcERhdGFDb250YWluZXI8L05hbWU+CgkJPERlc2NyaXB0aW9uMT48IVtDREFUQVtUaGlzIEx3TTJNIE9iamVjdHMgcHJvdmlkZXMgdGhlIGFwcGxpY2F0aW9uIHNlcnZpY2UgZGF0YSByZWxhdGVkIHRvIGEgTHdNMk0gU2VydmVyLCBlZy4gV2F0ZXIgbWV0ZXIgZGF0YS4gClRoZXJlIGFyZSBzZXZlcmFsIG1ldGhvZHMgdG8gY3JlYXRlIGluc3RhbmNlIHRvIGluZGljYXRlIHRoZSBtZXNzYWdlIGRpcmVjdGlvbiBiYXNlZCBvbiB0aGUgbmVnb3RpYXRpb24gYmV0d2VlbiBBcHBsaWNhdGlvbiBhbmQgTHdNMk0uIFRoZSBDbGllbnQgYW5kIFNlcnZlciBzaG91bGQgbmVnb3RpYXRlIHRoZSBpbnN0YW5jZShzKSB1c2VkIHRvIGV4Y2hhbmdlIHRoZSBkYXRhLiBGb3IgZXhhbXBsZToKIC0gVXNpbmcgYSBzaW5nbGUgaW5zdGFuY2UgZm9yIGJvdGggZGlyZWN0aW9ucyBjb21tdW5pY2F0aW9uLCBmcm9tIENsaWVudCB0byBTZXJ2ZXIgYW5kIGZyb20gU2VydmVyIHRvIENsaWVudC4KIC0gVXNpbmcgYW4gaW5zdGFuY2UgZm9yIGNvbW11bmljYXRpb24gZnJvbSBDbGllbnQgdG8gU2VydmVyIGFuZCBhbm90aGVyIG9uZSBmb3IgY29tbXVuaWNhdGlvbiBmcm9tIFNlcnZlciB0byBDbGllbnQKIC0gVXNpbmcgc2V2ZXJhbCBpbnN0YW5jZXMKXV0+PC9EZXNjcmlwdGlvbjE+CgkJPE9iamVjdElEPjE5PC9PYmplY3RJRD4KCQk8T2JqZWN0VVJOPnVybjpvbWE6bHdtMm06b21hOjE5PC9PYmplY3RVUk4+CgkJPExXTTJNVmVyc2lvbj4xLjA8L0xXTTJNVmVyc2lvbj4KCQk8T2JqZWN0VmVyc2lvbj4xLjA8L09iamVjdFZlcnNpb24+CgkJPE11bHRpcGxlSW5zdGFuY2VzPk11bHRpcGxlPC9NdWx0aXBsZUluc3RhbmNlcz4KCQk8TWFuZGF0b3J5Pk9wdGlvbmFsPC9NYW5kYXRvcnk+CgkJPFJlc291cmNlcz4KCQkJPEl0ZW0gSUQ9IjAiPjxOYW1lPkRhdGE8L05hbWU+CgkJCQk8T3BlcmF0aW9ucz5SVzwvT3BlcmF0aW9ucz4KCQkJCTxNdWx0aXBsZUluc3RhbmNlcz5NdWx0aXBsZTwvTXVsdGlwbGVJbnN0YW5jZXM+CgkJCQk8TWFuZGF0b3J5Pk1hbmRhdG9yeTwvTWFuZGF0b3J5PgoJCQkJPFR5cGU+T3BhcXVlPC9UeXBlPgoJCQkJPFJhbmdlRW51bWVyYXRpb24gLz4KCQkJCTxVbml0cyAvPgoJCQkJPERlc2NyaXB0aW9uPjwhW0NEQVRBW0luZGljYXRlcyB0aGUgYXBwbGljYXRpb24gZGF0YSBjb250ZW50Ll1dPjwvRGVzY3JpcHRpb24+CgkJCTwvSXRlbT4KCQkJPEl0ZW0gSUQ9IjEiPjxOYW1lPkRhdGEgUHJpb3JpdHk8L05hbWU+CgkJCQk8T3BlcmF0aW9ucz5SVzwvT3BlcmF0aW9ucz4KCQkJCTxNdWx0aXBsZUluc3RhbmNlcz5TaW5nbGU8L011bHRpcGxlSW5zdGFuY2VzPgoJCQkJPE1hbmRhdG9yeT5PcHRpb25hbDwvTWFuZGF0b3J5PgoJCQkJPFR5cGU+SW50ZWdlcjwvVHlwZT4KCQkJCTxSYW5nZUVudW1lcmF0aW9uPjEgYnl0ZXM8L1JhbmdlRW51bWVyYXRpb24+CgkJCQk8VW5pdHMgLz4KCQkJCTxEZXNjcmlwdGlvbj48IVtDREFUQVtJbmRpY2F0ZXMgdGhlIEFwcGxpY2F0aW9uIGRhdGEgcHJpb3JpdHk6CjA6SW1tZWRpYXRlCjE6QmVzdEVmZm9ydAoyOkxhdGVzdAozLTEwMDogUmVzZXJ2ZWQgZm9yIGZ1dHVyZSB1c2UuCjEwMS0yNTQ6IFByb3ByaWV0YXJ5IG1vZGUuXV0+PC9EZXNjcmlwdGlvbj4KCQkJPC9JdGVtPgoJCQk8SXRlbSBJRD0iMiI+PE5hbWU+RGF0YSBDcmVhdGlvbiBUaW1lPC9OYW1lPgoJCQkJPE9wZXJhdGlvbnM+Ulc8L09wZXJhdGlvbnM+CgkJCQk8TXVsdGlwbGVJbnN0YW5jZXM+U2luZ2xlPC9NdWx0aXBsZUluc3RhbmNlcz4KCQkJCTxNYW5kYXRvcnk+T3B0aW9uYWw8L01hbmRhdG9yeT4KCQkJCTxUeXBlPlRpbWU8L1R5cGU+CgkJCQk8UmFuZ2VFbnVtZXJhdGlvbiAvPgoJCQkJPFVuaXRzIC8+CgkJCQk8RGVzY3JpcHRpb24+PCFbQ0RBVEFbSW5kaWNhdGVzIHRoZSBEYXRhIGluc3RhbmNlIGNyZWF0aW9uIHRpbWVzdGFtcC5dXT48L0Rlc2NyaXB0aW9uPgoJCQk8L0l0ZW0+CgkJCTxJdGVtIElEPSIzIj48TmFtZT5EYXRhIERlc2NyaXB0aW9uPC9OYW1lPgoJCQkJPE9wZXJhdGlvbnM+Ulc8L09wZXJhdGlvbnM+CgkJCQk8TXVsdGlwbGVJbnN0YW5jZXM+U2luZ2xlPC9NdWx0aXBsZUluc3RhbmNlcz4KCQkJCTxNYW5kYXRvcnk+T3B0aW9uYWw8L01hbmRhdG9yeT4KCQkJCTxUeXBlPlN0cmluZzwvVHlwZT4KCQkJCTxSYW5nZUVudW1lcmF0aW9uPjMyIGJ5dGVzPC9SYW5nZUVudW1lcmF0aW9uPgoJCQkJPFVuaXRzIC8+CgkJCQk8RGVzY3JpcHRpb24+PCFbQ0RBVEFbSW5kaWNhdGVzIHRoZSBkYXRhIGRlc2NyaXB0aW9uLgplLmcuICJtZXRlciByZWFkaW5nIi5dXT48L0Rlc2NyaXB0aW9uPgoJCQk8L0l0ZW0+CgkJCTxJdGVtIElEPSI0Ij48TmFtZT5EYXRhIEZvcm1hdDwvTmFtZT4KCQkJCTxPcGVyYXRpb25zPlJXPC9PcGVyYXRpb25zPgoJCQkJPE11bHRpcGxlSW5zdGFuY2VzPlNpbmdsZTwvTXVsdGlwbGVJbnN0YW5jZXM+CgkJCQk8TWFuZGF0b3J5Pk9wdGlvbmFsPC9NYW5kYXRvcnk+CgkJCQk8VHlwZT5TdHJpbmc8L1R5cGU+CgkJCQk8UmFuZ2VFbnVtZXJhdGlvbj4zMiBieXRlczwvUmFuZ2VFbnVtZXJhdGlvbj4KCQkJCTxVbml0cyAvPgoJCQkJPERlc2NyaXB0aW9uPjwhW0NEQVRBW0luZGljYXRlcyB0aGUgZm9ybWF0IG9mIHRoZSBBcHBsaWNhdGlvbiBEYXRhLgplLmcuIFlHLU1ldGVyLVdhdGVyLVJlYWRpbmcKVVRGOC1zdHJpbmcKXV0+PC9EZXNjcmlwdGlvbj4KCQkJPC9JdGVtPgoJCQk8SXRlbSBJRD0iNSI+PE5hbWU+QXBwIElEPC9OYW1lPgoJCQkJPE9wZXJhdGlvbnM+Ulc8L09wZXJhdGlvbnM+CgkJCQk8TXVsdGlwbGVJbnN0YW5jZXM+U2luZ2xlPC9NdWx0aXBsZUluc3RhbmNlcz4KCQkJCTxNYW5kYXRvcnk+T3B0aW9uYWw8L01hbmRhdG9yeT4KCQkJCTxUeXBlPkludGVnZXI8L1R5cGU+CgkJCQk8UmFuZ2VFbnVtZXJhdGlvbj4yIGJ5dGVzPC9SYW5nZUVudW1lcmF0aW9uPgoJCQkJPFVuaXRzIC8+CgkJCQk8RGVzY3JpcHRpb24+PCFbQ0RBVEFbSW5kaWNhdGVzIHRoZSBkZXN0aW5hdGlvbiBBcHBsaWNhdGlvbiBJRC5dXT48L0Rlc2NyaXB0aW9uPgoJCQk8L0l0ZW0+PC9SZXNvdXJjZXM+CgkJPERlc2NyaXB0aW9uMj48IVtDREFUQVtdXT48L0Rlc2NyaXB0aW9uMj4KCTwvT2JqZWN0Pgo8L0xXTTJNPgo="
   */
  data?: string
}

/** TbResourceId */
export interface TbTbResourceId {
  /**
   * ID of the entity, time-based UUID v1
   * @format uuid
   * @example "784f394c-42b6-435a-983c-b7beff2784f9"
   */
  id: string
  /**
   * string
   * @example "TB_RESOURCE"
   */
  entityType: 'TB_RESOURCE'
}

/** TbResourceInfo */
export interface TbTbResourceInfo {
  descriptor?: TbJsonNode
  link?: string
  name?: string
  public?: boolean
  publicLink?: string
  publicResourceKey?: string
  /** JSON object with the Resource Id. Specify this field to update the Resource. Referencing non-existing Resource Id will cause error. Omit this field to create new Resource. */
  id?: TbTbResourceId
  /**
   * Timestamp of the resource creation, in milliseconds
   * @format int64
   * @example 1609459200000
   */
  createdTime?: number
  /** JSON object with Tenant Id. Tenant Id of the resource can't be changed. */
  tenantId?: TbTenantId
  /**
   * Resource title.
   * @example "BinaryAppDataContainer id=19 v1.0"
   */
  title?: string
  /**
   * Resource type.
   * @example "LWM2M_MODEL"
   */
  resourceType?: 'IMAGE' | 'JKS' | 'JS_MODULE' | 'LWM2M_MODEL' | 'PKCS_12'
  /**
   * Resource key.
   * @example "19_1.0"
   */
  resourceKey?: string
  /**
   * Resource etag.
   * @example "33a64df551425fcc55e4d42a148795d9f25f89d4"
   */
  etag?: string
  /**
   * Resource file name.
   * @example "19.xml"
   */
  fileName?: string
}

/** TelemetryEntityView */
export interface TbTelemetryEntityView {
  /**
   * List of time-series data keys to expose
   * @example "temperature, humidity"
   */
  timeseries: string[]
  /** JSON object with attributes to expose */
  attributes: TbAttributesEntityView
}

/** TelemetryMappingConfiguration */
export interface TbTelemetryMappingConfiguration {
  /** @uniqueItems true */
  attribute?: string[]
  attributeLwm2m?: Record<string, TbObjectAttributes>
  keyName?: Record<string, string>
  /** @uniqueItems true */
  observe?: string[]
  /** @uniqueItems true */
  telemetry?: string[]
}

/** TelemetryQueryingSnmpCommunicationConfig */
export type TbTelemetryQueryingSnmpCommunicationConfig =
  (TbSnmpCommunicationConfig & {
    mappings?: TbSnmpMapping[]
    /** @format int64 */
    queryingFrequencyMs?: number
    spec?:
      | 'CLIENT_ATTRIBUTES_QUERYING'
      | 'SHARED_ATTRIBUTES_SETTING'
      | 'TELEMETRY_QUERYING'
      | 'TO_DEVICE_RPC_REQUEST'
      | 'TO_SERVER_RPC_REQUEST'
  }) & {
    mappings?: TbSnmpMapping[]
    /** @format int64 */
    queryingFrequencyMs?: number
    spec?:
      | 'CLIENT_ATTRIBUTES_QUERYING'
      | 'SHARED_ATTRIBUTES_SETTING'
      | 'TELEMETRY_QUERYING'
      | 'TO_DEVICE_RPC_REQUEST'
      | 'TO_SERVER_RPC_REQUEST'
  }

/** Tenant */
export interface TbTenant {
  /** JSON object with the tenant Id. Specify this field to update the tenant. Referencing non-existing tenant Id will cause error. Omit this field to create new tenant. */
  id?: TbTenantId
  /**
   * Timestamp of the tenant creation, in milliseconds
   * @format int64
   * @example 1609459200000
   */
  createdTime?: number
  /**
   * Title of the tenant
   * @example "Company A"
   */
  title: string
  /**
   * Name of the tenant. Read-only, duplicated from title for backward compatibility
   * @example "Company A"
   */
  name?: string
  /**
   * Geo region of the tenant
   * @example "North America"
   */
  region?: string
  /** JSON object with Tenant Profile Id */
  tenantProfileId?: TbTenantProfileId
  /**
   * Country
   * @example "US"
   */
  country?: string
  /**
   * State
   * @example "NY"
   */
  state?: string
  /**
   * City
   * @example "New York"
   */
  city?: string
  /**
   * Address Line 1
   * @example "42 Broadway Suite 12-400"
   */
  address?: string
  /** Address Line 2 */
  address2?: string
  /**
   * Zip code
   * @example "10004"
   */
  zip?: string
  /**
   * Phone number
   * @example "+1(415)777-7777"
   */
  phone?: string
  /**
   * Email
   * @example "example@company.com"
   */
  email: string
  /** Additional parameters of the device */
  additionalInfo?: TbJsonNode
}

/** TenantAdministratorsFilter */
export type TbTenantAdministratorsFilter = (TbUsersFilter & {
  /** @uniqueItems true */
  tenantProfilesIds?: string[]
  /** @uniqueItems true */
  tenantsIds?: string[]
}) & {
  /** @uniqueItems true */
  tenantProfilesIds?: string[]
  /** @uniqueItems true */
  tenantsIds?: string[]
}

/** TenantId */
export interface TbTenantId {
  /**
   * ID of the entity, time-based UUID v1
   * @format uuid
   * @example "784f394c-42b6-435a-983c-b7beff2784f9"
   */
  id: string
  /**
   * string
   * @example "TENANT"
   */
  entityType: 'TENANT'
}

/** TenantInfo */
export interface TbTenantInfo {
  /** JSON object with the tenant Id. Specify this field to update the tenant. Referencing non-existing tenant Id will cause error. Omit this field to create new tenant. */
  id?: TbTenantId
  /**
   * Timestamp of the tenant creation, in milliseconds
   * @format int64
   * @example 1609459200000
   */
  createdTime?: number
  /**
   * Title of the tenant
   * @example "Company A"
   */
  title: string
  /**
   * Name of the tenant. Read-only, duplicated from title for backward compatibility
   * @example "Company A"
   */
  name?: string
  /**
   * Geo region of the tenant
   * @example "North America"
   */
  region?: string
  /** JSON object with Tenant Profile Id */
  tenantProfileId?: TbTenantProfileId
  /**
   * Country
   * @example "US"
   */
  country?: string
  /**
   * State
   * @example "NY"
   */
  state?: string
  /**
   * City
   * @example "New York"
   */
  city?: string
  /**
   * Address Line 1
   * @example "42 Broadway Suite 12-400"
   */
  address?: string
  /** Address Line 2 */
  address2?: string
  /**
   * Zip code
   * @example "10004"
   */
  zip?: string
  /**
   * Phone number
   * @example "+1(415)777-7777"
   */
  phone?: string
  /**
   * Email
   * @example "example@company.com"
   */
  email: string
  /** Additional parameters of the device */
  additionalInfo?: TbJsonNode
  /**
   * Tenant Profile name
   * @example "Default"
   */
  tenantProfileName?: string
}

/** TenantProfile */
export interface TbTenantProfile {
  default?: boolean
  /** JSON object with the tenant profile Id. Specify this field to update the tenant profile. Referencing non-existing tenant profile Id will cause error. Omit this field to create new tenant profile. */
  id?: TbTenantProfileId
  /**
   * Timestamp of the tenant profile creation, in milliseconds
   * @format int64
   * @example 1609459200000
   */
  createdTime?: number
  /**
   * Name of the tenant profile
   * @example "High Priority Tenants"
   */
  name?: string
  /**
   * Description of the tenant profile
   * @example "Any text"
   */
  description?: string
  /**
   * If enabled, will push all messages related to this tenant and processed by the rule engine into separate queue. Useful for complex microservices deployments, to isolate processing of the data for specific tenants
   * @example true
   */
  isolatedTbRuleEngine?: boolean
  /** Complex JSON object that contains profile settings: queue configs, max devices, max assets, rate limits, etc. */
  profileData?: TbTenantProfileData
}

/** TenantProfileConfiguration */
export type TbTenantProfileConfiguration = object

/** TenantProfileData */
export interface TbTenantProfileData {
  /** Complex JSON object that contains profile settings: max devices, max assets, rate limits, etc. */
  configuration?: TbTenantProfileConfiguration
  /** JSON array of queue configuration per tenant profile */
  queueConfiguration?: TbTenantProfileQueueConfiguration[]
}

/** TenantProfileId */
export interface TbTenantProfileId {
  /**
   * ID of the entity, time-based UUID v1
   * @format uuid
   * @example "784f394c-42b6-435a-983c-b7beff2784f9"
   */
  id: string
  /**
   * string
   * @example "TENANT_PROFILE"
   */
  entityType: 'TENANT_PROFILE'
}

/** TenantProfileQueueConfiguration */
export interface TbTenantProfileQueueConfiguration {
  additionalInfo?: TbJsonNode
  consumerPerPartition?: boolean
  name?: string
  /** @format int64 */
  packProcessingTimeout?: number
  /** @format int32 */
  partitions?: number
  /** @format int32 */
  pollInterval?: number
  processingStrategy?: TbProcessingStrategy
  submitStrategy?: TbSubmitStrategy
  topic?: string
}

/** TestSmsRequest */
export interface TbTestSmsRequest {
  /** The SMS provider configuration */
  providerConfiguration?: TbSmsProviderConfiguration
  /** The phone number or other identifier to specify as a recipient of the SMS. */
  numberTo?: string
  /** The test message */
  message?: string
}

/** ThingsboardCredentialsExpiredResponse */
export interface TbThingsboardCredentialsExpiredResponse {
  /**
   * HTTP Response Status Code
   * @format int32
   * @example 401
   */
  status?: number
  /**
   * Error message
   * @example "Authentication failed"
   */
  message?: string
  /**
   * Platform error code:
   * * `2` - General error (HTTP: 500 - Internal Server Error)
   *
   * * `10` - Authentication failed (HTTP: 401 - Unauthorized)
   *
   * * `11` - JWT token expired (HTTP: 401 - Unauthorized)
   *
   * * `15` - Credentials expired (HTTP: 401 - Unauthorized)
   *
   * * `20` - Permission denied (HTTP: 403 - Forbidden)
   *
   * * `30` - Invalid arguments (HTTP: 400 - Bad Request)
   *
   * * `31` - Bad request params (HTTP: 400 - Bad Request)
   *
   * * `32` - Item not found (HTTP: 404 - Not Found)
   *
   * * `33` - Too many requests (HTTP: 429 - Too Many Requests)
   *
   * * `34` - Too many updates (Too many updates over Websocket session)
   *
   * * `40` - Subscription violation (HTTP: 403 - Forbidden)
   * @example "10"
   */
  errorCode?: object
  /**
   * Timestamp
   * @format date-time
   */
  timestamp?: string
  /** Password reset token */
  resetToken?: string
}

/** ThingsboardErrorResponse */
export interface TbThingsboardErrorResponse {
  /**
   * HTTP Response Status Code
   * @format int32
   * @example 401
   */
  status?: number
  /**
   * Error message
   * @example "Authentication failed"
   */
  message?: string
  /**
   * Platform error code:
   * * `2` - General error (HTTP: 500 - Internal Server Error)
   *
   * * `10` - Authentication failed (HTTP: 401 - Unauthorized)
   *
   * * `11` - JWT token expired (HTTP: 401 - Unauthorized)
   *
   * * `15` - Credentials expired (HTTP: 401 - Unauthorized)
   *
   * * `20` - Permission denied (HTTP: 403 - Forbidden)
   *
   * * `30` - Invalid arguments (HTTP: 400 - Bad Request)
   *
   * * `31` - Bad request params (HTTP: 400 - Bad Request)
   *
   * * `32` - Item not found (HTTP: 404 - Not Found)
   *
   * * `33` - Too many requests (HTTP: 429 - Too Many Requests)
   *
   * * `34` - Too many updates (Too many updates over Websocket session)
   *
   * * `40` - Subscription violation (HTTP: 403 - Forbidden)
   * @example "10"
   */
  errorCode?: object
  /**
   * Timestamp
   * @format date-time
   */
  timestamp?: string
}

/** ToDeviceRpcRequestSnmpCommunicationConfig */
export interface TbToDeviceRpcRequestSnmpCommunicationConfig {
  mappings?: TbSnmpMapping[]
  spec?:
    | 'CLIENT_ATTRIBUTES_QUERYING'
    | 'SHARED_ATTRIBUTES_SETTING'
    | 'TELEMETRY_QUERYING'
    | 'TO_DEVICE_RPC_REQUEST'
    | 'TO_SERVER_RPC_REQUEST'
}

/** ToServerRpcRequestSnmpCommunicationConfig */
export interface TbToServerRpcRequestSnmpCommunicationConfig {
  mappings?: TbSnmpMapping[]
  spec?:
    | 'CLIENT_ATTRIBUTES_QUERYING'
    | 'SHARED_ATTRIBUTES_SETTING'
    | 'TELEMETRY_QUERYING'
    | 'TO_DEVICE_RPC_REQUEST'
    | 'TO_SERVER_RPC_REQUEST'
}

/** TotpTwoFaAccountConfig */
export interface TbTotpTwoFaAccountConfig {
  /** @pattern otpauth://totp/(\S+?):(\S+?)\?issuer=(\S+?)&secret=(\w+?) */
  authUrl: string
  useByDefault?: boolean
}

/** TotpTwoFaProviderConfig */
export interface TbTotpTwoFaProviderConfig {
  issuerName: string
}

/** TransportPayloadTypeConfiguration */
export type TbTransportPayloadTypeConfiguration = object

/** TsValue */
export interface TbTsValue {
  /** @format int64 */
  count?: number
  /** @format int64 */
  ts?: number
  value?: string
}

/** TwilioSmsProviderConfiguration */
export type TbTwilioSmsProviderConfiguration = (TbSmsProviderConfiguration & {
  /** Twilio account Sid. */
  accountSid?: string
  /** Twilio account Token. */
  accountToken?: string
  /** The number/id of a sender. */
  numberFrom?: string
}) & {
  /** Twilio account Sid. */
  accountSid?: string
  /** Twilio account Token. */
  accountToken?: string
  /** The number/id of a sender. */
  numberFrom?: string
}

/** TwoFaAccountConfig */
export interface TbTwoFaAccountConfig {
  useByDefault?: boolean
}

/** TwoFaAccountConfigUpdateRequest */
export interface TbTwoFaAccountConfigUpdateRequest {
  useByDefault?: boolean
}

/** TwoFaProviderConfig */
export type TbTwoFaProviderConfig = object

/** TwoFaProviderInfo */
export interface TbTwoFaProviderInfo {
  contact?: string
  default?: boolean
  /** @format int32 */
  minVerificationCodeSendPeriod?: number
  type?: 'BACKUP_CODE' | 'EMAIL' | 'SMS' | 'TOTP'
}

/** UpdateMessage */
export interface TbUpdateMessage {
  /**
   * 'True' if new platform update is available.
   * @example false
   */
  updateAvailable?: boolean
  /** Current ThingsBoard version. */
  currentVersion?: string
  /** Latest ThingsBoard version. */
  latestVersion?: string
  /** Upgrade instructions URL. */
  upgradeInstructionsUrl?: string
  /** Current ThingsBoard version release notes URL. */
  currentVersionReleaseNotesUrl?: string
  /** Latest ThingsBoard version release notes URL. */
  latestVersionReleaseNotesUrl?: string
}

/** UsageInfo */
export interface TbUsageInfo {
  /** @format int64 */
  alarms?: number
  /** @format int64 */
  assets?: number
  /** @format int64 */
  customers?: number
  /** @format int64 */
  dashboards?: number
  /** @format int64 */
  devices?: number
  /** @format int64 */
  emails?: number
  /** @format int64 */
  jsExecutions?: number
  /** @format int64 */
  maxAlarms?: number
  /** @format int64 */
  maxAssets?: number
  /** @format int64 */
  maxCustomers?: number
  /** @format int64 */
  maxDashboards?: number
  /** @format int64 */
  maxDevices?: number
  /** @format int64 */
  maxEmails?: number
  /** @format int64 */
  maxJsExecutions?: number
  /** @format int64 */
  maxSms?: number
  /** @format int64 */
  maxTbelExecutions?: number
  /** @format int64 */
  maxTransportMessages?: number
  /** @format int64 */
  maxUsers?: number
  /** @format int64 */
  sms?: number
  smsEnabled?: boolean
  /** @format int64 */
  tbelExecutions?: number
  /** @format int64 */
  transportMessages?: number
  /** @format int64 */
  users?: number
}

/** User */
export interface TbUser {
  /** JSON object with the User Id. Specify this field to update the device. Referencing non-existing User Id will cause error. Omit this field to create new customer. */
  id?: TbUserId
  /**
   * Timestamp of the user creation, in milliseconds
   * @format int64
   * @example 1609459200000
   */
  createdTime?: number
  /** JSON object with the Tenant Id. */
  tenantId?: TbTenantId
  /** JSON object with the Customer Id. */
  customerId?: TbCustomerId
  /**
   * Email of the user
   * @example "user@example.com"
   */
  email: string
  /**
   * Duplicates the email of the user, readonly
   * @example "user@example.com"
   */
  name?: string
  /**
   * Authority
   * @example "SYS_ADMIN, TENANT_ADMIN or CUSTOMER_USER"
   */
  authority:
    | 'CUSTOMER_USER'
    | 'PRE_VERIFICATION_TOKEN'
    | 'REFRESH_TOKEN'
    | 'SYS_ADMIN'
    | 'TENANT_ADMIN'
  /**
   * First name of the user
   * @example "John"
   */
  firstName?: string
  /**
   * Last name of the user
   * @example "Doe"
   */
  lastName?: string
  /**
   * Phone number of the user
   * @example "38012345123"
   */
  phone?: string
  /** Additional parameters of the user */
  additionalInfo?: TbJsonNode
}

/** UserDashboardsInfo */
export interface TbUserDashboardsInfo {
  /** List of last visited dashboards. */
  last?: TbLastVisitedDashboardInfo[]
  /** List of starred dashboards. */
  starred?: TbStarredDashboardInfo[]
}

/** UserEmailInfo */
export interface TbUserEmailInfo {
  /** User id */
  id?: TbUserId
  /**
   * User email
   * @example "john@gmail.com"
   */
  email?: string
  /**
   * User first name
   * @example "John"
   */
  firstName?: string
  /**
   * User last name
   * @example "Brown"
   */
  lastName?: string
}

/** UserId */
export interface TbUserId {
  /**
   * ID of the entity, time-based UUID v1
   * @format uuid
   * @example "784f394c-42b6-435a-983c-b7beff2784f9"
   */
  id: string
  /**
   * string
   * @example "USER"
   */
  entityType: 'USER'
}

/** UserListFilter */
export interface TbUserListFilter {
  usersIds?: string[]
}

/** UserNotificationSettings */
export interface TbUserNotificationSettings {
  prefs: Record<string, TbNotificationPref>
}

/** UserPasswordPolicy */
export interface TbUserPasswordPolicy {
  /**
   * Allow whitespaces
   * @example false
   */
  allowWhitespaces?: boolean
  /**
   * Force user to update password if existing one does not pass validation
   * @example false
   */
  forceUserToResetPasswordIfNotValid?: boolean
  /**
   * Maximum number of symbols in the password.
   * @format int32
   */
  maximumLength?: number
  /**
   * Minimum number of digits in the password.
   * @format int32
   */
  minimumDigits?: number
  /**
   * Minimum number of symbols in the password.
   * @format int32
   */
  minimumLength?: number
  /**
   * Minimum number of lowercase letters in the password.
   * @format int32
   */
  minimumLowercaseLetters?: number
  /**
   * Minimum number of special in the password.
   * @format int32
   */
  minimumSpecialCharacters?: number
  /**
   * Minimum number of uppercase letters in the password.
   * @format int32
   */
  minimumUppercaseLetters?: number
  /**
   * Password expiration period (days). Force expiration of the password.
   * @format int32
   */
  passwordExpirationPeriodDays?: number
  /**
   * Password reuse frequency (days). Disallow to use the same password for the defined number of days
   * @format int32
   */
  passwordReuseFrequencyDays?: number
}

/** UsersFilter */
export type TbUsersFilter = object

/** VersionCreateConfig */
export interface TbVersionCreateConfig {
  saveAttributes?: boolean
  saveCredentials?: boolean
  saveRelations?: boolean
}

/** VersionCreateRequest */
export interface TbVersionCreateRequest {
  branch?: string
  type?: 'COMPLEX' | 'SINGLE_ENTITY'
  versionName?: string
}

/** VersionCreationResult */
export interface TbVersionCreationResult {
  /** @format int32 */
  added?: number
  done?: boolean
  error?: string
  /** @format int32 */
  modified?: number
  /** @format int32 */
  removed?: number
  version?: TbEntityVersion
}

/** VersionLoadConfig */
export interface TbVersionLoadConfig {
  loadAttributes?: boolean
  loadCredentials?: boolean
  loadRelations?: boolean
}

/** VersionLoadRequest */
export interface TbVersionLoadRequest {
  type?: 'ENTITY_TYPE' | 'SINGLE_ENTITY'
  versionId?: string
}

/** VersionLoadResult */
export interface TbVersionLoadResult {
  done?: boolean
  error?: TbEntityLoadError
  result?: TbEntityTypeLoadResult[]
}

/** VersionedEntityInfo */
export interface TbVersionedEntityInfo {
  externalId?: TbEntityId
}

/** WebDeliveryMethodNotificationTemplate */
export interface TbWebDeliveryMethodNotificationTemplate {
  additionalConfig?: TbJsonNode
  body?: string
  enabled?: boolean
  subject?: string
}

/** WidgetType */
export interface TbWidgetType {
  /** JSON object with the Widget Type Id. Specify this field to update the Widget Type. Referencing non-existing Widget Type Id will cause error. Omit this field to create new Widget Type. */
  id?: TbWidgetTypeId
  /**
   * Timestamp of the Widget Type creation, in milliseconds
   * @format int64
   * @example 1609459200000
   */
  createdTime?: number
  /** JSON object with Tenant Id. */
  tenantId?: TbTenantId
  /** Unique FQN that is used in dashboards as a reference widget type */
  fqn?: string
  /** Widget name used in search and UI */
  name?: string
  /**
   * Whether widget type is deprecated.
   * @example true
   */
  deprecated?: boolean
  /** Complex JSON object that describes the widget type */
  descriptor?: TbJsonNode
}

/** WidgetTypeDetails */
export interface TbWidgetTypeDetails {
  /**
   * Timestamp of the Widget Type creation, in milliseconds
   * @format int64
   * @example 1609459200000
   */
  createdTime?: number
  /** JSON object with Tenant Id. */
  tenantId?: TbTenantId
  /** Unique FQN that is used in dashboards as a reference widget type */
  fqn?: string
  /** Widget name used in search and UI */
  name?: string
  /**
   * Whether widget type is deprecated.
   * @example true
   */
  deprecated?: boolean
  /** Complex JSON object that describes the widget type */
  descriptor?: TbJsonNode
  /** Relative or external image URL. Replaced with image data URL (Base64) in case of relative URL and 'inlineImages' option enabled. */
  image?: string
  /** Description of the widget */
  description?: string
  /** Tags of the widget type */
  tags?: string[]
}

/** WidgetTypeExportData */
export type TbWidgetTypeExportData = (TbEntityExportDataObject & {
  attributes?: Record<string, TbAttributeExportData[]>
  entity?: TbWidgetTypeDetails
  entityType?:
    | 'ALARM'
    | 'API_USAGE_STATE'
    | 'ASSET'
    | 'ASSET_PROFILE'
    | 'CUSTOMER'
    | 'DASHBOARD'
    | 'DEVICE'
    | 'DEVICE_PROFILE'
    | 'EDGE'
    | 'ENTITY_VIEW'
    | 'NOTIFICATION'
    | 'NOTIFICATION_REQUEST'
    | 'NOTIFICATION_RULE'
    | 'NOTIFICATION_TARGET'
    | 'NOTIFICATION_TEMPLATE'
    | 'OTA_PACKAGE'
    | 'QUEUE'
    | 'RPC'
    | 'RULE_CHAIN'
    | 'RULE_NODE'
    | 'TB_RESOURCE'
    | 'TENANT'
    | 'TENANT_PROFILE'
    | 'USER'
    | 'WIDGETS_BUNDLE'
    | 'WIDGET_TYPE'
  relations?: TbEntityRelation[]
}) & {
  attributes?: Record<string, TbAttributeExportData[]>
  entity?: TbWidgetTypeDetails
  entityType?:
    | 'ALARM'
    | 'API_USAGE_STATE'
    | 'ASSET'
    | 'ASSET_PROFILE'
    | 'CUSTOMER'
    | 'DASHBOARD'
    | 'DEVICE'
    | 'DEVICE_PROFILE'
    | 'EDGE'
    | 'ENTITY_VIEW'
    | 'NOTIFICATION'
    | 'NOTIFICATION_REQUEST'
    | 'NOTIFICATION_RULE'
    | 'NOTIFICATION_TARGET'
    | 'NOTIFICATION_TEMPLATE'
    | 'OTA_PACKAGE'
    | 'QUEUE'
    | 'RPC'
    | 'RULE_CHAIN'
    | 'RULE_NODE'
    | 'TB_RESOURCE'
    | 'TENANT'
    | 'TENANT_PROFILE'
    | 'USER'
    | 'WIDGETS_BUNDLE'
    | 'WIDGET_TYPE'
  relations?: TbEntityRelation[]
}

/** WidgetTypeId */
export interface TbWidgetTypeId {
  /**
   * ID of the entity, time-based UUID v1
   * @format uuid
   * @example "784f394c-42b6-435a-983c-b7beff2784f9"
   */
  id: string
  /**
   * string
   * @example "WIDGET_TYPE"
   */
  entityType: 'WIDGET_TYPE'
}

/** WidgetTypeInfo */
export interface TbWidgetTypeInfo {
  /** JSON object with the Widget Type Id. Specify this field to update the Widget Type. Referencing non-existing Widget Type Id will cause error. Omit this field to create new Widget Type. */
  id?: TbWidgetTypeId
  /**
   * Timestamp of the Widget Type creation, in milliseconds
   * @format int64
   * @example 1609459200000
   */
  createdTime?: number
  /** JSON object with Tenant Id. */
  tenantId?: TbTenantId
  /** Unique FQN that is used in dashboards as a reference widget type */
  fqn?: string
  /** Widget name used in search and UI */
  name?: string
  /**
   * Whether widget type is deprecated.
   * @example true
   */
  deprecated?: boolean
  /** Base64 encoded widget thumbnail */
  image?: string
  /** Description of the widget type */
  description?: string
  /** Tags of the widget type */
  tags?: string[]
  /** Type of the widget (timeseries, latest, control, alarm or static) */
  widgetType?: string
}

/** WidgetsBundle */
export interface TbWidgetsBundle {
  /** JSON object with the Widget Bundle Id. Specify this field to update the Widget Bundle. Referencing non-existing Widget Bundle Id will cause error. Omit this field to create new Widget Bundle. */
  id?: TbWidgetsBundleId
  /**
   * Timestamp of the Widget Bundle creation, in milliseconds
   * @format int64
   * @example 1609459200000
   */
  createdTime?: number
  /** Same as title of the Widget Bundle. Read-only field. Update the 'title' to change the 'name' of the Widget Bundle. */
  name?: string
  /** JSON object with Tenant Id. */
  tenantId?: TbTenantId
  /** Unique alias that is used in widget types as a reference widget bundle */
  alias?: string
  /** Title used in search and UI */
  title?: string
  /** Relative or external image URL. Replaced with image data URL (Base64) in case of relative URL and 'inlineImages' option enabled. */
  image?: string
  /** Description */
  description?: string
  /**
   * Order
   * @format int32
   */
  order?: number
}

/** WidgetsBundleExportData */
export type TbWidgetsBundleExportData = (TbEntityExportDataObject & {
  attributes?: Record<string, TbAttributeExportData[]>
  entity?: TbWidgetsBundle
  entityType?:
    | 'ALARM'
    | 'API_USAGE_STATE'
    | 'ASSET'
    | 'ASSET_PROFILE'
    | 'CUSTOMER'
    | 'DASHBOARD'
    | 'DEVICE'
    | 'DEVICE_PROFILE'
    | 'EDGE'
    | 'ENTITY_VIEW'
    | 'NOTIFICATION'
    | 'NOTIFICATION_REQUEST'
    | 'NOTIFICATION_RULE'
    | 'NOTIFICATION_TARGET'
    | 'NOTIFICATION_TEMPLATE'
    | 'OTA_PACKAGE'
    | 'QUEUE'
    | 'RPC'
    | 'RULE_CHAIN'
    | 'RULE_NODE'
    | 'TB_RESOURCE'
    | 'TENANT'
    | 'TENANT_PROFILE'
    | 'USER'
    | 'WIDGETS_BUNDLE'
    | 'WIDGET_TYPE'
  fqns?: string[]
  relations?: TbEntityRelation[]
  widgets?: TbObjectNode[]
}) & {
  attributes?: Record<string, TbAttributeExportData[]>
  entity?: TbWidgetsBundle
  entityType?:
    | 'ALARM'
    | 'API_USAGE_STATE'
    | 'ASSET'
    | 'ASSET_PROFILE'
    | 'CUSTOMER'
    | 'DASHBOARD'
    | 'DEVICE'
    | 'DEVICE_PROFILE'
    | 'EDGE'
    | 'ENTITY_VIEW'
    | 'NOTIFICATION'
    | 'NOTIFICATION_REQUEST'
    | 'NOTIFICATION_RULE'
    | 'NOTIFICATION_TARGET'
    | 'NOTIFICATION_TEMPLATE'
    | 'OTA_PACKAGE'
    | 'QUEUE'
    | 'RPC'
    | 'RULE_CHAIN'
    | 'RULE_NODE'
    | 'TB_RESOURCE'
    | 'TENANT'
    | 'TENANT_PROFILE'
    | 'USER'
    | 'WIDGETS_BUNDLE'
    | 'WIDGET_TYPE'
  fqns?: string[]
  relations?: TbEntityRelation[]
  widgets?: TbObjectNode[]
}

/** WidgetsBundleId */
export interface TbWidgetsBundleId {
  /**
   * ID of the entity, time-based UUID v1
   * @format uuid
   * @example "784f394c-42b6-435a-983c-b7beff2784f9"
   */
  id: string
  /**
   * string
   * @example "WIDGETS_BUNDLE"
   */
  entityType: 'WIDGETS_BUNDLE'
}

/** X509CertificateChainProvisionConfiguration */
export type TbX509CertificateChainProvisionConfiguration =
  (TbDeviceProfileProvisionConfiguration & {
    allowCreateNewDevicesByX509Certificate?: boolean
    certificateRegExPattern?: string
    provisionDeviceSecret?: string
  }) & {
    allowCreateNewDevicesByX509Certificate?: boolean
    certificateRegExPattern?: string
    provisionDeviceSecret?: string
  }

/** X509LwM2MBootstrapServerCredential */
export interface TbX509LwM2MBootstrapServerCredential {
  /**
   * Server short Id. Used as link to associate server Object Instance. This identifier uniquely identifies each LwM2M Server configured for the LwM2M Client. This Resource MUST be set when the Bootstrap-Server Resource has a value of 'false'. The values ID:0 and ID:65535 values MUST NOT be used for identifying the LwM2M Server.
   * @format int32
   * @example 123
   */
  shortServerId?: number
  /**
   * Is Bootstrap Server or Lwm2m Server. The LwM2M Client MAY be configured to use one or more LwM2M Server Account(s). The LwM2M Client MUST have at most one LwM2M Bootstrap-Server Account. (*) The LwM2M client MUST have at least one LwM2M server account after completing the boot sequence specified.
   * @example false
   */
  bootstrapServerIs?: boolean
  /**
   * Host for 'No Security' mode
   * @example "0.0.0.0"
   */
  host?: string
  /**
   * Port for  Lwm2m Server: 'No Security' mode: Lwm2m Server or Bootstrap Server
   * @format int32
   */
  port?: number
  /**
   * Client Hold Off Time. The number of seconds to wait before initiating a Client Initiated Bootstrap once the LwM2M Client has determined it should initiate this bootstrap mode. (This information is relevant for use with a Bootstrap-Server only.)
   * @format int32
   * @example 1
   */
  clientHoldOffTime?: number
  /**
   * Server Public Key for 'Security' mode (DTLS): RPK or X509. Format: base64 encoded
   * @example "MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEAZ0pSaGKHk/GrDaUDnQZpeEdGwX7m3Ws+U/kiVat
   * +44sgk3c8g0LotfMpLlZJPhPwJ6ipXV+O1r7IZUjBs3LNA=="
   */
  serverPublicKey?: string
  /**
   * Server Public Key for 'Security' mode (DTLS): X509. Format: base64 encoded
   * @example "MMIICODCCAd6gAwIBAgIUI88U1zowOdrxDK/dOV+36gJxI2MwCgYIKoZIzj0EAwIwejELMAkGA1UEBhMCVUs
   * xEjAQBgNVBAgTCUt5aXYgY2l0eTENMAsGA1UEBxMES3lpdjEUMBIGA1UEChMLVGhpbmdzYm9hcmQxFzAVBgNVBAsMDkRFVkVMT1BFUl9URVNUMRkwFwYDVQQDDBBpbnRlcm1lZGlhdGVfY2EwMB4XDTIyMDEwOTEzMDMwMFoXDTI3MDEwODEzMDMwMFowFDESMBAGA1UEAxM
   * JbG9jYWxob3N0MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEUO3vBo/JTv0eooY7XHiKAIVDoWKFqtrU7C6q8AIKqpLcqhCdW+haFeBOH3PjY6EwaWkY04Bir4oanU0s7tz2uKOBpzCBpDAOBgNVHQ8BAf8EBAMCBaAwEwYDVR0lBAwwCgYIKwYBBQUHAwEwDAYDVR0TAQH/
   * BAIwADAdBgNVHQ4EFgQUEjc3Q4a0TxzP/3x3EV4fHxYUg0YwHwYDVR0jBBgwFoAUuSquGycMU6Q0SYNcbtSkSD3TfH0wLwYDVR0RBCgwJoIVbG9jYWxob3N0LmxvY2FsZG9tYWlugglsb2NhbGhvc3SCAiAtMAoGCCqGSM49BAMCA0gAMEUCIQD7dbZObyUaoDiNbX+9fUNp
   * AWrD7N7XuJUwZ9FcN75R3gIgb2RNjDkHoyUyF1YajwkBk+7XmIXNClmizNJigj908mw="
   */
  serverCertificate?: string
  /**
   * Bootstrap Server Account Timeout (If the value is set to 0, or if this resource is not instantiated, the Bootstrap-Server Account lifetime is infinite.)
   * @format int32
   * @example 0
   */
  bootstrapServerAccountTimeout?: number
  /**
   * Specify the lifetime of the registration in seconds.
   * @format int32
   * @example 300
   */
  lifetime?: number
  /**
   * The default value the LwM2M Client should use for the Minimum Period of an Observation in the absence of this parameter being included in an Observation. If this Resource doesn’t exist, the default value is 0.
   * @format int32
   * @example 1
   */
  defaultMinPeriod?: number
  /**
   * If true, the LwM2M Client stores “Notify” operations to the LwM2M Server while the LwM2M Server account is disabled or the LwM2M Client is offline. After the LwM2M Server account is enabled or the LwM2M Client is online, the LwM2M Client reports the stored “Notify” operations to the Server. If false, the LwM2M Client discards all the “Notify” operations or temporarily disables the Observe function while the LwM2M Server is disabled or the LwM2M Client is offline. The default value is true.
   * @example true
   */
  notifIfDisabled?: boolean
  /**
   * This Resource defines the transport binding configured for the LwM2M Client. If the LwM2M Client supports the binding specified in this Resource, the LwM2M Client MUST use that transport for the Current Binding Mode.
   * @example "U"
   */
  binding?: string
}
