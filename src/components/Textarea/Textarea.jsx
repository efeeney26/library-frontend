import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import { noop } from 'lodash'

import defaultTheme from './Textarea.module.css'

const TextArea = (props) => {
  const { value, size, placeholder, onChange } = props

  const handleSize = useMemo(() => {
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
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={defaultTheme.textarea}
      rows={handleSize}
    />
  )
}

TextArea.propTypes = {
  input: PropTypes.object,
  size: PropTypes.oneOf(['md', 'sm']),
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func
}

TextArea.defaultProp = {
  name: {},
  size: 'md',
  placeholder: '',
  value: '',
  onChange: noop()
}

TextArea.theme = defaultTheme

export default TextArea
