import { TbEntityId } from './common'

export type TbAsset = {
  id?: TbEntityId
  createdTime?: number
  tenantId?: TbEntityId
  customerId?: TbEntityId
  name: string
  type?: string
  label?: string
  assetProfileId?: TbEntityId
  additionalInfo?: any
  externalId?: TbEntityId
}

export type TbAssetInfo = TbAsset & {
  tenantName?: string
  customerTitle?: string
  assetProfileName?: string
  customerIsPublic?: boolean
}
