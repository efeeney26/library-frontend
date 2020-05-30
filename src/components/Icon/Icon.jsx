import React from 'react'
import PropTypes from 'prop-types'
import cs from 'classnames'
import { noop } from 'lodash'

import defaultTheme from './Icon.module.css'

const Icon = (props) => {
  const { size, name, colorScheme, theme, onClick } = props

  return (
    <span
      className={defaultTheme.icon}
      onClick={onClick}
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
  name: PropTypes.arrayOf(PropTypes.string).isRequired,
  size: PropTypes.number,
  colorScheme: PropTypes.string,
  theme: PropTypes.shape({
    icon: PropTypes.string
  }),
  onClick: PropTypes.func
}

Icon.defaultProps = {
  size: 24,
  onClick: noop(),
  theme: defaultTheme
}

Icon.defaultTheme = defaultTheme

export default Icon
