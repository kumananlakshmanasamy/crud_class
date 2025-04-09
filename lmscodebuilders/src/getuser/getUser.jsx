import axios from 'axios'
import './user.css'
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import toast from 'react-hot-toast'

const User=()=>{
    const [users,setusers]= useState([]);
    
    const deleteitem =async(id)=>{
        await axios.delete(`http://localhost:4000/v1/delete/user/${id}`)
        .then((response)=>{
            toast.success("deleted successfully",{position:'top-right'})
        }).catch((error)=>{
            console.log(error)
        })
    }

    useEffect(()=>{
        const getUsers =async()=>{
            await axios.get('http://localhost:4000/v1/users')
            .then((response)=>{
                console.log(response.data)
                setusers(response.data)
            })
        }
        getUsers()
    },[])
    return(
    <div className="userTable">
        <table className="table table-bordered">
            <thead>
                <tr>
                    <th>S.NO</th>
                    <th>Name</th>
                    <th>Address</th>
                    <th>College</th>
                    <th>Year</th>
                    <th>age</th>
                    <th>batch</th>
                    <th>email</th>
                </tr>
            </thead>
            <tbody>
                {users.map((users,index)=>{
                    console.log(users)
                    return( 
                    <tr>
                        <td>{index+1}</td>
                        <td>{users.name}</td>
                        <td>{users.address}</td>
                        <td>{users.college}</td>
                        <td>{users.year}</td>
                        <td>{users.age}</td>
                        <td>{users.batch}</td>
                        <td>{users.email}</td>
                        <button type='button' onClick={()=>deleteitem(users._id)} className='btn btn-danger'>Delete</button>
                        <Link to = {`/update/`+users._id} type='button'  className='btn btn-primary'>
                         update
                        </Link>
                    </tr>)
                })}
               
            </tbody>

        </table>
        <Link to = {`/add`} type='button' className='btn btn-primary'>
            Create User
        </Link>
    </div>)
}
export default User