import React from 'react'
import PropTypes from 'prop-types'
import cs from 'classnames'

import defaultTheme from './Input.module.css'

const Input = (props) => {
  const { input, placeholder, theme } = props
  return (
    <input
      {...input}
      placeholder={placeholder}
      className={cs(theme.input)}
    />
  )
}

Input.propTypes = {
  input: PropTypes.object,
  placeholder: PropTypes.string,
  theme: PropTypes.shape({
    input: PropTypes.string
  })
}

Input.defaultProps = {
  input: {},
  placeHolder: '',
  theme: defaultTheme
}

Input.theme = defaultTheme

export default Input
