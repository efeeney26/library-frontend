import { pick } from 'lodash'

export const getTableSchemeData = (scheme, key) => scheme.map((item) => item[key])

export const getTableData = (data, scheme) => {
  const tableKeys = getTableSchemeData(scheme, 'key')
  return data.map((dataItem) => {
    const test = pick(dataItem, tableKeys)
    return Object.values(test)
  })
}
