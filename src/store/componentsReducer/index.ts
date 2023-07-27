import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { QuestionPropsType } from '../../components/questionComponent'

/** 单个组件的消息类型 */
type ComponentType = {
  fe_id: string
  type: string
  title: string
  props: QuestionPropsType
}

/** redux里面state数据类型 */
export type ComponentsStateType = {
  componentList: ComponentType[]
}

const INIT_STATE: ComponentsStateType = {
  componentList: []
}

const componentReducer = createSlice({
  name: 'component',
  initialState: INIT_STATE,
  reducers: {
    // 重置所有组件
    resetComponents(state: ComponentsStateType, action: PayloadAction<ComponentsStateType>) {
      return action.payload
    }
  }
})

export const { resetComponents } = componentReducer.actions

export default componentReducer.reducer
