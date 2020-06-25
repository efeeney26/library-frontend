import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { ROUTES } from './constants'
import { BooksList, AddBook, BookDescription } from './containers'

const AppRouter = () => (
  <Switch>
    <Route exact path="/" render={() => (<Redirect to={ROUTES.APP_URLS.BASE_URL}/>)}/>
    <Route exact path={ROUTES.APP_URLS.BASE_URL} component={BooksList}/>
    <Route exact path={ROUTES.APP_URLS.ADD_BOOK} component={AddBook}/>
    <Route exact path={`${ROUTES.APP_URLS.BASE_URL}${ROUTES.APP_URLS.BOOK}`} component={BookDescription} />
  </Switch>
)

export default AppRouter
