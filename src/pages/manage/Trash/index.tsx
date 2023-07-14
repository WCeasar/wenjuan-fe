import React, { FC, useState } from 'react'
import styles from '../common.module.scss'
import { useRequest, useTitle } from 'ahooks'
import { Modal, Empty, Table, Typography, Tag, Space, Button, Spin, message } from 'antd'
import ListSearch from '../../../components/ListSearch'
import useLoadQuestionListData from '../../../hooks/useLoadQuestionListData'
import ListPage from '../../../components/listPage'
import { delQuestionService, updateQuestionService } from '../../../services/question'
import { ExclamationCircleFilled } from '@ant-design/icons'

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
  const { confirm } = Modal

  const { data = {}, loading = false, refresh } = useLoadQuestionListData({ isDeleted: true })
  const { list = [], total = 0 } = data

  const onChange = (selectedRowKeys: string[]) => {
    console.log(selectedRowKeys)
    setSelectArr(selectedRowKeys)
  }

  const { run: RecoverHandle } = useRequest(
    async () => {
      for await (const item of selectArr) {
        console.log(item)
        await updateQuestionService(item, { isDeleted: false })
      }
    },
    {
      manual: true,
      debounceWait: 500,
      onSuccess() {
        message.success('恢复成功')
        refresh()
        setSelectArr([])
      }
    }
  )

  const handleRecoverClick = async () => {
    confirm({
      title: 'Confirm',
      icon: <ExclamationCircleFilled />,
      content: '是否确认恢复',
      okText: '确认',
      cancelText: '取消',
      async onOk() {
        RecoverHandle()
      }
    })
  }

  const handleDelClick = async () => {
    console.log(selectArr)

    confirm({
      title: 'Confirm',
      icon: <ExclamationCircleFilled />,
      content: '是否确认删除',
      okText: '确认',
      cancelText: '取消',
      async onOk() {
        await delHandle()
      }
    })
  }

  const { run: delHandle } = useRequest(
    async () => {
      const res = await delQuestionService(selectArr)
      setSelectArr([])
      refresh()
      return res
    },
    {
      manual: true,
      debounceWait: 500
    }
  )

  const table = (
    <>
      <Space style={{ marginBottom: '10px' }}>
        <Button
          disabled={!selectArr.length}
          onClick={() => {
            handleRecoverClick()
          }}
        >
          恢复
        </Button>
        <Button
          disabled={!selectArr.length}
          onClick={() => {
            handleDelClick()
          }}
        >
          删除
        </Button>
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
        rowKey="_id"
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
