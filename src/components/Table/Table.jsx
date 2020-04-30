import React from 'react'
import PropTypes from 'prop-types'

import TableRow from './TableRow'
import TableHead from './TableHead'

import { booksScheme } from '../../scheme'

const Table = (props) => {
  const { tableData } = props

  return (
    <table cellSpacing={0} border={1}>
      <thead>
        <TableHead scheme={booksScheme}/>
      </thead>
      {tableData?.length &&
        <tbody>
          <TableRow
            scheme={booksScheme}
            items={tableData}
          />
        </tbody>
      }
    </table>
  )
}

Table.propTypes = {
  tableData: PropTypes.arrayOf(PropTypes.object)
}

Table.defaultProps = {
  tableData: []
}

export default Table
