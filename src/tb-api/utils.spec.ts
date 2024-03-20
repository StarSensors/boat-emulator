import { recursiveKeyFilter } from './utils'

describe('Utils', () => {
  it('should work', () => {
    const obj = {
      a: 1,
      b: 2,
      c: {
        d: 3,
        e: 4,
        f: {
          g: 5,
          h: 6,
        },
        i: [{ a: 1, b: 2, g: 7 }],
      },
    }
    const keysToFilter = ['a', 'd', 'g']
    const result = recursiveKeyFilter(obj, keysToFilter)
    expect(result).toEqual({
      b: 2,
      c: {
        e: 4,
        f: {
          h: 6,
        },
        i: [{ b: 2 }],
      },
    })
  })
})
