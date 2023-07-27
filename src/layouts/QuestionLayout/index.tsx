import React, { FC } from 'react'
import { Outlet } from 'react-router-dom'
import { useLoadUserInfoData } from '../../hooks/useLoadUserInfoData'
import { Spin } from 'antd'
import { usePageNav } from '../../hooks/usePageNav'

const QuestionLayout: FC = () => {
  const { isGetUserLoading } = useLoadUserInfoData()
  usePageNav(isGetUserLoading)

  return (
    <>
      <div style={{ height: '100vh' }}>
        {isGetUserLoading ? (
          <div style={{ textAlign: 'center', paddingTop: '200px' }}>
            {' '}
            <Spin></Spin>
          </div>
        ) : (
          <Outlet></Outlet>
        )}
      </div>
    </>
  )
}

export default QuestionLayout
