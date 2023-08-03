import React, { FC, useEffect } from 'react'
import { QuestionInputPropsType } from './interface'
import { Form, Input } from 'antd'

const PropComponent: FC<QuestionInputPropsType> = (Props: QuestionInputPropsType) => {
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
        <Input></Input>
      </Form.Item>
    </Form>
  )
}

export default PropComponent
