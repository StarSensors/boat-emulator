import _ from 'lodash'
import { v4 } from 'uuid'

import { BdbBoat, BdbDevice } from './types'

export const entityAliases = (boat: BdbBoat, devices: BdbDevice[]) => {
  const customerUuid = v4()
  const boatUuid = v4()

  const deviceEntityAliases = _.chain(devices)
    .map('entityAlias')
    .keyBy('id')
    .value()

  return {
    [customerUuid]: {
      id: customerUuid,
      alias: 'Customer',
      filter: {
        type: 'singleEntity',
        resolveMultiple: false,
        singleEntity: {
          entityType: 'CURRENT_CUSTOMER',
          id: '462d2a50-e073-11ee-9e60-2bce6b2714af',
        },
      },
    },
    [boatUuid]: {
      id: boatUuid,
      alias: 'Boat',
      filter: {
        type: 'singleEntity',
        resolveMultiple: false,
        singleEntity: {
          entityType: 'ASSET',
          id: boat.id,
        },
      },
    },
    ...deviceEntityAliases,
  }
}
