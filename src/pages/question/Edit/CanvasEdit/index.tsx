import React, { FC } from 'react'
import styles from './index.module.scss'
import { Spin } from 'antd'
import useGetComponentInfo from '../../../../hooks/useGetComponentInfo'
import { getConfByType } from '../../../../components/questionComponent'
import { useDispatch } from 'react-redux'
import { changeSelectedId } from '../../../../store/componentsReducer/index'
import classnames from 'classnames'

type PropsType = {
  loading: boolean
}

const getComponentByType = (item) => {
  const { props, type } = item

  const conf = getConfByType(type)
  const { Component } = conf

  if (!conf) return null

  return <Component {...props} />
}

const CanvasEdit: FC<PropsType> = ({ loading }) => {
  const { componentList, selectedId, selectedComponent } = useGetComponentInfo()

  if (loading) {
    return (
      <div style={{ textAlign: 'center', marginTop: '200px' }}>
        <Spin></Spin>
      </div>
    )
  }

  const dispatch = useDispatch()
  const handleSelectComponent = (e, fe_id: string) => {
    e.stopPropagation()
    dispatch(changeSelectedId(fe_id))
  }

  const componentWrapperClass = styles['component-wrapper']
  const componentSelectedClass = styles['selected']
  const LockedClass = styles['Locked']
  const componentClass = (fe_id, isLocked) => {
    return classnames({
      [componentWrapperClass]: true,
      [componentSelectedClass]: fe_id === selectedId,
      [LockedClass]: isLocked
    })
  }
  return (
    <div className={styles.canvas}>
      {componentList
        .filter((item) => !item.isHidden)
        .map((item) => {
          const { fe_id, isLocked } = item

          return (
            <div
              className={componentClass(fe_id, isLocked)}
              key={fe_id}
              onClick={(e) => handleSelectComponent(e, fe_id)}
            >
              <div className={styles.component}>{getComponentByType(item)}</div>
            </div>
          )
        })}

      {/* <div className={styles['component-wrapper']}>
        <div className={styles.component}>
          <QuestionTitle></QuestionTitle>
        </div>
      </div>
      <div className={styles['component-wrapper']}>
        <div className={styles.component}>
          <QuestionInput></QuestionInput>
        </div>
      </div> */}
    </div>
  )
}

export default CanvasEdit
