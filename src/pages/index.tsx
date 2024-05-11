import NavBar from '../components/NavBar'
import TodoItem from '../components/TodoItem.tsx'
import { Link } from 'react-router-dom'

import { useSelector } from 'react-redux'
const Index = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const todos = useSelector((state:any) => state.todos)
  return (
    <div className="">
      <NavBar />
      <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
        <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
          <div className="mb-4">
            <h1 className="text-grey-darkest mb-6">Todo List</h1>
            {!todos.length && <Link to="add-task" className="cursor-pointer">There are no todos <span className="underline font-semibold">Add Todo</span></Link>}
            {todos.map((x:TodoItem) => (
              <TodoItem todo={x} key={x.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Index
