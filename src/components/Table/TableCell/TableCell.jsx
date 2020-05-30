import React, { memo } from 'react'
import PropTypes from 'prop-types'

import Icon from '../../Icon/Icon'
import { ICONS } from '../../../constants'

import style from './TableCell.module.css'

const setCellValue = (cellData) => {
  switch (cellData.type) {
    case 'icon':
      return <Icon name={ICONS[cellData.icon]} colorScheme="red" />
    case 'img':
      return 'img'
    default:
      return cellData.value
  }
}

const TableCell = ({ cellData }) => {
  return (
    <td
      className={style.cell}
    >
      {setCellValue(cellData)}
    </td>
  )
}

TableCell.propTypes = {
  cellData: PropTypes.shape({
    value: PropTypes.string,
    type: PropTypes.string.isRequired
  }).isRequired
}

TableCell.defaulProps = {
  cellData: {},
  type: 'text'
}

export default memo(TableCell)
