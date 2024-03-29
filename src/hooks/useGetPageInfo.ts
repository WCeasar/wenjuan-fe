import { useSelector } from 'react-redux'

import { StateType } from '../store'
import { PageInfoStateType } from '../store/pageInfoReducer'

export const useGetPageInfo = () => {
  const pageInfo = useSelector<StateType>((state) => state.pageInfo) as PageInfoStateType

  return pageInfo
}
