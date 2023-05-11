import React, { FC } from 'react'
import { Typography, Space } from 'antd'
import { FormOutlined } from '@ant-design/icons'
import { HOME_PATHNAME } from '../../router'
import { Link } from 'react-router-dom'
import styles from './index.module.scss'

const LOGO: FC = () => {
  const { Title } = Typography
  return (
    <div className={styles.container}>
      <Link to={HOME_PATHNAME}>
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
