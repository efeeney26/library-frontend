
export const getCurrentItems = (itemsList, currentPage, itemsPerPage) => {
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage

  return itemsList.slice(indexOfFirstItem, indexOfLastItem)
}

export const getSchemeKeysArray = (scheme, key) => scheme.map((item) => item[key])

export const mergeSchemeWithData = (data, scheme) => (
  scheme.map(schemeItem => {
    if (schemeItem.key === 'actions') {
      return {
        ...schemeItem,
        itemId: data.id
      }
    }
    return {
      ...schemeItem,
      value: data[schemeItem.key] || schemeItem.value
    }
  })
)

export const getMappedData = (data, scheme) => {
  if (!data?.length) {
    return null
  }
  return data.map((dataItem) => mergeSchemeWithData(dataItem, scheme))
}

export const requiredValidator = (value) => !value
