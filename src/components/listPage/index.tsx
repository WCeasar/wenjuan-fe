import React, { FC, useEffect, useState } from 'react'
import { Pagination } from 'antd'
import { useSearchParams, useLocation, useNavigate } from 'react-router-dom'
import { LIST_PAGESIZE, LIST_PAGESIZE_KEY, LIST_PAGE_KEY } from '../../constant'

type PropsType = {
  total: number
}

const ListPage: FC<PropsType> = (prop: PropsType) => {
  const { total } = prop
  const [searchParams] = useSearchParams()
  const nav = useNavigate()
  const location = useLocation()

  const [current, setCurrent] = useState(0)
  const [pageSize, setPageSize] = useState(0)

  useEffect(() => {
    const _current = parseInt(searchParams.get(LIST_PAGE_KEY + '') || '') || 1
    setCurrent(_current)
    const _pageSize = parseInt(searchParams.get(LIST_PAGESIZE_KEY) || '') || LIST_PAGESIZE
    setPageSize(_pageSize)
  }, [searchParams])

  const onChange = (_page, _pageSize) => {
    setCurrent(_page)
    setPageSize(_pageSize)
    searchParams.set(LIST_PAGE_KEY, _page)
    searchParams.set(LIST_PAGESIZE_KEY, _pageSize)
    nav({
      pathname: location.pathname,
      search: searchParams.toString()
    })
  }
  return (
    <>
      <Pagination current={current} total={total} pageSize={pageSize} onChange={onChange} />
    </>
  )
}

export default ListPage
