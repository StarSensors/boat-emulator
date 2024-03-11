import { TbEntityId } from './common'
import { TbRuleChainTypeEnum } from './enums'

export type TbRuleChain = {
  additionalInfo?: object
  id?: TbEntityId
  createdTime?: number
  tenantId?: TbEntityId
  name: string
  type?: TbRuleChainTypeEnum
  firstRuleNodeId?: TbEntityId
  root?: boolean
  debugMode?: boolean
  configuration?: object
}

export type TbRuleChainMetaData = {
  ruleChainId: TbEntityId
  firstNodeIndex: number
  nodes: TbRuleNode[]
  connections: TbNodeConnectionInfo[]
  ruleChainConnections: TbRuleChainConnectionInfo[]
}

export type TbRuleNode = {
  externalId?: TbEntityId
  id?: TbEntityId
  createdTime?: number
  ruleChainId?: TbEntityId
  type?: string
  name?: string
  debugMode?: boolean
  singletonMode?: boolean
  configurationVersion?: number
  configuration?: object
  additionalInfo?: object
}

export type TbNodeConnectionInfo = {
  fromIndex: number
  toIndex: number
  type: string
}

export type TbRuleChainConnectionInfo = {
  fromIndex: number
  targetRuleChainId: TbEntityId
  additionalInfo: object
  type: string
}
