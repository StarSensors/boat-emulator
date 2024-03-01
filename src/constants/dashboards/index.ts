import customerBoatOverview from './customer-boat-overview.json'
import customerBoatDetails from './customer-boat-details.json'
import tenantDeviceControls from './tenant-device-controls.json'
import tenantBoatOverview from './tenant-boat-overview.json'

export const dashboardMap: { [key: string]: any[] } = {
  customer: [customerBoatOverview, customerBoatDetails],
  tenant: [tenantDeviceControls, tenantBoatOverview],
}
