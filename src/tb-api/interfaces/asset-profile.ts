import { TbEntity } from './common'

export type TbAssetProfileInfo = {
  id?: TbEntity
  name: string
  image?: string
  defaultDashboardId?: TbEntity
  tenantId?: TbEntity
}

export type TbAssetProfile = TbAssetProfileInfo & {
  createdTime?: number
  default?: boolean
  defaultRuleChainId?: TbEntity
  defaultQueueName?: string
  description?: string
  defaultEdgeRuleChainId?: TbEntity
  externalId?: TbEntity
}
