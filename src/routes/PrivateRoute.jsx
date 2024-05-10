/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth()
    const location = useLocation();
    if (loading) {
        return <div className="flex flex-col justify-center items-center min-h-[calc(100vh-300px)]">
            <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-600"></div>
        </div>
    }
    if (user) {
        return children;
    }
    return <Navigate state={location?.pathname} to ='/login'></Navigate>

};

export default PrivateRoute;