import React from 'react'
import PropTypes from 'prop-types'

import ImageContainer from '../ImageContainer/ImageContainer'

import style from './Card.module.css'

const Card = (props) => {
  const { data, img, alt } = props
  return (
    <div className={style.card}>
      <ImageContainer src={img} alt={alt} size="150"/>
      <h4>{data.name}</h4>
      <p>{data.author}</p>
    </div>
  )
}

Card.propTypes = {
  data: PropTypes.object,
  img: PropTypes.string,
  alt: PropTypes.string
}

export default Card
