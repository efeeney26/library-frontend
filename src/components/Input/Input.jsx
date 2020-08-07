import React from 'react'
import PropTypes from 'prop-types'
import { noop } from 'lodash'

import defaultTheme from './Input.module.css'

const Input = (props) => {
  const { placeholder, theme, id, onChange, value } = props
  return (
    <input
      id={id}
      value={value}
      placeholder={placeholder}
      className={theme.input}
      onChange={onChange}
    />
  )
}

Input.propTypes = {
  placeholder: PropTypes.string,
  theme: PropTypes.shape({
    input: PropTypes.string
  }),
  id: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string
}

Input.defaultProps = {
  placeholder: '',
  theme: defaultTheme,
  id: '',
  onChange: noop()
}

Input.theme = defaultTheme

export default Input
