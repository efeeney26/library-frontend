import React from 'react'
import PropTypes from 'prop-types'
import { noop } from 'lodash'

import defaultTheme from './Input.module.css'

const Input = (props) => {
  const { input, placeholder, theme, id, onChange } = props
  return (
    <input
      {...input}
      id={id}
      placeholder={placeholder}
      className={theme.input}
      onChange={onChange}
    />
  )
}

Input.propTypes = {
  input: PropTypes.object,
  placeholder: PropTypes.string,
  theme: PropTypes.shape({
    input: PropTypes.string
  }),
  id: PropTypes.string,
  onChange: PropTypes.func
}

Input.defaultProps = {
  input: {},
  placeHolder: '',
  theme: defaultTheme,
  id: '',
  onChange: noop()
}

Input.theme = defaultTheme

export default Input
