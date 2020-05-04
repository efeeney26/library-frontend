import React from 'react'
import PropTypes from 'prop-types'

const TableRow = (props) => {
  const { data } = props
  return (
    data.map((dataItem) => (
      <tr key={dataItem}>
        {dataItem.map((valueItem) => (
          <td key={valueItem}>{valueItem}</td>
        ))}
      </tr>
    ))
  )
}

TableRow.propTypes = {
  data: PropTypes.arrayOf(PropTypes.array).isRequired
}

export default TableRow
