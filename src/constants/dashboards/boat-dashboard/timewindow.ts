export const timewindow = {
  hideInterval: false,
  hideLastInterval: false,
  hideQuickInterval: false,
  hideAggregation: false,
  hideAggInterval: false,
  hideTimezone: false,
  selectedTab: 0,
  realtime: {
    realtimeType: 0,
    timewindowMs: 300000,
    quickInterval: 'CURRENT_DAY',
    interval: 5000,
  },
  aggregation: {
    type: 'AVG',
    limit: 25000,
  },
  timezone: null,
}
