import { TbEntityId } from './common'

export type TbDevice = {
  id?: TbEntityId
  createdTime?: number
  tenantId?: TbEntityId
  customerId?: TbEntityId
  name: string
  type?: string
  label?: string
  deviceProfileId?: TbEntityId
  deviceData?: {
    configuration: any
    transportConfiguration: any
  }
  firmwareId?: TbEntityId
  softwareId?: TbEntityId
  additionalInfo?: any
  externalId?: TbEntityId
}

export type TbDeviceInfo = TbDevice & {
  customerTitle?: string
  customerIsPublic?: boolean
  deviceProfileName?: string
  active?: boolean
}
