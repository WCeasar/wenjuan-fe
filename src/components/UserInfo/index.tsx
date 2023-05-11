import React, { FC } from 'react'
import { LOGIN_PATHNAME } from '../../router'
import { useNavigate } from 'react-router-dom'
import styles from './index.module.scss'
import { Typography } from 'antd'

const UserInfo: FC = () => {
  const { Link: Link1 } = Typography

  const nav = useNavigate()
  return (
    <>
      <Link1 className={styles.container} onClick={() => nav(LOGIN_PATHNAME)}>
        登录
      </Link1>
    </>
  )
}

export default UserInfo
