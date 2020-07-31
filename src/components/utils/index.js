import { mergeWith } from 'lodash'
import cs from 'classnames'

const mergeRule = (objValue, srcValue) => cs(objValue, srcValue)

export const mergeTheme = (...args) => mergeWith({}, ...args, mergeRule)

export const fillArrWithIndex = (length) => {
  const arr = []
  for (let i = 1; i <= length; i++) {
    arr.push(i)
  }
  return arr
}

export {
  labeledComponent,
  fieldAdapter
} from './hoc'

export {
  LabeledInput,
  LabeledTextarea
} from './labeledComponents'
