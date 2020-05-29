import React, { Fragment, useEffect, useMemo } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { actions, selectors } from '../../__data__'
import { Table, Spinner, ErrorBanner, Link, mergeTheme } from '../../components'
import { getTableSchemeData, getTableData } from '../utils'

import styles from './BookList.module.css'
import { ROUTES } from '../../constants'

const linkTheme = mergeTheme(Link.theme, { link: styles.addLink })

const BooksList = (props) => {
  const { fetchBooks, books, scheme } = props
  const { books: booksList, isFetching, isError } = books
  const tableHeaders = useMemo(() => getTableSchemeData(scheme, 'value'), [scheme])
  const tableData = useMemo(() => getTableData(booksList, scheme), [booksList, scheme])
  useEffect(() => {
    fetchBooks()
  }, [fetchBooks])

  return (
    <Fragment>
      {isFetching && <Spinner />}
      {isError && <ErrorBanner />}
      {!isFetching && tableData?.length &&
      <section className={styles.container}>
        <Table
          tableHeaders={tableHeaders}
          tableData={tableData}
        />
        <Link
          label="Добавить книгу"
          to={ROUTES.APP_URLS.ADD_BOOK}
          theme={linkTheme}
          mode="button"
          colorScheme="blue"
        />
      </section>
      }
    </Fragment>
  )
}

const mapStateToProps = (state) => ({
  books: selectors.getBooks(state)
})

const mapDispatchToProps = ({
  fetchBooks: actions.fetchBooks
})

BooksList.propTypes = {
  fetchBooks: PropTypes.func.isRequired,
  books: PropTypes.object,
  scheme: PropTypes.arrayOf(PropTypes.object).isRequired
}

BooksList.defaultProps = {
  books: {}
}

export default connect(mapStateToProps, mapDispatchToProps)(BooksList)
