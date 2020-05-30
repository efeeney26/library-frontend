import { pick, transform } from 'lodash'

export const getTableSchemeData = (scheme, key) => scheme.map((item) => item[key])

export const transformObjToArray = (obj, key) => {
  return transform(obj, (res, val) => {
    res.push({
      [key]: val.toString()
    })
  }, [])
}

export const getTableData = (data, scheme) => {
  const tableKeys = getTableSchemeData(scheme, 'key')
  if (!data?.length) {
    return null
  }
  return data.map((dataItem) => {
    const schemeData = pick(dataItem, tableKeys)
    const transformSchemeData = transformObjToArray(schemeData, 'value')

    return scheme.map((schemeItem, i) => ({
      ...schemeItem,
      ...transformSchemeData[i]
    }))
  })
}
