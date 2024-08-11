import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { LoginAuthToken } from "../../../ReactRDXStorage/AuthTokenRDX";

const Logout = () => {
  debugger;
  const currentAppAuthToken = useSelector((state) => state.appAuthToken);
  const dispatch = useDispatch();

  let rowEle = document.getElementsByClassName("hideHeaderAfterLogout");
  for (let i = 0; i < rowEle.length; i++) {
    rowEle[i].style.display = "none";
  }

  useEffect(() => {
    sessionStorage.setItem("authenticated", false);
    sessionStorage.setItem("reloadLogin", true);
    dispatch(LoginAuthToken(""));
    sessionStorage.removeItem("authenticated");
  }, []);

  return <Navigate replace to="/" />;
};

export default Logout;
