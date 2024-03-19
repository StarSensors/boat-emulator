import pino from 'pino'
import { v4 } from 'uuid'
import _ from 'lodash'
import { inspect } from 'util'

import { settings } from './settings'
import { timewindow } from './timewindow'
import { states } from './states'
import { renderEntityAliases } from './entity-aliases'
import { renderDeviceWidget, renderBoatWidget } from './widgets'

import { BdbBoat, BdbDevice } from './types'

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

const setDeviceKindAndSort = (device: BdbDevice) => {
  if (device.type.startsWith('Bridge')) {
    device.kind = 'Environment sensor'
    device.sort = '000'
  } else if (device.type.startsWith('Battery')) {
    device.kind = 'Battery sensor'
    device.sort = '020'
  } else if (device.type.startsWith('Environment')) {
    device.kind = 'Environment sensor'
    device.sort = '010'
  } else if (device.type.startsWith('Water')) {
    device.kind = 'Water sensor'
    device.sort = '030'
  } else if (device.type.startsWith('Door')) {
    device.kind = 'Door sensor'
    device.sort = '040'
  } else if (device.type.startsWith('Hall')) {
    device.kind = 'Door sensor'
    device.sort = '040'
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

const setDeviceWidgets =
  (rowStart: number) => (device: BdbDevice, index: number) => {
    if (!device.widgets) {
      device.widgets = []
    }

    const row = rowStart + index * 4

    switch (device.kind) {
      case 'Battery sensor':
        device.widgets.push(
          renderDeviceWidget('battery_level', device, { row, col: 0 }),
        )
        device.widgets.push(
          renderDeviceWidget('battery_voltage', device, { row, col: 8 }),
        )
        device.widgets.push(
          renderDeviceWidget('basic_timeseries', device, {
            row,
            col: 16,
            config: { dataKeys: ['battery_level', 'battery_voltage'] },
          }),
        )
        break
      case 'Environment sensor':
        device.widgets.push(
          renderDeviceWidget('temperature', device, { row, col: 0 }),
        )
        device.widgets.push(
          renderDeviceWidget('humidity', device, { row, col: 8 }),
        )
        device.widgets.push(
          renderDeviceWidget('basic_timeseries', device, {
            row,
            col: 16,
            config: { dataKeys: ['temperature', 'humidity'] },
          }),
        )
        break
      case 'Bridge':
        device.widgets.push(
          renderDeviceWidget('temperature', device, { row, col: 0 }),
        )
        device.widgets.push(
          renderDeviceWidget('humidity', device, { row, col: 8 }),
        )
        break
      default:
        logger.warn(`No widgets for device kind: ${device.kind}`)
        return
    }
  }

export const renderBoatDashboard = (
  boat: BdbBoat,
  devices: BdbDevice[],
): any => {
  const widgetRowStart = 2
  _.chain(devices)
    .each(setDeviceKindAndSort)
    .sortBy(d => `${d.sort}-${d.kind}-${d.label}`)
    .each(setDeviceEntityAlias)
    .each(setDeviceWidgets(widgetRowStart))
    .value()
  const entityAliases = renderEntityAliases(boat, devices)
  const boatEntityAlias = _.find(entityAliases, { alias: 'Boat' })
  if (!boatEntityAlias) {
    throw new Error('Boat entity alias not found')
  }
  boat.entityAlias = boatEntityAlias

  const boatWidgets = [
    renderBoatWidget('alarm_count', boat, {
      row: 0,
      col: 0,
      sizeX: 8,
      sizeY: 2,
      config: { severityList: ['WARNING'] },
    }),
    renderBoatWidget('alarm_count', boat, {
      row: 0,
      col: 8,
      sizeX: 8,
      sizeY: 2,
      config: { severityList: ['CRITICAL'] },
    }),
  ]

  const deviceWidgets = _.chain(devices).flatMap('widgets').compact().value()
  const alarmsTableWidgets = [
    renderBoatWidget('alarms_table', boat, {
      row:
        widgetRowStart +
        _.reduce(
          devices,
          (sum, d) => sum + (d.widgets?.length ? d.widgets[0].sizeY : 0),
          0,
        ),
      col: 0,
      sizeX: 16,
      sizeY: 10,
    }),
  ]

  const boatWidgetsMap = _.keyBy(boatWidgets, 'id')
  const deviceWidgetsMap = _.keyBy(deviceWidgets, 'id')
  const alarmsTableWidgetsMap = _.keyBy(alarmsTableWidgets, 'id')

  return {
    title: boat.label,
    name: boat.name,
    image: null,
    mobileHide: false,
    mobileOrder: null,
    configuration: {
      description: '',
      widgets: {
        ...boatWidgetsMap,
        ...deviceWidgetsMap,
        ...alarmsTableWidgetsMap,
      },
      entityAliases,
      states: states(boat, [
        ...boatWidgets,
        ...deviceWidgets,
        ...alarmsTableWidgets,
      ]),
      settings,
      timewindow,
      filters: {},
    },
  }
}
