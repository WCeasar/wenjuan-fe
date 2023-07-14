import { useRequest } from 'ahooks'
import { getQuestionListService } from '../services/question'
import { useSearchParams } from 'react-router-dom'
import { KEYWORD, LIST_PAGESIZE, LIST_PAGESIZE_KEY, LIST_PAGE_KEY } from '../constant'

type ParamType = {
  keyword: string
  isStar: boolean
  isDeleted: boolean
}

const useLoadQuestionListData = (opt: Partial<ParamType> = {}) => {
  const { isStar, isDeleted } = opt
  const [searchParams] = useSearchParams()

  const keyword = searchParams.get(KEYWORD) || ''
  const pageSize = parseInt(searchParams.get(LIST_PAGESIZE_KEY) || '') || LIST_PAGESIZE
  const page = parseInt(searchParams.get(LIST_PAGE_KEY) || '') || 1

  const { data, loading, error, refresh } = useRequest(
    () => {
      return getQuestionListService({ keyword, isStar, isDeleted, pageSize, page })
    },
    {
      refreshDeps: [searchParams]
    }
  )

  return { data, loading, error, refresh }
}

export default useLoadQuestionListData
