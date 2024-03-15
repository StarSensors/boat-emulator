export type BdbBoat = {
  id: string
  name: string
  label: string
}

type BdbDeviceTypes = 'Battery Monitor Model 001' | 'Battery Monitor Model 002'

export type BdbDevice = {
  id: string
  name: string
  label: string
  type: BdbDeviceTypes
  kind: string
  widgets: any[]
  entityAlias?: any
}

export type BdbWidgetOptions = {
  sizeX?: number
  sizeY?: number
  row?: number
  col?: number
}
