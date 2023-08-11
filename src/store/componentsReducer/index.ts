import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit'
import { QuestionPropsType } from '../../components/questionComponent'
import produce from 'immer'
import { getNextSelectId } from '../../utils/getNextSelectId'
import { addNewComponent } from '../../utils/addStoreNewComponent'
import _ from 'lodash'

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
  copyComponent: ComponentType | null
}

const INIT_STATE: ComponentsStateType = {
  componentList: [],
  selectedId: '',
  copyComponent: null
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
      draft.selectedId = action.payload
    }),

    addComponent: produce((draft: ComponentsStateType, action: PayloadAction<ComponentType>) => {
      // 当前要添加的组件
      const newComponent = action.payload

      addNewComponent(draft, newComponent)
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
      if (!selectedId) return
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
    }),

    copyComponentHandler: produce((draft: ComponentsStateType) => {
      const { componentList, selectedId } = draft

      const selectComponent = componentList.find((item) => item.fe_id === selectedId)
      console.log(selectComponent, 'selectComponent')
      if (selectComponent) {
        draft.copyComponent = _.cloneDeep(selectComponent)
      }
    }),

    pasteComponentHandler: produce((draft: ComponentsStateType) => {
      const newComponent = draft.copyComponent
      if (newComponent) {
        newComponent.fe_id = nanoid()
        addNewComponent(draft, newComponent)
      }
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
  lockedSelectQuestionComponent,
  copyComponentHandler,
  pasteComponentHandler
} = componentReducer.actions

export default componentReducer.reducer
