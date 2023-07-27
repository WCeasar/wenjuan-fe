import React, { FC } from 'react'
import styles from './index.module.scss'
import QuestionInput from '../../../../components/questionComponent/questionInput/component'
import QuestionTitle from '../../../../components/questionComponent/questionTitle/component'
import { Spin } from 'antd'

type PropsType = {
  loading: boolean
}

const CanvasEdit: FC<PropsType> = ({ loading }) => {
  if (loading) {
    return (
      <div style={{ textAlign: 'center', marginTop: '200px' }}>
        <Spin></Spin>
      </div>
    )
  }

  return (
    <div className={styles.canvas}>
      <div className={styles['component-wrapper']}>
        <div className={styles.component}>
          <QuestionTitle></QuestionTitle>
        </div>
      </div>
      <div className={styles['component-wrapper']}>
        <div className={styles.component}>
          <QuestionInput></QuestionInput>
        </div>
      </div>
    </div>
  )
}

export default CanvasEdit
