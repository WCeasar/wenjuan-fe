export interface QuestionTextareaPropsType {
  title?: string
  placeholder?: string
  disabled?: boolean
  onchange?: (value: QuestionTextareaPropsType) => void
}

export const questionTextareaDefaultProps: QuestionTextareaPropsType = {
  title: '多行输入框',
  placeholder: '请输入内容'
}
