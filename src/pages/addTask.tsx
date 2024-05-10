import { Link } from 'react-router-dom'
import { useState } from 'react'

import { useDispatch } from 'react-redux'

import { addTodo } from '../store/todos'
const AddTask = () => {
  const [input, setInput] = useState('')
  const dispatch = useDispatch()

  const addTodoHandler = (e) => {
    e.preventDefault()
    dispatch(addTodo(input))
    setInput('')
  }
  return (
    <>
      <Link to="/">
        <button className="btn">Home Page</button>
      </Link>
      <form onSubmit={addTodoHandler}>
        <input
          placeholder="add todo"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </form>
    </>
  )
}

export default AddTask
