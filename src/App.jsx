import React, { lazy } from 'react'
import { Switch, BrowserRouter, Redirect } from 'react-router-dom'

import { RouteLazyComponent } from './components'
import { ROUTES } from './constants'
import { booksScheme } from './scheme'

import style from './App.module.css'

const BooksList = lazy(() => import('./containers/BooksList/BooksList'))

function App () {
  return (
    <div className={style.mainContainer}>
      <h1>Library</h1>
      <BrowserRouter>
        <Redirect to={ROUTES.BASE_URL}/>
        <Switch>
          <RouteLazyComponent component={BooksList} scheme={booksScheme}/>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
