import { BdbBoat, BdbDevice, BdbWidgetOptions } from '../types'

import { alarm_count } from './alarm_count'
import { alarms_table } from './alarms_table'
import { battery_level } from './battery_level'
import { battery_voltage } from './battery_voltage'
import { humidity } from './humidity'
import { temperature } from './temperature'

export const widgetMap: { [key: string]: any } = {
  alarm_count,
  alarms_table,
  battery_level,
  battery_voltage,
  humidity,
  temperature,
}

export const renderBoatWidget = (
  type: string,
  asset: BdbBoat,
  options: BdbWidgetOptions,
): any => {
  if (!widgetMap[type]) {
    throw new Error(`Unsupported widget type: ${type}`)
  }

  return widgetMap[type](asset, options)
}

export const renderDeviceWidget = (
  type: string,
  device: BdbDevice,
  options: BdbWidgetOptions = {},
): any => {
  if (!widgetMap[type]) {
    throw new Error(`Unsupported widget type: ${type}`)
  }

  return widgetMap[type](device, options)
}
