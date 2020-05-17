import { combineReducers } from 'redux'
import books from './books'
import addBook from './addBook'

const rootReducer = combineReducers({
  books,
  addBook
})

export default rootReducer
