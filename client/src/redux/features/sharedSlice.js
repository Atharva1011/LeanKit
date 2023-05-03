import { createSlice } from '@reduxjs/toolkit'

const initialState = { value: [] }

export const sharedSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setSharedBoards: (state, action) => {
      state.value = action.payload
    }
  }
})

export const { setSharedBoards } = sharedSlice.actions

export default sharedSlice.reducer