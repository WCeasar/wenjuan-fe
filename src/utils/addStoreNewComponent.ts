import { ComponentType, ComponentsStateType } from '../store/componentsReducer'

export const addNewComponent = (draft: ComponentsStateType, newComponent: ComponentType) => {
  // 找到当前组件在组件列表中的索引
  const index = draft.componentList.findIndex((item) => item.fe_id === draft.selectedId)

  if (index < 0) {
    // 当前没有选中组件
    draft.componentList.push(newComponent)
  } else {
    draft.componentList.splice(index + 1, 0, newComponent)
  }
}
