import { FC } from 'react'
import QuestionInputConf, { QuestionInputPropsType } from './questionInput'
import QuestionTitleConf, { QuestionTitlePropsType } from './questionTitle'
import questionParagraphConf, { QuestionParagraphPropsType } from './questionParagraph'
import questionInfoConf, { QuestionInfoPropsType } from './questionInfo/index'
import questionTextareaConf, { QuestionTextareaPropsType } from './questionTextarea'
import questionRadioConf, { QuestionRadioPropsType } from './questionRadio'

export type QuestionPropsType = QuestionInputPropsType &
  QuestionTitlePropsType &
  QuestionParagraphPropsType &
  QuestionInfoPropsType &
  QuestionTextareaPropsType &
  QuestionRadioPropsType

export type QuestionComponentConfType = {
  title: string
  type: string
  propComponent: FC<QuestionPropsType>
  Component: FC<QuestionPropsType>
  props: QuestionPropsType
}

export const QuestionComponentConfList: QuestionComponentConfType[] = [
  QuestionInputConf,
  QuestionTitleConf,
  questionParagraphConf,
  questionInfoConf,
  questionTextareaConf,
  questionRadioConf
]

export const getConfByType = (type: string): QuestionComponentConfType => {
  return QuestionComponentConfList.find((item) => item.type === type) as QuestionComponentConfType
}

export const QuestionComponentGroup = [
  {
    groupId: 'text',
    groupName: '文本显示',
    components: [questionInfoConf, QuestionTitleConf, questionParagraphConf]
  },
  {
    groupId: 'input',
    groupName: '用户输入',
    components: [QuestionInputConf, questionTextareaConf]
  },
  {
    groupId: 'select',
    groupName: '选择框',
    components: [questionRadioConf]
  }
]
