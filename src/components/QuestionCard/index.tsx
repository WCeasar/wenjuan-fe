import React, { FC } from 'react'
import styles from './index.module.scss'

type PropsType = {
  _id: string
  title: string
  isPublished: boolean
  isStar: boolean
  answerCount: number
  createAt: string
}

const List: FC<PropsType> = (props: PropsType) => {
  const { _id, isPublished, title, answerCount, createAt } = props

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.left}>
          <a href="">{title}</a>
        </div>
        <div className={styles.right}>
          <span style={{ color: isPublished ? 'yellow' : '' }}>未发布</span>
          <span>答卷:{answerCount}</span>
          <span>{createAt}</span>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={styles.left}>
          <button>编辑问卷</button>
          <button>数据统计</button>
        </div>
        <div className={styles.right}>
          <button>标星</button>
          <button>复制</button>
          <button>删除</button>
        </div>
      </div>
    </div>
  )
}

export default List
