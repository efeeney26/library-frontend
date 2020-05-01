import React, { useEffect, useMemo } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { actions, selectors } from '../../__data__'
import { Table } from '../../components'
import { getTableSchemeData, getTableData } from '../../utils'

const BooksList = (props) => {
  const { fetchBooks, books, scheme } = props
  const { books: booksList } = books
  const tableHeaders = useMemo(() => getTableSchemeData(scheme, 'value'), [scheme])
  const tableData = useMemo(() => getTableData(booksList, scheme), [booksList, scheme])
  useEffect(() => {
    fetchBooks()
  }, [fetchBooks])

  return (
    booksList && booksList.length > 0 &&
      <Table
        tableHeaders={tableHeaders}
        tableData={tableData}
      />
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
