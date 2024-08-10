import logo from "./logo.svg";
import "./App.css";
import Login from "./components/Auth/components/login/Login";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { useState } from "react";
import DashBoard from "./components/DashBoard/DashBoard";

const baseUrl = () => {
  return "http://localhost:9090";
};

const theme = createTheme();

function App() {
    return (
      <div className="App">
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Login />
        </ThemeProvider>
      </div>
    );
}

export default App;
