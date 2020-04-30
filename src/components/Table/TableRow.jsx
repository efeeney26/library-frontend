import React from 'react'
import PropTypes from 'prop-types'

const TableRow = (props) => {
  const { items } = props
  const values = items.reduce((acc, item) => [
    ...acc,
    Object.values(item)
  ], [])
  return (
    values.map((valuesItem) => (
      <tr key={valuesItem}>
        {valuesItem.map((itemCell) => (
          <td key={itemCell}>{itemCell}</td>
        ))}
      </tr>
    ))
  )
}

TableRow.propTypes = {
  items: PropTypes.array.isRequired
}

export default TableRow
