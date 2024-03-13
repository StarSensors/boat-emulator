export {settings } from './settings'
export {timewindow} from './timewindow'
export {states} from './states'
export {entityAliases} from './entity-aliases'

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
      entityAliases(boat),
      states: states(widgets),
      settings,
      timewindow,
      filters: {},
    },
  }
}
