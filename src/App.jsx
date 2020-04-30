import React from 'react'
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom'
import { BooksList } from './containers'
import { ROUTES } from './constants'

import style from './App.module.css'

function App () {
  return (
    <div className={style.mainContainer}>
      <BrowserRouter>
        <Redirect to={ROUTES.BASE_URL}/>
        <Switch>
          <Route exact path={ROUTES.BASE_URL} component={BooksList}/>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
