import { useSelector } from 'react-redux'
import { UserStateType } from '../store/user'

export const useGetUserInfo = () => {
  const { nickname, username } = useSelector((state) => state) as UserStateType

  return { nickname, username }
}
