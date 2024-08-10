import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Header from "../Core/Header/Header";

const DashBoard = () => {
  const log = "DashBoard component ";
  console.log(log);

  const navigate = useNavigate();
  const [authenticated, setAuthenticated] = useState(null);

  useEffect(() => {
    const loggerInUser = localStorage.getItem("authenticated");
    if (loggerInUser) {
      setAuthenticated(loggerInUser);
    }
  }, []);

  if (!localStorage.getItem("authenticated")) {
    debugger;
    console.log(log + "User is not authenticated");
    return <Navigate replace to="/login" />;
    // navigate("login");
    //return;
  } else {
    return (
      <>
      
        <Header />
        
        <div>Medical Store</div>
        
      </>
    );
  }
};

export default DashBoard;
