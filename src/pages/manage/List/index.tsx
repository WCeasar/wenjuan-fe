import React, { FC, useEffect, useMemo, useRef, useState } from 'react'
import QuestionCard from '../../../components/QuestionCard/index'
import styles from '../common.module.scss'
import { useDebounceFn, useRequest, useTitle } from 'ahooks'
import { Empty } from 'antd'
import { Typography, Spin } from 'antd'
import ListSearch from '../../../components/ListSearch'
import { useSearchParams } from 'react-router-dom'
import { getQuestionListService } from '../../../services/question'
import { KEYWORD, LIST_PAGESIZE } from '../../../constant'
import { DataType } from '../../../services/ajax'

const List: FC = () => {
  useTitle('react')

  const { Title } = Typography
  const [searchParams] = useSearchParams()

  const [isStarted, setIsStarted] = useState(false) // 是否已经开始给加载

  const [page, setPage] = useState(0)
  const [list, setList] = useState<DataType>([])
  const [total, setTotal] = useState(0)

  const hasMore = total > list.length

  const keyword = searchParams.get(KEYWORD)

  useEffect(() => {
    setPage(1)
    setList([])
    setTotal(0)
    setIsStarted(false)
  }, [keyword])

  const { run: load, loading } = useRequest(
    async () => {
      const res = await getQuestionListService({
        page: page,
        pageSize: LIST_PAGESIZE,
        keyword: keyword || ''
      })

      return res
    },
    {
      manual: true,

      onSuccess(res) {
        const { list: l = [], total = 0 } = res
        setList(list.concat(l))
        setTotal(total)
        setPage(page + 1)
      }
    }
  )

  const containerTarget = useRef<HTMLDivElement>(null)
  const { run: tryLoadMore } = useDebounceFn(
    async () => {
      // 监听dom变化 试图加载更多
      if (!containerTarget.current) return
      const rect = containerTarget.current.getBoundingClientRect()
      if (!rect) return
      if (rect.y < document.body.clientHeight) {
        load()
        setIsStarted(true)
      }
    },
    {
      wait: 500
    }
  )

  useEffect(() => {
    tryLoadMore() // 加载第一页
  }, [searchParams])

  // 页面滚动时要尝试出发加载
  useEffect(() => {
    if (!hasMore) return
    window.addEventListener('scroll', tryLoadMore)
    return () => {
      window.removeEventListener('scroll', tryLoadMore)
    }
  }, [searchParams, hasMore])

  const loadMoreContentElem = useMemo(() => {
    if (loading || !isStarted)
      return (
        <div>
          <Spin></Spin>
        </div>
      )
    if (total === 0) return <Empty description="暂无数据" />
    if (!hasMore && isStarted) return <span> 没有更多了</span>
    return <span>加载下一页...</span>
  }, [loading, isStarted, total, hasMore])

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Title level={3}>我的问卷</Title>
        <div className={styles.right}>
          <ListSearch></ListSearch>
        </div>
      </header>
      <div className={styles.content}>
        {/* content */}
        {list.length
          ? list.map((q) => {
              return <QuestionCard key={q._id} {...q}></QuestionCard>
            })
          : ''}
      </div>
      <footer className={styles.footer}>
        <div ref={containerTarget}>
          <div style={{ textAlign: 'center' }}>{loadMoreContentElem}</div>
        </div>
      </footer>
    </div>
  )
}

export default List
