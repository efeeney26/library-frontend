import React, { useCallback, useMemo } from 'react'
import PropTypes from 'prop-types'
import { noop } from 'lodash'
import cs from 'classnames'

import { fillArrWithIndex } from '../utils'

import style from './Pagination.module.css'

const Pagination = ({ itemsPerPage, totalItems, paginate, activePage }) => {
  const pagesCount = useMemo(() => fillArrWithIndex(Math.ceil(totalItems / itemsPerPage)), [totalItems, itemsPerPage])

  const handlePaginate = useCallback((number) => () => paginate(number), [paginate])

  return (
    <div className={style.container}>
      {pagesCount.map(number => (
        <div
          key={number}
          className={number === activePage ? cs(style.page, style.active) : style.page}
          onClick={handlePaginate(number)}
        >
          {number}
        </div>
      ))
      }
    </div>
  )
}

Pagination.propTypes = {
  itemsPerPage: PropTypes.number,
  totalItems: PropTypes.number.isRequired,
  paginate: PropTypes.func,
  activePage: PropTypes.number.isRequired
}

Pagination.defaultProps = {
  itemsPerPage: 5,
  paginate: noop()
}

export default Pagination
