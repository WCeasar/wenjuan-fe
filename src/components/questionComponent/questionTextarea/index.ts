import Component from './component'
import { questionTextareaDefaultProps } from './interface'
import PropComponent from './propComponent'

export * from './interface'

export default {
  title: '多行输入框',
  type: 'questionTextarea',
  propComponent: PropComponent,
  Component: Component,
  props: questionTextareaDefaultProps
}
