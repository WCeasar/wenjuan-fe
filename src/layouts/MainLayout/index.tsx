import React, { FC } from 'react'
import styles from './index.module.scss'
import { Outlet } from 'react-router-dom'
import { Layout } from 'antd'
const { Header, Footer, Content } = Layout

const MainLayout: FC = () => {
  return (
    <Layout className={styles.container}>
      <Header className={styles.header}>MainLayoutHeader</Header>
      <Content className={styles.content}>
        <Outlet></Outlet>
      </Content>
      <Footer className={styles.footer}>小慕问卷 &copy;2023-present. created by wangxu</Footer>
    </Layout>
  )
}

export default MainLayout
