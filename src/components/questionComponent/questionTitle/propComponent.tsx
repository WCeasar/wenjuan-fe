import React, { FC, useEffect } from 'react'
import { QuestionTitlePropsType } from './interface'
import { Form, Input, Select, Checkbox } from 'antd'

const PropComponent: FC<QuestionTitlePropsType> = (Props: QuestionTitlePropsType) => {
  const { text, level, isCenter, onchange = null, disabled = false } = Props

  const [form] = Form.useForm()

  useEffect(() => {
    form.setFieldsValue({ text, level, isCenter })
  }, [text, level, isCenter])

  const handleValueChange = () => {
    if (onchange) {
      onchange(form.getFieldsValue())
    }
  }
  return (
    <Form
      initialValues={{ text, level, isCenter }}
      form={form}
      layout="vertical"
      onValuesChange={handleValueChange}
      disabled={disabled}
    >
      <Form.Item
        label="标题内容"
        name="text"
        rules={[{ required: true, message: '标题内容不能为空' }]}
      >
        <Input></Input>
      </Form.Item>
      <Form.Item label="标题级别" name="level">
        <Select
          options={[
            { label: 1, value: 1 },
            { label: 2, value: 2 },
            { label: 3, value: 3 }
          ]}
        ></Select>
      </Form.Item>
      <Form.Item name="isCenter" valuePropName="checked">
        <Checkbox>居中显示</Checkbox>
      </Form.Item>
    </Form>
  )
}

export default PropComponent
