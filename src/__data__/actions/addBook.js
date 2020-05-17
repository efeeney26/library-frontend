import * as types from '../action-types'
import API from '../api'

export const failedRequestBook = () => ({
  type: types.FAILED_REQUEST_BOOK
})

export const successRequestBook = (message) => ({
  type: types.SUCCESS_REQUEST_BOOK,
  message
})

export const requestBook = () => ({
  type: types.REQUEST_BOOK
})

export const addBook = (book) => (dispatch) => {
  dispatch(requestBook())
  API.addBook(book)
    .then((res) => {
      const { data: { message } } = res
      alert(message)
      dispatch(successRequestBook(message))
    })
    .catch((err) => {
      dispatch(failedRequestBook())
      console.log('An error occurred.', err)
    })
}
