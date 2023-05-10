import React, { FC } from 'react'
import styles from './index.module.scss'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { Button, Space, Divider } from 'antd'
import { PlusOutlined, BarsOutlined, StarOutlined, DeleteOutlined } from '@ant-design/icons'

const ManageLayout: FC = () => {
  const { pathname } = useLocation()
  const nav = useNavigate()

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Space direction="vertical">
          <Button href="" type="primary" size="large" icon={<PlusOutlined></PlusOutlined>}>
            新建问卷
          </Button>
          <Divider style={{ borderTopColor: 'transparent' }}></Divider>
          <Button
            href=""
            type={pathname.startsWith('/manage/list') ? 'default' : 'text'}
            size="large"
            icon={<BarsOutlined></BarsOutlined>}
            onClick={() => nav('/manage/list')}
          >
            我的问卷
          </Button>
          <Button
            href=""
            type={pathname.startsWith('/manage/star') ? 'default' : 'text'}
            size="large"
            icon={<StarOutlined></StarOutlined>}
            onClick={() => nav('/manage/star')}
          >
            标星问卷
          </Button>
          <Button
            href=""
            type={pathname.startsWith('/manage/trash') ? 'default' : 'text'}
            size="large"
            icon={<DeleteOutlined></DeleteOutlined>}
            onClick={() => nav('/manage/trash')}
          >
            垃圾篓
          </Button>
        </Space>
      </div>
      <div className={styles.right}>
        <Outlet></Outlet>
      </div>
    </div>
  )
}

export default ManageLayout
