import React from 'react'
import PropTypes from 'prop-types'

import styles from './TableRow.module.css'

const TableRow = (props) => {
  const { data } = props
  return (
    data.map((dataItem) => (
      <tr key={dataItem}>
        {dataItem.map((valueItem, i) => (
          <td
            key={i}
            className={styles.cell}
          >{valueItem}
          </td>
        ))}
      </tr>
    ))
  )
}

TableRow.propTypes = {
  data: PropTypes.arrayOf(PropTypes.array).isRequired
}

export default TableRow
