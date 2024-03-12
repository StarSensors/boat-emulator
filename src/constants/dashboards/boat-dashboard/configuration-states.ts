import _ from 'lodash'

type Widget = {
  id: string
  type: string
  title: string
  sizeX: number
  sizeY: number
  index: number
}

export const states = (widgetList: Widget[]) => {
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
      name: 'Tenant device controls',
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
