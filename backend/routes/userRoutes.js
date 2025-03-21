import express from 'express'
import { Create } from '../controller/userController.js'
const route  = express.Router()

route.post('/user',Create)
// router.get('')
// router.put('')
// router.delete('')

export default route