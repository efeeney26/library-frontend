import * as types from '../action-types'
import { BOOK_INITIAL_STATE } from '../constants'

const book = (state = BOOK_INITIAL_STATE, action) => {
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

export default book
