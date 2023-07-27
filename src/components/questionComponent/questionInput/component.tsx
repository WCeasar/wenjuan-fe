import React, { FC } from 'react'
import { QuestionInputPropsType, questionInputDefaultProps } from './interface'
import { Input, Typography } from 'antd'

const QuestionInput: FC<QuestionInputPropsType> = (props: QuestionInputPropsType) => {
  const { title = '', placeholder = '' } = { ...questionInputDefaultProps, ...props }
  const { Paragraph } = Typography

  return (
    <div>
      <Paragraph style={{ fontWeight: 'bold' }}>{title}</Paragraph>
      <div>
        <Input placeholder={placeholder}></Input>
      </div>
    </div>
  )
}

export default QuestionInput
