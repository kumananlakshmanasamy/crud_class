import { useEffect, useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import { RouterProvider,createBrowserRouter } from 'react-router-dom' 
// react based library --> navigation to various pages SPA
import User from './getuser/getUser'
import UpdateUser from './updateuser/updateUser'
function App() {
  const route =createBrowserRouter([
    {
      path: "/",
      element:<User/> 
    },
    {
      path:"/update/:id",
      element:<UpdateUser/>
    }
  ])
  return (
    <RouterProvider router={route}></RouterProvider>
  )
}

export default App
