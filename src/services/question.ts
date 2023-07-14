import { DataType } from './ajax'
import axios from './ajax'

export const getQuestionService = async (id: string) => {
  const url = `/api/question/${id}`
  const data = (await axios.get(url)) as DataType
  return data
}

export const createQuestionService = async () => {
  const url = '/api/question'
  const data = (await axios.post(url)) as DataType
  return data
}

type questionListServiceParamsType = {
  keyword: string
  isStar: boolean
  isDeleted: boolean
  pageSize: number
  page: number
}

export const getQuestionListService = async (opt: Partial<questionListServiceParamsType>) => {
  const url = '/api/question'
  const data = (await axios.get(url, { params: opt })) as DataType
  return data
}

export const updateQuestionService = async (
  id: string,
  opt: Partial<questionListServiceParamsType>
) => {
  const url = `/api/question/${id}`
  const data = (await axios.patch(url, { data: opt })) as DataType
  return data
}

export const duplicateQuestionService = async (id: string) => {
  const url = `/api/question/duplicate/${id}`
  const data = (await axios.post(url)) as DataType
  return data
}

export const delQuestionService = async (params: string[]) => {
  const url = `/api/question`
  const data = (await axios.delete(url, { data: { ids: params } })) as DataType
  return data
}
