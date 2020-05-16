import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { noop } from 'lodash'
import { Form as FinalForm, Field } from 'react-final-form'

import { actions, selectors } from '../../__data__'
import { LabeledInput, LabeledTextarea, Form, Button } from '../../components'

import styles from './AddBook.module.css'

const AddBook = (props) => {
  const { scheme, fetchBook } = props

  const onSubmit = useCallback(values => {
    fetchBook(values)
  }, [])

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
  message: selectors.getMessage(state)
})

const mapDispatchToProps = ({
  fetchBook: actions.fetchBook
})

AddBook.propTypes = {
  scheme: PropTypes.arrayOf(PropTypes.object).isRequired,
  fetchBook: PropTypes.func
}

AddBook.defaultProps = {
  fetchBook: noop()
}

export default connect(null, mapDispatchToProps)(AddBook)
