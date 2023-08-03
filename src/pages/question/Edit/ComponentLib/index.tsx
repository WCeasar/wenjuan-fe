import React, { FC } from 'react'
import {
  QuestionComponentConfType,
  QuestionComponentGroup
} from '../../../../components/questionComponent/index'
import { Typography } from 'antd'
import styles from './index.module.scss'
import { useDispatch } from 'react-redux'
import { addComponent } from '../../../../store/componentsReducer/index'
import { nanoid } from '@reduxjs/toolkit'

const { Title } = Typography
const ComponentLib: FC = () => {
  const dispatch = useDispatch()

  const getComponentByConf = (c: QuestionComponentConfType) => {
    const { Component, type, title, props } = c

    const handleAddComponent = () => {
      dispatch(
        addComponent({
          fe_id: nanoid(),
          type: type,
          title: title,
          props: props,
          isHidden: false,
          isLocked: false
        })
      )
    }

    return (
      <div key={type} className={styles['component-wrapper']} onClick={handleAddComponent}>
        <div className={styles['component']}>
          <Component></Component>
        </div>
      </div>
    )
  }

  return (
    <div>
      {QuestionComponentGroup.map((item, index) => {
        const { groupId, groupName, components } = item
        return (
          <div key={groupId}>
            <Title level={3} style={{ fontSize: '16px', marginTop: index === 0 ? '0' : '20px' }}>
              {groupName}
            </Title>

            <div>
              {components.map((c) => {
                return getComponentByConf(c)
              })}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default ComponentLib
