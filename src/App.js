import logo from "./logo.svg";
import "./App.css";
import Login from "./components/Auth/components/login/Login";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { useState } from "react";
import DashBoard from "./components/DashBoard/DashBoard";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import AddBill from "./components/AddBillComponent/AddBill";
import AddRow from "./components/AddBillComponent/AddRow";
import AddColumn from "./components/AddBillComponent/AddColumn";
import Logout from "./components/Auth/components/Logout/Logout";
import Error404Page from "./components/Core/Header/Error404Page";
import Header from "./components/Core/Header/Header";
import Report from "./components/Report/Report";
import PrivateRoute from "./components/DashBoard/PrivateRoute";

const baseUrl = () => {
  return "http://localhost:9090";
};

const theme = createTheme();

function App() {
  const isLogin =
  sessionStorage.getItem("authenticated") !== null &&
  sessionStorage.getItem("authenticated") === "true";
  const showHeader = () => {
    return isLogin ? <DashBoard /> : <Login/>;
  };
  const showHeaderResult = showHeader();
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        {showHeaderResult}
      </ThemeProvider>
    </div>
  );
}

export default App;
