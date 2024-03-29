import { message } from 'antd'
import axios from 'axios'
import { getToken } from '../utils/user-Storage'

export type ResType = {
  data?: DataType
  errno: number
  msg?: string
}

export type DataType = {
  [key: string]: any
}

const instance = axios.create({
  timeout: 10 * 10000
})

instance.interceptors.request.use(
  (config) => {
    const token = getToken()
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (err) => {
    return Promise.reject(err)
  }
)

instance.interceptors.response.use(
  (res) => {
    const resData = (res.data || {}) as ResType

    const { data, errno, msg } = resData
    if (errno !== 0) {
      if (msg) {
        message.error(msg)
      }

      throw new Error(msg)
    }
    return data as any
  },
  (err) => {
    throw new Error(err)
  }
)

export default instance
