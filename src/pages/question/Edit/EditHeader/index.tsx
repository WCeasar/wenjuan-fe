import React, { FC } from 'react'
import styles from './index.module.scss'
import { Space, Button, Typography } from 'antd'
import { LeftOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import EditTools from '../EditTools'

const EditHeader: FC = () => {
  const { Title } = Typography
  const nav = useNavigate()

  return (
    <div className={styles['header-wrapper']}>
      <div className={styles['header']}>
        <div className={styles.left}>
          <Space>
            <Button
              type="link"
              icon={<LeftOutlined />}
              onClick={() => {
                nav(-1)
              }}
            >
              返回
            </Button>
            <Title level={4} style={{ fontSize: '16px', marginBottom: '0' }}>
              问卷列表
            </Title>
          </Space>
        </div>
        <div className={styles.main}>
          <EditTools></EditTools>
        </div>
        <div className={styles.right}>
          <Space>
            <Button>保存</Button>
            <Button type="primary">发布</Button>
          </Space>
        </div>
      </div>
    </div>
  )
}

export default EditHeader
