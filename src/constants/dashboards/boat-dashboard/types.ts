export type BdbBoat = {
  id: string
  name: string
  label: string
  entityAlias?: any
}

export type BdbDevice = {
  id: string
  name: string
  label: string
  type: string
  kind?: string
  sort?: string
  widgets?: any[]
  entityAlias?: any
  config?: any
}

export type BdbWidgetOptions = {
  sizeX?: number
  sizeY?: number
  row?: number
  col?: number
  config?: any
}
