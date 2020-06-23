import * as types from '../action-types'
import API from '../api'

export const failedRequestBook = () => ({
  type: types.FAILED_REQUEST_BOOK
})

export const successRequestBook = () => ({
  type: types.SUCCESS_REQUEST_BOOK
})

export const requestBook = () => ({
  type: types.REQUEST_BOOK
})

export const addBook = (book) => async (dispatch) => {
  dispatch(requestBook())
  let response = {}
  try {
    response = await API.addBook(book)
  } catch (err) {
    dispatch(failedRequestBook())
    console.log('An error occurred.', err)
  }
  dispatch(successRequestBook())
  return response
}

export const deleteBook = (id) => async (dispatch) => {
  dispatch(requestBook())
  let response = {}
  try {
    response = await API.deleteBook(id)
  } catch (err) {
    dispatch(failedRequestBook())
    console.log('An error occurred.', err)
  }
  dispatch(successRequestBook())
  return response
}

export const updateBook = (book, id) => async (dispatch) => {
  dispatch(requestBook())
  let response = {}
  try {
    response = await API.updateBook(book, id)
  } catch (err) {
    dispatch(failedRequestBook())
    console.log('An error occurred.', err)
  }
  dispatch(successRequestBook())
  return response
}

export const saveBookById = (book) => ({
  type: types.SAVE_EDIT_BOOK,
  book
})
