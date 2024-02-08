import { MetricBehaviors } from '../types'

export const metricBehaviors: MetricBehaviors = {
  battery_level_sensor: {
    min: 20,
    max: 99,
    step: 0.1,
    start: 100,
    trend: 'down',
  },
  battery_level: { min: 20, max: 100, step: 0.1, start: 98, trend: 'down' },
  battery_voltage_sensor: {
    min: 2.8,
    max: 3.4,
    step: 0.001,
    start: 3.4,
    trend: 'down',
  },
  battery_voltage: {
    min: 10.8,
    max: 15.0,
    step: 0.01,
    start: 13.4,
    trend: 'down',
  },
  close_counter: { min: 0, max: 100, step: 1, start: 0, trend: 'up' },
  close: { min: 0, max: 1, step: 1, start: 1 },
  humidity: { min: 20, max: 95, step: 0.1, start: 67 },
  movement_counter: { min: 0, max: 254, step: 1, start: 0, trend: 'up' },
  temperature: { min: -10, max: 50, step: 0.1, start: 20 },
  water: { min: 0, max: 1, step: 1, start: 0 },
}
