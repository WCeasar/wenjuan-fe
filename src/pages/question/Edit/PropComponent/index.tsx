import React, { FC } from 'react'
import useGetComponentInfo from '../../../../hooks/useGetComponentInfo'
import { getConfByType } from '../../../../components/questionComponent/index'
import { useDispatch } from 'react-redux'
import { changeSelectComponentProp } from '../../../../store/componentsReducer'

const Null = () => {
  return <div style={{ textAlign: 'center' }}>未选中组件</div>
}
const PropComponent: FC = () => {
  const dispatch = useDispatch()

  const { selectedComponent } = useGetComponentInfo()

  if (!selectedComponent) return <Null></Null>
  const { type, props } = selectedComponent
  if (!type) return <Null></Null>

  // 获取conf
  const { propComponent: Component } = getConfByType(type)

  const handleChange = (value) => {
    dispatch(changeSelectComponentProp({ id: selectedComponent.fe_id, newProp: value }))
  }

  return (
    <Component
      {...props}
      onchange={handleChange}
      disabled={selectedComponent?.isLocked}
    ></Component>
  )
}

export default PropComponent
