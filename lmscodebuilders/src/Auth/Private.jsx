import React from "react";
import { Navigate,Outlet } from "react-router-dom";
import { useAuth } from "./authprovider";
const PrivateRoute = () => {
    const { token } = useAuth();
    if (!token) {
        return <Navigate to="/" />;
    }
    return <Outlet/>
}
export default PrivateRoute;