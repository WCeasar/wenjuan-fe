import React, { FC } from 'react'
import { Space, Button, Tooltip } from 'antd'
import {
  CopyOutlined,
  CopyrightCircleOutlined,
  DeleteOutlined,
  EyeInvisibleOutlined,
  LockOutlined
} from '@ant-design/icons'
import { useDispatch } from 'react-redux'
import {
  removeSelectQuestionComponent,
  hiddenSelectQuestionComponent,
  lockedSelectQuestionComponent,
  copyComponentHandler,
  pasteComponentHandler
} from '../../../../store/componentsReducer'
import useGetComponentInfo from '../../../../hooks/useGetComponentInfo'

const EditTools: FC = () => {
  const dispatch = useDispatch()

  const { selectedComponent, copyComponent, selectedId } = useGetComponentInfo()

  const handleDeleteQuestion = () => {
    dispatch(removeSelectQuestionComponent())
  }

  const handleEyeInvisibleQuestion = () => {
    dispatch(hiddenSelectQuestionComponent({ isHidden: true }))
  }

  const handleLockedInvisibleQuestion = () => {
    dispatch(lockedSelectQuestionComponent({}))
  }
  const handleCopyQuestion = () => {
    dispatch(copyComponentHandler())
  }

  const handlePasteQuestion = () => {
    dispatch(pasteComponentHandler())
  }
  return (
    <Space>
      <Tooltip title="删除">
        <Button
          disabled={!selectedComponent}
          icon={<DeleteOutlined />}
          shape="circle"
          onClick={handleDeleteQuestion}
        ></Button>
      </Tooltip>
      <Tooltip title="隐藏">
        <Button
          disabled={!selectedId}
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
      <Tooltip title="复制">
        <Button icon={<CopyOutlined />} shape="circle" onClick={handleCopyQuestion}></Button>
      </Tooltip>
      <Tooltip title="粘贴">
        <Button
          disabled={!copyComponent}
          icon={<CopyrightCircleOutlined />}
          shape="circle"
          onClick={handlePasteQuestion}
        ></Button>
      </Tooltip>
    </Space>
  )
}

export default EditTools
