import * as types from '../action-types'

const receiveBooks = (books) => ({
  type: types.RECEIVE_BOOKS,
  books
})

export default receiveBooks
