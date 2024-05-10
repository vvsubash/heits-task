import React from 'react'

const TodoItem = () => {
  return (
    <>
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
    </>
  )
}
