import { Customer } from '../types'

export const customers: Customer[] = [
  { title: 'Pelikaan Customer', boat: 'Pelikaan' },
  { title: 'Vento Customer', boat: 'Vento' },
  { title: 'Zephyr Customer', boat: 'Zephyr' },
]

export const customerAlarmSettings = {
  customer_alarm_battery_voltage_low_warning_enabled: true,
  customer_alarm_battery_voltage_low_warning_threshold: 11.8,
  customer_alarm_battery_voltage_low_critical_enabled: true,
  customer_alarm_battery_voltage_low_critical_threshold: 11.6,
  customer_alarm_water_warning_enabled: true,
  customer_alarm_water_warning_threshold: 1,
  customer_alarm_door_open_enabled: true,
  customer_alarm_door_open_threshold: 1,
  customer_alarm_humidity_warning_enabled: true,
  customer_alarm_humidity_warning_threshold: 70,
  customer_alarm_humidity_critical_enabled: true,
  customer_alarm_humidity_critical_threshold: 80,
}
