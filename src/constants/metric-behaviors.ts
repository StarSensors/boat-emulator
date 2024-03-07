import { MetricBehaviors } from '../types'

export const metricBehaviors: MetricBehaviors = {
  battery_level: { min: 20, max: 100, step: 0.1, start: 98, trend: 'down' },
  battery_voltage: {
    min: 10.8,
    max: 15.0,
    step: 0.01,
    start: 13.4,
    trend: 'down',
  },
  humidity: { min: 20, max: 95, step: 0.1, start: 67 },
  open: { min: 0, max: 1, step: 1, start: 1 },
  movement_counter: { min: 0, max: 254, step: 1, start: 0, trend: 'up' },
  sensor_battery_level: {
    min: 20,
    max: 99,
    step: 0.1,
    start: 100,
    trend: 'down',
  },
  sensor_battery_voltage: {
    min: 2.4,
    max: 3.2,
    step: 0.001,
    start: 3.2,
    trend: 'down',
  },
  temperature: { min: -10, max: 90, step: 0.2, start: 20 },
  water: { min: 0, max: 1, step: 1, start: 0 },
}
