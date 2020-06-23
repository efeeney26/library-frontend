import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { noop } from 'lodash'
import cs from 'classnames'
import PropTypes from 'prop-types'

import defaultTheme from './Link.module.css'

const Link = (props) => {
  const { label, to, theme, mode, colorScheme, children, onClick } = props

  return (
    <RouterLink
      to={to}
      className={cs(theme.link, theme[mode], theme[colorScheme])}
      onClick={onClick}
    >
      {children || label}
    </RouterLink>
  )
}

Link.propTypes = {
  children: PropTypes.node,
  label: PropTypes.string,
  to: PropTypes.string,
  theme: PropTypes.shape({
    link: PropTypes.string
  }),
  mode: PropTypes.oneOf(['button', 'link']),
  colorScheme: PropTypes.oneOf(['blue', 'none']),
  onClick: PropTypes.func
}

Link.defaultProps = {
  label: '',
  to: '',
  theme: defaultTheme,
  mode: 'link',
  children: null,
  colorScheme: 'none',
  onClick: noop()
}

Link.theme = defaultTheme

export default Link
