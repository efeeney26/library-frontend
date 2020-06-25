import React, { useCallback } from 'react'
import PropTypes from 'prop-types'

import { Icon, Link, SeparatedBlock, mergeTheme } from '../../../../components'
import { ICONS, ROUTES } from '../../../../constants'

import style from './ContentHeader.module.css'

const headerTheme = mergeTheme(SeparatedBlock.theme, { block: style.header })

const ContentHeader = ({ setView }) => {
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
          name={ICONS.table}
          size={30}
          colorScheme="white"
          onClick={handleTableIconClick}
        />
        <Icon
          name={ICONS.card}
          size={30}
          colorScheme="white"
          onClick={handleCardIconClick}
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

ContentHeader.propTypes = {
  setView: PropTypes.func.isRequired
}

export default ContentHeader
