import { bookScheme, booksTableScheme, booksCardsScheme } from '../../scheme'

export const BOOKS_INITIAL_STATE = {
  books: [],
  filteredBooks: null,
  isFetching: false,
  isError: false,
  schemeTable: booksTableScheme,
  schemeCards: booksCardsScheme,
  view: 'card',
  booksPerPage: 5,
  currentPage: 1
}

export const BOOK_INITIAL_STATE = {
  book: {},
  isFetching: false,
  isError: false,
  scheme: bookScheme
}
