import { useRequest } from 'ahooks'
import { getQuestionListService } from '../services/question'
import { useSearchParams } from 'react-router-dom'
import { KEYWORD } from '../constant'

type ParamType = {
  keyword: string
  isStar: boolean
  isDeleted: boolean
}

const useLoadQuestionListData = (opt: Partial<ParamType> = {}) => {
  const { isStar, isDeleted } = opt
  const [searchParams] = useSearchParams()

  const keyword = searchParams.get(KEYWORD) || ''
  const { data, loading, error } = useRequest(
    () => {
      return getQuestionListService({ keyword, isStar, isDeleted })
    },
    {
      refreshDeps: [keyword]
    }
  )

  return { data, loading, error }
}

export default useLoadQuestionListData
