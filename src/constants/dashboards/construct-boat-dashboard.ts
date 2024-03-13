import { timewindow, settings, states } from './boat-dashboard'

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
