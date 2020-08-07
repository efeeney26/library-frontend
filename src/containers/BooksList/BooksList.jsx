import React, { useEffect, useMemo, useCallback } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { actions, selectors, API } from '../../__data__'
import { LIST_VIEW } from '../../constants'
import { Table, Spinner, Banner, Card, GroupCard, Pagination } from '../../components'
import { getSchemeKeysArray, getMappedData, getCurrentItems } from '../utils'

import { BookListHeader } from './components'

const BooksList = (props) => {
  const { fetchBooks, books, history, saveBookById, deleteBook, setBooksView, setCurrentPage } = props
  const { books: booksList, filteredBooks, isFetching, isError, schemeTable, view, schemeCards, booksPerPage, currentPage } = books

  const filteredBooksList = useMemo(() => filteredBooks || booksList, [filteredBooks, booksList])

  const currentBooks = useMemo(() => getCurrentItems(filteredBooksList, currentPage, booksPerPage), [filteredBooksList, currentPage, booksPerPage])

  const tableHeaders = useMemo(() => getSchemeKeysArray(schemeTable, 'title'), [schemeTable])
  const tableData = useMemo(() => getMappedData(currentBooks, schemeTable), [currentBooks, schemeTable])

  const cardsData = useMemo(() => getMappedData(currentBooks, schemeCards), [currentBooks, schemeCards])

  useEffect(() => {
    fetchBooks()
  }, [fetchBooks])

  const handlePaginate = useCallback((pageNumber) => setCurrentPage(pageNumber), [setCurrentPage])

  const handleDeleteData = useCallback((id) => {
    if (window.confirm('Вы точно хотите удалить книгу?')) {
      deleteBook(API.deleteBook, { id })
        .then(res => {
          const { data: { message } } = res
          alert(message)
          document.location.reload(true)
          setCurrentPage(1)
        })
    }
  }, [deleteBook, setCurrentPage])

  const handleEditData = useCallback((id) => {
    const editBook = filteredBooksList.find(book => book.id === id)
    saveBookById(editBook)
    history.push(`/books/${id}`)
  }, [filteredBooksList, history, saveBookById])

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
            {cardsData.map((item, i) => (
              <Card
                key={i}
                onEditData={handleEditData}
                onDeleteData={handleDeleteData}
                data={item}
              />
            ))}
          </GroupCard>
        )
      default:
        return LIST_VIEW.table
    }
  }, [handleDeleteData, handleEditData, tableData, tableHeaders, cardsData])

  return (
    <>
      {isFetching && <Spinner />}
      {isError &&
      <Banner
        mode="error"
        description="Something goes wrong"
      />
      }
      {!isFetching && !isError && tableData?.length &&
        <>
          <BookListHeader
            setView={setBooksView}
          />
          {setViewData(view)}
          <Pagination
            itemsPerPage={booksPerPage}
            totalItems={filteredBooksList.length}
            paginate={handlePaginate}
            activePage={currentPage}
          />
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
  setBooksView: actions.setView,
  setCurrentPage: actions.setCurrentPage
})

BooksList.propTypes = {
  fetchBooks: PropTypes.func.isRequired,
  deleteBook: PropTypes.func.isRequired,
  saveBookById: PropTypes.func.isRequired,
  setBooksView: PropTypes.func.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
  books: PropTypes.object,
  history: PropTypes.object
}

BooksList.defaultProps = {
  books: {}
}

export default connect(mapStateToProps, mapDispatchToProps)(BooksList)
