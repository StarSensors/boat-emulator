import { TbEntity } from './common'
import { TbAuthorityEnum } from './enums'

export type TbUser = {
  id?: TbEntity
  createdTime?: number
  tenantId?: TbEntity
  customerId?: TbEntity
  email: string
  name?: string
  authority: TbAuthorityEnum
  firstName?: string
  lastName?: string
  phone?: string
  additionalInfo?: any
}

export type TbUserActivationLink = string
