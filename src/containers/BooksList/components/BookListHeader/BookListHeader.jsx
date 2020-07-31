import React, { useCallback } from 'react'
import PropTypes from 'prop-types'

import { Icon, Link, SeparatedBlock, mergeTheme } from '../../../../components'
import { ICONS, ROUTES } from '../../../../constants'

import style from './BookListHeader.module.css'

const headerTheme = mergeTheme(SeparatedBlock.theme, { block: style.header })
const iconTheme = mergeTheme(Icon.theme, { icon: style.icon })

const BookListHeader = ({ setView }) => {
  const handleTableIconClick = useCallback(() => {
    setView('table')
  }, [setView])

  const handleCardIconClick = useCallback(() => {
    setView('card')
  }, [setView])

  return (
    <SeparatedBlock
      theme={headerTheme}
    >
      <div className={style.iconsContainer}>
        <Icon
          name={ICONS.card}
          size={30}
          colorScheme="white"
          onClick={handleCardIconClick}
          theme={iconTheme}
        />
        <Icon
          name={ICONS.table}
          size={30}
          colorScheme="white"
          onClick={handleTableIconClick}
          theme={iconTheme}
        />
      </div>
      <Link
        label="Добавить книгу"
        to={ROUTES.APP_URLS.ADD_BOOK}
        mode="button"
        colorScheme="blue"
      />
    </SeparatedBlock>
  )
}

BookListHeader.propTypes = {
  setView: PropTypes.func.isRequired
}

export default BookListHeader
