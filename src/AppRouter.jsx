import React from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import { ROUTES } from './constants'
import { BooksList, AddBook } from './containers'
import { booksScheme, bookScheme } from './scheme'

const withScheme = (Component, scheme) => (props) => <Component {...props} scheme={scheme} />

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" render={() => (<Redirect to={ROUTES.BASE_URL}/>)}/>
      <Route exact path={ROUTES.BASE_URL} component={withScheme(BooksList, booksScheme)}/>
      <Route exact path={ROUTES.ADD_BOOK} component={withScheme(AddBook, bookScheme)}/>
    </Switch>
  </BrowserRouter>
)

export default AppRouter
