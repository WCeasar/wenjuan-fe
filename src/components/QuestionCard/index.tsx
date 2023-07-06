import React, { FC, useState } from 'react'
import styles from './index.module.scss'
import { Button, Divider, Space, Tag, Typography, Popconfirm, message, Modal } from 'antd'
import {
  EditOutlined,
  BarChartOutlined,
  StarOutlined,
  CopyOutlined,
  DeleteOutlined,
  ExclamationCircleFilled
} from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import { useRequest } from 'ahooks'
import { duplicateQuestionService, updateQuestionService } from '../../services/question'

type PropsType = {
  _id: string
  title: string
  isPublished: boolean
  isStar: boolean
  answerCount: number
  createAt: string
  isDeleted: boolean
}

const QuestionCard: FC<PropsType> = (props: PropsType) => {
  const { isPublished, title, answerCount, createAt, isStar, isDeleted } = props
  const { Link } = Typography
  const nav = useNavigate()
  const { confirm } = Modal

  const [_isStar, set_IsStar] = useState(isStar)
  const { run: handleStar, loading } = useRequest(
    async () => {
      const res = await updateQuestionService(props._id, { ...props, isStar: !_isStar })
      console.log(res)
    },
    {
      manual: true,
      onSuccess() {
        set_IsStar(!_isStar)
        message.success(!_isStar ? '标星成功' : '取消标星成功')
      }
    }
  )

  const handleStarCancel = () => {
    message.error('标星')
  }

  const { run: handleDuplicate, loading: duplicateLoading } = useRequest(
    async () => {
      const res = await duplicateQuestionService(props._id)
      console.log(res)
      return res
    },
    {
      manual: true,
      onSuccess(res) {
        message.success('复制成功')
        nav('/question/edit/' + res.id)
      }
    }
  )

  const [delState, setDelState] = useState(props.isDeleted)

  const { run: delQuestion, loading: delQuestionLoading } = useRequest(
    async () => {
      const res = await updateQuestionService(props._id, { ...props, isDeleted: !delState })
      console.log(res)
      return res
    },
    {
      manual: true,
      onSuccess(res) {
        console.log(res)

        message.success('删除成功成功')
        setDelState(true)
      }
    }
  )

  const handleDel = () => {
    confirm({
      title: '温馨提示',
      icon: <ExclamationCircleFilled />,
      content: '确认要删除吗',
      onOk() {
        delQuestion()
      }
    })
  }

  if (delState) return null

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.left}>
          <Space>
            {_isStar ? <StarOutlined style={{ color: 'red' }}></StarOutlined> : ''}
            <Link
              onClick={() => {
                isPublished ? nav('/question/stat/3') : nav('/question/edit/3')
              }}
            >
              {title}
            </Link>
          </Space>
        </div>
        <div className={styles.right}>
          <Space>
            <Tag color={isPublished ? 'processing' : 'default'}>
              {isPublished ? '已发布' : '未发布'}
            </Tag>
            <span>答卷：{answerCount}</span>
            <span>{createAt}</span>
          </Space>
        </div>
      </div>

      <Divider style={{ margin: '12px 0' }}></Divider>

      <div className={styles.bottom}>
        <div className={styles.left}>
          <Button
            size="small"
            type="text"
            icon={<EditOutlined />}
            onClick={() => {
              nav('/question/edit/3')
            }}
          >
            编辑问卷
          </Button>
          <Button
            size="small"
            type="text"
            icon={<BarChartOutlined />}
            disabled={!isPublished}
            onClick={() => {
              nav('/question/stat/3')
            }}
          >
            数据统计
          </Button>
        </div>
        <div className={styles.right}>
          <Popconfirm
            title="温馨提示"
            description="是否确认标星"
            onConfirm={handleStar}
            onCancel={handleStarCancel}
            okText="确认"
            cancelText="取消"
          >
            <Button size="small" type="text" icon={<StarOutlined />} loading={loading}>
              {_isStar ? '取消标星' : '标星'}
            </Button>
          </Popconfirm>

          <Popconfirm
            title="温馨提示"
            description="是否确认标星"
            onConfirm={handleDuplicate}
            okText="确认"
            cancelText="取消"
          >
            <Button size="small" type="text" icon={<CopyOutlined />} loading={duplicateLoading}>
              复制
            </Button>
          </Popconfirm>

          <Button
            size="small"
            type="text"
            icon={<DeleteOutlined />}
            onClick={handleDel}
            loading={delQuestionLoading}
          >
            删除
          </Button>
        </div>
      </div>
    </div>
  )
}

export default QuestionCard
