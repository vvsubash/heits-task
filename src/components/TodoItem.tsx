import { toggleTodo, deleteTodo } from '../store/todos'
import { useDispatch } from 'react-redux'
interface TodoItem {
  id: string;
  text: string;
  isCompleted: boolean
}
const TodoItem = ({ todo }: { todo: TodoItem }) => {
  const dispatch = useDispatch()
  return (
    <>
      <div className="flex mb-4 items-center">
        <p className={`w-full text-green ${todo.isCompleted ? 'line-through': ''}`}>{todo.text}</p>
        <button className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-grey border-grey hover:bg-grey min-w-[10ch]" onClick={() => dispatch(toggleTodo(todo.id))}>
          {todo.isCompleted  ? 'Undo' : 'Done'}
        </button>
        <button className="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red" onClick={() => dispatch(deleteTodo(todo.id))}>
          Remove
        </button>
      </div>
    </>
  )
}

export default TodoItem
