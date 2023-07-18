import { useEffect, useState } from 'react'
import { getUserInfoService } from '../services/user'
import { useGetUserInfo } from './useGetUserInfo'
import { useRequest } from 'ahooks'
import { useDispatch } from 'react-redux'
import { loginReducer } from '../store/userReducer'
import { getToken } from '../utils/user-Storage'

export const useLoadUserInfoData = () => {
  const [isGetUserLoading, setIsGetUserInfoLoading] = useState(true)
  const dispatch = useDispatch()
  const { username } = useGetUserInfo()

  const { run } = useRequest(
    () => {
      return getUserInfoService()
    },
    {
      manual: true,
      onSuccess(res) {
        dispatch(loginReducer(res as any))
      },
      onFinally() {
        setIsGetUserInfoLoading(false)
      }
    }
  )

  const token = getToken()

  useEffect(() => {
    if (username) {
      setIsGetUserInfoLoading(false) // 如果 redux store 已经存在用户信息，就不用重新加载了
      return
    }
    if (!username && !token) {
      setIsGetUserInfoLoading(false)
      return
    }
    run() // 如果 redux store 中没有用户信息，则进行加载
  }, [username, token])

  return { isGetUserLoading }
}
