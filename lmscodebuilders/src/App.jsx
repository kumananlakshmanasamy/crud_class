import { useEffect, useLayoutEffect, useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import {Route,Routes } from 'react-router-dom' 
// react based library --> navigation to various pages SPA
import Home from './Auth/Home'
import User from './getuser/getUser'
import UpdateUser from './updateuser/updateUser'
import AddUsers from './adduser/addUser';
import ValidateCard from './CardValidation/CardValidation';
import RegisterScreen from './Auth/Register';
import LoginScreen from './Auth/Login';
import { useAuth } from './Auth/authprovider';
import PrivateRoute from './Auth/private';
function App() {
  // const {user,token} = useAuth();
  // console.log("user",user);
  // console.log("token",token);
  // const route =createBrowserRouter([
  //   {
  //     path:"/",
  //     element:<Home/>
  //   },
  //   {
  //     path:"/login",
  //     element:<LoginScreen/>
  //   },
  //   {
  //     path:"/register",
  //     element:<RegisterScreen/>
  //   },

  //   {
  //     path: "/users",
  //     element:<User/> 
  //   },
  //   {
  //     path:"/update/:id",
  //     element:<UpdateUser/>
  //   },
  //   {
  //     path:"/add",
  //     element:<AddUsers/>
  //   },{
  //     path :"/validate",
  //     element:<ValidateCard/>
  //   }
  // ])

  // usestate
  // useEffect
  // useContext
  // useRef --> 
  // 1. mutable state(changes) store
  // 2. state changes render
  // 3. access DOM elements
  // 4. access previous state , current state
  // useLayoutEffect
  // same like useeffect but it runs before the DOM is painted 
  // layout changes
  // does not flicker
  // uses in animations , scrolling

  // useLayoutEffect(()=>{

  //   const handleResize = () => {
  //     const width = window.innerWidth;
  //     const height = window.innerHeight;
  //     console.log("width",width);
  //     console.log("height",height);
  //   }

  // window.addEventListener('resize',handleResize);
  // return () => {
  //   window.removeEventListener('resize',handleResize);
  // }
  // },[])

  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/register" element={<RegisterScreen />} />
        <Route element={<PrivateRoute />}>
          <Route path="/users" element={<User />} />
          <Route path="/update/:id" element={<UpdateUser />} />
          <Route path="/add" element={<AddUsers />} />
          <Route path="/validate" element={<ValidateCard />} />
        </Route>

      </Routes>
    // <RouterProvider router={route}></RouterProvider>
  )
}

export default App
