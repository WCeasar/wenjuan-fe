import { ComponentType } from '../store/componentsReducer'

export const getNextSelectId = (componentList: ComponentType[], index: number) => {
  const componentList1 = componentList.filter((item) => !item.isHidden)
  if (componentList1.length < 1) return ''
  if (componentList1.length === 1) return componentList1[0].fe_id

  console.log(componentList1, 'componentList1', index)
  let newSelectId = ''
  if (index + 1 >= componentList.length) {
    newSelectId = componentList[index - 1]?.fe_id || ''
  } else {
    newSelectId = componentList[index + 1]?.fe_id || ''
  }

  return newSelectId
}
