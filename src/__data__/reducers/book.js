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
        isError: false
      }
    case types.FAILED_REQUEST_BOOK:
      return {
        ...state,
        isFetching: false,
        isError: true
      }
    case types.SAVE_EDIT_BOOK:
      return {
        ...state,
        book: [action.book]
      }
    default:
      return state
  }
}

export default book
