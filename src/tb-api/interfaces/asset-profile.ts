import { TbEntityId } from './common'

export type TbAssetProfileInfo = {
  id?: TbEntityId
  name: string
  image?: string
  defaultDashboardId?: TbEntityId
  tenantId?: TbEntityId
}

export type TbAssetProfile = TbAssetProfileInfo & {
  createdTime?: number
  default?: boolean
  defaultRuleChainId?: TbEntityId
  defaultQueueName?: string
  description?: string
  defaultEdgeRuleChainId?: TbEntityId
  externalId?: TbEntityId
}
