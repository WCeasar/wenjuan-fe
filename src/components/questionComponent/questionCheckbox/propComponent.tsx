import React, { FC } from 'react'
import { QuestionCheckboxPropsType } from './interface'
import { Form, Input, Checkbox, Space, Button } from 'antd'
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons'
import { nanoid } from '@reduxjs/toolkit'

const PropComponent: FC<QuestionCheckboxPropsType> = (props: QuestionCheckboxPropsType) => {
  const { title, isVertical, list = [], onchange = null, disabled = false } = props

  const [form] = Form.useForm()

  const handleValueChange = () => {
    if (!onchange) return

    const newValue = form.getFieldsValue()

    newValue.list.forEach((item) => {
      if (!item.value) item.value = nanoid(5)
    })

    onchange(newValue)
  }
  return (
    <Form
      layout="vertical"
      initialValues={{ title, isVertical, list }}
      form={form}
      onValuesChange={handleValueChange}
      disabled={disabled}
    >
      <Form.Item name="title" label="标题" rules={[{ required: true, message: '标题不能为空' }]}>
        <Input></Input>
      </Form.Item>

      <Form.List name="list">
        {(fields, { add, remove }) => {
          return (
            <>
              {fields.map(({ name }) => {
                return (
                  <Space key={name} align="baseline">
                    <Form.Item name={[name, 'check']} valuePropName="checked">
                      <Checkbox></Checkbox>
                    </Form.Item>
                    <Form.Item
                      name={[name, 'text']}
                      rules={[
                        { required: true, message: '选项不能为空' },
                        {
                          validator(_, value) {
                            const { list } = form.getFieldsValue()
                            let num = 0
                            list.forEach((item) => {
                              if (item.text === value) num++
                            })

                            if (!value) return Promise.resolve()

                            if (num > 1) {
                              return Promise.reject(new Error('有相同选项'))
                            } else {
                              return Promise.resolve()
                            }
                          }
                        }
                      ]}
                    >
                      <Input></Input>
                    </Form.Item>

                    {fields.length > 2 && <MinusCircleOutlined onClick={() => remove(name)} />}
                  </Space>
                )
              })}

              <Form.Item>
                <Button
                  type="dashed"
                  onClick={() => add({ text: '', value: '' })}
                  block
                  icon={<PlusOutlined />}
                >
                  新增
                </Button>
              </Form.Item>
            </>
          )
        }}
      </Form.List>

      <Form.Item name="isVertical" valuePropName="checked">
        <Checkbox>是否垂直显示</Checkbox>
      </Form.Item>
    </Form>
  )
}

export default PropComponent
