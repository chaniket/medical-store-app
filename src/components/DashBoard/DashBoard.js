import React, { useEffect, useState } from "react";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import Header from "../Core/Header/Header";
import Error404Page from "../Core/Header/Error404Page";
import Logout from "../Auth/components/Logout/Logout";
import AddBill from "../AddBillComponent/AddBill";
import AddRow from "../AddBillComponent/AddRow";
//import AddColumn from "./components/AddBillComponent/AddColumn";
import AddColumn from "../AddBillComponent/AddColumn";
import Login from "../Auth/components/login/Login";
import { ThemeProvider } from "react-bootstrap";
import { createTheme, CssBaseline } from "@mui/material";
import App from "../../App";
import PrivateRoute from "./PrivateRoute";
import Report from "../Report/Report";
import AddBillRoute from "../AddBillComponent/AddBillRoute";

const theme = createTheme();
const DashBoard = () => {
  const log = "DashBoard component ";
  console.log(log);

  //const navigate = useNavigate();
  const [authenticated, setAuthenticated] = useState(null);

  useEffect(() => {
    const loggerInUser = sessionStorage.getItem("authenticated");
    if (loggerInUser) {
      setAuthenticated(loggerInUser);
    }
  }, []);

  const seesionAuthKey = sessionStorage.getItem("authenticated");
  const isLogin = seesionAuthKey !== null && seesionAuthKey === "true";
  const showHeader = () => {
    return isLogin ? <Header /> : "";
  };
  debugger;
  const showHeaderResult = showHeader();
  /* if (
    seesionAuthKey == null ||
    seesionAuthKey === "false"
  ) {
    debugger;
    console.log(log + "User is not authenticated");
    return <Login />;
  } else {*/
  return (
    <>

      <BrowserRouter>
      {showHeaderResult}
        <Routes>
          <Route path="/" element={<App />}></Route>

          <Route path="/user" element={<PrivateRoute />}>
            <Route path="dashboard" element={<DashBoard />}></Route>
          </Route>

          <Route path="add" element={<AddBillRoute />}>
            <Route index element={<AddBill />}></Route>
            <Route path="addBill" element={<AddBill />}></Route>
            <Route path="addRow" element={<AddRow />}></Route>
            <Route path="addColumn" element={<AddColumn />}></Route>
          </Route>
          <Route path="report" element={<Report />}></Route>

          <Route path="logout" element={<Logout />} />
          <Route path="*" element={<Error404Page />} />
        </Routes>
      </BrowserRouter>
    </>
  );
  // }
};

export default DashBoard;
