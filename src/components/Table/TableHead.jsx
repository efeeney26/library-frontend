import React from 'react'
import PropTypes from 'prop-types'

const TableHead = ({ data }) => (
  <tr>
    {data.map((item) => (
      <th key={item}>{item}</th>
    ))}
  </tr>
)

TableHead.propTypes = {
  data: PropTypes.arrayOf(PropTypes.string)
}

TableHead.defaultProps = {
  data: []
}

export default TableHead
