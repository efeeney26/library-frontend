import React, { useEffect, useMemo } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { actions, selectors, API } from '../../__data__'
import { Table, Spinner, ErrorBanner, BookCardBlock } from '../../components'
import { getSchemeKeysArray, getArrayData } from '../utils'

import { ContentHeader } from './components'

const BooksList = (props) => {
  const { fetchBooks, books, history, saveBookById, deleteBook, setBooksView } = props
  const { books: booksList, isFetching, isError, scheme, view } = books
  const tableHeaders = useMemo(() => getSchemeKeysArray(scheme, 'title'), [scheme])
  const tableData = useMemo(() => getArrayData(booksList, scheme), [booksList, scheme])
  useEffect(() => {
    fetchBooks()
  }, [fetchBooks])

  const handleDeleteData = (id) => {
    if (window.confirm('Вы точно хотите удалить книгу?')) {
      deleteBook(API.deleteBook, { id })
        .then(res => {
          const { data: { message } } = res
          alert(message)
          document.location.reload(true)
        })
    }
  }

  const handleEditData = (id) => {
    const editBook = booksList.find(book => book.id === id)
    saveBookById(editBook)
    history.push(`/books/${id}`)
  }

  return (
    <>
      {isFetching && <Spinner />}
      {isError && <ErrorBanner />}
      <ContentHeader
        setView={setBooksView}
      />
      {!isFetching && tableData?.length && view === 'table'
        ? <Table
          tableHeaders={tableHeaders}
          tableData={tableData}
          onDeleteData={handleDeleteData}
          onEditData={handleEditData}
        />
        : <BookCardBlock/>
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
