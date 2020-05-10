import React from 'react'
import PropTypes from 'prop-types'
import cs from 'classnames'

import defaultTheme from './Button.module.css'

const Button = (props) => {
  const { title, children, theme, colorScheme } = props
  return (
    title &&
    <button
      className={cs(theme.button, theme[colorScheme])}
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
  colorScheme: PropTypes.oneOf(['blue', ''])
}

Button.defaultProps = {
  title: '',
  children: null,
  theme: defaultTheme,
  colorScheme: ''
}

Button.theme = defaultTheme

export default Button
