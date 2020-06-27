import React, { useCallback } from 'react'
import { useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { noop } from 'lodash'
import { Form as FinalForm, Field } from 'react-final-form'

import { actions, selectors, API } from '../../__data__'
import { LabeledInput, LabeledTextarea, Form, Button } from '../../components'

import styles from './AddBook.module.css'

const AddBook = (props) => {
  const { addBook, bookState } = props
  const { isLoading, scheme } = bookState
  const history = useHistory()

  const onSubmit = useCallback(values => {
    addBook(API.addBook, { book: values })
      .then(res => {
        const { data: { message } } = res
        alert(message)
        history.goBack()
      })
  }, [addBook, history])

  return (
    <FinalForm
      onSubmit={onSubmit}
      render={({ handleSubmit, form, submitting, pristine }) => (
        <Form
          onSubmit={handleSubmit}
        >
          {scheme.map(({ key, type, ...rest }) => (
            <Field
              key={key}
              name={key}
              component={type === 'textarea' ? LabeledTextarea : LabeledInput}
              {...rest}
            />
          ))}
          <div className={styles.buttonBlock}>
            <Button
              title="Добавить книгу"
              disabled={submitting || pristine || isLoading}
            />
            <Button
              title="Очистить"
              colorScheme="red"
              disabled={submitting || pristine || isLoading}
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
  addBook: actions.fetchBook
})

AddBook.propTypes = {
  bookState: PropTypes.shape({
    isLoading: PropTypes.bool,
    scheme: PropTypes.arrayOf(PropTypes.object).isRequired
  }),
  addBook: PropTypes.func
}

AddBook.defaultProps = {
  message: {},
  addBook: noop(),
  bookState: {}
}

export default connect(mapStateToProps, mapDispatchToProps)(AddBook)
