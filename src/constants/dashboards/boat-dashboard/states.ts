import _ from 'lodash'

import { BdbBoat, BdbWidget } from './types'

export const states = (boat: BdbBoat, widgetList: BdbWidget[]) => {
  const widgets = _.chain(widgetList)
    .map((w, index) => ({ ...w, index }))
    .keyBy('id')
    .mapValues(({ index, sizeX, sizeY }) => ({
      sizeX,
      sizeY,
      row: 0,
      col: index * 6,
    }))

  return {
    default: {
      name: boat.name,
      root: true,
      layouts: {
        main: {
          widgets,
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
