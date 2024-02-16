import { TbEntityId } from './common'
import {
  TbEntityEnum,
  TbRelationTypeGroupEnum,
  TbRelationDirectionEnum,
} from './enums'

export type TbRelation = {
  from?: TbEntityId
  to?: TbEntityId
  type?: string
  typeGroup?: TbRelationTypeGroupEnum
  additionalInfo?: object
}

export type TbRelationInfo = {
  from?: TbEntityId
  to?: TbEntityId
  type?: string
  typeGroup?: TbRelationTypeGroupEnum
  additionalInfo?: object
  fromName?: string
  toName?: string
}

export type TbRelationsSearchParameters = {
  rootId?: string
  rootType?: TbEntityEnum
  direction?: TbRelationDirectionEnum
  relationTypeGroup?: TbRelationTypeGroupEnum
  maxLevel?: number
  fetchLastLevelOnly?: boolean
}

export type TbRelationEntityTypeFilter = {
  relationType?: string
  entityTypes?: TbEntityEnum[]
}

export type TbRelationsQuery = {
  filters?: TbRelationEntityTypeFilter[]
  parameters?: TbRelationsSearchParameters
}
