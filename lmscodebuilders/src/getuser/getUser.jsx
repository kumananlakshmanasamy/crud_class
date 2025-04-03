import axios from 'axios'
import './user.css'
import { useState } from 'react'
const User=()=>{
    const [users,setusers]= useState([]);
    const getUsers =async()=>{
        console.log("print it works")
        await axios.get('http://localhost:4000/v1/users')
        .then((response)=>{
            console.log(response.data)
            setusers(response.data)
        })
    }
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
                    </tr>)
                })}
               
            </tbody>

        </table>

        <button onClick={()=>getUsers()}>get Users</button>
    </div>)
}
export default User