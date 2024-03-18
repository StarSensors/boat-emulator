import { v4 } from 'uuid'
import pluralize from 'pluralize'
import _ from 'lodash'

import { BdbBoat, BdbWidgetOptions } from '../types'

const capitalize = (string: string): string => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export const alarm_count = (asset: BdbBoat, options: BdbWidgetOptions) => {
  const sizeX = options.sizeX || 8
  const sizeY = options.sizeY || 2
  const row = options.row || 0
  const col = options.col || 0
  const id = v4()

  let severityList = ['WARNING']
  if (options.config?.severityList) {
    severityList = options.config?.severityList
  }

  const label = _.chain(severityList)
    .map(severity => pluralize(severity.toLowerCase()))
    .map(capitalize)
    .join(' & ')
    .value()

  let severityColor = 'rgba(232, 150, 35, 1)'
  if (severityList[0] === 'CRITICAL') {
    severityColor = 'rgba(244, 67, 54, 1)'
  }

  return {
    id,
    typeFullFqn: 'system.alarm_count',
    type: 'latest',
    sizeX,
    sizeY,
    row,
    col,
    config: {
      datasources: [
        {
          type: 'alarmCount',
          name: '',
          dataKeys: [
            {
              name: 'count',
              type: 'count',
              label: 'count',
              settings: {},
              _hash: 0.7622124184804298,
            },
          ],
          alarmFilterConfig: {
            statusList: ['ACTIVE'],
            severityList,
            assignedToCurrentUser: false,
            assigneeId: null,
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
            startTimeMs: 1702410876410,
            endTimeMs: 1702497276410,
          },
          quickInterval: 'CURRENT_DAY',
        },
        aggregation: {
          type: 'AVG',
          limit: 25000,
        },
      },
      showTitle: false,
      backgroundColor: 'rgb(255, 255, 255)',
      color: 'rgba(0, 0, 0, 0.87)',
      padding: '0px',
      settings: {
        showLabel: true,
        label,
        labelFont: {
          family: 'Roboto',
          size: 12,
          sizeUnit: 'px',
          style: 'normal',
          weight: '400',
          lineHeight: '16px',
        },
        labelColor: {
          type: 'constant',
          color: 'rgba(0, 0, 0, 0.54)',
          colorFunction:
            'var temperature = value;\nif (typeof temperature !== undefined) {\n  var percent = (temperature + 60)/120 * 100;\n  return tinycolor.mix("blue", "red", percent).toHexString();\n}\nreturn "blue";',
        },
        showIcon: true,
        iconSize: 20,
        iconSizeUnit: 'px',
        icon: 'warning',
        iconColor: {
          type: 'constant',
          color: 'rgba(255, 255, 255, 1)',
          colorFunction:
            'var temperature = value;\nif (typeof temperature !== undefined) {\n  var percent = (temperature + 60)/120 * 100;\n  return tinycolor.mix("blue", "red", percent).toHexString();\n}\nreturn "blue";',
        },
        showIconBackground: true,
        iconBackgroundSize: 36,
        iconBackgroundSizeUnit: 'px',
        iconBackgroundColor: {
          type: 'range',
          color: 'rgba(0, 105, 92, 1)',
          rangeList: [
            {
              from: 0,
              to: 0,
              color: 'rgba(76, 175, 90, 1)',
            },
            {
              from: 1,
              to: null,
              color: severityColor,
            },
          ],
          colorFunction:
            'var temperature = value;\nif (typeof temperature !== undefined) {\n  var percent = (temperature + 60)/120 * 100;\n  return tinycolor.mix("blue", "red", percent).toHexString();\n}\nreturn "blue";',
        },
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
        showChevron: false,
        chevronSize: 24,
        chevronSizeUnit: 'px',
        chevronColor: 'rgba(0, 0, 0, 0.38)',
        layout: 'column',
        autoScale: true,
      },
      title: 'Alarm count',
      dropShadow: true,
      enableFullscreen: false,
      titleStyle: {
        fontSize: '16px',
        fontWeight: 400,
      },
      units: '',
      decimals: null,
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
        lineHeight: '1',
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
      titleColor: 'rgba(0, 0, 0, 0.54)',
    },
  }
}
