//  axios is a javascript library
// HTTP request server create

// map Filter reducer 

//  map -- create a new array 

import axios from 'axios'
const User=()=>{
    //  map --> array of values
    var myarray = [1,2,3,4,5]
    var multiplay = myarray.map(function(e){
        return e*5
    });
    console.log(multiplay)

    //  filter --> filter the even numbers , array of values
    var evennumber = myarray.filter(function(e){
        return e%2==0
    })
    console.log(evennumber)

    //  reducer  -- single value as output
    var sum = myarray.reduce(function(e,f){
        return e+f
    })
    console.log(sum)
    
    const getUsers =async()=>{
        console.log("print it works")
        await axios.get('http://localhost:4000/v1/users')
        .then((response)=>{
            console.log(response.data)
        })
    }
    return(
    <div className="userTable">
        <button onClick={()=>getUsers()}>get Users</button>
    </div>)
}
export default User