import pino from 'pino'
import { v4 } from 'uuid'

import { settings } from './settings'
import { timewindow } from './timewindow'
import { states } from './states'
import { entityAliases } from './entity-aliases'
import { renderWidget } from './widgets'

import { BdbBoat, BdbDevice } from './types'
import _ from 'lodash'

const logger = pino({
  level:
    process.env.LOG_LEVEL === 'debug' || process.env.NODE_ENV !== 'production'
      ? 'debug'
      : 'info',
  transport:
    process.env.NODE_ENV !== 'production'
      ? { target: 'pino-pretty' }
      : undefined,
})

export const renderBoatDashboard = (
  boat: BdbBoat,
  devices: BdbDevice[],
): any => {
  _.chain(devices)
    .sortBy('kind')
    .each((device, index) => {
      const deviceEntityAliasId = v4()

      device.entityAlias = {
        id: deviceEntityAliasId,
        alias: device.name,
        filter: {
          type: 'singleEntity',
          resolveMultiple: false,
          singleEntity: {
            entityType: 'DEVICE',
            id: device.id,
          },
        },
      }

      let widget
      switch (device.type) {
        case 'Battery Monitor Model 001':
        case 'Battery Monitor Model 002':
          widget = renderWidget('battery_level', device)
          break
        default:
          logger.warn(`Unsupported device type: ${device.type}`)
          break
      }

      if (widget) {
        widget.row = index
        widget.col = Math.ceil(
          _.reduce(device.widgets, (sum, w) => sum + w.sizeX, 0),
        )
        device.widgets.push(widget)
      }
    })
    .value()

  const widgets = _.chain(devices).flatMap('widgets').value()
  const widgetMap = _.keyBy(widgets, 'id')

  return {
    title: boat.label,
    name: boat.name,
    image: null,
    mobileHide: false,
    mobileOrder: null,
    configuration: {
      description: '',
      widgets: widgetMap,
      entityAliases: entityAliases(boat, devices),
      states: states(boat, widgets),
      settings,
      timewindow,
      filters: {},
    },
  }
}
