import { useKeyPress } from 'ahooks'
import { useDispatch } from 'react-redux'
import {
  copyComponentHandler,
  pasteComponentHandler,
  removeSelectQuestionComponent
} from '../store/componentsReducer'

const isActiveElement = () => {
  const activeElement = document.activeElement

  if (activeElement === document.body) return true

  return false
}

export const useCanvasKeys = () => {
  const dispatch = useDispatch()
  // 按删除键
  useKeyPress(['backspace', 'delete'], () => {
    if (!isActiveElement()) return
    dispatch(removeSelectQuestionComponent())
  })

  useKeyPress(['ctrl.c', 'meta.c'], () => {
    if (!isActiveElement()) return
    dispatch(copyComponentHandler())
  })

  useKeyPress(['ctrl.v', 'meta.v'], () => {
    if (!isActiveElement()) return
    dispatch(pasteComponentHandler())
  })
}
