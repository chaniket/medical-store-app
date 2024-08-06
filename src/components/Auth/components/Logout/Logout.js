import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { LoginAuthToken } from "../../../ReactRDXStorage/AuthTokenRDX";

const Logout = () => {
  debugger;
  const currentAppAuthToken = useSelector((state) => state.appAuthToken);
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem("authenticated", false);
    dispatch(LoginAuthToken(""));
  }, []);

  return <Navigate replace to="/" />;
};

export default Logout;
