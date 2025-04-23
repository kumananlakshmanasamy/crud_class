import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./authprovider";
const LoginScreen = () => {
    const navigate = useNavigate();
    const [email,setemail] = useState("");
    const [password,setpassword] = useState("");
    const {loginAction} = useAuth();

    const onSubmitHandler = (e) => {
        e.preventDefault();
        const data = {email,password}
        loginAction(data);
    }
    
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 sm:px-0 bg-gradient-to-br from-blue-200 to purple-400">
        <div className="bg-slate-900 p-10 rounded-lg shadow-lg w-full sm:w-96 text-indigo-300 text-sm">
            <h2 className="text-3xl font-semibold text-white text-left mb-3">Sign Up</h2>
            <p className="text-left text-sm mb-6">Login to your Account</p>
            <form onSubmit={onSubmitHandler}>
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
                <p className="mb-4 text-indigo-400 cursor-pointer">Forget Password? </p>
                <button className="w-full py-2.5 rounded bg-gradient-to-r from-indigo-500 to-indigo-900 text-white font-medium">Sign Up</button>
            </form>
            <p className="text-gray-400 text-center text-sl mt-4">Don't an account? <span onClick={()=>navigate('/register')} className="text-blue-400 cursor-pointer underline">Register</span></p>
     </div>
    </div>
  );
}
export default LoginScreen;