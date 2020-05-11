import React from 'react'
import Labeled from '../../Labeled/Labeled'

export const labeledComponent = (Component) => ({ title, ...rest }) => (
  <Labeled title={title}>
    <Component
      {...rest}
    />
  </Labeled>
)
