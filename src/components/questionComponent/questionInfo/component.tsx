import React, { FC } from 'react'
import { QuestionInfoPropsType, QuestionInfoDefaultProps } from './interface'
import { Typography } from 'antd'

const { Title, Paragraph } = Typography
const QuestionInfo: FC<QuestionInfoPropsType> = (props: QuestionInfoPropsType) => {
  const { title, desc = '' } = { ...QuestionInfoDefaultProps, ...props }

  const d = desc.split('\n')
  return (
    <>
      <Title level={2}>{title}</Title>
      <Paragraph>
        {d.map((item, index) => {
          return (
            <span key={index}>
              {index !== 0 && <br></br>}
              {item}
            </span>
          )
        })}{' '}
      </Paragraph>
    </>
  )
}

export default QuestionInfo
