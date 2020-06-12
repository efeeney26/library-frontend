import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Form as FinalForm, Field } from 'react-final-form'

import { selectors } from '../../__data__'
import { Button, Form, LabeledInput, LabeledTextarea } from '../../components'
import { getTableData } from '../utils'

import styles from '../AddBook/AddBook.module.css'

const BookDescription = (props) => {
  const { bookState } = props
  const { book, scheme } = bookState
  // TODO лишняя вложенность массивов
  const arrayData = (book && getTableData(book, scheme)) || []
  const [data] = arrayData

  const onSubmit = useCallback(values => {
    console.log('val', values)
  }, [])

  return (
    <FinalForm
      onSubmit={onSubmit}
      render={({ handleSubmit, form, submitting, pristine }) => (
        <Form
          onSubmit={handleSubmit}
        >
          {data?.length && data.map(({ key, type, value, ...rest }) => (
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

BookDescription.propTypes = {
  bookState: PropTypes.shape({
    book: PropTypes.array,
    scheme: PropTypes.arrayOf(PropTypes.object).isRequired
  })
}

BookDescription.defaultProps = {
  bookState: {}
}

export default connect(mapStateToProps)(BookDescription)
