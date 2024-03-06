import { DeviceProfile } from '../types'

export const deviceProfiles: DeviceProfile[] = [
  {
    id: 'ee3ce488-3b8b-422d-9a60-750eb358d000',
    name: 'Bridge Model 001',
    description: 'Bridge for IoT devices',
    alarms: [
      {
        id: '7f8ff7d9-8272-602a-205c-926b5da90b72',
        alarmType: 'Low temperature',
        createRules: {
          WARNING: {
            condition: {
              condition: [
                {
                  key: {
                    type: 'TIME_SERIES',
                    key: 'temperature',
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
                          'customer_alarm_temperature_low_warning_threshold',
                        inherit: true,
                      },
                    },
                  },
                },
                {
                  key: {
                    type: 'CONSTANT',
                    key: 'customer_alarm_temperature_low_warning_enabled',
                  },
                  valueType: 'BOOLEAN',
                  value: true,
                  predicate: {
                    type: 'BOOLEAN',
                    operation: 'EQUAL',
                    value: {
                      defaultValue: false,
                      userValue: null,
                      dynamicValue: {
                        sourceType: 'CURRENT_DEVICE',
                        sourceAttribute:
                          'customer_alarm_temperature_low_warning_enabled',
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
                  key: 'temperature',
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
                        'customer_alarm_temperature_low_warning_threshold',
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
      {
        id: 'f612ed1b-e290-c312-c25d-39eb2856bd00',
        alarmType: 'High temperature',
        createRules: {
          WARNING: {
            condition: {
              condition: [
                {
                  key: {
                    type: 'TIME_SERIES',
                    key: 'temperature',
                  },
                  valueType: 'NUMERIC',
                  value: null,
                  predicate: {
                    type: 'NUMERIC',
                    operation: 'GREATER_OR_EQUAL',
                    value: {
                      defaultValue: 0,
                      userValue: null,
                      dynamicValue: {
                        sourceType: 'CURRENT_DEVICE',
                        sourceAttribute:
                          'customer_alarm_temperature_high_warning_threshold',
                        inherit: true,
                      },
                    },
                  },
                },
                {
                  key: {
                    type: 'CONSTANT',
                    key: 'customer_alarm_temperature_high_warning_enabled',
                  },
                  valueType: 'BOOLEAN',
                  value: true,
                  predicate: {
                    type: 'BOOLEAN',
                    operation: 'EQUAL',
                    value: {
                      defaultValue: false,
                      userValue: null,
                      dynamicValue: {
                        sourceType: 'CURRENT_DEVICE',
                        sourceAttribute:
                          'customer_alarm_temperature_high_warning_enabled',
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
                  key: 'temperature',
                },
                valueType: 'NUMERIC',
                value: null,
                predicate: {
                  type: 'NUMERIC',
                  operation: 'LESS',
                  value: {
                    defaultValue: 0,
                    userValue: null,
                    dynamicValue: {
                      sourceType: 'CURRENT_DEVICE',
                      sourceAttribute:
                        'customer_alarm_temperature_high_warning_threshold',
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
      {
        id: 'a1235481-9a44-f980-8f18-15f45b41367d',
        alarmType: 'High humidity',
        createRules: {
          CRITICAL: {
            condition: {
              condition: [
                {
                  key: {
                    type: 'TIME_SERIES',
                    key: 'humidity',
                  },
                  valueType: 'NUMERIC',
                  value: null,
                  predicate: {
                    type: 'NUMERIC',
                    operation: 'GREATER_OR_EQUAL',
                    value: {
                      defaultValue: 0,
                      userValue: null,
                      dynamicValue: {
                        sourceType: 'CURRENT_DEVICE',
                        sourceAttribute:
                          'customer_alarm_humidity_high_critical_threshold',
                        inherit: true,
                      },
                    },
                  },
                },
                {
                  key: {
                    type: 'CONSTANT',
                    key: 'customer_alarm_humidity_high_critical_enabled',
                  },
                  valueType: 'BOOLEAN',
                  value: true,
                  predicate: {
                    type: 'BOOLEAN',
                    operation: 'EQUAL',
                    value: {
                      defaultValue: false,
                      userValue: null,
                      dynamicValue: {
                        sourceType: 'CURRENT_DEVICE',
                        sourceAttribute:
                          'customer_alarm_humidity_high_critical_enabled',
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
          WARNING: {
            condition: {
              condition: [
                {
                  key: {
                    type: 'TIME_SERIES',
                    key: 'humidity',
                  },
                  valueType: 'NUMERIC',
                  value: null,
                  predicate: {
                    type: 'NUMERIC',
                    operation: 'GREATER_OR_EQUAL',
                    value: {
                      defaultValue: 0,
                      userValue: null,
                      dynamicValue: {
                        sourceType: 'CURRENT_DEVICE',
                        sourceAttribute:
                          'customer_alarm_humidity_high_warning_threshold',
                        inherit: true,
                      },
                    },
                  },
                },
                {
                  key: {
                    type: 'CONSTANT',
                    key: 'customer_alarm_humidity_high_warning_enabled',
                  },
                  valueType: 'BOOLEAN',
                  value: true,
                  predicate: {
                    type: 'BOOLEAN',
                    operation: 'EQUAL',
                    value: {
                      defaultValue: false,
                      userValue: null,
                      dynamicValue: {
                        sourceType: 'CURRENT_DEVICE',
                        sourceAttribute:
                          'customer_alarm_humidity_high_warning_enabled',
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
                  key: 'humidity',
                },
                valueType: 'NUMERIC',
                value: null,
                predicate: {
                  type: 'NUMERIC',
                  operation: 'LESS',
                  value: {
                    defaultValue: 0,
                    userValue: null,
                    dynamicValue: {
                      sourceType: 'CURRENT_DEVICE',
                      sourceAttribute:
                        'customer_alarm_humidity_high_warning_threshold',
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
    alarms: [
      {
        id: 'cbff758e-6d33-4fdd-b37e-b1e2ead6f226',
        alarmType: 'Water',
        createRules: {
          WARNING: {
            condition: {
              condition: [
                {
                  key: {
                    type: 'TIME_SERIES',
                    key: 'water',
                  },
                  valueType: 'NUMERIC',
                  value: null,
                  predicate: {
                    type: 'NUMERIC',
                    operation: 'EQUAL',
                    value: {
                      defaultValue: 1,
                      userValue: null,
                      dynamicValue: null,
                    },
                  },
                },
                {
                  key: {
                    type: 'CONSTANT',
                    key: 'customer_alarm_water_high_warning_enabled',
                  },
                  valueType: 'BOOLEAN',
                  value: true,
                  predicate: {
                    type: 'BOOLEAN',
                    operation: 'EQUAL',
                    value: {
                      defaultValue: false,
                      userValue: null,
                      dynamicValue: {
                        sourceType: 'CURRENT_DEVICE',
                        sourceAttribute:
                          'customer_alarm_water_high_warning_enabled',
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
                  key: 'water',
                },
                valueType: 'NUMERIC',
                value: null,
                predicate: {
                  type: 'NUMERIC',
                  operation: 'EQUAL',
                  value: {
                    defaultValue: 0,
                    userValue: null,
                    dynamicValue: null,
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
    metrics: ['sensor_battery_voltage', 'water'],
    type: 'sensor',
  },
  {
    id: 'ee3ce488-3b8b-422d-9a60-750eb358d002',
    name: 'Battery Monitor Model 001',
    alarms: [
      {
        id: 'ba94564e-2a68-23d5-37b4-15401cbdad6f',
        alarmType: 'Low battery',
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
                    type: 'CONSTANT',
                    key: 'customer_alarm_battery_voltage_low_warning_enabled',
                  },
                  valueType: 'BOOLEAN',
                  value: true,
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
          CRITICAL: {
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
                          'customer_alarm_battery_voltage_low_critical_threshold',
                        inherit: true,
                      },
                    },
                  },
                },
                {
                  key: {
                    type: 'CONSTANT',
                    key: 'customer_alarm_battery_voltage_low_critical_enabled',
                  },
                  valueType: 'BOOLEAN',
                  value: true,
                  predicate: {
                    type: 'BOOLEAN',
                    operation: 'EQUAL',
                    value: {
                      defaultValue: true,
                      userValue: null,
                      dynamicValue: {
                        sourceType: 'CURRENT_DEVICE',
                        sourceAttribute:
                          'customer_alarm_battery_voltage_low_critical_enabled',
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
    alarms: [
      {
        id: 'c7ebf904-04dd-42e2-a49c-ee5777c00a03',
        alarmType: 'Low battery',
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
                    type: 'CONSTANT',
                    key: 'customer_alarm_battery_voltage_low_warning_enabled',
                  },
                  valueType: 'BOOLEAN',
                  value: true,
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
          CRITICAL: {
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
                          'customer_alarm_battery_voltage_low_critical_threshold',
                        inherit: true,
                      },
                    },
                  },
                },
                {
                  key: {
                    type: 'CONSTANT',
                    key: 'customer_alarm_battery_voltage_low_critical_enabled',
                  },
                  valueType: 'BOOLEAN',
                  value: true,
                  predicate: {
                    type: 'BOOLEAN',
                    operation: 'EQUAL',
                    value: {
                      defaultValue: true,
                      userValue: null,
                      dynamicValue: {
                        sourceType: 'CURRENT_DEVICE',
                        sourceAttribute:
                          'customer_alarm_battery_voltage_low_critical_enabled',
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
    metrics: ['sensor_battery_voltage', 'battery_voltage', 'battery_level'],
    type: 'sensor',
  },
  {
    id: 'ee3ce488-3b8b-422d-9a60-750eb358d004',
    name: 'Environmental Sensor Model 001',
    alarms: [
      {
        id: '277e2ccc-0c20-447a-a1a1-872fc8470620',
        alarmType: 'Low temperature',
        createRules: {
          WARNING: {
            condition: {
              condition: [
                {
                  key: {
                    type: 'TIME_SERIES',
                    key: 'temperature',
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
                          'customer_alarm_temperature_low_warning_threshold',
                        inherit: true,
                      },
                    },
                  },
                },
                {
                  key: {
                    type: 'CONSTANT',
                    key: 'customer_alarm_temperature_low_warning_enabled',
                  },
                  valueType: 'BOOLEAN',
                  value: true,
                  predicate: {
                    type: 'BOOLEAN',
                    operation: 'EQUAL',
                    value: {
                      defaultValue: false,
                      userValue: null,
                      dynamicValue: {
                        sourceType: 'CURRENT_DEVICE',
                        sourceAttribute:
                          'customer_alarm_temperature_low_warning_enabled',
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
                  key: 'temperature',
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
                        'customer_alarm_temperature_low_warning_threshold',
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
      {
        id: '7d0642f6-f000-49f1-b37d-db7e8c65ad56',
        alarmType: 'High temperature',
        createRules: {
          WARNING: {
            condition: {
              condition: [
                {
                  key: {
                    type: 'TIME_SERIES',
                    key: 'temperature',
                  },
                  valueType: 'NUMERIC',
                  value: null,
                  predicate: {
                    type: 'NUMERIC',
                    operation: 'GREATER_OR_EQUAL',
                    value: {
                      defaultValue: 0,
                      userValue: null,
                      dynamicValue: {
                        sourceType: 'CURRENT_DEVICE',
                        sourceAttribute:
                          'customer_alarm_temperature_high_warning_threshold',
                        inherit: true,
                      },
                    },
                  },
                },
                {
                  key: {
                    type: 'CONSTANT',
                    key: 'customer_alarm_temperature_high_warning_enabled',
                  },
                  valueType: 'BOOLEAN',
                  value: true,
                  predicate: {
                    type: 'BOOLEAN',
                    operation: 'EQUAL',
                    value: {
                      defaultValue: false,
                      userValue: null,
                      dynamicValue: {
                        sourceType: 'CURRENT_DEVICE',
                        sourceAttribute:
                          'customer_alarm_temperature_high_warning_enabled',
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
                  key: 'temperature',
                },
                valueType: 'NUMERIC',
                value: null,
                predicate: {
                  type: 'NUMERIC',
                  operation: 'LESS',
                  value: {
                    defaultValue: 0,
                    userValue: null,
                    dynamicValue: {
                      sourceType: 'CURRENT_DEVICE',
                      sourceAttribute:
                        'customer_alarm_temperature_high_warning_threshold',
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
      {
        id: '9ce6738d-7a0b-450d-80db-a34201c400d8',
        alarmType: 'High humidity',
        createRules: {
          CRITICAL: {
            condition: {
              condition: [
                {
                  key: {
                    type: 'TIME_SERIES',
                    key: 'humidity',
                  },
                  valueType: 'NUMERIC',
                  value: null,
                  predicate: {
                    type: 'NUMERIC',
                    operation: 'GREATER_OR_EQUAL',
                    value: {
                      defaultValue: 0,
                      userValue: null,
                      dynamicValue: {
                        sourceType: 'CURRENT_DEVICE',
                        sourceAttribute:
                          'customer_alarm_humidity_high_critical_threshold',
                        inherit: true,
                      },
                    },
                  },
                },
                {
                  key: {
                    type: 'CONSTANT',
                    key: 'customer_alarm_humidity_high_critical_enabled',
                  },
                  valueType: 'BOOLEAN',
                  value: true,
                  predicate: {
                    type: 'BOOLEAN',
                    operation: 'EQUAL',
                    value: {
                      defaultValue: false,
                      userValue: null,
                      dynamicValue: {
                        sourceType: 'CURRENT_DEVICE',
                        sourceAttribute:
                          'customer_alarm_humidity_high_critical_enabled',
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
          WARNING: {
            condition: {
              condition: [
                {
                  key: {
                    type: 'TIME_SERIES',
                    key: 'humidity',
                  },
                  valueType: 'NUMERIC',
                  value: null,
                  predicate: {
                    type: 'NUMERIC',
                    operation: 'GREATER_OR_EQUAL',
                    value: {
                      defaultValue: 0,
                      userValue: null,
                      dynamicValue: {
                        sourceType: 'CURRENT_DEVICE',
                        sourceAttribute:
                          'customer_alarm_humidity_high_warning_threshold',
                        inherit: true,
                      },
                    },
                  },
                },
                {
                  key: {
                    type: 'CONSTANT',
                    key: 'customer_alarm_humidity_high_warning_enabled',
                  },
                  valueType: 'BOOLEAN',
                  value: true,
                  predicate: {
                    type: 'BOOLEAN',
                    operation: 'EQUAL',
                    value: {
                      defaultValue: false,
                      userValue: null,
                      dynamicValue: {
                        sourceType: 'CURRENT_DEVICE',
                        sourceAttribute:
                          'customer_alarm_humidity_high_warning_enabled',
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
                  key: 'humidity',
                },
                valueType: 'NUMERIC',
                value: null,
                predicate: {
                  type: 'NUMERIC',
                  operation: 'LESS',
                  value: {
                    defaultValue: 0,
                    userValue: null,
                    dynamicValue: {
                      sourceType: 'CURRENT_DEVICE',
                      sourceAttribute:
                        'customer_alarm_humidity_high_warning_threshold',
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
    alarms: [
      {
        id: 'c6b8cd78-88f3-4b19-98ba-a11a05e6ae60',
        alarmType: 'Low temperature',
        createRules: {
          WARNING: {
            condition: {
              condition: [
                {
                  key: {
                    type: 'TIME_SERIES',
                    key: 'temperature',
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
                          'customer_alarm_temperature_low_warning_threshold',
                        inherit: true,
                      },
                    },
                  },
                },
                {
                  key: {
                    type: 'CONSTANT',
                    key: 'customer_alarm_temperature_low_warning_enabled',
                  },
                  valueType: 'BOOLEAN',
                  value: true,
                  predicate: {
                    type: 'BOOLEAN',
                    operation: 'EQUAL',
                    value: {
                      defaultValue: false,
                      userValue: null,
                      dynamicValue: {
                        sourceType: 'CURRENT_DEVICE',
                        sourceAttribute:
                          'customer_alarm_temperature_low_warning_enabled',
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
                  key: 'temperature',
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
                        'customer_alarm_temperature_low_warning_threshold',
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
      {
        id: '8bf286d3-3fcb-4a2f-b073-bbd848932870',
        alarmType: 'High temperature',
        createRules: {
          WARNING: {
            condition: {
              condition: [
                {
                  key: {
                    type: 'TIME_SERIES',
                    key: 'temperature',
                  },
                  valueType: 'NUMERIC',
                  value: null,
                  predicate: {
                    type: 'NUMERIC',
                    operation: 'GREATER_OR_EQUAL',
                    value: {
                      defaultValue: 0,
                      userValue: null,
                      dynamicValue: {
                        sourceType: 'CURRENT_DEVICE',
                        sourceAttribute:
                          'customer_alarm_temperature_high_warning_threshold',
                        inherit: true,
                      },
                    },
                  },
                },
                {
                  key: {
                    type: 'CONSTANT',
                    key: 'customer_alarm_temperature_high_warning_enabled',
                  },
                  valueType: 'BOOLEAN',
                  value: true,
                  predicate: {
                    type: 'BOOLEAN',
                    operation: 'EQUAL',
                    value: {
                      defaultValue: false,
                      userValue: null,
                      dynamicValue: {
                        sourceType: 'CURRENT_DEVICE',
                        sourceAttribute:
                          'customer_alarm_temperature_high_warning_enabled',
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
                  key: 'temperature',
                },
                valueType: 'NUMERIC',
                value: null,
                predicate: {
                  type: 'NUMERIC',
                  operation: 'LESS',
                  value: {
                    defaultValue: 0,
                    userValue: null,
                    dynamicValue: {
                      sourceType: 'CURRENT_DEVICE',
                      sourceAttribute:
                        'customer_alarm_temperature_high_warning_threshold',
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
      {
        id: '789694b3-c937-4df7-baec-6604da8e2384',
        alarmType: 'High humidity',
        createRules: {
          CRITICAL: {
            condition: {
              condition: [
                {
                  key: {
                    type: 'TIME_SERIES',
                    key: 'humidity',
                  },
                  valueType: 'NUMERIC',
                  value: null,
                  predicate: {
                    type: 'NUMERIC',
                    operation: 'GREATER_OR_EQUAL',
                    value: {
                      defaultValue: 0,
                      userValue: null,
                      dynamicValue: {
                        sourceType: 'CURRENT_DEVICE',
                        sourceAttribute:
                          'customer_alarm_humidity_high_critical_threshold',
                        inherit: true,
                      },
                    },
                  },
                },
                {
                  key: {
                    type: 'CONSTANT',
                    key: 'customer_alarm_humidity_high_critical_enabled',
                  },
                  valueType: 'BOOLEAN',
                  value: true,
                  predicate: {
                    type: 'BOOLEAN',
                    operation: 'EQUAL',
                    value: {
                      defaultValue: false,
                      userValue: null,
                      dynamicValue: {
                        sourceType: 'CURRENT_DEVICE',
                        sourceAttribute:
                          'customer_alarm_humidity_high_critical_enabled',
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
          WARNING: {
            condition: {
              condition: [
                {
                  key: {
                    type: 'TIME_SERIES',
                    key: 'humidity',
                  },
                  valueType: 'NUMERIC',
                  value: null,
                  predicate: {
                    type: 'NUMERIC',
                    operation: 'GREATER_OR_EQUAL',
                    value: {
                      defaultValue: 0,
                      userValue: null,
                      dynamicValue: {
                        sourceType: 'CURRENT_DEVICE',
                        sourceAttribute:
                          'customer_alarm_humidity_high_warning_threshold',
                        inherit: true,
                      },
                    },
                  },
                },
                {
                  key: {
                    type: 'CONSTANT',
                    key: 'customer_alarm_humidity_high_warning_enabled',
                  },
                  valueType: 'BOOLEAN',
                  value: true,
                  predicate: {
                    type: 'BOOLEAN',
                    operation: 'EQUAL',
                    value: {
                      defaultValue: false,
                      userValue: null,
                      dynamicValue: {
                        sourceType: 'CURRENT_DEVICE',
                        sourceAttribute:
                          'customer_alarm_humidity_high_warning_enabled',
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
                  key: 'humidity',
                },
                valueType: 'NUMERIC',
                value: null,
                predicate: {
                  type: 'NUMERIC',
                  operation: 'LESS',
                  value: {
                    defaultValue: 0,
                    userValue: null,
                    dynamicValue: {
                      sourceType: 'CURRENT_DEVICE',
                      sourceAttribute:
                        'customer_alarm_humidity_high_warning_threshold',
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
    alarms: [
      {
        id: 'a00dc6ff-3cdd-ecac-5c96-32c91a4364d7',
        alarmType: 'Door open',
        createRules: {
          WARNING: {
            condition: {
              condition: [
                {
                  key: {
                    type: 'TIME_SERIES',
                    key: 'open',
                  },
                  valueType: 'NUMERIC',
                  value: null,
                  predicate: {
                    type: 'NUMERIC',
                    operation: 'EQUAL',
                    value: {
                      defaultValue: 1,
                      userValue: null,
                      dynamicValue: null,
                    },
                  },
                },
                {
                  key: {
                    type: 'CONSTANT',
                    key: 'customer_alarm_open_high_warning_enabled',
                  },
                  valueType: 'BOOLEAN',
                  value: true,
                  predicate: {
                    type: 'BOOLEAN',
                    operation: 'EQUAL',
                    value: {
                      defaultValue: false,
                      userValue: null,
                      dynamicValue: {
                        sourceType: 'CURRENT_DEVICE',
                        sourceAttribute:
                          'customer_alarm_open_high_warning_enabled',
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
                  key: 'open',
                },
                valueType: 'NUMERIC',
                value: null,
                predicate: {
                  type: 'NUMERIC',
                  operation: 'EQUAL',
                  value: {
                    defaultValue: 0,
                    userValue: null,
                    dynamicValue: null,
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
    metrics: ['sensor_battery_voltage', 'open'],
    type: 'sensor',
  },
]
