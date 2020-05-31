import React from 'react'
import PropTypes from 'prop-types'

import TableCell from '../TableCell/TableCell'

const TableRow = (props) => {
  const { data } = props
  return (
    data.map((dataCells, i) => (
      // добавить nanoid
      <tr key={i}>
        {dataCells.map((cellData, i) => (
          <TableCell
            key={`${cellData.key}${i}`}
            cellData={cellData}
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
