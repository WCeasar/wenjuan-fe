import React, { FC } from 'react'
import styles from './index.module.scss'
import { useParams } from 'react-router-dom'

const Edit: FC = () => {
  const { id } = useParams()

  console.log(id)

  return (
    <>
      <p>Edit</p>
    </>
  )
}

export default Edit
