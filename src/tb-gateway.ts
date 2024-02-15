import { connect, IClientOptions, MqttClient } from 'mqtt'
import { Logger } from 'pino'
import { hostname } from 'os'
import * as _ from 'lodash'
// import { inspect } from 'util'

import {
  AttributesMsg,
  // AttributesMsg,
  // ResponseMsg,
  // TelemetryMsg,
  ConnectMsg,
  TelemetryMsg,
  // Metric,
  // Device,
} from './types'

import { devices } from './constants/devices'
import { metricBehaviors } from './constants/metric-behaviors'

const CONNECT_TOPIC = 'v1/gateway/connect'
// const DISCONNECT_TOPIC = 'v1/gateway/disconnect'
const ATTRIBUTES_TOPIC = 'v1/gateway/attributes'
const REQUEST_TOPIC = 'v1/gateway/attributes/request'
const RESPONSE_TOPIC = 'v1/gateway/attributes/response'

export class TbGateway {
  private logger: Logger
  private client: MqttClient
  private readonly url: string
  private readonly options: IClientOptions
  private interval: NodeJS.Timeout
  private state: {
    [key: string]: {
      metrics: string[]
      previous: { [key: string]: number }
      current: { [key: string]: number }
      target?: { [key: string]: number }
    }
  }

  constructor(url: string, logger: Logger) {
    this.logger = logger.child({ context: 'TbGateway' })
    this.url = url

    this.state = _.chain(devices)
      .map(d => ({
        name: d.name,
        metrics: d.deviceProfile.metrics,
        previous: d.values,
        current: d.values,
      }))
      .keyBy('name')
      .mapValues(d => ({
        ..._.pick(d, ['metrics', 'previous']),
        current: _.mapValues(d.current, (value, key) => {
          return metricBehaviors[key as keyof typeof metricBehaviors].start
        }),
      }))
      .value()
  }

  start(accessToken: string) {
    this.client = connect(this.url, {
      username: accessToken,
      clientId: `${accessToken}-${hostname()}`,
    })
    this.client.on('connect', this.onConnect.bind(this))
    this.client.on('message', this.onMessage.bind(this))
  }

  stop() {
    clearInterval(this.interval)
    this.client.end()
  }

  private onConnect() {
    this.logger.info('Connected!')

    this.client.subscribe(ATTRIBUTES_TOPIC)
    this.client.subscribe(RESPONSE_TOPIC)
    this.client.subscribe(REQUEST_TOPIC + '+')

    devices.forEach(device => {
      const connectMsg: ConnectMsg = {
        device: device.name,
        type: device.deviceProfile.name,
      }

      const connectMsgString = JSON.stringify(connectMsg)
      this.logger.info(`Sending connect message for ${device.name}`)
      this.client.publish(CONNECT_TOPIC, connectMsgString)
    })

    // no need for the gateway to send attributes
    //
    // const attributesMsg: AttributesMsg = _.chain(devices)
    //   .keyBy('name')
    //   .mapValues(d => ({
    //     ...d.attributes,
    //   }))
    //   .value()
    // const attributesMsgString = JSON.stringify(attributesMsg)
    // this.logger.info('Sending attributes message')
    // this.client.publish(ATTRIBUTES_TOPIC, attributesMsgString)

    this.interval = setInterval(() => {
      this.publishTelemetry()
      this.setNewState()
    }, 5000)
  }

  private onMessage(topic: string, message: Buffer) {
    console.log('Received message', topic, message.toString())
  }

  private publishTelemetry() {
    const ts = Date.now()
    const telemetryMsg: TelemetryMsg = _.mapValues(
      this.state,
      ({ current }) => {
        return [
          {
            ts,
            values: current,
          },
        ]
      },
    )
    const telemetryMsgString = JSON.stringify(telemetryMsg)
    this.logger.info('Sending telemetry message')
    this.client.publish('v1/gateway/telemetry', telemetryMsgString)
  }

  private setNewState() {
    _.forEach(this.state, device => {
      device.previous = device.current
      device.current = _.mapValues(device.current, (value, metric) => {
        const behavior = metricBehaviors[metric as keyof typeof metricBehaviors]
        if (!behavior) {
          throw new Error(`No behavior found for metric ${metric}`)
        }

        return this.getNewStateValue(value, metric, behavior)
      })
    })
  }

  private getNewStateValue(
    value: number,
    metric: string,
    behavior: { step: number; min: number; max: number },
  ): number {
    switch (metric) {
      case 'battery_level':
      case 'battery_voltage':
      case 'close_counter':
      case 'close':
      case 'humidity':
      case 'movement_counter':
      case 'sensor_battery_level':
      case 'sensor_battery_voltage':
      case 'temperature':
      case 'water':
        return this.getNewValueGeneric(value, behavior)
      default:
        throw new Error(`No behavior found for metric ${metric}`)
    }
  }

  private getNewValueGeneric(
    value: number,
    behavior: { step: number; min: number; max: number; trend?: string },
  ): number {
    let random = _.random(-1, 1)
    if (behavior.trend === 'up') {
      random = _.random(0, 1)
    } else if (behavior.trend === 'down') {
      random = _.random(-1, 0)
    }
    const delta = random * behavior.step
    const newValue = value + delta

    if (newValue > behavior.max) {
      return behavior.max
    } else if (newValue < behavior.min) {
      return behavior.min
    } else {
      return newValue
    }
  }
}
// const client = connect(config.mqtt.url, config.mqtt.options as IClientOptions)

// client.on('connect', () => {
//   console.log('Client connected!')

//   client.subscribe(ATTRIBUTES_TOPIC)
//   client.subscribe(RESPONSE_TOPIC)
//   client.subscribe(REQUEST_TOPIC + '+')

//   client.publish(
//     REQUEST_TOPIC,
//     JSON.stringify({
//       sharedKeys: 'targetState,targetTemperature,targetFirmwareVersion',
//     }),
//   )

//   setInterval(publish, 5000)
// })

// client.on('message', (topic, message) => {
//   if (topic === ATTRIBUTES_TOPIC) {
//     const msg = JSON.parse(message.toString()) as AttributesMsg
//     logger.debug({ topic, msg }, 'Received message')
//   } else if (topic === RESPONSE_TOPIC) {
//     const msg = JSON.parse(message.toString()) as ResponseMsg
//     logger.debug({ topic, msg }, 'Received message')
//   }
// }

// function publish() {
//   const msg: TelemetryMsg = {
//     'device-1': {
//       ts: Date.now(),
//       values: {
//         temperature: Math.random() * 100,
//         humidity: Math.random() * 100,
//       },
//     },
//   }

//   client.publish('v1/gateway/telemetry', JSON.stringify(msg))
// }
