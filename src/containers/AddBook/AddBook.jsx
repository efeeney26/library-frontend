import React, { useCallback } from 'react'
import { useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Form as FinalForm, Field } from 'react-final-form'

import { API } from '../../__data__'
import { LabeledInput, LabeledTextarea, Form, Button } from '../../components'

import styles from './AddBook.module.css'

const AddBook = (props) => {
  const { scheme } = props
  const history = useHistory()

  const onSubmit = useCallback(values => {
    API.addBook(values)
      .then((res) => {
        const { data: { message } } = res
        alert(message)
        history.goBack()
      })
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

AddBook.propTypes = {
  scheme: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default AddBook
