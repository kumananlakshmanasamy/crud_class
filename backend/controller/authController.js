import auth from '../model/authModule.js'
import jwt from 'jsonwebtoken'
export const createAccount = async (req, res) => {
const {email, password, name } = req.body

try {
    // check if user already exists
    const userExist = await auth.findOne({email})
    if (userExist) {
        throw new Error("user already exists")
    }
    const user = await auth.create({email,password,name})
    const token = jwt.sign({id:user._id},'demo', {
        expiresIn: '30d'
    })
    return res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        token
    })
} catch (error) {
    return res.status(400).json({message:error.message})
}
}

export const login = async (req, res) => {
    const {email, password } = req.body
    try {
        const userExist = await auth.findOne({email})
        if (!userExist) {
            throw new Error("user not found")
        }
        if (!await userExist.matchPassword(password)) {
            throw new Error("password not matched")
        }
        const token = jwt.sign({id:userExist._id},'demo', {
            expiresIn: '30d'
        })
        res.status(200).json({
            _id: userExist._id,
            name: userExist.name,
            email: userExist.email,
            token
        })
    } catch (error) {
        return res.status(400).json({message:error.message})
    }
}

export const logout = async (req, res) => {
// id --> user id
res.json('logout successfully')
}