import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { noop } from 'lodash'

import Icon from '../../Icon/Icon'
import { ICONS } from '../../../constants'

import { useTableContext } from '../Table'
import style from './TableCell.module.css'

const TableCell = ({ cellData }) => {
  const tableContext = useTableContext()

  const handleClick = () => {
    switch (cellData.action) {
      case 'edit':
        return tableContext.onEditData(cellData.itemId)
      case 'delete':
        return tableContext.onDeleteData(cellData.itemId)
      default:
        return noop()
    }
  }

  const setCellValue = (cellData) => {
    switch (cellData.type) {
      case 'icon':
        return <Icon name={ICONS[cellData.icon]} onClick={handleClick} colorScheme={cellData.color} />
      case 'img':
        return 'img'
      default:
        return cellData.value
    }
  }

  return (
    <td
      className={style.cell}
    >
      {setCellValue(cellData)}
    </td>
  )
}

TableCell.propTypes = {
  cellData: PropTypes.object.isRequired
}

TableCell.defaulProps = {
  cellData: {},
  type: 'text'
}

export default memo(TableCell)
