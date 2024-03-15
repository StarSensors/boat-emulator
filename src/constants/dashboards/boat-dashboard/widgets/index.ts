import { BdbDevice, BdbWidgetOptions } from '../types'
import { battery_level } from './battery_level'

export const widgetMap: { [key: string]: any } = {
  battery_level,
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
