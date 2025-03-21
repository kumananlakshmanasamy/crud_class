
import User from '../model/userModule.js'
export const Create = async(req,res)=>{
    console.log(req.body)
    try {
        const newUser = new User(req.body)
        const savedata = await newUser.save()
        res.status(200).json({message:"data saved succesfully"})
    } catch (error) {
        res.status(500).json({message:"user creation error"})
    }
}