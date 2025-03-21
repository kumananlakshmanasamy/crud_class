//express js -- routing , middleware , controller 

//mongoose -- model (ODM) object data modelling , schema 
//  user database : username(string) , user age(number) , user email, (string ), address (string)

// bodyparser --- req.body 
//dotenv
// cors -- cross orgin resource sharing one domain domain resouce share help (block) allow 

//  api framework javascript 
// controller - business logic 
// middleware -- authentication flow  request response cycle 
//  routing - Get , post , put ,delete /jkdkdk
//  nodemon -- hotreloading
//  type ="module" ecmascript module 
// response , reject ,resolve  async await  try catch 


//  commands
// npm i nodemon
// npm i express
// npm i mongoose
// npm i cors
// npm i body-parser
// crud -- > Create , read , update , delete 
//  post , get , put , delete 

//  async -- can run multiple task at a time 
//  sync -- can run only one task at a time

// req , res 
//  req --> input given by the user 
//  res --> output given by the logical program 

//  req. body 
//  req.params
import express from 'express'
import mongoose from 'mongoose';
import route from './routes/userRoutes.js';
import bodyParser from 'body-parser';
import cors from 'cors'

const app = express();
app.use(bodyParser.json())
app.use(cors())
app.post('/',(req,res)=>{
    res.send("hello world")
})

mongoose.connect('mongodb://localhost:27017/crud').then(()=>{
    console.log("db connected succesfully")
})
.catch((error)=>console.log(error))

app.listen(4000,()=>{
    console.log("the application is running in port 4000")
})
app.use('/v1',route)