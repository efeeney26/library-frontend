import React from 'react'
import PropTypes from 'prop-types'

import TableRow from './TableRow/TableRow'
import TableHead from './TableHead/TableHead'

const Table = (props) => {
  const { tableHeaders, tableData } = props
  return (
    <table cellSpacing={0} border={1}>
      <thead>
        <TableHead data={tableHeaders}/>
      </thead>
      {tableData?.length &&
        <tbody>
          <TableRow
            data={tableData}
          />
        </tbody>
      }
    </table>
  )
}

Table.propTypes = {
  tableData: PropTypes.arrayOf(PropTypes.array),
  tableHeaders: PropTypes.arrayOf(PropTypes.string).isRequired
}

Table.defaultProps = {
  tableData: []
}

export default Table
