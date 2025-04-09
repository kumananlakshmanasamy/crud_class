import { useState } from 'react'
import './addUsers.css'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import toast from 'react-hot-toast'
const AddUsers=()=>{

    const navigate = useNavigate()
    const users ={
        name:'',
        address:'',
        college:'',
        year:'',
        age:'',
        batch:'',
        email:''
    }
    const [user,setuser] =useState(users)
    const submitForm = async(e)=>{
        e.preventDefault()
        console.log(user)
        axios.post(`http://localhost:4000/v1/user`,user)
        .then((response)=>{
            console.log(response.data)
            toast.success("success",{position:'top-right'})
            // toast.success(response.data.message,{position:'top-right'})
            navigate("/")
        })
        .catch((error)=>{
            console.log(error)
        })

    }

    const inputHandler =(e)=>{
        const {name,value} =e.target
        setuser({...user,[name]:value})
    }

return(
    <div className="addUser">
        <h3>Add USERS</h3>
        <form className='adduserforms'  onSubmit={submitForm}>
        <div className='inputgroup'>
            <label htmlFor="name">Name</label>
            <input type="text" placeholder="Enter your Name" autoComplete='off' name="name" id="name" onChange={inputHandler}/>
        </div>
        <div className='inputgroup'>
            <label htmlFor="address">Address</label>
            <input type="text" placeholder="Enter your Address" autoComplete='off' name="address" id="address" onChange={inputHandler}/>
        </div>
        <div className='inputgroup'>
            <label htmlFor="college">College</label>
            <input type="text" placeholder="Enter your College" autoComplete='off' name="college" id="college" onChange={inputHandler}/>
        </div>
        <div className='inputgroup'>
            <label htmlFor="year">Year</label>
            <input type='number' placeholder="Enter your Year" autoComplete='off' name="year" id="year" onChange={inputHandler}/>
        </div>
        <div className='inputgroup'>
            <label htmlFor="age">age</label>
            <input type='number' placeholder="Enter your age" autoComplete='off' name="age" id="age" onChange={inputHandler}/>
        </div>
        <div className='inputgroup'>
            <label htmlFor="batch">batch</label>
            <input type='number' placeholder="Enter your batch" autoComplete='off' name="batch" id="batch" onChange={inputHandler}/>
        </div>
        <div className='inputgroup'>
            <label htmlFor="email">email</label>
            <input type='email' placeholder="Enter your email" autoComplete='off' name="email" id="email" onChange={inputHandler}/>
        </div>
        <button type='submit' className='btn btn-primary'>Submit</button>
    </form>
    </div>
)
}
export default AddUsers