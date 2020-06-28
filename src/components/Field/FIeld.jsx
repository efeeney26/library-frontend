import React from 'react'
import PropTypes from 'prop-types'
import { Field as ReduxFormField } from 'react-final-form'

import { fieldAdapter } from '../utils'

export const Field = (props) => {
  return (
    <ReduxFormField
      {...props}
      component={fieldAdapter(props.component)}
    />
  )
}

Field.propTypes = {
  component: PropTypes.func.isRequired
}

export default Field
