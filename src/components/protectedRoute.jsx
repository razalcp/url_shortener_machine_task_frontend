import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

import { useEffect } from "react";

const ProtectedRoute = () => {
  
    const isLogged = localStorage.getItem("userIsLogged") === "true";

    if (isLogged) {
        return <Outlet />
    } else {             
        return <Navigate to="/login" replace />
    }

};

export default ProtectedRoute;
