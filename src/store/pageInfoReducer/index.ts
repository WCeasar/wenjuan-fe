import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface PageInfoStateType {
  title: string
  desc?: string
  css?: string
  js?: string
}

const INIT_STATE: PageInfoStateType = {
  title: '调查问卷',
  desc: '问卷描述',
  css: '',
  js: ''
}

const pageInfoReducer = createSlice({
  name: 'pageInfo',
  initialState: INIT_STATE,
  reducers: {
    resetPageInfo(state: PageInfoStateType, action: PayloadAction<PageInfoStateType>) {
      return action.payload
    }
  }
})

export const { resetPageInfo } = pageInfoReducer.actions

export default pageInfoReducer.reducer
