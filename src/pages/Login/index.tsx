import React, { FC } from 'react'
import styles from './index.module.scss'
import { useNavigate, useSearchParams, NavLink } from 'react-router-dom'

const Login: FC = () => {
  const nav = useNavigate()
  const [searchParams, setSearchParams] = useSearchParams()

  console.log(searchParams.get('name'))

  const onBack = () => {
    nav(-1)
  }

  return (
    <>
      <button onClick={onBack}>返回</button>
      <NavLink to="/register">注册</NavLink>
      <p>Login</p>
    </>
  )
}

export default Login
