export interface QuestionParagraphPropsType {
  text?: string
  isCenter?: boolean

  onchange?: (value: QuestionParagraphPropsType) => void
  disabled?: boolean
}

export const questionParagraphDefaultProps = {
  text: '一个文本段落',
  isCenter: false
}
