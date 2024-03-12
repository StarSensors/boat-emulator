import { RuleChainMetaData } from '../../types'

export const battery: RuleChainMetaData = {
  nodes: [
    {
      type: 'org.thingsboard.rule.engine.telemetry.TbMsgTimeseriesNode',
      name: 'Save Timeseries',
      configuration: { defaultTTL: 0 },
      additionalInfo: { layoutX: 1160, layoutY: 150 },
    },
    {
      type: 'org.thingsboard.rule.engine.telemetry.TbMsgAttributesNode',
      name: 'Save Client Attributes',
      configuration: {
        scope: 'CLIENT_SCOPE',
        notifyDevice: false,
        sendAttributesUpdatedNotification: false,
        updateAttributesOnlyOnValueChange: true,
      },
      additionalInfo: { layoutX: 825, layoutY: 52 },
    },
    {
      type: 'org.thingsboard.rule.engine.filter.TbMsgTypeSwitchNode',
      name: 'Message Type Switch',
      configuration: {},
      additionalInfo: { layoutX: 347, layoutY: 150 },
    },
    {
      type: 'org.thingsboard.rule.engine.action.TbLogNode',
      name: 'Log RPC from Device',
      configuration: {
        scriptLang: 'TBEL',
        jsScript:
          'return "\\nIncoming message:\\n" + JSON.stringify(msg) + "\\nIncoming metadata:\\n" + JSON.stringify(metadata);',
        tbelScript:
          'return "\\nIncoming message:\\n" + JSON.stringify(msg) + "\\nIncoming metadata:\\n" + JSON.stringify(metadata);',
      },
      additionalInfo: { layoutX: 825, layoutY: 266 },
    },
    {
      type: 'org.thingsboard.rule.engine.action.TbLogNode',
      name: 'Log Other',
      configuration: {
        scriptLang: 'TBEL',
        jsScript:
          'return "\\nIncoming message:\\n" + JSON.stringify(msg) + "\\nIncoming metadata:\\n" + JSON.stringify(metadata);',
        tbelScript:
          'return "\\nIncoming message:\\n" + JSON.stringify(msg) + "\\nIncoming metadata:\\n" + JSON.stringify(metadata);',
      },
      additionalInfo: { layoutX: 825, layoutY: 379 },
    },
    {
      type: 'org.thingsboard.rule.engine.rpc.TbSendRPCRequestNode',
      name: 'RPC Call Request',
      configuration: { timeoutInSeconds: 60 },
      additionalInfo: { layoutX: 825, layoutY: 468 },
    },
    {
      type: 'org.thingsboard.rule.engine.profile.TbDeviceProfileNode',
      name: 'Device Profile Node',
      configuration: {
        persistAlarmRulesState: false,
        fetchAlarmRulesStateOnStart: false,
      },
      additionalInfo: {
        description:
          'Process incoming messages from devices with the alarm rules defined in the device profile. Dispatch all incoming messages with "Success" relation type.',
        layoutX: 204,
        layoutY: 240,
      },
    },
    {
      type: 'org.thingsboard.rule.engine.transform.TbTransformMsgNode',
      name: 'battery_level',
      configuration: {
        scriptLang: 'JS',
        jsScript:
          'var levels = [\n    { voltage: 12.64, level: 100 },\n    { voltage: 12.53, level: 90 },\n    { voltage: 12.41, level: 80 },\n    { voltage: 12.29, level: 70 },\n    { voltage: 12.18, level: 60 },\n    { voltage: 12.07, level: 50 },\n    { voltage: 11.97, level: 40 },\n    { voltage: 11.87, level: 30 },\n    { voltage: 11.76, level: 20 },\n    { voltage: 11.63, level: 10 },\n    { voltage: 11.59, level: 0 }\n];\nfunction lerp(voltageReading) {\n    var maxVoltage = levels[0].voltage;\n    var minVoltage = levels[levels.length - 1].voltage;\n    var maxLevel = levels[0].level;\n    var minLevel = levels[levels.length - 1].level;\n    \n    if (voltageReading >= maxVoltage) {\n        return maxLevel;\n    }\n    if (voltageReading <= minVoltage) {\n        return minLevel;\n    }\n    \n    var index = 0;\n    for (var i = 0; i < levels.length; i++) {\n        if (voltageReading > levels[i].voltage) {\n            index = i;\n            break;\n        }\n    }\n    \n    var low = levels[index];\n    var high = levels[index - 1];\n    var range = high.voltage - low.voltage;\n  \n    return low.level + ((voltageReading - low.voltage) / range) * (high.level - low.level);\n}\nif (msg.battery_voltage !== null && typeof msg.battery_voltage !== "undefined") {\n    msg.battery_level = lerp(msg.battery_voltage);\n}\nreturn {msg: msg, metadata: metadata, msgType: msgType};',
        tbelScript: 'return {msg: msg, metadata: metadata, msgType: msgType};',
      },
      additionalInfo: {
        description:
          'Use linear interpolation to calculate battery level from typical voltage-level data points of a 12V flooded lead-acid battery.',
        layoutX: 826,
        layoutY: 150,
      },
    },
  ],
  firstNodeIndex: 6,
  connections: [
    { fromIndex: 2, toIndex: 7, type: 'Post telemetry' },
    { fromIndex: 2, toIndex: 1, type: 'Post attributes' },
    { fromIndex: 2, toIndex: 3, type: 'RPC Request from Device' },
    { fromIndex: 2, toIndex: 4, type: 'Other' },
    { fromIndex: 2, toIndex: 5, type: 'RPC Request to Device' },
    { fromIndex: 6, toIndex: 2, type: 'Success' },
    { fromIndex: 7, toIndex: 0, type: 'Success' },
  ],
}
