import React, { Suspense } from 'react'
import PropTypes from 'prop-types'

const LazyComponent = (props) => {
  const { fallbackComponent, children } = props
  return (
    <Suspense fallback={fallbackComponent}>
      {children}
    </Suspense>
  )
}

LazyComponent.propTypes = {
  fallbackComponent: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired
}

export default LazyComponent
