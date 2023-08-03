import React, { FC } from 'react'
import { Space, Button, Tooltip } from 'antd'
import { DeleteOutlined, EyeInvisibleOutlined, LockOutlined } from '@ant-design/icons'
import { useDispatch } from 'react-redux'
import {
  removeSelectQuestionComponent,
  hiddenSelectQuestionComponent,
  lockedSelectQuestionComponent
} from '../../../../store/componentsReducer'
import useGetComponentInfo from '../../../../hooks/useGetComponentInfo'

const EditTools: FC = () => {
  const dispatch = useDispatch()

  const { selectedComponent } = useGetComponentInfo()

  const handleDeleteQuestion = () => {
    dispatch(removeSelectQuestionComponent())
  }

  const handleEyeInvisibleQuestion = () => {
    dispatch(hiddenSelectQuestionComponent({ isHidden: true }))
  }

  const handleLockedInvisibleQuestion = () => {
    dispatch(lockedSelectQuestionComponent())
  }
  return (
    <Space>
      <Tooltip title="删除">
        <Button icon={<DeleteOutlined />} shape="circle" onClick={handleDeleteQuestion}></Button>
      </Tooltip>
      <Tooltip title="隐藏">
        <Button
          icon={<EyeInvisibleOutlined />}
          shape="circle"
          onClick={handleEyeInvisibleQuestion}
        ></Button>
      </Tooltip>
      <Tooltip title="锁定">
        <Button
          icon={<LockOutlined />}
          shape="circle"
          type={selectedComponent?.isLocked ? 'primary' : 'default'}
          onClick={handleLockedInvisibleQuestion}
        ></Button>
      </Tooltip>
    </Space>
  )
}

export default EditTools
