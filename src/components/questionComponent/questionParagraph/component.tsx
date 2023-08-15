import React, { FC } from 'react'
import { questionParagraphDefaultProps, QuestionParagraphPropsType } from './interface'
import { Typography } from 'antd'

const { Paragraph } = Typography

const QuestionParagraph: FC<QuestionParagraphPropsType> = (props: QuestionParagraphPropsType) => {
  const { text, isCenter } = { ...questionParagraphDefaultProps, ...props }

  const t = text.split('\n')

  return (
    <Paragraph style={{ textAlign: isCenter ? 'center' : 'start', marginBottom: '0px' }}>
      {t.map((item, index) => {
        return (
          <span key={index}>
            {index !== 0 && <br></br>}
            {item}
          </span>
        )
      })}
    </Paragraph>
  )
}

export default QuestionParagraph
