import * as types from '../action-types'
import { ADD_BOOK_INITIAL_STATE } from '../constants'

const addBook = (state = ADD_BOOK_INITIAL_STATE, action) => {
  switch (action.type) {
    case types.REQUEST_BOOK:
      return {
        ...state,
        isFetching: true
      }
    case types.SUCCESS_REQUEST_BOOK:
      return {
        ...state,
        isFetching: false,
        message: action.message
      }
    case types.FAILED_REQUEST_BOOK:
      return {
        ...state,
        isFetching: false,
        isError: true
      }
    default:
      return state
  }
}

export default addBook
