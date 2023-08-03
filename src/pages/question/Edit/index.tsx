import React, { FC } from 'react'
import useLoadQuestionData from '../../../hooks/useLoadQuestionData'
import styles from './index.module.scss'
import CanvasEdit from './CanvasEdit'
import LeftPanel from './LeftPanel'
import RightPanel from './RightPanel'
import { useDispatch } from 'react-redux'
import { changeSelectedId } from '../../../store/componentsReducer'
import EditHeader from './EditHeader/index'

const Edit: FC = () => {
  const { loading } = useLoadQuestionData()

  const dispatch = useDispatch()
  const handleRemoveSelected = () => {
    dispatch(changeSelectedId(''))
  }
  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <EditHeader></EditHeader>
        </div>
        <div className={styles.content}>
          <div className={styles.left}>
            <LeftPanel></LeftPanel>
          </div>
          <div className={styles.main} onClick={() => handleRemoveSelected()}>
            <div className={styles['canvas-wrapper']}>
              <CanvasEdit loading={loading}></CanvasEdit>
            </div>
          </div>
          <div className={styles.right}>
            <RightPanel></RightPanel>
          </div>
        </div>
      </div>
    </>
  )
}

export default Edit
