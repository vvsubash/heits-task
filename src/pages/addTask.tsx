import NavBar from '../components/NavBar'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

import { useDispatch } from 'react-redux'

import { addTodo } from '../store/todos'
const AddTask = () => {
  const navigate = useNavigate()
  const [input, setInput] = useState('')
  const dispatch = useDispatch()

  const addTodoHandler = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    if(input.trim() == '') {
      alert("Please enter valid todo item")
      return
    }
    dispatch(addTodo(input))
    setInput('')
    navigate('/')
  }
  return (
    <>
      <NavBar />
      <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
        <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
          <div className="mb-4">
            <h1 className="text-grey-darkest">Add Todo</h1>
            <form onSubmit={addTodoHandler} className="flex mt-4">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
                placeholder="Add Todo"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <button className="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-white bg-secondary hover:bg-primary">
                Add
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default AddTask
