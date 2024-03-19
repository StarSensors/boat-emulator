import _ from 'lodash'
import { v4 } from 'uuid'
// import pluralize from 'pluralize'

import { BdbDevice, BdbWidgetOptions } from '../types'

// const capitalize = (string: string): string => {
//   return string.charAt(0).toUpperCase() + string.slice(1)
// }

const dataKeyMap: { [key: string]: any } = {
  temperature: {
    name: 'temperature',
    type: 'timeseries',
    label: 'Temperature',
    color: '#4caf50',
    settings: {},
    _hash: 0.04632009140335702,
    units: '°C',
    decimals: 2,
  },
  humidity: {
    name: 'humidity',
    type: 'timeseries',
    label: 'Humidity',
    color: '#2196f3',
    settings: {},
    _hash: 0.9439030962268813,
    units: '%',
    decimals: 1,
  },
  battery_voltage: {
    name: 'battery_voltage',
    type: 'timeseries',
    label: 'Voltage',
    color: '#ff9800',
    settings: {},
    _hash: 0.9439030962268813,
    units: 'V',
    decimals: 2,
  },
  battery_level: {
    name: 'battery_level',
    type: 'timeseries',
    label: 'Level',
    color: '#ff5722',
    settings: {},
    _hash: 0.9439030962268813,
    units: '%',
    decimals: 1,
  },
}

const renderDataEntities = (dataKeys: string[]) => {
  return _.map(dataKeys, dataKey => {
    if (!dataKeyMap[dataKey]) {
      throw new Error(`No dataKeyMap found for ${dataKey}`)
    }
    return dataKeyMap[dataKey]
  })
}

export const basic_timeseries = (
  device: BdbDevice,
  options: BdbWidgetOptions,
) => {
  const sizeX = options.sizeX || 8
  const sizeY = options.sizeY || 4
  const row = options.row || 0
  const col = options.col || 0
  const id = v4()

  if (!options?.config?.dataKeys || !options?.config?.dataKeys.length) {
    throw new Error('No dataKeys provided for basic_timeseries widget')
  }

  const dataKeys = renderDataEntities(options.config.dataKeys)

  return {
    id,
    typeFullFqn: 'system.charts.basic_timeseries',
    type: 'timeseries',
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
          dataKeys,
          alarmFilterConfig: {
            statusList: ['ACTIVE'],
          },
          latestDataKeys: [],
        },
      ],
      timewindow: {
        realtime: {
          timewindowMs: 60000,
        },
      },
      showTitle: false,
      backgroundColor: '#fff',
      color: 'rgba(0, 0, 0, 0.87)',
      padding: '8px',
      settings: {
        stack: false,
        enableSelection: false,
        fontSize: 10,
        fontColor: '#545454',
        showTooltip: true,
        tooltipIndividual: false,
        tooltipCumulative: false,
        hideZeros: false,
        tooltipValueFormatter: '',
        grid: {
          verticalLines: true,
          horizontalLines: true,
          outlineWidth: 1,
          color: '#545454',
          backgroundColor: null,
          tickColor: '#DDDDDD',
        },
        xaxis: {
          title: null,
          showLabels: true,
          color: '#545454',
        },
        yaxis: {
          min: null,
          max: null,
          title: null,
          showLabels: true,
          color: '#545454',
          tickSize: null,
          tickDecimals: 0,
          ticksFormatter: '',
        },
        shadowSize: 4,
        smoothLines: false,
        thresholdsLineWidth: null,
        comparisonEnabled: false,
        showLegend: false,
        customLegendEnabled: false,
        legendConfig: {
          direction: 'column',
          position: 'bottom',
          sortDataKeys: false,
          showMin: false,
          showMax: false,
          showAvg: true,
          showTotal: false,
          showLatest: false,
        },
      },
      title: 'Timeseries Line Chart',
      dropShadow: true,
      enableFullscreen: true,
      titleStyle: {
        fontSize: '16px',
        fontWeight: 400,
      },
      configMode: 'advanced',
      actions: {},
      showTitleIcon: false,
      titleIcon: 'thermostat',
      iconColor: '#1F6BDD',
      useDashboardTimewindow: true,
      displayTimewindow: true,
      titleFont: null,
      titleColor: null,
      widgetStyle: {},
      widgetCss: '',
      pageSize: 1024,
      noDataDisplayMessage: '',
    },
  }
}
