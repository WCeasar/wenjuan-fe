import { useSelector } from 'react-redux'
import { UserStateType } from '../store/userReducer'
import { StateType } from '../store'

export const useGetUserInfo = () => {
  const { nickname, username } = useSelector<StateType>((state) => state.user) as UserStateType
  return { nickname, username }
}
