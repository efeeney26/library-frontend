import React from 'react'
import PropTypes from 'prop-types'
import cs from 'classnames'
import { noop } from 'lodash'

import defaultTheme from './Button.module.css'

const Button = (props) => {
  const { title, children, theme, colorScheme, disabled, onClick } = props
  return (
    title &&
    <button
      className={cs(theme.button, theme[colorScheme])}
      disabled={disabled}
      onClick={onClick}
    >
      {children || title}
    </button>
  )
}

Button.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  theme: PropTypes.shape({
    button: PropTypes.string
  }),
  colorScheme: PropTypes.oneOf(['blue', 'red', '']),
  disabled: PropTypes.bool,
  onClick: PropTypes.func
}

Button.defaultProps = {
  title: '',
  children: null,
  theme: defaultTheme,
  colorScheme: 'blue',
  disabled: false,
  onClick: noop()
}

Button.theme = defaultTheme

export default Button
