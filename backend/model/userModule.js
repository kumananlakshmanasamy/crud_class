import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    name:{
        type :String,
        require:true
    },
    age:{
        type :Number
    },
    college:{
        type :String
    },
    address:{
        type :String
    },
    year:{
        type :Number
    },
    batch:{
        type :Number
    },
    email:{
        type: String,
        require:true,
        uniqu:true
    }
})
export default mongoose.model('users',userSchema)