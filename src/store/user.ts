import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type UserStateType = {
  username: string
  nickname: string
}

const initialState: UserStateType = {
  username: '',
  nickname: ''
}

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    loginReducer(state: UserStateType, action: PayloadAction<UserStateType>) {
      return action.payload
    },

    logoutReducer: () => initialState
  }
})

export const { loginReducer, logoutReducer } = userSlice.actions

export default userSlice
