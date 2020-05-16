import React from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import { ROUTES } from './constants'
import { BooksList, AddBook } from './containers'
import { booksScheme, bookScheme } from './scheme'

const withScheme = (Component, scheme) => (props) => <Component {...props} scheme={scheme} />

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" render={() => (<Redirect to={ROUTES.APP_URLS.BASE_URL}/>)}/>
      <Route exact path={ROUTES.APP_URLS.BASE_URL} component={withScheme(BooksList, booksScheme)}/>
      <Route exact path={ROUTES.APP_URLS.ADD_BOOK} component={withScheme(AddBook, bookScheme)}/>
    </Switch>
  </BrowserRouter>
)

export default AppRouter
