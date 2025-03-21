
import User from '../model/userModule.js'
export const Create = async(req,res)=>{
    try {
        const newUser = new User(req.body)
        const savedata = await newUser.save()
        res.status(200).json({message:"data saved succesfully"})
    } catch (error) {
        res.status(500).json({message:"user creation error"})
    }
}

export const getAllUsers =async(req,res)=>{
    try{
        const userdata = await User.find()
        res.status(200).json(userdata)
    } catch(error){
        res.status(500).json({message:"getting user data error"})
    }
}

export const getuserbyid =async(req,res)=>{
    try {
        const id = req.params.id
        const userdata = await User.findById(id)
        res.json(userdata)
    } catch (error) {
        res.status(500).json({message:"getting user error"})
    }
}