import React from 'react'
import './App.css'
import { RouterProvider } from 'react-router-dom'
import routerConfig from './router/index'
import { Button } from 'antd'
import 'antd/dist/reset.css'

function App() {
  return (
    <div className="App">
      <RouterProvider router={routerConfig}></RouterProvider>
    </div>
  )
}

export default App
