import Input from '../Input/Input'
import TextArea from '../Textarea/Textarea'
import { getWrappedLabeledComponent } from './hoc'

export const LabeledInput = getWrappedLabeledComponent(Input)
export const LabeledTextarea = getWrappedLabeledComponent(TextArea)
