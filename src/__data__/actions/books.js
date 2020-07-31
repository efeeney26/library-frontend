import * as types from '../action-types'
import API from '../api'

export const failedRequestBooks = () => ({
  type: types.FAILED_REQUEST_BOOKS
})

export const receiveBooks = (books) => ({
  type: types.RECEIVE_BOOKS,
  books
})

const requestBooks = () => ({
  type: types.REQUEST_BOOKS
})

export const fetchBooks = () => (dispatch) => {
  dispatch(requestBooks())
  API.getBooks()
    .then((res) => {
      dispatch(receiveBooks(res.data.books))
    })
    .catch((err) => {
      dispatch(failedRequestBooks())
      console.log('An error occurred.', err)
    })
}

export const setView = (view) => ({
  type: types.SET_BOOKS_VIEW,
  view
})

export const setCurrentPage = (page) => ({
  type: types.SET_CURRENT_PAGE,
  page
})
