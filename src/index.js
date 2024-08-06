import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./components/ReactRDXStorage/store";
import Login from "./components/Auth/components/login/Login";
import DashBoard from "./components/DashBoard/DashBoard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Error404Page from "./components/Core/Header/Error404Page";
import Logout from "./components/Auth/components/Logout/Logout";
import AddBill from "./components/AddBillComponent/AddBill";
import AddRow from "./components/AddBillComponent/AddRow";
import AddColumn from "./components/AddBillComponent/AddColumn";
//import { ThemeProvider as ScThemeProvider } from "styled-components";

const root = ReactDOM.createRoot(document.getElementById("root"));
const theme = createTheme();

root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route index element={<App />} />
          <Route path="login" element={<Login />} />
          <Route path="dashboard" element={<DashBoard />} />

          <Route path="/add" element={<AddBill />}>
            <Route index element={<AddBill />}></Route>
            <Route path="addRow" element={<AddRow />}></Route>
            <Route path="addColumn" element={<AddColumn />}></Route>
          </Route>

          <Route path="logout" element={<Logout />} />
          <Route path="*" element={<Error404Page />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
