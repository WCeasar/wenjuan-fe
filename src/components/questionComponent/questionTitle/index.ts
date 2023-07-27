import Component from './component'
import { questionTitleDefaultProps } from './interface'

export * from './interface'

export default {
  title: '标题',
  type: 'questionTitle',
  component: Component,
  props: questionTitleDefaultProps
}
