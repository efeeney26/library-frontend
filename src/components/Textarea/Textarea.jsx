import React, { useCallback } from 'react'
import PropTypes from 'prop-types'

import defaultTheme from './Textarea.module.css'

const TextArea = (props) => {
  const { input, size, placeholder } = props

  const handleSize = useCallback((size) => {
    switch (size) {
      case 'md':
        return 7
      case 'sm':
        return 4
      default:
        return 7
    }
  }, [size])

  return (
    <textarea
      {...input}
      placeholder={placeholder}
      className={defaultTheme.textarea}
      rows={handleSize(size)}
    />
  )
}

TextArea.propTypes = {
  input: PropTypes.object,
  size: PropTypes.oneOf(['md', 'sm']),
  placeholder: PropTypes.string
}

TextArea.defaultProp = {
  name: {},
  size: 'md',
  placeholder: ''
}

TextArea.theme = defaultTheme

export default TextArea
