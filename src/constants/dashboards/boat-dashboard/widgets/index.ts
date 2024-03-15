import { BdbDevice, BdbWidgetOptions } from '../types'
import { battery_level } from './battery_level'
import { battery_voltage } from './battery_voltage'

export const widgetMap: { [key: string]: any } = {
  battery_level,
  battery_voltage,
}

export const renderWidget = (
  type: string,
  device: BdbDevice,
  options: BdbWidgetOptions = {},
): any => {
  if (!widgetMap[type]) {
    throw new Error(`Unsupported widget type: ${type}`)
  }

  return widgetMap[type](device, options)
}
