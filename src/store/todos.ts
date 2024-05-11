import { createSlice, nanoid } from '@reduxjs/toolkit'
interface Todo {
  id: string
  text: string
  isCompleted: boolean
}
const initialState: { todos: Todo[] } = {
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
        isCompleted: false,
      }
      state.todos.push(todo)
    },
    deleteTodo: (state, action) => {
      const todoId = action.payload
      state.todos = state.todos.filter((x) => x.id != todoId)
    },
    toggleTodo: (state, action) => {
      const todoId = action.payload
      state.todos = state.todos.map((todo) => {
        return todo.id == todoId
          ? { ...todo, isCompleted: !todo.isCompleted }
          : todo
      })
    },
  },
})

export const { addTodo, deleteTodo, toggleTodo } = todoSlice.actions
export default todoSlice.reducer
