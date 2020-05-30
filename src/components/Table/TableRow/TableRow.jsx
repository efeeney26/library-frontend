import React from 'react'
import PropTypes from 'prop-types'

import TableCell from '../TableCell/TableCell'

const TableRow = (props) => {
  const { data } = props
  return (
    data.map((dataItem, i) => (
      <tr key={i}>
        {dataItem.map((valueItem) => (
          <TableCell
            key={valueItem.key}
            cellValue={valueItem}
          />
        ))}
      </tr>
    ))
  )
}

TableRow.propTypes = {
  data: PropTypes.arrayOf(PropTypes.array).isRequired
}

export default TableRow
