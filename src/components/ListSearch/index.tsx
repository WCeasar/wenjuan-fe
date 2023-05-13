import React, { ChangeEvent, FC, useEffect, useState } from 'react'
import { Input } from 'antd'
import { useNavigate, useLocation, useSearchParams } from 'react-router-dom'
import { KEYWORD } from '../../constant'

const ListSearch: FC = () => {
  const { Search } = Input
  const [value, setValue] = useState<string>('')
  const nav = useNavigate()
  const { pathname } = useLocation()
  const [searchParams] = useSearchParams()

  const onSearchLKeywordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  // 点击搜索,修改url
  const onSearch = () => {
    nav({
      pathname: pathname,
      search: `${KEYWORD}=${value}`
    })
  }

  // 根据url,控制value, 根据searchParams修改value
  useEffect(() => {
    const keyword = searchParams.get(KEYWORD) || ''
    keyword && setValue(keyword)
  }, [searchParams])

  return (
    <>
      <Search
        size="large"
        onChange={onSearchLKeywordChange}
        onSearch={onSearch}
        value={value}
        allowClear
      ></Search>
    </>
  )
}

export default ListSearch
