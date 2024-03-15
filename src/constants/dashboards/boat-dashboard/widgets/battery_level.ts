import { v4 } from 'uuid'

import { BdbDevice, BdbWidgetOptions } from '../types'

export const battery_level = (device: BdbDevice, options: BdbWidgetOptions) => {
  const sizeX = options.sizeX || 2.5
  const sizeY = options.sizeY || 2.5
  const row = options.row || 0
  const col = options.col || 0
  const id = v4()

  return {
    id,
    typeFullFqn: 'system.battery_level',
    type: 'latest',
    sizeX,
    sizeY,
    row,
    col,
    config: {
      datasources: [
        {
          type: 'entity',
          name: '',
          entityAliasId: '83a99eb4-9817-9173-b66a-25b06465017f',
          dataKeys: [
            {
              name: 'battery_level',
              type: 'timeseries',
              label: 'Level',
              color: '#2196f3',
              settings: {},
              _hash: 0.3418360618846006,
              aggregationType: 'NONE',
              units: 'V',
              decimals: 1,
              funcBody: null,
              usePostProcessing: null,
              postFuncBody: null,
            },
          ],
          alarmFilterConfig: {
            statusList: ['ACTIVE'],
          },
        },
      ],
      timewindow: {
        displayValue: '',
        selectedTab: 0,
        realtime: {
          realtimeType: 1,
          interval: 1000,
          timewindowMs: 60000,
          quickInterval: 'CURRENT_DAY',
        },
        history: {
          historyType: 0,
          interval: 1000,
          timewindowMs: 60000,
          fixedTimewindow: {
            startTimeMs: 1710256758703,
            endTimeMs: 1710343158703,
          },
          quickInterval: 'CURRENT_DAY',
        },
        aggregation: {
          type: 'AVG',
          limit: 25000,
        },
      },
      showTitle: true,
      backgroundColor: 'rgba(0, 0, 0, 0)',
      color: 'rgba(0, 0, 0, 0.87)',
      padding: '0px',
      settings: {
        background: {
          type: 'color',
          color: '#fff',
          overlay: {
            enabled: false,
            color: 'rgba(255,255,255,0.72)',
            blur: 3,
          },
        },
        layout: 'vertical_solid',
        showValue: true,
        autoScaleValueSize: true,
        valueFont: {
          family: 'Roboto',
          size: 20,
          sizeUnit: 'px',
          style: 'normal',
          weight: '500',
          lineHeight: '24px',
        },
        valueColor: {
          type: 'constant',
          color: 'rgba(0, 0, 0, 0.87)',
          colorFunction:
            'var temperature = value;\nif (typeof temperature !== undefined) {\n  var percent = (temperature + 60)/120 * 100;\n  return tinycolor.mix("blue", "red", percent).toHexString();\n}\nreturn "blue";',
        },
        batteryLevelColor: {
          type: 'range',
          color: 'rgb(224, 224, 224)',
          rangeList: [
            {
              from: null,
              to: 25,
              color: 'rgba(227, 71, 71, 1)',
            },
            {
              from: 25,
              to: 50,
              color: 'rgba(246, 206, 67, 1)',
            },
            {
              from: 50,
              to: null,
              color: 'rgba(92, 223, 144, 1)',
            },
          ],
          colorFunction:
            'var temperature = value;\nif (typeof temperature !== undefined) {\n  var percent = (temperature + 60)/120 * 100;\n  return tinycolor.mix("blue", "red", percent).toHexString();\n}\nreturn "blue";',
        },
        batteryShapeColor: {
          type: 'range',
          color: 'rgba(224, 224, 224, 0.32)',
          rangeList: [
            {
              from: null,
              to: 25,
              color: 'rgba(227, 71, 71, 0.32)',
            },
            {
              from: 25,
              to: 50,
              color: 'rgba(246, 206, 67, 0.32)',
            },
            {
              from: 50,
              to: null,
              color: 'rgba(92, 223, 144, 0.32)',
            },
          ],
          colorFunction:
            'var temperature = value;\nif (typeof temperature !== undefined) {\n  var percent = (temperature + 60)/120 * 100;\n  return tinycolor.mix("blue", "red", percent).toHexString();\n}\nreturn "blue";',
        },
        sectionsCount: 4,
      },
      title: device.label,
      dropShadow: true,
      enableFullscreen: false,
      titleStyle: {
        fontSize: '16px',
        fontWeight: 400,
      },
      units: '%',
      decimals: 1,
      useDashboardTimewindow: true,
      showLegend: false,
      widgetStyle: {},
      actions: {},
      configMode: 'advanced',
      displayTimewindow: true,
      margin: '0px',
      borderRadius: '0px',
      widgetCss: '',
      pageSize: 1024,
      noDataDisplayMessage: '',
      showTitleIcon: false,
      titleTooltip: '',
      titleFont: {
        size: 16,
        sizeUnit: 'px',
        family: 'Roboto',
        weight: '500',
        style: 'normal',
        lineHeight: '24px',
      },
      titleIcon: 'mdi:battery-high',
      iconColor: 'rgba(0, 0, 0, 0.87)',
      iconSize: '18px',
      timewindowStyle: {
        showIcon: true,
        iconSize: '14px',
        icon: 'query_builder',
        iconPosition: 'left',
        font: {
          size: 12,
          sizeUnit: 'px',
          family: null,
          weight: null,
          style: null,
          lineHeight: '1',
        },
        color: null,
      },
      titleColor: 'rgba(0, 0, 0, 0.87)',
    },
  }
}
