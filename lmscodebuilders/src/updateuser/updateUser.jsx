const UpdateUser=()=>{
return(
    <div>
        <h3>UPDATE USERS</h3>
        <div>
            <label htmlFor="name">Name</label>
            <input type="text" placeholder="Enter your Name" autoComplete='off' name="name" id="name" onChange={(e)=>console.log(e.target.value)}/>
        </div>
        <div>
            <label>Address</label>
            <input type="text" placeholder="Enter your Address" autoComplete='off' name="address" id="address"/>
        </div>
        <div>
            <label>College</label>
            <input type="text" placeholder="Enter your College" autoComplete='off' name="college"/>
        </div>
        <div>
            <label>Year</label>
            <input type='number' placeholder="Enter your Year" autoComplete='off' name="year"/>
        </div>
        <div>
            <label>age</label>
            <input type='number' placeholder="Enter your age" autoComplete='off' name="age"/>
        </div>
        <div>
            <label>batch</label>
            <input type='number' placeholder="Enter your batch" autoComplete='off' name="batch"/>
        </div>
        <div>
            <label>email</label>
            <input type='email' placeholder="Enter your email" autoComplete='off' name="email"/>
        </div>
    </div>
)
}
export default UpdateUser