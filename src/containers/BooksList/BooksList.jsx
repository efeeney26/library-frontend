import React, { useEffect, useMemo, useCallback } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { actions, selectors, API } from '../../__data__'
import { LIST_VIEW } from '../../constants'
import { Table, Spinner, ErrorBanner, Card, GroupCard } from '../../components'
import { getSchemeKeysArray, getMappedData } from '../utils'

import { BookListHeader } from './components'

const BooksList = (props) => {
  const { fetchBooks, books, history, saveBookById, deleteBook, setBooksView } = props
  const { books: booksList, isFetching, isError, scheme, view, schemeCards } = books
  const tableHeaders = useMemo(() => getSchemeKeysArray(scheme, 'title'), [scheme])
  const tableData = getMappedData(booksList, scheme)
  console.log('tab', tableData)
  const cardsData = getMappedData(booksList, schemeCards)
  console.log('cards', cardsData)
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
          <GroupCard>
            {booksList.map((item, i) => (
              <Card
                key={i}
                data={item}
              />
            ))}
          </GroupCard>
        )
      default:
        return LIST_VIEW.table
    }
  }, [handleDeleteData, handleEditData, tableData, tableHeaders, booksList])

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
  saveBookById: actions.setEditBookById,
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
