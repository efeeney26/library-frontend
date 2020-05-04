import React from 'react'
import { Route } from 'react-router-dom'
import PropTypes from 'prop-types'
import { LazyComponent, Spinner } from '../index'

const RouteLazyComponent = ({ component: Component, scheme, ...rest }) => (
  <Route
    render={() => (
      <LazyComponent fallbackComponent={<Spinner />}>
        {scheme ? <Component {...rest} scheme={scheme} /> : <Component {...rest}/>}
      </LazyComponent>
    )}
  />
)

RouteLazyComponent.propTypes = {
  component: PropTypes.object.isRequired,
  scheme: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default RouteLazyComponent
