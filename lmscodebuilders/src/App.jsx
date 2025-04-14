import { useEffect, useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import { RouterProvider,createBrowserRouter } from 'react-router-dom' 
// react based library --> navigation to various pages SPA
import User from './getuser/getUser'
import UpdateUser from './updateuser/updateUser'
import AddUsers from './adduser/addUser';
import ValidateCard from './CardValidation/CardValidation';
function App() {
  const route =createBrowserRouter([
    {
      path: "/",
      element:<User/> 
    },
    {
      path:"/update/:id",
      element:<UpdateUser/>
    },
    {
      path:"/add",
      element:<AddUsers/>
    },{
      path :"/validate",
      element:<ValidateCard/>
    }
  ])
  return (
    <RouterProvider router={route}></RouterProvider>
  )
}

export default App
