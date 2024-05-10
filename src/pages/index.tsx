import NavBar from '../components/NavBar'
const tasks = ['Bring Milk', 'Go to grocery store']
import { useSelector } from 'react-redux'
const Index = () => {
  const todos = useSelector((state) => state.todos)
  return (
    <div className="">
      <NavBar />
      <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
        <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
          <div className="mb-4">
            <h1 className="text-grey-darkest">Todo List</h1>
            <div className="flex mt-4">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
                placeholder="Add Todo"
              />
              <button className="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-white bg-secondary hover:bg-primary">
                Add
              </button>
            </div>
          </div>
          <div>
            <div className="flex mb-4 items-center">
              <p className="w-full text-grey-darkest">Add Basic Styles</p>
              <button className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green border-green hover:bg-green">
                Done
              </button>
              <button className="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red">
                Remove
              </button>
            </div>
            <div className="flex mb-4 items-center">
              <p className="w-full line-through text-green">
                Make components and export them
              </p>
              <button className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-grey border-grey hover:bg-grey min-w-[10ch]">
                Not Done
              </button>
              <button className="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red">
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Index
