import React from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import { ROUTES } from './constants'
import { BooksList, AddBook } from './containers'
import { booksScheme } from './scheme'

const withScheme = (Component, scheme) => (props) => <Component {...props} scheme={scheme} />

const AppRouter = () => (
  <BrowserRouter>
    <Redirect to={ROUTES.BASE_URL}/>
    <Switch>
      <Route exact path={ROUTES.BASE_URL} component={withScheme(BooksList, booksScheme)}/>
      <Route exact path={ROUTES.ADD_BOOK} component={AddBook}/>
    </Switch>
  </BrowserRouter>
)

export default AppRouter
