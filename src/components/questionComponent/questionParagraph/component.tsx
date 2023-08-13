import React, { FC } from 'react'
import { questionParagraphDefaultProps, QuestionParagraphPropsType } from './interface'
import { Typography } from 'antd'

const { Paragraph } = Typography

const QuestionParagraph: FC<QuestionParagraphPropsType> = (props: QuestionParagraphPropsType) => {
  const { text, isCenter } = { ...questionParagraphDefaultProps, ...props }

  return (
    <Paragraph style={{ textAlign: isCenter ? 'center' : 'start', marginBottom: '0px' }}>
      {text}
    </Paragraph>
  )
}

export default QuestionParagraph
