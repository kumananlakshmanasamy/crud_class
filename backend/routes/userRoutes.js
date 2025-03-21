import express from 'express'
import { Create,getAllUsers,getuserbyid } from '../controller/userController.js'
const route  = express.Router()

route.post('/user',Create)
route.get('/users',getAllUsers)
route.get('/user/:id',getuserbyid)
// router.delete('')

export default route