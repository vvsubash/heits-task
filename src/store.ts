import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './store/todos'

export const store = configureStore({
  reducer: todoReducer,
})
