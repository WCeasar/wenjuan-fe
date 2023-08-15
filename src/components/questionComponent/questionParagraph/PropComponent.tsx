import React, { FC, useEffect } from 'react'
import { QuestionParagraphPropsType, questionParagraphDefaultProps } from './interface'
import { Form, Input, Checkbox } from 'antd'
import { useForm } from 'antd/es/form/Form'

const { TextArea } = Input
const PropComponent: FC<QuestionParagraphPropsType> = (props: QuestionParagraphPropsType) => {
  const {
    isCenter,
    text,
    onchange = null,
    disabled = false
  } = { ...questionParagraphDefaultProps, ...props }

  const [form] = useForm()

  useEffect(() => {
    form.setFieldsValue({ isCenter, text })
  }, [isCenter, text])

  const onValuesChange = () => {
    if (onchange) {
      onchange(form.getFieldsValue())
    }
  }

  return (
    <Form
      layout="vertical"
      initialValues={{ isCenter, text }}
      form={form}
      onValuesChange={onValuesChange}
      disabled={disabled}
    >
      <Form.Item label="段落" name="text">
        <TextArea></TextArea>
      </Form.Item>

      <Form.Item name="isCenter" valuePropName="checked">
        <Checkbox>是否居中</Checkbox>
      </Form.Item>
    </Form>
  )
}

export default PropComponent
