import { configureStore } from '@reduxjs/toolkit'
import type { UserStateType } from './user'
import userSlice from './user'

export type StateType = {
  user: UserStateType
}

const store = configureStore({
  reducer: {
    user: userSlice.reducer
  }
})

export default store
