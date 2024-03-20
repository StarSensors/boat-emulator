export const recursiveKeyFilter = (object: any, keysToFilter: string[]) => {
  if (typeof object !== 'object') {
    throw new TypeError('The parameter "object" must be an object.')
  }
  if (typeof keysToFilter !== 'object') {
    throw new TypeError('The parameter "keysToFilter" must be an array.')
  }

  let resultObj: any

  if (Array.isArray(object)) {
    resultObj = []
  } else {
    resultObj = {}
  }

  Object.keys(object).forEach(key => {
    if (~keysToFilter.indexOf(key)) {
      return
    }

    if (
      object[key] != null &&
      typeof object[key] === 'object' &&
      Object.keys(object[key]).length
    ) {
      resultObj[key] = recursiveKeyFilter(object[key], keysToFilter)
    } else {
      resultObj[key] = object[key]
    }
  })

  return resultObj
}
