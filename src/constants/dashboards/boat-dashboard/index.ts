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

const setDeviceKind = (device: BdbDevice) => {
  if (device.type.startsWith('Battery')) {
    device.kind = 'battery'
  } else if (device.type.startsWith('Environment')) {
    device.kind = 'environment'
  } else if (device.type.startsWith('Water')) {
    device.kind = 'water'
  } else if (device.type.startsWith('Door')) {
    device.kind = 'door'
  } else if (device.type.startsWith('Hall')) {
    device.kind = 'door'
  } else {
    logger.warn(`Unsupported device type: ${device.type}`)
  }
}

const setDeviceEntityAlias = (device: BdbDevice) => {
  device.entityAlias = {
    id: v4(),
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
}

const setDeviceWidgets = (device: BdbDevice, index: number) => {
  if (!device.widgets) {
    device.widgets = []
  }

  switch (device.type) {
    case 'Battery Monitor Model 001':
    case 'Battery Monitor Model 002':
      device.widgets.push(renderWidget('battery_level', device))
      device.widgets.push(renderWidget('battery_voltage', device))
      break
    default:
      logger.warn(`No widgets for device type: ${device.type}`)
      return
  }

  const count = 0
  for (const widget of device.widgets) {
    widget.row = index * 4
    widget.col = count * 4

    Math.ceil(_.reduce(device.widgets, (sum, w) => sum + w.sizeX, 0))
  }
}

export const renderBoatDashboard = (
  boat: BdbBoat,
  devices: BdbDevice[],
): any => {
  _.chain(devices)
    .each(setDeviceKind)
    .sortBy('kind')
    .each(setDeviceEntityAlias)
    .each(setDeviceWidgets)
    .value()

  const allDeviceWidgets = _.chain(devices).flatMap('widgets').compact().value()
  const widgetMap = _.keyBy(allDeviceWidgets, 'id')

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
      states: states(boat, allDeviceWidgets),
      settings,
      timewindow,
      filters: {},
    },
  }
}
