import React, { Fragment, useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import { noop } from 'lodash'

import { unloaded } from '../../assets'
import { ICONS } from '../../constants'
import { mergeTheme } from '../utils'

import ImageContainer from '../ImageContainer/ImageContainer'
import Icon from '../Icon/Icon'

import style from './Card.module.css'

const iconTheme = mergeTheme(Icon.theme, { icon: style.icon })

const Card = (props) => {
  const { data, onEditData, onDeleteData } = props
  const bookId = data.find((item) => item.key === 'id').value

  const [isActionsVisible, setActionsVisible] = useState(false)

  const handleClick = useCallback(() => onEditData(bookId), [onEditData, bookId])

  const handleIconClick = useCallback((e) => {
    e.stopPropagation()
    onDeleteData(bookId)
  }, [onDeleteData, bookId])

  const handleMouseOver = () => setActionsVisible(true)
  const handleMouseLeave = () => setActionsVisible(false)

  const setData = (dataSet) => {
    switch (dataSet.key) {
      case 'img':
        return (<ImageContainer img={dataSet.value || unloaded} alt="BookImage" size="160"/>)
      case 'name':
        return <h4>{dataSet.value}</h4>
      case 'author':
        return <p>{dataSet.value}</p>
      case 'actions':
        return isActionsVisible && <Icon id={dataSet.action} name={ICONS[dataSet.icon]} theme={iconTheme} size={26} onClick={handleIconClick} colorScheme={dataSet.color} />
      default:
        return ''
    }
  }

  return (
    <div
      className={style.card}
      onClick={handleClick}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    >
      {data.map((item, i) => (
        <Fragment key={`${item.key}${i}`}>
          {setData(item)}
        </Fragment>
      ))}
    </div>
  )
}

Card.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  onEditData: PropTypes.func,
  onDeleteData: PropTypes.func
}

Card.defaultProps = {
  onEditData: noop(),
  onDeleteData: noop()
}

export default Card
