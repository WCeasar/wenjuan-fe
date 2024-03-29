type OptionType = {
  text: string
  value: string
  checked: boolean
}

export interface QuestionCheckboxPropsType {
  title?: string
  isVertical?: boolean
  list?: OptionType[]

  onchange?: (value: QuestionCheckboxPropsType) => void
  disabled?: boolean
}

export const QuestionCheckboxDefaultProps: QuestionCheckboxPropsType = {
  title: '多选框标题',
  isVertical: false,
  list: [
    { text: '选项1', value: 'item1', checked: false },
    { text: '选项2', value: 'item2', checked: false },
    { text: '选项3', value: 'item3', checked: false }
  ]
}
