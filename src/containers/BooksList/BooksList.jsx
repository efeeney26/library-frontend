import React, { useEffect, useMemo, useCallback } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { actions, selectors, API } from '../../__data__'
import { LIST_VIEW } from '../../constants'
import { Table, Spinner, ErrorBanner, BookCardBlock } from '../../components'
import { getSchemeKeysArray, getArrayData } from '../utils'

import { BookListHeader } from './components'

const BooksList = (props) => {
  const { fetchBooks, books, history, saveBookById, deleteBook, setBooksView } = props
  const { books: booksList, isFetching, isError, scheme, view } = books
  const tableHeaders = useMemo(() => getSchemeKeysArray(scheme, 'title'), [scheme])
  const tableData = useMemo(() => getArrayData(booksList, scheme), [booksList, scheme])
  useEffect(() => {
    fetchBooks()
  }, [fetchBooks])

  const handleDeleteData = useCallback((id) => {
    if (window.confirm('Вы точно хотите удалить книгу?')) {
      deleteBook(API.deleteBook, { id })
        .then(res => {
          const { data: { message } } = res
          alert(message)
          document.location.reload(true)
        })
    }
  }, [deleteBook])

  const handleEditData = useCallback((id) => {
    const editBook = booksList.find(book => book.id === id)
    saveBookById(editBook)
    history.push(`/books/${id}`)
  }, [booksList, history, saveBookById])

  const setViewData = useCallback((view) => {
    switch (view) {
      case LIST_VIEW.table:
        return (
          <Table
            tableHeaders={tableHeaders}
            tableData={tableData}
            onDeleteData={handleDeleteData}
            onEditData={handleEditData}
          />
        )
      case LIST_VIEW.card:
        return (
          <BookCardBlock/>
        )
      default:
        return LIST_VIEW.table
    }
  }, [handleDeleteData, handleEditData, tableData, tableHeaders])

  return (
    <>
      {isFetching && <Spinner />}
      {isError && <ErrorBanner />}
      {!isFetching && tableData?.length &&
        <>
          <BookListHeader
            setView={setBooksView}
          />
          {setViewData(view)}
        </>
      }
    </>
  )
}

const mapStateToProps = (state) => ({
  books: selectors.getBooks(state)
})

const mapDispatchToProps = ({
  fetchBooks: actions.fetchBooks,
  saveBookById: actions.saveBookById,
  deleteBook: actions.fetchBook,
  setBooksView: actions.setView
})

BooksList.propTypes = {
  fetchBooks: PropTypes.func.isRequired,
  deleteBook: PropTypes.func.isRequired,
  saveBookById: PropTypes.func.isRequired,
  setBooksView: PropTypes.func.isRequired,
  books: PropTypes.object,
  history: PropTypes.object
}

BooksList.defaultProps = {
  books: {}
}

export default connect(mapStateToProps, mapDispatchToProps)(BooksList)
