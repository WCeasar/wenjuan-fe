import React, { FC, useEffect } from 'react'
import { QuestionInfoPropsType } from './interface'
import { Form, Input } from 'antd'

const { TextArea } = Input
const PropComponent: FC<QuestionInfoPropsType> = (props: QuestionInfoPropsType) => {
  const { title, desc, onchange = null, disabled = false } = props

  const [form] = Form.useForm()

  useEffect(() => {
    form.setFieldsValue({ title, desc })
  }, [title, desc])
  const handleValuesChange = () => {
    if (onchange) {
      onchange(form.getFieldsValue())
    }
  }

  return (
    <Form
      initialValues={{ title, desc }}
      disabled={disabled}
      onValuesChange={handleValuesChange}
      form={form}
      layout="vertical"
    >
      <Form.Item
        label="问卷标题"
        rules={[{ required: true, message: '标题不能为空' }]}
        name="title"
      >
        <Input></Input>
      </Form.Item>
      <Form.Item label="问卷描述" name="desc">
        <TextArea></TextArea>
      </Form.Item>
    </Form>
  )
}

export default PropComponent
