import { bookScheme, booksScheme, booksCardsScheme } from '../../scheme'

export const BOOKS_INITIAL_STATE = {
  books: [],
  isFetching: false,
  isError: false,
  scheme: booksScheme,
  schemeCards: booksCardsScheme,
  view: 'table'
}

export const BOOK_INITIAL_STATE = {
  book: {},
  isFetching: false,
  isError: false,
  scheme: bookScheme
}
