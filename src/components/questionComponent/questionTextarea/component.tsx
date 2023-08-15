import React, { FC } from 'react'
import { QuestionTextareaPropsType, questionTextareaDefaultProps } from './interface'
import { Input, Typography } from 'antd'

const { TextArea } = Input
const QuestionTextarea: FC<QuestionTextareaPropsType> = (props: QuestionTextareaPropsType) => {
  const { title = '', placeholder = '' } = { ...questionTextareaDefaultProps, ...props }
  const { Paragraph } = Typography

  return (
    <div>
      <Paragraph style={{ fontWeight: 'bold' }}>{title}</Paragraph>
      <div>
        <TextArea placeholder={placeholder}></TextArea>
      </div>
    </div>
  )
}

export default QuestionTextarea
