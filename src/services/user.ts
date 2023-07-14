import axios from './ajax'
import { DataType } from './ajax'

export const loginService = async (data): Promise<DataType> => {
  const url = '/api/user/login'
  const res = (await axios.post(url, data)) as DataType
  return res
}

export const registerService = async (data): Promise<DataType> => {
  const url = '/api/user/register'
  const res = (await axios.post(url, data)) as DataType
  return res
}

export const getUserInfoService = async (): Promise<DataType> => {
  const url = '/api/user/userinfo'
  const res = (await axios.get(url)) as DataType
  return res
}
