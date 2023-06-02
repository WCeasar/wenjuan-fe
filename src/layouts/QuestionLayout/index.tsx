import React, { FC } from 'react'
import { Outlet } from 'react-router-dom'

const QuestionLayout: FC = () => {
  return (
    <>
      <Outlet></Outlet>
    </>
  )
}

export default QuestionLayout
