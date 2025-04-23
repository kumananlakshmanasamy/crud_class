import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./authprovider";
const RegisterScreen = () => {
    const navigate = useNavigate();
    const [name,setname] = useState("");
    const [email,setemail] = useState("");
    const [password,setpassword] = useState("");
    const {CreateAccountAction} = useAuth();
    const onSubmitHandler = (e) => {
        e.preventDefault();
        const data = {email,password,name}
        CreateAccountAction(data)
    }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 sm:px-0 bg-gradient-to-br from-blue-200 to purple-400">
        <div className="bg-slate-900 p-10 rounded-lg shadow-lg w-full sm:w-96 text-indigo-300 text-sm">
            <h2 className="text-3xl font-semibold text-white text-left mb-3">Create Account</h2>
            <p className="text-left text-sm mb-6">Create Your Account</p>
            <form onSubmit={onSubmitHandler}>
                 <div className="mb-4 flex items-center gap-3 w-full px-3 py-2.5 rounded-full bg-[#333A5c]">
                  <input 
                        className="outline-none"
                        onChange={(e)=> setname(e.target.value)} 
                        value={name} 
                        placeholder="Enter Your name" 
                        required
                        type="text"
                    />
                </div>
                <div className="mb-4 flex items-center gap-3 w-full px-3 py-2.5 rounded-full bg-[#333A5c]">
                  <input 
                        className="outline-none"
                        onChange={(e)=> setemail(e.target.value)} 
                        value={email} 
                        placeholder="Email id" 
                        required
                        type="email"
                    />
                </div>
                <div className="mb-4 flex items-center gap-3 w-full px-3 py-2.5 rounded-full bg-[#333A5c]">
                    <input 
                        className="outline-none"
                        onChange={(e)=>setpassword(e.target.value)} 
                        value={password} 
                        placeholder="password" 
                        required
                        type="password"
                    />
                </div>
                <button  className="w-full py-2.5 rounded bg-gradient-to-r from-indigo-500 to-indigo-900 text-white font-medium">Create Account</button>
            </form>
            <p className="text-gray-400 text-center text-sl mt-4">Aldready have an account? <span onClick={()=>navigate('/login')} className="text-blue-400 cursor-pointer underline">Login</span></p>
     </div>
    </div>
  );
}
export default RegisterScreen;