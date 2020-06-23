import { pick, transform } from 'lodash'

export const getSchemeKeysArray = (scheme, key) => scheme.map((item) => item[key])

export const transformDataObjToArray = (obj, key) => {
  return transform(obj, (res, val) => {
    res.push({
      [key]: val && val.toString()
    })
  }, [])
}

export const mergeSchemeWithData = (scheme, itemData, data) => {
  return scheme.map((schemeItem, i) => {
    if (schemeItem.key === 'actions') {
      return {
        ...schemeItem,
        itemId: data.id
      }
    }
    return {
      ...schemeItem,
      ...itemData[i]
    }
  })
}

// TODO поправить название ф-ии
export const getTableData = (data, scheme) => {
  const tableKeys = getSchemeKeysArray(scheme, 'key')
  if (!data?.length) {
    return null
  }
  return data.map((dataItem) => {
    const schemeData = pick(dataItem, tableKeys)
    const transformSchemeData = transformDataObjToArray(schemeData, 'value')
    return mergeSchemeWithData(scheme, transformSchemeData, dataItem)
  })
}
