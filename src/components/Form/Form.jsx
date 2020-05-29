import React from 'react'
import PropTypes from 'prop-types'
import cs from 'classnames'
import { noop } from 'lodash'

import defaultTheme from './Form.module.css'

const Form = (props) => {
  const { children, onSubmit, theme } = props
  return (
    <form
      onSubmit={onSubmit}
      className={cs(theme.form)}
    >
      {children}
    </form>
  )
}

Form.propTypes = {
  children: PropTypes.node,
  onSubmit: PropTypes.func,
  theme: PropTypes.shape({
    form: PropTypes.string
  })
}

Form.defaultProps = {
  children: null,
  onSubmit: noop(),
  theme: defaultTheme
}

export default Form
