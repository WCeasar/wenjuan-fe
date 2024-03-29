import React, { FC, useEffect, useState } from 'react'
import { Typography, Space } from 'antd'
import { FormOutlined } from '@ant-design/icons'
import { HOME_PATHNAME, MANAGE_INDEX_PATHNAME } from '../../router'
import { Link } from 'react-router-dom'
import styles from './index.module.scss'
import { useGetUserInfo } from '../../hooks/useGetUserInfo'
const LOGO: FC = () => {
  const { Title } = Typography

  const { username } = useGetUserInfo()
  const [pathname, setPathname] = useState(HOME_PATHNAME)
  useEffect(() => {
    if (username) {
      setPathname(MANAGE_INDEX_PATHNAME)
    } else {
      setPathname(HOME_PATHNAME)
    }
  }, [username])

  return (
    <div className={styles.container}>
      <Link to={pathname}>
        <Space>
          <Title>
            <FormOutlined></FormOutlined>
          </Title>
          <Title>小慕问卷</Title>
        </Space>
      </Link>
    </div>
  )
}

export default LOGO
