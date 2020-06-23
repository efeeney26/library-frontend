import React, { useCallback } from 'react'
import { useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Form as FinalForm, Field } from 'react-final-form'

import { actions, selectors, API } from '../../__data__'
import { Button, Form, LabeledInput, LabeledTextarea } from '../../components'
import { getArrayData } from '../utils'

import styles from '../AddBook/AddBook.module.css'

const BookDescription = (props) => {
  const { bookState, updateBook } = props
  const history = useHistory()
  const { book, scheme } = bookState
  // TODO лишняя вложенность массивов
  const arrayData = (book && getArrayData(book, scheme)) || []
  const [bookData] = arrayData

  const onSubmit = useCallback(values => {
    updateBook(API.updateBook, { book: values, id: book[0].id })
      .then(res => {
        const { data: { message } } = res
        alert(message)
        history.goBack()
      })
  }, [book, history, updateBook])

  return (
    <FinalForm
      onSubmit={onSubmit}
      render={({ handleSubmit, form, submitting, pristine }) => (
        <Form
          onSubmit={handleSubmit}
        >
          {bookData?.length && bookData.map(({ key, type, value, ...rest }) => (
            <Field
              key={key}
              name={key}
              initialValue={value}
              component={type === 'textarea' ? LabeledTextarea : LabeledInput}
              {...rest}
            />
          ))}
          <div className={styles.buttonBlock}>
            <Button
              title="Обновить книгу"
              disabled={submitting || pristine}
            />
            <Button
              title="Очистить"
              colorScheme="red"
              disabled={submitting || pristine}
              onClick={form.reset}
            />
          </div>
        </Form>
      )}
    />
  )
}

const mapStateToProps = (state) => ({
  bookState: selectors.getBook(state)
})

const mapDispatchToProps = ({
  updateBook: actions.fetchBook
})

BookDescription.propTypes = {
  bookState: PropTypes.shape({
    book: PropTypes.array,
    scheme: PropTypes.arrayOf(PropTypes.object).isRequired
  }),
  updateBook: PropTypes.func.isRequired
}

BookDescription.defaultProps = {
  bookState: {}
}

export default connect(mapStateToProps, mapDispatchToProps)(BookDescription)
