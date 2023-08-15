import { useParams } from 'react-router-dom'
import { useRequest } from 'ahooks'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { getQuestionService } from '../services/question'
import { resetComponents } from '../store/componentsReducer'
import { resetPageInfo } from '../store/pageInfoReducer'

const useLoadQuestionData = () => {
  const { id = '' } = useParams() || {}

  const {
    data = {},
    loading,
    error,
    run
  } = useRequest(
    async (id) => {
      return await getQuestionService(id)
    },
    {
      manual: true
    }
  )

  const dispatch = useDispatch()

  useEffect(() => {
    if (!data) return

    const { title = '', componentList = [], desc = '', css = '', js = '' } = data
    console.log(title)

    const selectedId = componentList.length ? componentList[0].fe_id : ''

    dispatch(resetComponents({ componentList, selectedId, copyComponent: null }))
    dispatch(resetPageInfo({ title, desc, css, js }))
  }, [data])

  useEffect(() => {
    run(id)
  }, [id])

  return { data, loading, error }
}

export default useLoadQuestionData
