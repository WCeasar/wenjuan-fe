import { FC } from 'react'
import QuestionInputConf, { QuestionInputPropsType } from './questionInput'
import QuestionTitleConf, { QuestionTitlePropsType } from './questionTitle'

export type QuestionPropsType = QuestionInputPropsType & QuestionTitlePropsType

export type QuestionComponentConfType = {
  title: string
  type: string
  propComponent: FC<QuestionPropsType>
  Component: FC<QuestionPropsType>
  props: QuestionPropsType
}

export const QuestionComponentConfList: QuestionComponentConfType[] = [
  QuestionInputConf,
  QuestionTitleConf
]

export const getConfByType = (type: string): QuestionComponentConfType => {
  return QuestionComponentConfList.find((item) => item.type === type) as QuestionComponentConfType
}

export const QuestionComponentGroup = [
  {
    groupId: 'text',
    groupName: '文本显示',
    components: [QuestionTitleConf]
  },
  {
    groupId: 'input',
    groupName: '用户输入',
    components: [QuestionInputConf]
  }
]
