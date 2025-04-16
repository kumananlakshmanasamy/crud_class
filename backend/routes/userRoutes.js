import express from 'express'
import { Create,getAllUsers,getuserbyid,updateuser,deleteuser } from '../controller/userController.js'
import { createAccount, login, logout } from '../controller/authController.js'
const route  = express.Router()

route.post('/user',Create)
route.get('/users',getAllUsers)
route.get('/user/:id',getuserbyid)
route.put('/update/user/:id',updateuser)
route.delete('/delete/user/:id',deleteuser)
route.post('/createAccount',createAccount)
route.post('/login',login)
route.post('/logout',logout)
// router.delete('')

export default route