import React, { FC, useEffect } from 'react'
import { Form, Input } from 'antd'
import { useDispatch } from 'react-redux'

import { useGetPageInfo } from '../../../../hooks/useGetPageInfo'
import { resetPageInfo } from '../../../../store/pageInfoReducer'

const PageSetting: FC = () => {
  const pageInfo = useGetPageInfo()

  const [form] = Form.useForm()
  const dispatch = useDispatch()

  useEffect(() => {
    form.setFieldsValue(pageInfo)
  }, [pageInfo])
  const handleValueChange = () => {
    const newValue = form.getFieldsValue()

    dispatch(resetPageInfo(newValue))
  }
  return (
    <>
      <Form
        layout="vertical"
        form={form}
        initialValues={pageInfo}
        onValuesChange={handleValueChange}
      >
        <Form.Item name="title" rules={[{ required: true, message: '请输入标题' }]} label="标题">
          <Input placeholder="请输入标题"></Input>
        </Form.Item>
        <Form.Item name="desc" label="描述">
          <Input.TextArea placeholder="请输入描述"></Input.TextArea>
        </Form.Item>
        <Form.Item name="css" label="css代码">
          <Input.TextArea placeholder="请输入css代码"></Input.TextArea>
        </Form.Item>
        <Form.Item name="js" label="js代码">
          <Input.TextArea placeholder="请输入js代码"></Input.TextArea>
        </Form.Item>
      </Form>
    </>
  )
}

export default PageSetting
