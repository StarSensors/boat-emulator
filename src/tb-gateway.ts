import { connect, IClientOptions, MqttClient } from 'mqtt'
import { Logger } from 'pino'
import { hostname } from 'os'
import * as _ from 'lodash'
// import { inspect } from 'util'

import {
  ConnectMsg,
  RpcRequestMsg,
  RpcResponseMsg,
  SharedAttributesMsg,
  TelemetryMsg,
} from './types'

import { devices } from './constants/devices'
import { metricBehaviors } from './constants/metric-behaviors'

// const DISCONNECT_TOPIC = 'v1/gateway/disconnect'
// const REQUEST_TOPIC = 'v1/gateway/attributes/request'
// const RESPONSE_TOPIC = 'v1/gateway/attributes/response'
const ATTRIBUTES_TOPIC = 'v1/gateway/attributes'
const CONNECT_TOPIC = 'v1/gateway/connect'
const RPC_TOPIC = 'v1/gateway/rpc'
const TELEMETRY_TOPIC = 'v1/gateway/telemetry'

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
      targetEnabled?: boolean
    }
  }

  constructor(url: string, logger: Logger) {
    this.logger = logger.child({ context: 'TbGateway' })
    this.url = url

    // initialize device state with metric default start values
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

  setState(state: {
    [key: string]: {
      current: { [key: string]: number }
      target: { [key: string]: number }
      targetEnabled: boolean
    }
  }) {
    this.state = _.mapValues(this.state, (deviceState, name) => {
      const newState = state[name]

      if (!newState) {
        return deviceState
      }

      return {
        ...deviceState,
        current: { ...deviceState.current, ...newState.current },
        target: newState.target,
        targetEnabled: newState.targetEnabled,
      }
    })
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

    // send connect message for each device
    devices.forEach(device => {
      const connectMsg: ConnectMsg = {
        device: device.name,
        type: device.deviceProfile.name,
      }

      const connectMsgString = JSON.stringify(connectMsg)
      this.logger.info(`Sending connect message for ${device.name}`)
      this.client.publish(CONNECT_TOPIC, connectMsgString)
    })

    this.interval = setInterval(() => {
      this.publishTelemetry()
      this.setNewState()
    }, 5000)
  }

  private onMessage(topic: string, message: Buffer) {
    this.logger.info(
      `Received message on topic ${topic}: ${message.toString()}`,
    )

    switch (topic) {
      case ATTRIBUTES_TOPIC:
        // i.e. shared device attributes from 'Update Multiple Attributes' widget
        this.handleAttributesMessage(message)
        break
      case RPC_TOPIC:
        // i.e. from dashboard 'Knob control' rpc widget (currently not used in this example)
        this.handleRpcMessage(message)
        break
      default:
        break
    }
  }

  private handleAttributesMessage(message: Buffer) {
    const messageStr = message.toString()
    const attrs: SharedAttributesMsg = JSON.parse(messageStr)
    this.logger.info(`Received attributes message ${messageStr}`)

    // check for target type attribute message
    // (divined in the dashboard 'Update Multiple Attributes' widget)
    if (typeof attrs.data?.target_enabled === 'boolean') {
      this.handleTargetAttributesMessage(attrs)
    }
  }

  private handleTargetAttributesMessage(attrs: SharedAttributesMsg) {
    const targetEnabled: boolean = !!attrs.data.target_enabled

    const state = this.state[attrs.device]

    if (!state) {
      this.logger.warn(`Device ${attrs.device} not found in state`)
      return
    }

    if (!state.target) {
      state.target = {}
    }

    if (!targetEnabled) {
      state.targetEnabled = false
      this.logger.info(`Device ${attrs.device}: Target disabled`)
    } else {
      state.targetEnabled = true
      this.logger.info(`Device ${attrs.device}: Target enabled`)
    }

    const target: any = _.chain(attrs.data)
      .keys()
      .filter(k => k.startsWith('target_') && k !== 'target_enabled')
      .map(k => k.replace('target_', ''))
      .reduce((acc: { [key: string]: any }, metric: string) => {
        if (
          attrs.data[`target_${metric}`] !== null &&
          attrs.data[`target_${metric}`] !== undefined
        ) {
          acc[metric] = attrs.data[`target_${metric}`]
        }
        this.logger.info(
          `Device ${attrs.device}: Setting target ${metric} to ${acc[metric]}`,
        )

        return acc
      }, {})
      .value()

    state.target = { ...state.target, ...target }
  }

  private handleRpcMessage(message: Buffer) {
    const request: RpcRequestMsg = JSON.parse(message.toString())
    this.logger.info(`Received RPC message ${JSON.stringify(request)}`)

    switch (request.data.method) {
      case 'getTarget':
        this.handleRpcGetTarget(request)
        break
      case 'setTarget':
        this.handleRpcSetTarget(request)
        break
      default:
        this.logger.error(`Device ${request.device}: Unknown method`)
        break
    }
  }

  private handleRpcGetTarget(request: RpcRequestMsg) {
    const state = this.state[request.device]

    if (!state) {
      this.logger.error(`Device ${request.device} not found in state`)
      return
    }

    let metric: string = 'temperature'
    if (request.device.startsWith('Battery')) {
      metric = 'battery_voltage'
    }

    const target = state.target?.[metric]
    const current = state.current[metric]
    let data: number

    if (typeof current === 'undefined' || current === null) {
      this.logger.error(`Current value for ${metric} is not defined`)
      return
    }

    data = current
    if (typeof target !== 'undefined' && target !== null) {
      data = target
    }

    const response: RpcResponseMsg = {
      device: request.device,
      id: request.data.id,
      data,
    }

    this.client.publish(RPC_TOPIC, JSON.stringify(response))
  }

  private handleRpcSetTarget(request: RpcRequestMsg) {
    const state = this.state[request.device]

    if (!state) {
      this.logger.error(`Device ${request.device} not found in state`)
      return
    }

    if (!state.target) {
      state.target = {}
    }

    let metric: string = 'temperature'
    if (request.device.startsWith('Battery')) {
      metric = 'battery_voltage'
    }

    const target: { [key: string]: number } = {
      [metric]: request.data.params,
    }

    state.target = { ...state.target, ...target }

    this.logger.info(
      `Device ${request.device}: Setting ${metric} to ${request.data.params}`,
    )

    const response: RpcResponseMsg = {
      device: request.device,
      id: request.data.id,
      data: request.data.params,
    }

    this.client.publish(RPC_TOPIC, JSON.stringify(response))
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
    this.logger.debug('Sending telemetry message')
    this.client.publish(TELEMETRY_TOPIC, telemetryMsgString)
  }

  private setNewState() {
    _.forEach(this.state, device => {
      device.previous = device.current
      device.current = _.mapValues(device.current, (value, metric) => {
        const behavior = metricBehaviors[metric as keyof typeof metricBehaviors]

        if (!behavior) {
          throw new Error(`No behavior found for metric ${metric}`)
        }

        const target = device.target?.[metric]
        const targetEnabled = device.targetEnabled || false

        return this.getNewStateValue(
          value,
          metric,
          behavior,
          targetEnabled,
          target,
        )
      })
    })
  }

  private getNewStateValue(
    value: number,
    metric: string,
    behavior: { step: number; min: number; max: number },
    targetEnabled?: boolean,
    target?: number,
  ): number {
    switch (metric) {
      case 'battery_level':
      case 'battery_voltage':
      case 'close_counter':
      case 'humidity':
      case 'movement_counter':
      case 'sensor_battery_level':
      case 'sensor_battery_voltage':
      case 'temperature':
        return this.getNewValueGeneric(value, behavior, targetEnabled, target)
      case 'open':
      case 'water':
        return this.getNewValueSwitch(value, behavior, targetEnabled, target)
      default:
        throw new Error(`No behavior found for metric ${metric}`)
    }
  }

  private getNewValueGeneric(
    value: number,
    behavior: { step: number; min: number; max: number; trend?: string },
    targetEnabled?: boolean,
    target?: number,
  ): number {
    let random = _.random(-1, 1)
    if (behavior.trend === 'up') {
      random = _.random(0, 1)
    } else if (behavior.trend === 'down') {
      random = _.random(-1, 0)
    }

    if (targetEnabled && target !== null && typeof target !== 'undefined') {
      if (value < target) {
        random = _.random(0, 10)
      } else if (value > target) {
        random = _.random(-10, 0)
      }
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

  private getNewValueSwitch(
    value: number,
    behavior: { step: number; min: number; max: number; trend?: string },
    targetEnabled?: boolean,
    target?: number,
  ): number {
    let newValue = _.random(0, 40) === 0 ? 1 : 0
    if (value > 0) {
      newValue = _.random(0, 20) === 0 ? 0 : 1
    }

    if (targetEnabled && target !== null && typeof target !== 'undefined') {
      newValue = target
    }

    if (newValue > behavior.max) {
      return behavior.max
    } else if (newValue < behavior.min) {
      return behavior.min
    } else {
      return newValue
    }
  }
}
