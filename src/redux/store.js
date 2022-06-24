import { configureStore } from '@reduxjs/toolkit'
import itemSlice from './itemSlice'
import personalSlice from './personalSlice'

export const store = configureStore({
  reducer: {
    items : itemSlice,
    fatora : personalSlice
  },
})