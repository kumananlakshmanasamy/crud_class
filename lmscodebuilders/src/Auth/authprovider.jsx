import { useContext,createContext,useState } from "react"
import axios from "axios";
const AuthContext = createContext();
const AuthProvider = ({ children }) => {
    const [token,settoken] = useState(localStorage.getItem("token") || null);
    const [user,setuser] = useState(null);
    const loginAction = async(data) => { 
        try {
            const response = await axios.post("http://localhost:4000/v1/login",data);
            if (response.status === 200) {
                settoken(response.data.token);
                setuser(response.data.name);
                localStorage.setItem("token",response.data.token);
        
            }
        } catch (error) {
            console.log("error",error);
        }
    }
    const CreateAccountAction = async(data) => { 
        try {
            const response = await axios.post("http://localhost:4000/v1/createAccount",data);
            if (response.status === 200) {
                console.log("response",response.data.token);
            }
            console.log("response",response.data);
        } catch (error) {
            console.log("error",error);
        }
    }
    const logoutAction = async(data) => { 
        console.log("login action",data);
    }

    return <AuthContext.Provider value={{loginAction,logoutAction,CreateAccountAction,token,user}}>{children}</AuthContext.Provider>
}

export default AuthProvider;

export const useAuth = () => {
    return useContext(AuthContext);
}