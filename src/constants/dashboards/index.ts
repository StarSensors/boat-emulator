import customerAlarmSettings from './customer-alarm-settings.json'
// import customerBoatOverview from './customer-boat-overview.json'
// import customerBoatDetails from './customer-boat-details.json'
import tenantDeviceControls from './tenant-device-controls.json'
import tenantBoatOverview from './tenant-boat-overview.json'

export const dashboardMap: { [key: string]: any[] } = {
  // customer: [customerBoatOverview, customerBoatDetails, customerAlarmSettings],
  // customer: [customerBoatOverview, customerAlarmSettings],
  customer: [customerAlarmSettings],
  tenant: [tenantDeviceControls, tenantBoatOverview],
  // tenant: [tenantDeviceControls],
}

export { renderBoatDashboard } from './boat-dashboard'
