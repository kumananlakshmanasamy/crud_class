import { useContext,createContext,useState } from "react"
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();
const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const [token,settoken] = useState(localStorage.getItem("token") || null);
    const [user,setuser] = useState(null);
    const loginAction = async(data) => { 
        try {
            const response = await axios.post("http://localhost:4000/v1/login",data);
            if (response.status === 200) {
                settoken(response.data.token);
                setuser(response.data.name);
                localStorage.setItem("token",response.data.token);
                navigate("/users");
            }
        } catch (error) {
            console.log("error",error);
        }
    }
    const CreateAccountAction = async(data) => { 
        try {
            const response = await axios.post("http://localhost:4000/v1/createAccount",data);
            if (response.status === 200) {
                settoken(response.data.token);
                setuser(response.data.name);
                localStorage.setItem("token",response.data.token);
                navigate("/users");
            }
        } catch (error) {
            console.log("error",error);
        }
    }
    const logoutAction = async(data) => { 
        settoken(null);
        setuser(null);
        localStorage.removeItem("token");
        navigate("/");
    }

    return <AuthContext.Provider value={{loginAction,logoutAction,CreateAccountAction,token,user}}>{children}</AuthContext.Provider>
}

export default AuthProvider;

export const useAuth = () => {
    return useContext(AuthContext);
}