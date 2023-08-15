import Component from './component'
import { QuestionRadioDefaultProps } from './interface'
import propComponent from './propComponent'

export * from './interface'

export default {
  title: '单选框',
  Component: Component,
  type: 'questionRadio',
  props: QuestionRadioDefaultProps,
  propComponent: propComponent
}
