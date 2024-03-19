import { v4 } from 'uuid'

import { BdbDevice, BdbWidgetOptions } from '../types'

export const temperature = (device: BdbDevice, options: BdbWidgetOptions) => {
  const sizeX = options.sizeX || 8
  const sizeY = options.sizeY || 4
  const row = options.row || 0
  const col = options.col || 0
  const id = v4()

  return {
    id,
    typeFullFqn: 'system.indoor_temperature_card',
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
          entityAliasId: device.entityAlias.id,
          dataKeys: [
            {
              name: 'temperature',
              type: 'timeseries',
              label: 'Temperature',
              color: '#2196f3',
              settings: {},
              _hash: 0.20502337089119882,
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
      showTitle: false,
      backgroundColor: 'rgba(0, 0, 0, 0)',
      color: 'rgba(0, 0, 0, 0.87)',
      padding: '0px',
      settings: {
        labelPosition: 'top',
        layout: 'square',
        showLabel: true,
        labelFont: {
          family: 'Roboto',
          size: 16,
          sizeUnit: 'px',
          style: 'normal',
          weight: '500',
        },
        labelColor: {
          type: 'constant',
          color: 'rgba(0, 0, 0, 0.87)',
          colorFunction:
            'var temperature = value;\nif (typeof temperature !== undefined) {\n  var percent = (temperature + 60)/120 * 100;\n  return tinycolor.mix("blue", "red", percent).toHexString();\n}\nreturn "blue";',
        },
        showIcon: true,
        iconSize: 40,
        iconSizeUnit: 'px',
        icon: 'thermostat',
        iconColor: {
          type: 'constant',
          color: 'rgba(67, 91, 99, 0.87)',
          rangeList: [
            {
              from: null,
              to: 4,
              color: '#048AD3',
            },
            {
              from: 4,
              to: 30,
              color: '#4CAF50',
            },
            {
              from: 24,
              to: 40,
              color: '#E89623',
            },
            {
              from: 40,
              to: null,
              color: 'rgb(244, 67, 54)',
            },
          ],
          colorFunction:
            'var temperature = value;\nif (typeof temperature !== undefined) {\n  var percent = (temperature + 60)/120 * 100;\n  return tinycolor.mix("blue", "red", percent).toHexString();\n}\nreturn "blue";',
        },
        valueFont: {
          family: 'Roboto',
          size: 52,
          sizeUnit: 'px',
          style: 'normal',
          weight: '500',
        },
        valueColor: {
          // type: 'range',
          type: 'constant',
          color: 'rgba(0, 0, 0, 0.87)',
          colorFunction:
            'var temperature = value;\nif (typeof temperature !== undefined) {\n  var percent = (temperature + 60)/120 * 100;\n  return tinycolor.mix("blue", "red", percent).toHexString();\n}\nreturn "blue";',
          rangeList: [
            {
              from: null,
              to: 4,
              color: '#048AD3',
            },
            {
              from: 4,
              to: 30,
              color: '#4CAF50',
            },
            {
              from: 24,
              to: 40,
              color: '#E89623',
            },
            {
              from: 40,
              to: null,
              color: 'rgb(244, 67, 54)',
            },
          ],
        },
        showDate: true,
        dateFormat: {
          format: null,
          lastUpdateAgo: true,
          custom: false,
        },
        dateFont: {
          family: 'Roboto',
          size: 12,
          sizeUnit: 'px',
          style: 'normal',
          weight: '500',
        },
        dateColor: {
          type: 'constant',
          color: 'rgba(0, 0, 0, 0.38)',
          colorFunction:
            'var temperature = value;\nif (typeof temperature !== undefined) {\n  var percent = (temperature + 60)/120 * 100;\n  return tinycolor.mix("blue", "red", percent).toHexString();\n}\nreturn "blue";',
        },
        background: {
          type: 'color',
          color: '#fff',
          overlay: {
            enabled: false,
            color: 'rgba(255,255,255,0.72)',
            blur: 3,
          },
        },
        autoScale: true,
      },
      title: 'Temperature card',
      dropShadow: true,
      enableFullscreen: false,
      titleStyle: {
        fontSize: '16px',
        fontWeight: 400,
      },
      units: '°C',
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
        size: 12,
        sizeUnit: 'px',
        family: null,
        weight: null,
        style: null,
        lineHeight: '1.6',
      },
      titleIcon: '',
      iconColor: 'rgba(0, 0, 0, 0.87)',
      iconSize: '14px',
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
    },
  }
}
