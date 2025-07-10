// import { Navigate } from "react-router-dom";


// const PublicRoute = ({ children }) => {

//     const isLogged = localStorage.getItem("userIsLogged") === "true";


//     if (isLogged) {
//         return <Navigate to="/dashboard" replace />;
//     }

//     return children;
// };
// export default PublicRoute;


import { Navigate, Outlet } from "react-router-dom";

const PublicRoute = () => {
    const isLogged = localStorage.getItem("userIsLogged") === "true";

    if (isLogged) {
        return <Navigate to="/dashboard" replace />;
    }

    return <Outlet />;
};

export default PublicRoute;
