import Component from './component'
import PropComponent from './PropComponent'
import { questionParagraphDefaultProps } from './interface'

export * from './interface'

export default {
  title: '段落',
  type: 'questionParagraph',
  propComponent: PropComponent,
  Component: Component,
  props: questionParagraphDefaultProps
}
