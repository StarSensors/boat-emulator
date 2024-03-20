import _ from 'lodash'
import { v4 } from 'uuid'
import pluralize from 'pluralize'
// import { inspect } from 'util'

import { BdbBoat, BdbDevice } from './types'

const capitalize = (string: string): string => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export const renderEntityAliases = (boat: BdbBoat, devices: BdbDevice[]) => {
  const customerUuid = v4()
  const boatUuid = v4()

  const deviceEntityAliases = _.chain(devices)
    .map('entityAlias')
    .keyBy('id')
    .value()

  const deviceTypeEntityAliases = _.chain(devices)
    .groupBy('kind')
    .map((devices, kind) => {
      return {
        id: v4(),
        alias: capitalize(pluralize(kind)),
        filter: {
          type: 'deviceType',
          resolveMultiple: true,
          deviceTypes: devices.map(device => device.type),
        },
      }
    })
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
          id: '13814000-1dd2-11b2-8080-808080808080',
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
    ...deviceTypeEntityAliases,
    ...deviceEntityAliases,
  }
}
