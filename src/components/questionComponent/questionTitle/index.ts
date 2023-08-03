import Component from './component'
import { questionTitleDefaultProps } from './interface'
import PropComponent from './propComponent'

export * from './interface'

export default {
  title: '标题',
  type: 'questionTitle',
  propComponent: PropComponent,
  Component: Component,
  props: questionTitleDefaultProps
}
