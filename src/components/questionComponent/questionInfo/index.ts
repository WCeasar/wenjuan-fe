import Component from './component'
import { QuestionInfoDefaultProps } from './interface'
import PropComponent from './propComponent'

export * from './interface'

export default {
  title: '问卷标题详情',
  type: 'questionInfo',
  propComponent: PropComponent,
  Component: Component,
  props: QuestionInfoDefaultProps
}
