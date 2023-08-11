import { useParams } from 'react-router-dom'
import { getQuestionService } from '../services/question'
import { useRequest } from 'ahooks'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { resetComponents } from '../store/componentsReducer'

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

    const { title = '', componentList = [] } = data
    console.log(title)

    const selectedId = componentList.length ? componentList[0].fe_id : ''

    dispatch(resetComponents({ componentList, selectedId, copyComponent: null }))
  }, [data])

  useEffect(() => {
    run(id)
  }, [id])

  return { data, loading, error }
}

export default useLoadQuestionData
