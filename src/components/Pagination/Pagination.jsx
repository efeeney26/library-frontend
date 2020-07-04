import React from 'react'
import PropTypes from 'prop-types'

import style from './Pagination.module.css'

const Pagination = ({ itemsPerPage, totalItems, paginate }) => {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <nav>
      <div className={style.container}>
        {pageNumbers.map(number => (
          <div
            key={number}
          >
            <a onClick={() => paginate(number)} href="">{number}</a>
          </div>
        ))
        }
      </div>
    </nav>
  )
}

export default Pagination
