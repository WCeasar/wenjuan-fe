import { ComponentType } from '../store/componentsReducer'

export const getNextSelectId = (componentList: ComponentType[], index: number) => {
  const componentList1 = componentList.filter((item) => !item.isHidden)
  console.log('componentList1', componentList1)
  if (componentList1.length <= 1) return ''

  let newSelectId = ''
  if (index + 1 >= componentList1.length) {
    newSelectId = componentList1[index - 1].fe_id
  } else {
    newSelectId = componentList1[index + 1].fe_id
  }

  return newSelectId
}
