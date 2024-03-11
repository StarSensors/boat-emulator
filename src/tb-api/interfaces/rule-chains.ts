import { TbEntityId } from './common'
import { TbRuleChainTypeEnum } from './enums'

export type TbRuleChain = {
  additionalInfo?: object
  id?: TbEntityId
  createdTime?: number
  tenantId: TbEntityId
  name: string
  type?: TbRuleChainTypeEnum
  firstRuleNodeId?: TbEntityId
  root?: boolean
  debugMode?: boolean
  configuration?: object
}
