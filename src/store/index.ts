import { configureStore } from '@reduxjs/toolkit'
import userReducer, { UserStateType } from './userReducer'

import componentReducer, { ComponentsStateType } from './componentsReducer'
import pageInfoReducer, { PageInfoStateType } from './pageInfoReducer'

export type StateType = {
  user: UserStateType
  components: ComponentsStateType
  pageInfo: PageInfoStateType
}

export default configureStore({
  reducer: {
    user: userReducer,
    components: componentReducer,
    pageInfo: pageInfoReducer
  }
})
