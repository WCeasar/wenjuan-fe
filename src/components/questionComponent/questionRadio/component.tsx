import React, { FC } from 'react'
import { QuestionRadioPropsType, QuestionRadioDefaultProps } from './interface'
import { Space, Radio, Typography } from 'antd'

const { Paragraph } = Typography
const QuestionRadio: FC<QuestionRadioPropsType> = (props: QuestionRadioPropsType) => {
  const { value, title, options = [], isVertical } = { ...QuestionRadioDefaultProps, ...props }

  return (
    <div>
      <Paragraph style={{ fontWeight: 'bold' }}>{title}</Paragraph>
      <div>
        <Radio.Group value={value}>
          <Space direction={isVertical ? 'vertical' : 'horizontal'}>
            {options?.map((item) => {
              return (
                <Radio key={item.value} value={item.value}>
                  {item.text}
                </Radio>
              )
            })}
          </Space>
        </Radio.Group>
      </div>
    </div>
  )
}

export default QuestionRadio
