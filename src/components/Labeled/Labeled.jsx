import React from 'react'
import PropTypes from 'prop-types'

import defaultTheme from './Labeled.module.css'

const Labeled = ({ children, title, theme }) => (
  <div className={theme.labeled}>
    <label className={defaultTheme.label}>{title}</label>
    {children}
  </div>
)

Labeled.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  theme: PropTypes.shape({
    labeled: PropTypes.string
  })
}

Labeled.defaultProps = {
  children: null,
  title: '',
  theme: defaultTheme
}

Labeled.theme = defaultTheme

export default Labeled
