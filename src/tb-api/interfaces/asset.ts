import { TbEntity } from './common'

export type TbAsset = {
  id?: TbEntity
  createdTime?: number
  tenantId?: TbEntity
  customerId?: TbEntity
  name: string
  type?: string
  label?: string
  assetProfileId?: TbEntity
  additionalInfo?: any
  externalId?: TbEntity
}

export type TbAssetInfo = TbAsset & {
  tenantName?: string
  customerTitle?: string
  assetProfileName?: string
  customerIsPublic?: boolean
}
