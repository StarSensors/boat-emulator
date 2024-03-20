import { Customer } from '../types'

export const customers: Customer[] = [
  { title: 'Pelikaan Customer', boat: 'Pelikaan' },
  { title: 'Vento Customer', boat: 'Vento' },
  { title: 'Zephyr Customer', boat: 'Zephyr' },
]

export const customerAlarmSettings = {
  customer_alarm_battery_voltage_low_critical_enabled: true,
  customer_alarm_battery_voltage_low_critical_threshold: 11.7,
  customer_alarm_battery_voltage_low_warning_enabled: true,
  customer_alarm_battery_voltage_low_warning_threshold: 12.0,
  customer_alarm_humidity_high_critical_enabled: true,
  customer_alarm_humidity_high_critical_threshold: 85,
  customer_alarm_humidity_high_warning_enabled: true,
  customer_alarm_humidity_high_warning_threshold: 75,
  customer_alarm_open_high_warning_enabled: true,
  customer_alarm_open_high_warning_threshold: 1,
  customer_alarm_temperature_high_warning_enabled: true,
  customer_alarm_temperature_high_warning_threshold: 50,
  customer_alarm_temperature_low_warning_enabled: true,
  customer_alarm_temperature_low_warning_threshold: 0,
  customer_alarm_water_high_warning_enabled: true,
  customer_alarm_water_high_warning_threshold: 1,
}
