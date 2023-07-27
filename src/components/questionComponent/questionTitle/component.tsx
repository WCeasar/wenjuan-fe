import React, { FC } from 'react'
import { questionTitleDefaultProps, QuestionTitlePropsType } from './interface'
import { Typography } from 'antd'

const QuestionTitle: FC<QuestionTitlePropsType> = (props: QuestionTitlePropsType) => {
  const { text = '', level = 1, isCenter } = { ...questionTitleDefaultProps, ...props }
  const { Title } = Typography

  const genFontSize = (level: any) => {
    if (level === 1) return '24px'
    if (level === 2) return '20px'
    if (level === 3) return '16px'
  }
  return (
    <Title
      level={level}
      style={{
        textAlign: isCenter ? 'center' : 'start',
        fontSize: genFontSize(level),
        marginBottom: '0px'
      }}
    >
      {text}
    </Title>
  )
}

export default QuestionTitle
