import { useState } from 'react'
import './App.css'
import { Logo } from './assets/AppIcons'
import { RouterProvider } from 'react-router-dom'
import { appRouter } from './appRouter/appRouter'
import { Toaster } from 'react-hot-toast'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div >
        <RouterProvider router={appRouter} />
        <Toaster position="top-right" />
      </div>
    </>
  )
}

export default App
