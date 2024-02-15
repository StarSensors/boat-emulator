import { TbEntity } from './common'

export type TbCustomer = {
  id?: TbEntity
  title: string
  tenantId?: TbEntity
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
