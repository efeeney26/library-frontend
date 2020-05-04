import React from 'react'
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom'
import { BooksList } from './containers'
import { ROUTES } from './constants'
import { booksScheme } from './scheme'

import style from './App.module.css'

export const withScheme = (Component, scheme) => (props) => <Component {...props} scheme={scheme} />

function App () {
  return (
    <div className={style.mainContainer}>
      <h1>Library</h1>
      <BrowserRouter>
        <Redirect to={ROUTES.BASE_URL}/>
        <Switch>
          <Route exact path={ROUTES.BASE_URL} component={withScheme(BooksList, booksScheme)}/>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
