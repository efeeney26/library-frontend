import React from 'react'
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom'
import { Table } from './components'
import { ROUTES } from './constants'

function App () {
  return (
    <BrowserRouter>
      <Redirect to={ROUTES.BASE_URL}/>
      <Switch>
        <Route exact path={ROUTES.BASE_URL} component={Table}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App
