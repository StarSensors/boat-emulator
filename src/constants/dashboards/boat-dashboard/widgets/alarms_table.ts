import { v4 } from 'uuid'
// import pluralize from 'pluralize'
// import _ from 'lodash'

import { BdbBoat, BdbWidgetOptions } from '../types'

// const capitalize = (string: string): string => {
//   return string.charAt(0).toUpperCase() + string.slice(1)
// }

export const alarms_table = (boat: BdbBoat, options: BdbWidgetOptions) => {
  const sizeX = options.sizeX || 16
  const sizeY = options.sizeY || 10
  const row = options.row || 0
  const col = options.col || 0
  const id = v4()

  if (!boat.entityAlias || !boat.entityAlias.id) {
    throw new Error('Boat entity alias is required')
  }

  return {
    id,
    typeFullFqn: 'system.alarm_widgets.alarms_table',
    type: 'alarm',
    sizeX,
    sizeY,
    row,
    col,
    config: {
      timewindow: {
        realtime: {
          interval: 1000,
          timewindowMs: 86400000,
        },
        aggregation: {
          type: 'NONE',
          limit: 200,
        },
      },
      showTitle: true,
      backgroundColor: 'rgb(255, 255, 255)',
      color: 'rgba(0, 0, 0, 0.87)',
      padding: '4px',
      settings: {
        enableSelection: true,
        enableSearch: true,
        displayDetails: true,
        allowAcknowledgment: true,
        allowClear: true,
        allowAssign: true,
        displayActivity: true,
        displayPagination: true,
        defaultPageSize: 10,
        defaultSortOrder: '-createdTime',
        enableSelectColumnDisplay: true,
        enableStickyAction: false,
        enableFilter: true,
        entitiesTitle: null,
        alarmsTitle: 'Alarms',
      },
      title: 'Alarms table',
      dropShadow: true,
      enableFullscreen: true,
      titleStyle: {
        fontSize: '16px',
        fontWeight: 400,
        padding: '5px 10px 5px 10px',
      },
      useDashboardTimewindow: false,
      showLegend: false,
      alarmSource: {
        type: 'entity',
        name: '',
        entityAliasId: boat.entityAlias.id,
        dataKeys: [
          {
            name: 'createdTime',
            type: 'alarm',
            label: 'Created time',
            color: '#2196f3',
            settings: {
              useCellStyleFunction: false,
              cellStyleFunction: '',
              useCellContentFunction: false,
              cellContentFunction: '',
            },
            _hash: 0.021092237451093787,
            funcBody: null,
          },
          {
            name: 'originatorLabel',
            type: 'alarm',
            label: 'Originator',
            color: '#4caf50',
            settings: {
              useCellStyleFunction: false,
              cellStyleFunction: '',
              useCellContentFunction: false,
              cellContentFunction: '',
            },
            _hash: 0.2780007688856758,
            funcBody: null,
          },
          {
            name: 'type',
            type: 'alarm',
            label: 'Type',
            color: '#f44336',
            settings: {
              useCellStyleFunction: false,
              cellStyleFunction: '',
              useCellContentFunction: false,
              cellContentFunction: '',
            },
            _hash: 0.7323586880398418,
            funcBody: null,
          },
          {
            name: 'severity',
            type: 'alarm',
            label: 'Severity',
            color: '#ffc107',
            settings: {
              useCellStyleFunction: false,
              useCellContentFunction: false,
            },
            _hash: 0.09927019860088193,
            funcBody: null,
          },
          // {
          //   name: 'status',
          //   type: 'alarm',
          //   label: 'Status',
          //   color: '#607d8b',
          //   settings: {
          //     useCellStyleFunction: false,
          //     cellStyleFunction: '',
          //     useCellContentFunction: false,
          //     cellContentFunction: '',
          //   },
          //   _hash: 0.6588418951443418,
          //   funcBody: null,
          // },
          // {
          //   name: 'assignee',
          //   type: 'alarm',
          //   label: 'Assignee',
          //   color: '#9c27b0',
          //   settings: {},
          //   _hash: 0.5008441077416634,
          //   funcBody: null,
          // },
        ],
        alarmFilterConfig: {
          statusList: ['ACTIVE'],
        },
      },
      alarmsPollingInterval: 5,
      showTitleIcon: false,
      titleIcon: 'warning',
      iconColor: 'rgba(0, 0, 0, 0.87)',
      iconSize: '24px',
      titleTooltip: '',
      widgetStyle: {},
      displayTimewindow: true,
      actions: {},
      configMode: 'basic',
      alarmFilterConfig: {
        statusList: ['ACTIVE'],
        severityList: ['CRITICAL', 'WARNING'],
        typeList: [],
        searchPropagatedAlarms: true,
        assignedToCurrentUser: false,
        assigneeId: null,
      },
      datasources: [],
      titleFont: null,
      titleColor: null,
    },
  }
}
