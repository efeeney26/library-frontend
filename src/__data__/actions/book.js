import * as types from '../action-types'

export const failedRequestBook = () => ({
  type: types.FAILED_REQUEST_BOOK
})

export const successRequestBook = () => ({
  type: types.SUCCESS_REQUEST_BOOK
})

export const requestBook = () => ({
  type: types.REQUEST_BOOK
})

export const fetchBook = (apiMethod, { ...rest }) => async (dispatch) => {
  const { book = null, id = null } = rest
  dispatch(requestBook())
  let response = {}
  try {
    if (book && id) {
      response = await apiMethod(book, id)
    } else if (book) {
      response = await apiMethod(book)
    } else {
      response = await apiMethod(id)
    }
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
