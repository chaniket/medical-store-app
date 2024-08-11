import React from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import Login from "../Auth/components/login/Login";

const PrivateRoute = () => {
  // const navigate = useNavigate();
  let loggedIn = sessionStorage.getItem("authenticated");
//<ToastContainer /> <Navigate to={"/"} />
  if (loggedIn) {
    return <Outlet />;
  } else {

    setTimeout(()=>{
      toast.warning("User is not logged in!",3000);
    },1000);

    return (
      <> 
        <Login />
      </>
    );
  }
};

export default PrivateRoute;
