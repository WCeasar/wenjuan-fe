import Component from './component'
import { questionInputDefaultProps } from './interface'
import PropComponent from './propComponent'

export * from './interface'

export default {
  title: '输入框',
  type: 'questionInput',
  propComponent: PropComponent,
  Component: Component,
  props: questionInputDefaultProps
}
