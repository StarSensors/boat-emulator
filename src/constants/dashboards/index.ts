import customerAlarmSettings from './customer-alarm-settings.json'
import customerBoatOverview from './customer-boat-overview.json'
import customerBoatDetails from './customer-boat-details.json'
import tenantDeviceControls from './tenant-device-controls.json'
import tenantBoatOverview from './tenant-boat-overview.json'

import { timewindow, settings, states } from './boat-dashboard'

export const dashboardMap: { [key: string]: any[] } = {
  customer: [customerBoatOverview, customerBoatDetails, customerAlarmSettings],
  tenant: [tenantDeviceControls, tenantBoatOverview],
}

type Boat = {
  id: string
  name: string
  label: string
}

type BoatDashboardDevice = {
  id: string
  name: string
  label: string
  type: string
}

export const renderBoatDashboard = (
  boat: Boat,
  boatDevices: BoatDashboardDevice[],
): any => {
  const widgets = []

  return {
    title: boat.label,
    name: boat.name,
    image: null,
    mobileHide: false,
    mobileOrder: null,
    configuration: {
      states: states(widgets),
      settings,
      timewindow,
      filters: {},
    },
  }
}
