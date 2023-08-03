import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { QuestionPropsType } from '../../components/questionComponent'
import produce from 'immer'
import { getNextSelectId } from '../../utils/getNextSelectId'

/** 单个组件的消息类型 */
export type ComponentType = {
  fe_id: string
  type: string
  title: string
  isHidden: boolean
  isLocked: boolean
  props: QuestionPropsType
}

/** redux里面state数据类型 */
export type ComponentsStateType = {
  componentList: ComponentType[]
  selectedId: string
}

const INIT_STATE: ComponentsStateType = {
  componentList: [],
  selectedId: ''
}

const componentReducer = createSlice({
  name: 'component',
  initialState: INIT_STATE,
  reducers: {
    // 重置所有组件
    resetComponents(state: ComponentsStateType, action: PayloadAction<ComponentsStateType>) {
      return action.payload
    },

    changeSelectedId: produce((draft: ComponentsStateType, action: PayloadAction<string>) => {
      console.log(action.payload)
      draft.selectedId = action.payload
    }),

    addComponent: produce((draft: ComponentsStateType, action: PayloadAction<ComponentType>) => {
      // 当前要添加的组件
      const newComponent = action.payload

      // 找到当前组件在组件列表中的索引
      const index = draft.componentList.findIndex((item) => item.fe_id === draft.selectedId)

      if (index < 0) {
        // 当前没有选中组件
        draft.componentList.push(newComponent)
      } else {
        draft.componentList.splice(index + 1, 0, newComponent)
      }
    }),

    changeSelectComponentProp: produce(
      (
        draft: ComponentsStateType,
        action: PayloadAction<{ id: string; newProp: QuestionPropsType }>
      ) => {
        const selectComponent = draft.componentList.find((item) => item.fe_id === action.payload.id)
        if (!selectComponent) return
        selectComponent.props = {
          ...selectComponent.props,
          ...action.payload.newProp
        }
      }
    ),

    removeSelectQuestionComponent: produce((draft: ComponentsStateType) => {
      // eslint-disable-next-line
      let { componentList, selectedId } = draft

      const index = componentList.findIndex((item) => item.fe_id === selectedId)

      const nextId = getNextSelectId(componentList, index)
      console.log(nextId)
      componentList.splice(index, 1)
      draft.selectedId = nextId
    }),

    hiddenSelectQuestionComponent: produce(
      (draft: ComponentsStateType, action: PayloadAction<{ isHidden: boolean }>) => {
        // eslint-disable-next-line
        let { componentList, selectedId } = draft

        const index = componentList.findIndex((item) => item.fe_id === selectedId)

        let nextId
        if (action.payload.isHidden) {
          nextId = getNextSelectId(componentList, index)
        } else {
          nextId = selectedId
        }

        console.log(nextId, nextId)
        componentList[index].isHidden = action.payload.isHidden
        draft.selectedId = nextId
      }
    ),
    lockedSelectQuestionComponent: produce((draft: ComponentsStateType) => {
      // eslint-disable-next-line
      let { componentList, selectedId } = draft
      const index = componentList.findIndex((item) => item.fe_id === selectedId)
      componentList[index].isLocked = !componentList[index].isLocked
    })
  }
})

export const {
  resetComponents,
  changeSelectedId,
  addComponent,
  changeSelectComponentProp,
  removeSelectQuestionComponent,
  hiddenSelectQuestionComponent,
  lockedSelectQuestionComponent
} = componentReducer.actions

export default componentReducer.reducer
