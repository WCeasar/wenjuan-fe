import React, { FC } from 'react'
import { QuestionCheckboxPropsType, QuestionCheckboxDefaultProps } from './interface'
import { Checkbox, Typography, Space } from 'antd'

const { Paragraph } = Typography
const QuestionCheckbox: FC<QuestionCheckboxPropsType> = (prop: QuestionCheckboxPropsType) => {
  const { list = [], title = '', isVertical = false } = { ...QuestionCheckboxDefaultProps, ...prop }

  return (
    <>
      <Paragraph style={{ fontWeight: 'bold' }}> {title}</Paragraph>

      <Checkbox.Group>
        <Space direction={isVertical ? 'vertical' : 'horizontal'}>
          {list.map((item) => {
            const { text, value, checked } = item

            return (
              <Checkbox key={value} checked={checked}>
                {text}
              </Checkbox>
            )
          })}
        </Space>
      </Checkbox.Group>
    </>
  )
}

export default QuestionCheckbox
