import React, { FC } from 'react'
import styles from './index.module.scss'
import { useNavigate } from 'react-router-dom'

const Home: FC = () => {
  const navigation = useNavigate()

  const onLogin = () => {
    navigation('/login')
  }

  return (
    <>
      <button onClick={onLogin}>跳转登录</button>
      <p>Home</p>
    </>
  )
}

export default Home
