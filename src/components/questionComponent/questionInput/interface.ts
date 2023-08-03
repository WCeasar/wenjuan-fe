export interface QuestionInputPropsType {
  title?: string
  placeholder?: string
  disabled?: boolean
  onchange?: (value: QuestionInputPropsType) => void
}

export const questionInputDefaultProps: QuestionInputPropsType = {
  title: '输入框',
  placeholder: '请输入'
}
