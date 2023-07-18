import { useLocation, useNavigate } from 'react-router-dom'
import { useGetUserInfo } from './useGetUserInfo'
import { useEffect } from 'react'
import {
  LOGIN_PATHNAME,
  MANAGE_INDEX_PATHNAME,
  isLoginOrRegister,
  isNoNeedUserInfo
} from '../router'

export const usePageNav = (isGetUserInfoLoading: boolean) => {
  const { pathname } = useLocation()
  const { username } = useGetUserInfo()
  const nav = useNavigate()

  useEffect(() => {
    if (isGetUserInfoLoading) return

    // 如果登陆了
    if (username) {
      // 如果跳转的时登录注册页
      if (isLoginOrRegister(pathname)) {
        nav(MANAGE_INDEX_PATHNAME)
      }

      return
    }
    // 没登录
    if (isNoNeedUserInfo(pathname)) {
      // 没登陆跳转不登录注册页首页就行
      return
    } else {
      // 没登陆跳转不登录注册页首页就行
      nav(LOGIN_PATHNAME)
    }
  }, [isGetUserInfoLoading, pathname, username])
}
