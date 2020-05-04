import React, { Fragment, useEffect, useMemo } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { actions, selectors } from '../../__data__'
import { Table, Spinner, ErrorBanner } from '../../components'
import { getTableSchemeData, getTableData } from '../../utils'

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
          <Table
            tableHeaders={tableHeaders}
            tableData={tableData}
          />
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
