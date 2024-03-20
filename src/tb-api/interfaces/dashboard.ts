import { TbEntityId } from './common'

export type TbShortCustomerInfo = {
  public?: boolean
  customerId?: TbEntityId
  title?: string
}

export type TbDashboard = {
  id?: TbEntityId
  createdTime?: number
  tenantId?: TbEntityId
  name?: string
  title: string
  assignedCustomers?: TbShortCustomerInfo[]
  mobileHide?: boolean
  mobileOrder?: number
  image?: string
  configuration?: object
}

export type TbDashboardInfo = {
  id?: TbEntityId
  createdTime?: number
  tenantId?: TbEntityId
  name?: string
  title: string
  assignedCustomers?: TbShortCustomerInfo[]
  mobileHide?: boolean
  mobileOrder?: number
  image?: string
}
