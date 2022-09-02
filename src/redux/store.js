import { createSlice } from '@reduxjs/toolkit'
import { configureStore } from '@reduxjs/toolkit'

export const darkModeSlice = createSlice({
  name: 'darkmode',
  initialState: {
    value: 0
  },
  reducers: {
    toggle: state => {
      state.value = !state.value
    }
  }
})

export const { toggle } = darkModeSlice.actions

export default configureStore({
  reducer: {
    darkmode: darkModeSlice.reducer
  }
})