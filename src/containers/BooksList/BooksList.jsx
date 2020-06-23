import React, { Fragment, useEffect, useMemo } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { actions, selectors, API } from '../../__data__'
import { Table, Spinner, ErrorBanner, Link, mergeTheme } from '../../components'
import { getSchemeKeysArray, getArrayData } from '../utils'

import styles from './BookList.module.css'
import { ROUTES } from '../../constants'

const linkTheme = mergeTheme(Link.theme, { link: styles.addLink })

const BooksList = (props) => {
  const { fetchBooks, books, history, saveBookById, deleteBook } = props
  const { books: booksList, isFetching, isError, scheme } = books
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
    <Fragment>
      {isFetching && <Spinner />}
      {isError && <ErrorBanner />}
      {!isFetching && tableData?.length &&
      <>
        <Table
          tableHeaders={tableHeaders}
          tableData={tableData}
          onDeleteData={handleDeleteData}
          onEditData={handleEditData}
        />
        <Link
          label="Добавить книгу"
          to={ROUTES.APP_URLS.ADD_BOOK}
          theme={linkTheme}
          mode="button"
          colorScheme="blue"
        />
      </>
      }
    </Fragment>
  )
}

const mapStateToProps = (state) => ({
  books: selectors.getBooks(state)
})

const mapDispatchToProps = ({
  fetchBooks: actions.fetchBooks,
  saveBookById: actions.saveBookById,
  deleteBook: actions.fetchBook
})

BooksList.propTypes = {
  fetchBooks: PropTypes.func.isRequired,
  deleteBook: PropTypes.func.isRequired,
  saveBookById: PropTypes.func.isRequired,
  books: PropTypes.object,
  history: PropTypes.object
}

BooksList.defaultProps = {
  books: {}
}

export default connect(mapStateToProps, mapDispatchToProps)(BooksList)
