import React, { ChangeEvent, FC, useState } from 'react'
import { useDispatch } from 'react-redux'
import classnames from 'classnames'
import { Input, Space, Button } from 'antd'
import { LockOutlined, EyeInvisibleOutlined } from '@ant-design/icons'

import {
  changeSelectedId,
  changeSelectedComTitle,
  hiddenSelectQuestionComponent,
  lockedSelectQuestionComponent
} from '../../../../store/componentsReducer'
import useGetComponentInfo from '../../../../hooks/useGetComponentInfo'
import styles from './index.module.scss'

const Layer: FC = () => {
  const { componentList = [], selectedId = '' } = useGetComponentInfo()

  const [changing, useChanging] = useState('')

  const dispatch = useDispatch()
  const _changeSelectedId = (fe_id: string) => {
    if (!fe_id) return

    if (fe_id !== selectedId) {
      useChanging('')
      dispatch(changeSelectedId(fe_id))
    }

    if (fe_id === selectedId) {
      useChanging(fe_id)
    }
  }

  const LeftClass = styles['left']
  const SelectedClass = styles['selected']

  const getLeftClass = (fe_id: string) => {
    return classnames({
      [LeftClass]: true,
      [SelectedClass]: fe_id === selectedId
    })
  }

  const handleChangeInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim()

    if (!value) return
    if (!selectedId) return

    dispatch(changeSelectedComTitle({ title: value }))
  }

  const handleChangeHidden = (fe_id, isHidden: boolean) => {
    dispatch(hiddenSelectQuestionComponent({ fe_id, isHidden }))
  }

  const handleChangeLocked = (fe_id: string) => {
    if (!selectedId) return
    dispatch(lockedSelectQuestionComponent({ fe_id }))
  }

  return (
    <>
      {componentList.map((c) => {
        const { fe_id, title, isHidden, isLocked } = c

        return (
          <div className={styles.wrapper} key={fe_id}>
            <div className={getLeftClass(fe_id)} onClick={() => _changeSelectedId(fe_id)}>
              {changing === fe_id && (
                <Input
                  value={title}
                  onChange={handleChangeInputValue}
                  onPressEnter={() => useChanging('')}
                  onBlur={() => useChanging('')}
                ></Input>
              )}
              {changing !== fe_id && title}
            </div>
            <div className={styles.handler}>
              <Space>
                <Button
                  className={selectedId !== fe_id ? styles['btn'] : ''}
                  shape="circle"
                  size="small"
                  icon={<EyeInvisibleOutlined />}
                  type={isHidden ? 'primary' : 'default'}
                  onClick={() => handleChangeHidden(fe_id, !isHidden)}
                ></Button>
                <Button
                  className={selectedId !== fe_id ? styles['btn'] : ''}
                  shape="circle"
                  size="small"
                  icon={<LockOutlined />}
                  type={isLocked ? 'primary' : 'default'}
                  onClick={() => handleChangeLocked(fe_id)}
                ></Button>
              </Space>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default Layer
