import { useEffect, useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import { RouterProvider,createBrowserRouter } from 'react-router-dom' 
// react based library --> navigation to various pages SPA
import Home from './Auth/Home'
import User from './getuser/getUser'
import UpdateUser from './updateuser/updateUser'
import AddUsers from './adduser/addUser';
import ValidateCard from './CardValidation/CardValidation';
import RegisterScreen from './Auth/Register';
import LoginScreen from './Auth/Login';
function App() {
  const route =createBrowserRouter([
    {
      path:"/",
      element:<Home/>
    },
    {
      path:"/login",
      element:<LoginScreen/>
    },
    {
      path:"/register",
      element:<RegisterScreen/>
    },

    {
      path: "/users",
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
