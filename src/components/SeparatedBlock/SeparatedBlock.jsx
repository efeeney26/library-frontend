import React from 'react'
import PropTypes from 'prop-types'

import defaultTheme from './SeparatedBlock.module.css'

const SeparatedBlock = ({ children, theme }) => (
  <div className={theme.block}>
    {children}
  </div>
)

SeparatedBlock.propTypes = {
  children: PropTypes.node.isRequired,
  theme: PropTypes.object
}

SeparatedBlock.defaultProps = {
  theme: defaultTheme
}

SeparatedBlock.theme = defaultTheme

export default SeparatedBlock
