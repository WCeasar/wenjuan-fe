interface OptionType {
  text: string
  value: string
}

export interface QuestionRadioPropsType {
  title?: string
  isVertical?: boolean
  options?: OptionType[]
  value?: string

  onchange?: (value: QuestionRadioPropsType) => void
  disabled?: boolean
}

export const QuestionRadioDefaultProps: QuestionRadioPropsType = {
  title: '单选框',
  isVertical: false,
  options: [
    {
      text: '选项一',
      value: 'item1'
    },
    {
      text: '选项二',
      value: 'item2'
    },
    {
      text: '选项三',
      value: 'item3'
    }
  ]
}
