import * as types from '../action-types'
import { BOOKS_INITIAL_STATE } from '../constants'

const books = (state = BOOKS_INITIAL_STATE, action) => {
  switch (action.type) {
    case types.REQUEST_BOOKS:
      return {
        ...state,
        isFetching: true
      }
    case types.RECEIVE_BOOKS:
      return {
        ...state,
        isFetching: false,
        books: action.books
      }
    case types.FAILED_REQUEST_BOOKS:
      return {
        ...state,
        isFetching: false,
        isError: true
      }
    case types.SET_BOOKS_VIEW:
      return {
        ...state,
        view: action.view
      }
    default:
      return state
  }
}

export default books
