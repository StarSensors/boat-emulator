export enum TbAuthorityEnum {
  CUSTOMER_USER = 'CUSTOMER_USER',
  TENANT_ADMIN = 'TENANT_ADMIN',
  SYS_ADMIN = 'SYS_ADMIN',
}

export enum TbEntityEnum {
  ALARM = 'ALARM',
  API_USAGE_STATE = 'API_USAGE_STATE',
  ASSET = 'ASSET',
  ASSET_PROFILE = 'ASSET_PROFILE',
  CUSTOMER = 'CUSTOMER',
  DASHBOARD = 'DASHBOARD',
  DEVICE = 'DEVICE',
  DEVICE_PROFILE = 'DEVICE_PROFILE',
  EDGE = 'EDGE',
  ENTITY_VIEW = 'ENTITY_VIEW',
  NOTIFICATION = 'NOTIFICATION',
  NOTIFICATION_REQUEST = 'NOTIFICATION_REQUEST',
  NOTIFICATION_RULE = 'NOTIFICATION_RULE',
  NOTIFICATION_TARGET = 'NOTIFICATION_TARGET',
  NOTIFICATION_TEMPLATE = 'NOTIFICATION_TEMPLATE',
  OTA_PACKAGE = 'OTA_PACKAGE',
  QUEUE = 'QUEUE',
  RPC = 'RPC',
  RULE_CHAIN = 'RULE_CHAIN',
  RULE_NODE = 'RULE_NODE',
  TB_RESOURCE = 'TB_RESOURCE',
  TENANT = 'TENANT',
  TENANT_PROFILE = 'TENANT_PROFILE',
  USER = 'USER',
  WIDGETS_BUNDLE = 'WIDGETS_BUNDLE',
  WIDGET_TYPE = 'WIDGET_TYPE',
}

export enum TbScopeEnum {
  SERVER_SCOPE = 'SERVER_SCOPE',
  CLIENT_SCOPE = 'CLIENT_SCOPE',
  SHARED_SCOPE = 'SHARED_SCOPE',
}

export enum TbTransportEnum {
  COAP = 'COAP',
  DEFAULT = 'DEFAULT',
  LWM2M = 'LWM2M',
  MQTT = 'MQTT',
  SNMP = 'SNMP',
}

export enum TbProvisionTypeEnum {
  ALLOW_CREATE_NEW_DEVICES = 'ALLOW_CREATE_NEW_DEVICES',
  CHECK_PRE_PROVISIONED_DEVICES = 'CHECK_PRE_PROVISIONED_DEVICES',
  DISABLED = 'DISABLED',
  X509_CERTIFICATE_CHAIN = 'X509_CERTIFICATE_CHAIN',
}

export enum TbAlarmConditionFilterKeyEnum {
  ATTRIBUTE = 'ATTRIBUTE',
  CONSTANT = 'CONSTANT',
  ENTITY_FIELD = 'ENTITY_FIELD',
  TIME_SERIES = 'TIME_SERIES',
}

export enum TbAlarmConditionFilterValueTypeEnum {
  BOOLEAN = 'BOOLEAN',
  DATE_TIME = 'DATE_TIME',
  NUMERIC = 'NUMERIC',
  STRING = 'STRING',
}

export enum TbDynamicValueStringSourceTypeEnum {
  CURRENT_CUSTOMER = 'CURRENT_CUSTOMER',
  CURRENT_DEVICE = 'CURRENT_DEVICE',
  CURRENT_TENANT = 'CURRENT_TENANT',
  CURRENT_USER = 'CURRENT_USER',
}

export enum TbAlarmScheduleTypeEnum {
  ANY_TIME = 'ANY_TIME',
  CUSTOM = 'CUSTOM',
  SPECIFIC_TIME = 'SPECIFIC_TIME',
}

export enum TbRelationTypeGroupEnum {
  COMMON = 'COMMON',
  DASHBOARD = 'DASHBOARD',
  EDGE = 'EDGE',
  EDGE_AUTO_ASSIGN_RULE_CHAIN = 'EDGE_AUTO_ASSIGN_RULE_CHAIN',
  RULE_CHAIN = 'RULE_CHAIN',
  RULE_NODE = 'RULE_NODE',
}

export enum TbRelationDirectionEnum {
  FROM = 'FROM',
  TO = 'TO',
}

export enum TbRuleChainTypeEnum {
  CORE = 'CORE',
  EDGE = 'EDGE',
}
