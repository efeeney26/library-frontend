import React, { createContext, useContext } from 'react'
import PropTypes from 'prop-types'
import { noop } from 'lodash'

import TableRow from './TableRow/TableRow'
import TableHead from './TableHead/TableHead'

export const TableContext = createContext({})

export const useTableContext = () => useContext(TableContext)

const Table = (props) => {
  const { tableHeaders, tableData, onDeleteData, onEditData } = props

  const state = {
    onDeleteData,
    onEditData
  }

  return (
    <TableContext.Provider value={state}>
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
    </TableContext.Provider>
  )
}

Table.propTypes = {
  tableData: PropTypes.arrayOf(PropTypes.array),
  tableHeaders: PropTypes.arrayOf(PropTypes.string).isRequired,
  onDeleteData: PropTypes.func,
  onEditData: PropTypes.func
}

Table.defaultProps = {
  tableData: [],
  onDeleteData: noop(),
  onEditData: noop()
}

export default Table
