import React, { FC } from 'react'
import useLoadQuestionData from '../../../hooks/useLoadQuestionData'

const Edit: FC = () => {
  const { loading, data } = useLoadQuestionData()

  return (
    <>
      <p>Edit Page</p>
      <p>{loading ? 'loading' : JSON.stringify(data)}</p>
    </>
  )
}

export default Edit
