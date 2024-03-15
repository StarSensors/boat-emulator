import _ from 'lodash'
// import { inspect } from 'util'

import { renderBoatDashboard } from './index'
import { BdbBoat, BdbDevice } from './types'

describe('Boat Dashboard', () => {
  it('should generate a dashboard', () => {
    const boat: BdbBoat = {
      id: 'boat-id-001',
      name: 'Boat 001',
      label: 'Pelikaan',
    }

    const devices: BdbDevice[] = [
      {
        id: 'battery-monitor-id-001',
        name: 'Battery monitor 001',
        label: 'House battery',
        type: 'Battery Monitor Model 001',
        kind: 'battery',
        widgets: [],
      },
    ]

    const dashboard = renderBoatDashboard(boat, devices)

    // console.log(inspect(dashboard, { depth: null }))

    expect(dashboard).toBeDefined()
    expect(dashboard.title).toBe(boat.label)
    expect(dashboard.name).toBe(boat.name)
    expect(dashboard.configuration).toBeDefined()
    expect(
      dashboard.configuration.states.default.layouts.main.widgets,
    ).toBeDefined()
    expect(
      _.keys(dashboard.configuration.states.default.layouts.main.widgets),
    ).toHaveLength(1)
  })
})
