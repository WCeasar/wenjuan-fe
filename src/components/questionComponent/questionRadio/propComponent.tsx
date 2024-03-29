import React, { FC, useEffect } from 'react'
import { QuestionRadioPropsType } from './interface'
import { Form, Input, Checkbox, Select, Button, Space } from 'antd'
import { useForm } from 'antd/es/form/Form'
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons'
import { nanoid } from '@reduxjs/toolkit'

const PropComponent: FC<QuestionRadioPropsType> = (props: QuestionRadioPropsType) => {
  const { title, value, options = [], isVertical, onchange = null, disabled = false } = props

  const [form] = useForm()

  useEffect(() => {
    form.setFieldsValue({ title, value, options, isVertical })
  }, [title, value, options, isVertical])

  const handleValueChange = () => {
    if (!onchange) return
    const newValue = form.getFieldsValue() as QuestionRadioPropsType
    newValue.options?.forEach((item) => {
      if (!item.value) {
        item.value = nanoid(5)
      }
    })

    console.log(newValue, 'newValue')

    onchange(newValue)
  }

  return (
    <>
      <Form
        layout="vertical"
        initialValues={{ title, value, options, isVertical }}
        disabled={disabled}
        form={form}
        onValuesChange={handleValueChange}
      >
        <Form.Item label="标题" name="title">
          <Input></Input>
        </Form.Item>

        <Form.List name="options">
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key, name }) => {
                return (
                  <Space key={key} align="baseline">
                    <Form.Item
                      name={[name, 'text']}
                      rules={[
                        { required: true, message: '选项不能为空' },
                        {
                          validator(_, value) {
                            const { options } = form.getFieldsValue()
                            let num = 0
                            options.forEach((item) => {
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
                      <Input />
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
          )}
        </Form.List>

        <Form.Item label="默认值" name="value">
          <Select
            options={options.map((item) => ({ label: item.text || '', value: item.value || '' }))}
          ></Select>
        </Form.Item>

        <Form.Item name="isVertical" valuePropName="checked">
          <Checkbox>是否垂直</Checkbox>
        </Form.Item>
      </Form>
    </>
  )
}

export default PropComponent
