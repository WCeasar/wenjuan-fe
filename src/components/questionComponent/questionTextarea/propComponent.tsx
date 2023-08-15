import React, { FC, useEffect } from 'react'
import { QuestionTextareaPropsType } from './interface'
import { Form, Input } from 'antd'

const TextArea = Input.TextArea
const PropComponent: FC<QuestionTextareaPropsType> = (Props: QuestionTextareaPropsType) => {
  const { title, placeholder, onchange = null, disabled = false } = Props

  const [form] = Form.useForm()

  useEffect(() => {
    form.setFieldsValue({ title, placeholder })
  }, [title, placeholder])

  const handleValueChange = () => {
    if (onchange) {
      onchange(form.getFieldsValue())
    }
  }

  return (
    <Form
      initialValues={{ title, placeholder }}
      form={form}
      layout="vertical"
      onValuesChange={handleValueChange}
      disabled={disabled}
    >
      <Form.Item label="标题" name="title" rules={[{ required: true, message: '标题不能为空' }]}>
        <Input></Input>
      </Form.Item>
      <Form.Item label="Placeholder" name="placeholder">
        <TextArea></TextArea>
      </Form.Item>
    </Form>
  )
}

export default PropComponent
