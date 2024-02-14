import { TbEntity } from './common'

export type TbDevice = {
  id?: TbEntity
  createdTime?: number
  tenantId?: TbEntity
  customerId?: TbEntity
  name: string
  type?: string
  label?: string
  deviceProfileId?: TbEntity
  deviceData?: {
    configuration: any
    transportConfiguration: any
  }
  firmwareId?: TbEntity
  softwareId?: TbEntity
  additionalInfo?: any
  externalId?: TbEntity
}

export type TbDeviceInfo = TbDevice & {
  customerTitle?: string
  customerIsPublic?: boolean
  deviceProfileName?: string
  active?: boolean
}