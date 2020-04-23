import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { Table, NotFound } from './components'
import { ROUTES } from './constants'

function App () {
  return (
    <Switch>
      <Route exact path={ROUTES.BASE_URL} component={Table}/>
      <Route component={NotFound}/>
      <Redirect to={ROUTES.BASE_URL}/>
    </Switch>
  )
}

export default App
