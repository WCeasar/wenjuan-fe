import React, { FC } from 'react'
import styles from './index.module.scss'
import { useNavigate } from 'react-router-dom'
import { Typography, Button } from 'antd'
import { MANAGE_INDEX_PATHNAME } from '../../router'

const Home: FC = () => {
  const { Title, Paragraph } = Typography

  const navigation = useNavigate()

  return (
    <div className={styles.container}>
      <Title>问卷调查|在线投票</Title>
      <Paragraph>
        已累计创建问卷&nbsp;1090&nbsp;份,发布问卷&nbsp;100&nbsp;份, 收到答卷&nbsp;10000&nbsp;份
      </Paragraph>

      <div>
        <Button type="primary" size="large" onClick={() => navigation(MANAGE_INDEX_PATHNAME)}>
          开始使用
        </Button>
      </div>
    </div>
  )
}

export default Home
