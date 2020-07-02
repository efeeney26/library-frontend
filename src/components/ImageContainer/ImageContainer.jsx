import React from 'react'
import PropTypes from 'prop-types'

const ImageContainer = ({ img, alt, size }) => (
  <img
    src={img}
    alt={alt}
    width={`${size - 20}px`}
    height={`${size}px`}
  />
)

ImageContainer.propTypes = {
  img: PropTypes.string,
  alt: PropTypes.string,
  size: PropTypes.string
}

ImageContainer.defaultProps = {
  img: '',
  alt: 'Unloaded',
  size: ''
}

export default ImageContainer
