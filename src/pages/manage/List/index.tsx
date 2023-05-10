import React, { FC, useState } from 'react'
import QuestionCard from '../../../components/QuestionCard/index'
import styles from './index.module.scss'
import { useTitle } from 'ahooks'

const questionList = [
  {
    _id: 'q1',
    title: '问卷1',
    isPublished: true,
    isStar: false,
    answerCount: 5,
    createAt: '3月10日 13:23'
  },
  {
    _id: 'q2',
    title: '问卷2',
    isPublished: false,
    isStar: true,
    answerCount: 5,
    createAt: '3月10日 13:23'
  },
  {
    _id: 'q3',
    title: '问卷3',
    isPublished: true,
    isStar: false,
    answerCount: 15,
    createAt: '3月10日 13:23'
  },
  {
    _id: 'q4',
    title: '问卷4',
    isPublished: true,
    isStar: false,
    answerCount: 51,
    createAt: '3月10日 13:23'
  }
]

const List: FC = () => {
  useTitle('问卷列表')
  const [questionArr, setQuestionArr] = useState(questionList)

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.left}>我的问卷</div>
        <div className={styles.right}>(搜索)</div>
      </header>
      <div className={styles.content}>
        {questionArr.map((q) => {
          return <QuestionCard key={q._id} {...q}></QuestionCard>
        })}
      </div>
      <footer className={styles.footer}>footer</footer>
    </div>
  )
}

export default List
