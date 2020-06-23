import { bookScheme, booksScheme } from '../../scheme'

export const BOOKS_INITIAL_STATE = {
  books: [],
  isFetching: false,
  isError: false,
  scheme: booksScheme
}

export const BOOK_INITIAL_STATE = {
  book: {},
  isFetching: false,
  isError: false,
  scheme: bookScheme
}
