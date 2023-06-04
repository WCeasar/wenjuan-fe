import React, { FC } from 'react'
import QuestionCard from '../../../components/QuestionCard/index'
import styles from '../common.module.scss'
import { useTitle } from 'ahooks'
import { Empty } from 'antd'
import { Typography, Spin } from 'antd'
import ListSearch from '../../../components/ListSearch'
import useLoadQuestionListData from '../../../hooks/useLoadQuestionListData'
const List: FC = () => {
  useTitle('react')

  const { data = {}, loading = false } = useLoadQuestionListData()

  const { list, total } = data

  const { Title } = Typography

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Title level={3}>我的问卷</Title>
        <div className={styles.right}>
          <ListSearch></ListSearch>
        </div>
      </header>
      <div className={styles.content}>
        {/* loading */}
        {loading && (
          <div style={{ textAlign: 'center' }}>
            <Spin></Spin>
          </div>
        )}
        {/* empty */}
        {!loading && list && !list.length && <Empty description="暂时没有更多数据了" />}
        {/* content */}
        {!loading &&
          list.length &&
          list.map((q) => {
            return <QuestionCard key={q._id} {...q}></QuestionCard>
          })}
      </div>
      <footer className={styles.footer}>loadMore</footer>
    </div>
  )
}

export default List
