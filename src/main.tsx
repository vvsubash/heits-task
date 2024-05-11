import { Provider } from 'react-redux'
import React from 'react'
import ReactDOM from 'react-dom/client'
import Index from './pages/index'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import AddTask from './pages/addTask'
import { store } from './store'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Index />,
  },
  {
    path: '/add-task',
    element: <AddTask />,
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
)
