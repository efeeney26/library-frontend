import React from 'react'
import PropTypes from 'prop-types'

const TableHead = ({ scheme }) => (
  <tr>
    {scheme.map((item) => (
      <th key={item.key}>{item.value}</th>
    ))}
  </tr>
)

TableHead.propTypes = {
  scheme: PropTypes.arrayOf(PropTypes.object)
}

TableHead.defaultProps = {
  scheme: []
}

export default TableHead
