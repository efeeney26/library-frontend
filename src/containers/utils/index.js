export const getSchemeKeysArray = (scheme, key) => scheme.map((item) => item[key])

export const mergeSchemeWithData = (data, scheme) => {
  return scheme.map(schemeItem => {
    if (schemeItem.key === 'actions') {
      return {
        ...schemeItem,
        itemId: data.id
      }
    }
    return {
      ...schemeItem,
      value: data[schemeItem.key] ? data[schemeItem.key].toString() : schemeItem.value
    }
  })
}

export const getMappedData = (data, scheme) => {
  if (!data?.length) {
    return null
  }
  return data.map((dataItem) => mergeSchemeWithData(dataItem, scheme))
}

export const requiredValidator = (value) => {
  return value ? null : true
}
