export interface QuestionTitlePropsType {
  text?: string
  level?: 1 | 2 | 3
  isCenter?: boolean
}

export const questionTitleDefaultProps: QuestionTitlePropsType = {
  text: '我是一个标题',
  level: 1,
  isCenter: false
}
