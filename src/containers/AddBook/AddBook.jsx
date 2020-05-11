import React from 'react'
import PropTypes from 'prop-types'
import { Form as FinalForm, Field } from 'react-final-form'
import { labeledComponent, Input, Form, Button } from '../../components'

import styles from './AddBook.module.css'

const LabeledInput = labeledComponent(Input)

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const onSubmit = async values => {
  await sleep(300)
  window.alert(JSON.stringify(values, 0, 2))
}

const AddBook = (props) => {
  const { scheme } = props
  return (
    <FinalForm
      onSubmit={onSubmit}
      render={({ handleSubmit, form, submitting, pristine }) => (
        <Form
          onSubmit={handleSubmit}
        >
          {scheme.map(({ key, ...rest }) => (
            <Field
              key={key}
              name={key}
              component={LabeledInput}
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
