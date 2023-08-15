import Component from './component'
import PropComponent from './propComponent'
import { QuestionCheckboxDefaultProps } from './interface'

export * from './interface'

export default {
  title: '多选',
  type: 'questionCheckbox', // 要和后端统一好
  Component,
  propComponent: PropComponent,
  props: QuestionCheckboxDefaultProps
}
