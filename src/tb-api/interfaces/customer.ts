import { TbEntityId } from './common'

export type TbCustomer = {
  id?: TbEntityId
  title: string
  tenantId?: TbEntityId
  country?: string
  state?: string
  city?: string
  address?: string
  address2?: string
  zip?: string
  phone?: string
  email?: string
  additionalInfo?: any
}
