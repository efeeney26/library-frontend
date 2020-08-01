import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { selectors, actions } from '../../__data__'
import { SeparatedBlock, Input, mergeTheme } from '../../components'

import style from './Header.module.css'

const inputTheme = mergeTheme(Input.theme, { input: style.input })

const Header = (props) => {
  const { books, setFilteredBooks } = props

  const handleOnChange = useCallback((e) => {
    const filteredBooks = books.filter((book) => book.name.toLowerCase().includes(e.target.value.toLowerCase()))
    setFilteredBooks(filteredBooks)
  }, [books, setFilteredBooks])

  return (
    <SeparatedBlock>
      <h1>Library</h1>
      <section>
        <Input
          id="search"
          placeholder="Поиск..."
          theme={inputTheme}
          onChange={handleOnChange}
        />
      </section>
    </SeparatedBlock>
  )
}

Header.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object),
  setFilteredBooks: PropTypes.func.isRequired
}

Header.defaultProps = {
  books: []
}

const mapStateToProps = (state) => ({
  books: selectors.getBooks(state).books
})

const mapDispatchToProps = {
  setFilteredBooks: actions.setFilteredBooks
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
