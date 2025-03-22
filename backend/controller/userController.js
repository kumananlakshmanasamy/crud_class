
import User from '../model/userModule.js'
//  create a user 
export const Create = async(req,res)=>{
    try {
        const newUser = new User(req.body)
        const  {email} = newUser
        const userExist = await  User.findOne({email})
        if (userExist){
            return res.status(400).json({message:"user aldready exists"})
        }
        const savedata = await newUser.save()
        res.status(200).json({message:"data saved succesfully"})
    } catch (error) {
        res.status(500).json({message:"user creation error"})
    }
}
//  get all user data
export const getAllUsers =async(req,res)=>{
    try{
        const userdata = await User.find()
        if (! userdata || userdata.length === 0 ){
            res.status(400).json({message:"no user data found "})
        }
        res.status(200).json(userdata)
    } catch(error){
        res.status(500).json({message:"getting user data error"})
    }
}
//  specific user data get 

export const getuserbyid =async(req,res)=>{
    try {
        const id = req.params.id
        const userdata = await User.findById(id)
        if (!userdata){
            return res.status(404).json({message:"user not forund "})
        }
        res.json(userdata)
    } catch (error) {
        res.status(500).json({message:"getting user error"})
    }
}
//  update user data 
export const updateuser = async(req,res)=>{
    try {
        const id = req.params.id
        const userdata = await User.findById(id)
        if (!userdata){
            return res.status(404).json({message:"user not forund "})
        }
        await User.findByIdAndUpdate(id,req.body)
        res.status(200).json({message:"user has been updated"})
        
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"updation error"})
    }

}
//  delete user data 
export const deleteuser =async(req,res)=>{
    try {
        const id = req.params.id
        const userdata = await User.findById(id)
        if (!userdata){
            return res.status(404).json({message:"user not forund "})
        }
        await User.findByIdAndDelete(id)
        res.status(200).json({message:"user has been deleted"})
        
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"deletion error"})
    }
}