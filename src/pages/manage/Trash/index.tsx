import React, { FC, useState } from 'react'
import styles from '../common.module.scss'
import { useTitle } from 'ahooks'
import { Empty, Table, Typography, Tag, Space, Button, Spin } from 'antd'
import ListSearch from '../../../components/ListSearch'
import useLoadQuestionListData from '../../../hooks/useLoadQuestionListData'
import ListPage from '../../../components/listPage'

const columns = [
  {
    title: '标题',
    dataIndex: 'title',
    key: 'title'
  },
  {
    title: '是否发布',
    dataIndex: 'isPublished',
    render: (isPublished: boolean) => (
      <>
        <Tag color={isPublished ? 'processing' : 'default'}>
          {isPublished ? '已发布' : '未发布'}
        </Tag>
      </>
    )
  },
  {
    title: '是否标星',
    dataIndex: 'isStar',
    render: (isStar: boolean) => (
      <>
        <Tag color={isStar ? 'processing' : 'default'}>{isStar ? '已标星' : '未标星'}</Tag>
      </>
    )
  },
  {
    title: '答卷',
    dataIndex: 'answerCount'
  },
  {
    title: '创建时间',
    dataIndex: 'createAt'
  }
]

const Trash: FC = () => {
  useTitle('react')

  const [selectArr, setSelectArr] = useState<string[]>([])
  const { Title } = Typography

  const { data = {}, loading = false } = useLoadQuestionListData({ isDeleted: true })
  const { list = [], total = 0 } = data

  const onChange = (selectedRowKeys: string[]) => {
    console.log(selectedRowKeys)
    setSelectArr(selectedRowKeys)
  }

  const table = (
    <>
      <Space style={{ marginBottom: '10px' }}>
        <Button disabled={!selectArr.length}>恢复</Button>
        <Button disabled={!selectArr.length}>删除</Button>
      </Space>

      <Table
        rowSelection={{
          type: 'checkbox',
          onChange: (selectedRowKeys) => {
            onChange(selectedRowKeys as string[])
          }
        }}
        pagination={false}
        dataSource={list}
        columns={columns}
        rowKey="title"
      ></Table>
    </>
  )

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Title level={3}>回收站</Title>
        <div className={styles.right}>
          <ListSearch></ListSearch>
        </div>
      </header>

      <div className={styles.content}>
        {loading && !list.length && (
          <div style={{ textAlign: 'center' }}>
            <Spin></Spin>
          </div>
        )}

        {!loading && !list.length && <Empty description="暂无数据"></Empty>}

        {list.length === 0 ? '' : table}
      </div>

      <footer className={styles.footer}>
        <ListPage total={total}></ListPage>
      </footer>
    </div>
  )
}

export default Trash
