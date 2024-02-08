import { TbEntity } from './common'

export type TbDeviceGroup = {
  id: TbEntity
  name: string
}

export type TbDevice = {
  id?: TbEntity
  createdTime?: number
  tenantId?: TbEntity
  customerId?: TbEntity
  ownerId?: TbEntity
  name: string
  type?: string
  label: string
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
  ownerName?: string
  groups?: TbDeviceGroup[]
  active?: boolean
}
