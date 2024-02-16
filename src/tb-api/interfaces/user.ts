import { TbEntityId } from './common'
import { TbAuthorityEnum } from './enums'

export type TbUser = {
  id?: TbEntityId
  createdTime?: number
  tenantId?: TbEntityId
  customerId?: TbEntityId
  email: string
  name?: string
  authority: TbAuthorityEnum
  firstName?: string
  lastName?: string
  phone?: string
  additionalInfo?: any
}

export type TbUserActivationLink = string
