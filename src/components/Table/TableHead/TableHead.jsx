import React from 'react'
import PropTypes from 'prop-types'

import styles from './TableHead.module.css'

const TableHead = ({ data }) => (
  <tr>
    {data.map((item) => (
      <th
        key={item}
        className={styles.head}
      >
        {item}
      </th>
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
