import React, { FC, useEffect } from 'react'
import styles from './index.module.scss'
import { Typography, Space, Button, Form, Input, Checkbox } from 'antd'
import { FormOutlined } from '@ant-design/icons'
import { MANAGE_INDEX_PATHNAME, REGISTER_PATHNAME } from '../../router'
import { Link, useNavigate } from 'react-router-dom'
import { useRequest } from 'ahooks'
import { loginService } from '../../services/user'
import { setToken } from '../../utils/user-Storage'

const USERNAME_KEY = 'username'
const PASSWORD_KEY = 'password'

type LoginType = {
  username: string
  password: string
  remember: boolean
}

const rememberUser = (username: string, password: string) => {
  localStorage.setItem(USERNAME_KEY, username)
  localStorage.setItem(PASSWORD_KEY, password)
}

const removeUser = () => {
  localStorage.removeItem(USERNAME_KEY)
  localStorage.removeItem(PASSWORD_KEY)
}

const getUser = () => {
  return {
    username: localStorage.getItem(USERNAME_KEY),
    password: localStorage.getItem(PASSWORD_KEY)
  }
}

const Login: FC = () => {
  const { Title } = Typography

  const [form] = Form.useForm()

  useEffect(() => {
    const { username, password } = getUser()
    form.setFieldsValue({ username, password })
  }, [])

  const nav = useNavigate()
  const { run } = useRequest(
    async (val) => {
      const res = await loginService(val)

      return res
    },
    {
      manual: true,
      onSuccess(res) {
        const { token } = res
        setToken(token)
        nav(MANAGE_INDEX_PATHNAME)
      }
    }
  )
  const onFinish = (values: LoginType) => {
    const { username, password, remember } = values
    // TODO
    run(values)

    if (remember) {
      rememberUser(username, password)
    } else {
      removeUser()
    }
  }

  return (
    <div className={styles.container}>
      <Space>
        <Title level={2}>
          <FormOutlined />
        </Title>
        <Title level={2}>登录</Title>
      </Space>

      <Form
        name="basic"
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
        form={form}
      >
        <Form.Item
          label="用户名"
          name="username"
          rules={[
            { required: true, message: '请输入用户名' },
            {
              type: 'string',
              min: 5,
              max: 20,
              message: '字符长度在5-20位之间'
            },
            {
              pattern: /^\w+$/,
              message: '只能是字母数字下划线'
            }
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item label="密码" name="password" rules={[{ required: true, message: '请输入密码' }]}>
          <Input.Password />
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 6, span: 16 }}>
          <Checkbox>记住我</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
          <Space>
            <Button type="primary" htmlType="submit">
              登录
            </Button>
            <Link to={REGISTER_PATHNAME}>注册新用户</Link>
          </Space>
        </Form.Item>
      </Form>
    </div>
  )
}

export default Login
