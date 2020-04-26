import React from 'react'
import PropTypes from 'prop-types'
import TableRow from './TableRow'
import TableHead from './TableHead'

const Table = (props) => {
  return (
    <table>
      <thead>
        <TableHead />
      </thead>
      <tbody>
        <TableRow />
      </tbody>
    </table>
  )
}

Table.propTypes = {
  children: PropTypes.node
}

Table.defaultProps = {
  children: null
}

export default Table
