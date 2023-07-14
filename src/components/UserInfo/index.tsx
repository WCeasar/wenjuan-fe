import React, { FC } from 'react'
import { LOGIN_PATHNAME } from '../../router'
import { useNavigate } from 'react-router-dom'
import styles from './index.module.scss'
import { Typography, Button } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import { removeToken } from '../../utils/user-Storage'
import { useGetUserInfo } from '../../hooks/useGetUserInfo'
import { useDispatch } from 'react-redux'
import { logoutReducer } from '../../store/user'

const UserInfo: FC = () => {
  const { Link: Link1 } = Typography
  const { username } = useGetUserInfo()
  const nav = useNavigate()

  const dispatch = useDispatch()
  const logout = () => {
    dispatch(logoutReducer())
    removeToken()
    nav(LOGIN_PATHNAME)
  }

  const userInfo = (
    <>
      <span style={{ color: '#fff' }}>
        <UserOutlined /> {username}
      </span>
      <Button type="link" onClick={logout}>
        退出登录
      </Button>
    </>
  )

  const login = (
    <>
      <Link1 className={styles.container} onClick={() => nav(LOGIN_PATHNAME)}>
        登录
      </Link1>
    </>
  )

  return <>{username ? userInfo : login}</>
}

export default UserInfo
