import React, { FC } from 'react'
import styles from './index.module.scss'
import { Outlet } from 'react-router-dom'

const QuestionLayout: FC = () => {
  return (
    <>
      <Outlet></Outlet>
    </>
  )
}

export default QuestionLayout
