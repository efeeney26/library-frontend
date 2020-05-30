import React, { memo } from 'react'
import PropTypes from 'prop-types'

import { getCellValue } from '../../utils'

import style from './TableCell.module.css'

const TableCell = ({ cellValue }) => {
  return (
    <td
      className={style.cell}
    >
      {getCellValue(cellValue)}
    </td>
  )
}

TableCell.propTypes = {
  cellValue: PropTypes.shape({
    value: PropTypes.string,
    type: PropTypes.string.isRequired
  }).isRequired
}

TableCell.defaulProps = {
  cellValue: {},
  type: 'text'
}

export default memo(TableCell)
