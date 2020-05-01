import * as types from '../action-types'
import { INITIAL_STATE } from '../constants'

const books = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.RECEIVE_BOOKS:
      return {
        ...state,
        books: action.books
      }
    default:
      return state
  }
}

export default books
