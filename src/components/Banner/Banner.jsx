import React, { memo } from 'react'
import PropTypes from 'prop-types'
import cs from 'classnames'

import defaultTheme from './Baner.module.css'

const Banner = ({ mode, description }) => (
  <div
    className={cs(defaultTheme.banner, defaultTheme[mode])}
  >
    {description}
  </div>
)

Banner.propTypes = {
  mode: PropTypes.oneOf(['success', 'error']),
  description: PropTypes.string
}

Banner.defaultProps = {
  mode: 'success',
  description: ''
}

export default memo(Banner)
