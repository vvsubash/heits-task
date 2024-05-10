import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
  todos: [],
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      }
      state.todos.push(todo)
    },
    deleteTodo: (state, action) => {
      const todoId = action.payload
      state.todos = sstate.todos.filter((x) => x.id != todoId)
    },
    toggleTodo: (state, action) => {},
  },
})

export const { addTodo, deleteTodo, toggleTodo } = todoSlice.actions
export default todoSlice.reducer
