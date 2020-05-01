import React, { Suspense, lazy } from 'react'
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom'

import { Spinner } from './components'
import { BooksList } from './containers'
import { ROUTES } from './constants'
import { booksScheme } from './scheme'

import style from './App.module.css'

const withScheme = (Component, scheme) => (props) => <Component {...props} scheme={scheme} />

const Test = lazy(() => import('./containers/BooksList/BooksList'))

const Test1 = (props) => (
  <Suspense fallback={<Spinner />}>
    <Test {...props}/>
  </Suspense>
)

function App () {
  return (
    <div className={style.mainContainer}>
      <h1>Library</h1>
      <BrowserRouter>
        <Redirect to={ROUTES.BASE_URL}/>
        <Switch>
          <Route exact path={ROUTES.BASE_URL} component={withScheme(Test1, booksScheme)}/>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
