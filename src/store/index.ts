import { configureStore } from '@reduxjs/toolkit'
import userReducer, { UserStateType } from './userReducer'

export type StateType = {
  user: UserStateType
  // components: ComponentsStateType
}

export default configureStore({
  reducer: {
    user: userReducer
  }
})
