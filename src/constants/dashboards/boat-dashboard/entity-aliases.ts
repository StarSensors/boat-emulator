import { v4 } from 'uuid'

import { BdbBoat } from './types'

export const entityAliases = (boat: BdbBoat) => {
  const customerUuid = v4()
  const boatUuid = v4()

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
  }
}
