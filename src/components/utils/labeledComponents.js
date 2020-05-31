import Input from '../Input/Input'
import TextArea from '../Textarea/Textarea'
import { labeledComponent } from './hoc'

export const LabeledInput = labeledComponent(Input)
export const LabeledTextarea = labeledComponent(TextArea)
