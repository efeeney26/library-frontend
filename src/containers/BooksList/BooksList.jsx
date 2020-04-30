import React, { Fragment, useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { actions, selectors } from '../../__data__'
import { Table } from '../../components'

const BooksList = (props) => {
  const { fetchBooks, books } = props
  const { books: booksList, isFetching } = books
  useEffect(() => {
    fetchBooks()
  }, [fetchBooks])

  return (
    <Fragment>
      {isFetching && <p>Loading...</p>}
      {!isFetching && booksList?.length &&
      <Table tableData={booksList}/>
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
  books: PropTypes.object
}

BooksList.defaultProps = {
  books: {}
}

export default connect(mapStateToProps, mapDispatchToProps)(BooksList)
