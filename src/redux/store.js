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
      if (state.value) {
        document.body.style.backgroundColor = 'rgb(23, 2, 2)';
        } else {
        document.body.style.backgroundColor = 'rgb(255, 246, 236)';
        }
    }
  }
})

export const { toggle } = darkModeSlice.actions

export default configureStore({
  reducer: {
    darkmode: darkModeSlice.reducer
  }
})