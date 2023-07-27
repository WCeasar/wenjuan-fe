import React, { FC } from 'react'
import useLoadQuestionData from '../../../hooks/useLoadQuestionData'
import styles from './index.module.scss'
import CanvasEdit from './CanvasEdit'

const Edit: FC = () => {
  const { loading } = useLoadQuestionData()

  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>height</div>
        <div className={styles.content}>
          <div className={styles.left}>left</div>
          <div className={styles.main}>
            <div className={styles['canvas-wrapper']}>
              <CanvasEdit loading={loading}></CanvasEdit>
            </div>
          </div>
          <div className={styles.right}>right</div>
        </div>
      </div>
    </>
  )
}

export default Edit
