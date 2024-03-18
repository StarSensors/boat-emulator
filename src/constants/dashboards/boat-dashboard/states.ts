import _ from 'lodash'

import { BdbBoat } from './types'

export const states = (boat: BdbBoat, widgets: any[]) => {
  // console.log('states incoming widgets: ', widgets)
  const widgetMap = _.chain(widgets)
    .keyBy('id')
    .mapValues(w => {
      return {
        sizeX: w.sizeX,
        sizeY: w.sizeY,
        row: w.row,
        col: w.col,
      }
    })
    .value()

  return {
    default: {
      name: boat.label,
      root: true,
      layouts: {
        main: {
          widgets: widgetMap,
          gridSettings: {
            backgroundColor: '#eeeeee',
            columns: 24,
            margin: 10,
            outerMargin: true,
            backgroundSizeMode: '100%',
          },
        },
      },
    },
  }
}
