import React from 'react'
import PropTypes from 'prop-types'

import defaultTheme from './Labeled.module.css'

const Labeled = (props) => {
  const { children, title, theme, id } = props
  const { props: { meta, validator } } = children
  return (
    <div className={theme.labeled}>
      <label htmlFor={id} className={defaultTheme.label}>{title}</label>
      {children}
      {meta.error && meta.touched && <span className={defaultTheme.validator}>{validator}</span>}
    </div>
  )
}

Labeled.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  theme: PropTypes.shape({
    labeled: PropTypes.string
  }),
  id: PropTypes.string
}

Labeled.defaultProps = {
  children: null,
  title: '',
  theme: defaultTheme,
  id: ''
}

Labeled.theme = defaultTheme

export default Labeled
