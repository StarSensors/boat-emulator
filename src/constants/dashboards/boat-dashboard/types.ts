export type BdbBoat = {
  id: string
  name: string
  label: string
}

export type BdbDevice = {
  id: string
  name: string
  label: string
  type: string
  kind?: string
  widgets?: any[]
  entityAlias?: any
}

export type BdbWidgetOptions = {
  sizeX?: number
  sizeY?: number
  row?: number
  col?: number
}
