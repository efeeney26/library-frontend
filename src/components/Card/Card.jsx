import React from 'react'
import PropTypes from 'prop-types'

import style from './Card.module.css'

const Card = (props) => {
  const { data } = props
  console.log('data', data)
  return (
    <div className={style.card}>
      Hello
    </div>
  )
}

Card.propTypes = {
  data: PropTypes.object,
  img: PropTypes.string,
  alt: PropTypes.string
}

export default Card
