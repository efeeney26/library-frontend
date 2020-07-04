import React from 'react'
import PropTypes from 'prop-types'

import defaultTheme from './ImageContainer.module.css'

const ImageContainer = ({ img, alt, theme }) => (
  <img
    src={img}
    alt={alt}
    className={theme.image}
  />
)

ImageContainer.propTypes = {
  img: PropTypes.string,
  alt: PropTypes.string,
  theme: PropTypes.shape({
    image: PropTypes.string
  })
}

ImageContainer.defaultProps = {
  img: '',
  alt: 'Unloaded',
  theme: defaultTheme
}

ImageContainer.theme = defaultTheme

export default ImageContainer
