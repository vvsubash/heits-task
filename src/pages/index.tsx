import NavBar from '../components/NavBar'
const tasks = ['Bring Milk', 'Go to grocery store']
import { useSelector } from 'react-redux'
const Index = () => {
  const todos = useSelector((state) => state.todos)
  return (
    <div className="container mx-auto">
      <NavBar />
      <div className="max-w-sm flex justify-center items-center p-4 h-[100vh] min-w-full">
        <div className="bg-green-100 p-4 h-[70vh] max-w-md min-w-sm rounded shadow">
          <ul>
            {tasks.map((x, i) => (
              <li>
                {i + 1} {x}
              </li>
            ))}
          </ul>
          {todos[0]['id']}
        </div>
      </div>
    </div>
  )
}

export default Index
