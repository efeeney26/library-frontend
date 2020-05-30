import { mergeWith } from 'lodash'
import cs from 'classnames'

const mergeRule = (objValue, srcValue) => cs(objValue, srcValue)

export const mergeTheme = (...args) => mergeWith({}, ...args, mergeRule)

export const getCellValue = (cellValue) => {
  switch (cellValue.type) {
    case 'img':
      return 'img'
    case 'icon':
      return cellValue.icon
    default:
      return cellValue.value
  }
}

export {
  labeledComponent
} from './hoc'
