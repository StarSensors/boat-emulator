import { v4 } from 'uuid'

import { BdbDevice, BdbWidgetOptions } from '../types'

export const battery_voltage = (
  device: BdbDevice,
  options: BdbWidgetOptions,
) => {
  const sizeX = options.sizeX || 8
  const sizeY = options.sizeY || 4
  const row = options.row || 0
  const col = options.col || 0
  const id = v4()

  return {
    id,
    typeFullFqn: 'system.analogue_gauges.radial_gauge_canvas_gauges',
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
              name: 'battery_voltage',
              type: 'timeseries',
              label: 'battery_voltage',
              color: '#2196f3',
              settings: {},
              _hash: 0.8168586804241897,
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
            startTimeMs: 1710429121207,
            endTimeMs: 1710515521207,
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
      padding: '8px',
      settings: {
        startAngle: 45,
        ticksAngle: 270,
        needleCircleSize: 10,
        defaultColor: '#e65100',
        minValue: 10,
        maxValue: 15,
        majorTicksCount: null,
        colorMajorTicks: '#444',
        minorTicks: 10,
        colorMinorTicks: '#666',
        numbersFont: {
          family: 'Roboto',
          size: 18,
          style: 'normal',
          weight: '500',
          color: '#616161',
        },
        numbersColor: '#616161',
        showUnitTitle: true,
        unitTitle: device.label,
        titleFont: {
          family: 'Roboto',
          size: 24,
          style: 'normal',
          weight: '500',
          color: '#888',
        },
        titleColor: '#888',
        unitsFont: {
          family: 'Roboto',
          size: 22,
          style: 'normal',
          weight: '500',
          color: '#616161',
        },
        unitsColor: '#616161',
        valueBox: true,
        valueInt: 2,
        valueFont: {
          size: 24,
          sizeUnit: 'px',
          family: 'sans-serif',
          weight: 'normal',
          style: 'normal',
          color: '#444',
          shadowColor: 'rgba(0, 0, 0, 0.49)',
        },
        valueColor: '#444',
        valueColorShadow: 'rgba(0, 0, 0, 0.49)',
        colorValueBoxRect: '#000000',
        colorValueBoxRectEnd: '#989898',
        colorValueBoxBackground: '#babab2',
        colorValueBoxShadow: 'rgba(0,0,0,1)',
        showBorder: true,
        colorPlate: '#fff',
        colorNeedle: '#E93030',
        colorNeedleEnd: '#DC5757',
        colorNeedleShadowUp: 'rgba(2, 255, 255, 0)',
        colorNeedleShadowDown: 'rgba(188,143,143,0.45)',
        highlightsWidth: 12,
        highlights: [],
        animation: true,
        animationDuration: 500,
        animationRule: 'cycle',
      },
      title: 'Radial gauge',
      dropShadow: true,
      enableFullscreen: true,
      titleStyle: {
        fontSize: '16px',
        fontWeight: 400,
      },
      widgetStyle: {},
      widgetCss: '',
      pageSize: 1024,
      decimals: 2,
      noDataDisplayMessage: '',
      configMode: 'advanced',
      useDashboardTimewindow: true,
      displayTimewindow: true,
      actions: {},
      borderRadius: null,
      units: 'V',
    },
  }
}
