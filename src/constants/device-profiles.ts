import { DeviceProfile } from '../types'

export const deviceProfiles: DeviceProfile[] = [
  {
    id: 'ee3ce488-3b8b-422d-9a60-750eb358d000',
    name: 'Bridge Model 001',
    description: 'Bridge for IoT devices',
    alarms: [],
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
    alarms: [],
    metrics: ['sensor_battery_voltage', 'water'],
    type: 'sensor',
  },
  {
    id: 'ee3ce488-3b8b-422d-9a60-750eb358d002',
    name: 'Battery Monitor Model 001',
    alarms: [
      {
        id: 'ba94564e-2a68-23d5-37b4-15401cbdad6f',
        alarmType: 'Low battery warning',
        createRules: {
          WARNING: {
            condition: {
              condition: [
                {
                  key: {
                    type: 'TIME_SERIES',
                    key: 'battery_voltage',
                  },
                  valueType: 'NUMERIC',
                  value: null,
                  predicate: {
                    type: 'NUMERIC',
                    operation: 'LESS_OR_EQUAL',
                    value: {
                      defaultValue: 0,
                      userValue: null,
                      dynamicValue: {
                        sourceType: 'CURRENT_DEVICE',
                        sourceAttribute:
                          'customer_alarm_battery_voltage_low_warning_threshold',
                        inherit: true,
                      },
                    },
                  },
                },
                {
                  key: {
                    type: 'ATTRIBUTE',
                    key: 'customer_alarm_battery_voltage_low_warning_enabled',
                  },
                  valueType: 'BOOLEAN',
                  value: null,
                  predicate: {
                    type: 'BOOLEAN',
                    operation: 'EQUAL',
                    value: {
                      defaultValue: true,
                      userValue: null,
                      dynamicValue: {
                        sourceType: 'CURRENT_DEVICE',
                        sourceAttribute:
                          'customer_alarm_battery_voltage_low_warning_enabled',
                        inherit: true,
                      },
                    },
                  },
                },
              ],
              spec: {
                type: 'SIMPLE',
              },
            },
            schedule: null,
            alarmDetails: null,
            dashboardId: null,
          },
        },
        clearRule: {
          condition: {
            condition: [
              {
                key: {
                  type: 'TIME_SERIES',
                  key: 'battery_voltage',
                },
                valueType: 'NUMERIC',
                value: null,
                predicate: {
                  type: 'NUMERIC',
                  operation: 'GREATER',
                  value: {
                    defaultValue: 0,
                    userValue: null,
                    dynamicValue: {
                      sourceType: 'CURRENT_DEVICE',
                      sourceAttribute:
                        'customer_alarm_battery_voltage_low_warning_threshold',
                      inherit: true,
                    },
                  },
                },
              },
            ],
            spec: {
              type: 'SIMPLE',
            },
          },
          schedule: null,
          alarmDetails: null,
          dashboardId: null,
        },
        propagate: false,
        propagateToOwner: false,
        propagateToTenant: false,
        propagateRelationTypes: null,
      },
    ],
    description: 'Battery monitor for detecting battery voltage',
    metrics: ['sensor_battery_voltage', 'battery_voltage'],
    type: 'sensor',
  },
  {
    id: 'ee3ce488-3b8b-422d-9a60-750eb358d003',
    name: 'Battery Monitor Model 002',
    description: 'Battery monitor for detecting battery voltage and level',
    alarms: [],
    metrics: ['sensor_battery_voltage', 'battery_voltage', 'battery_level'],
    type: 'sensor',
  },
  {
    id: 'ee3ce488-3b8b-422d-9a60-750eb358d004',
    name: 'Environmental Sensor Model 001',
    alarms: [],
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
    alarms: [],
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
    alarms: [],
    metrics: ['sensor_battery_voltage', 'open'],
    type: 'sensor',
  },
]
