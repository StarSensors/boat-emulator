import { DeviceProfile } from '../types'

export const deviceProfiles: DeviceProfile[] = [
  {
    id: 'ee3ce488-3b8b-422d-9a60-750eb358d000',
    name: 'Bridge Model 001',
    description: 'Bridge for IoT devices',
    metrics: [
      'sensor_battery_voltage',
      'sensor_battery_level',
      'temperature',
      'humidity',
    ],
    type: 'bridge',
  },
  {
    id: 'ee3ce488-3b8b-422d-9a60-750eb358d001',
    name: 'Water Sensor Model 001',
    description: 'Water sensor for detecting water leaks',
    metrics: ['sensor_battery_voltage', 'water'],
    type: 'sensor',
  },
  {
    id: 'ee3ce488-3b8b-422d-9a60-750eb358d002',
    name: 'Battery Monitor Model 001',
    description: 'Battery monitor for detecting battery voltage',
    metrics: ['sensor_battery_voltage', 'battery_voltage'],
    type: 'sensor',
  },
  {
    id: 'ee3ce488-3b8b-422d-9a60-750eb358d003',
    name: 'Battery Monitor Model 002',
    description: 'Battery monitor for detecting battery voltage and level',
    metrics: ['sensor_battery_voltage', 'battery_voltage', 'battery_level'],
    type: 'sensor',
  },
  {
    id: 'ee3ce488-3b8b-422d-9a60-750eb358d004',
    name: 'Environmental Sensor Model 001',
    description: 'Environmental sensor for detecting temperature and humidity',
    metrics: [
      'sensor_battery_voltage',
      'sensor_battery_level',
      'temperature',
      'humidity',
    ],
    type: 'sensor',
  },
  {
    id: 'ee3ce488-3b8b-422d-9a60-750eb358d005',
    name: 'Environmental Sensor Model 002',
    description:
      'Environmental sensor for detecting temperature, humidity, and movement',
    metrics: [
      'sensor_battery_voltage',
      'temperature',
      'humidity',
      'movement_counter',
    ],
    type: 'sensor',
  },
  {
    id: 'ee3ce488-3b8b-422d-9a60-750eb358d006',
    name: 'Hall Sensor Model 001',
    description: 'Hall sensor for detecting open and close events',
    metrics: ['sensor_battery_voltage', 'open'],
    type: 'sensor',
  },
]
