import React from 'react'
import Labeled from '../../Labeled/Labeled'

const getLabeledProps = (props) => ({
  title: props.title,
  id: props.id
})

export const getWrappedLabeledComponent = (Component) => (props) => (
  <Labeled {...getLabeledProps(props)}>
    <Component
      {...props}
    />
  </Labeled>
)
