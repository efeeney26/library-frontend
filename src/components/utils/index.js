import { mergeWith } from 'lodash'
import cs from 'classnames'

const mergeRule = (objValue, srcValue) => cs(objValue, srcValue)

export const mergeTheme = (...args) => mergeWith({}, ...args, mergeRule)

export {
  labeledComponent,
  fieldAdapter
} from './hoc'

export {
  LabeledInput,
  LabeledTextarea
} from './labeledComponents'
