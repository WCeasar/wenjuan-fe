import React, { FC } from 'react'
import styles from './index.module.scss'
import { Button, Result } from 'antd'
import { useNavigate } from 'react-router-dom'
import { HOME_PATHNAME } from '../../router'

const NotFound: FC = () => {
  const nav = useNavigate()

  return (
    <>
      <div className={styles.container}>
        <Result
          status="404"
          title="404"
          subTitle="对不起,您的页面未找到"
          extra={
            <Button
              type="primary"
              onClick={() => {
                nav(HOME_PATHNAME)
              }}
            >
              Back Home
            </Button>
          }
        />
      </div>
    </>
  )
}

export default NotFound
