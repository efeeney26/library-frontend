import React from 'react'
import PropTypes from 'prop-types'
import cs from 'classnames'
import { noop } from 'lodash'

import defaultTheme from './Icon.module.css'

const Icon = (props) => {
  const { id, size, name, colorScheme, theme, onClick } = props

  return (
    <span
      className={theme.icon}
      onClick={onClick}
      id={id}
    >
      <svg
        className={cs(theme[colorScheme])}
        width={`${size}px`}
        height={`${size}px`}
        viewBox="0 0 1024 1024"
      >
        {name.map((item) => (
          <path
            key={item}
            d={item}
          />
        ))}
      </svg>
    </span>
  )
}

Icon.propTypes = {
  id: PropTypes.string,
  name: PropTypes.arrayOf(PropTypes.string).isRequired,
  size: PropTypes.number,
  colorScheme: PropTypes.string,
  theme: PropTypes.shape({
    icon: PropTypes.string
  }),
  onClick: PropTypes.func
}

Icon.defaultProps = {
  id: '',
  size: 24,
  onClick: noop(),
  theme: defaultTheme
}

Icon.theme = defaultTheme

export default Icon
