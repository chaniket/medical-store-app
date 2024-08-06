// src/LoginPage.js
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Alert,
  CircularProgress,
} from "@mui/material";
import { styled } from "@mui/system";
import App from "../../../../App";
import { useDispatch, useSelector } from "react-redux";
import { BaseUrl } from "../../../ReactRDXStorage/index";
import { LoginAuthToken } from "../../../ReactRDXStorage/AuthTokenRDX";
//import { DashBoard } from "../../../DashBoard/DashBoard";
import DashBoard from "../../../DashBoard/DashBoard";
import { Navigate, useNavigate } from "react-router-dom";
import { createTheme } from "@mui/material/styles";
import ThemeProvider from "@mui/material";

//const theme = createTheme();

const StyledContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: theme.spacing(5),
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[5],
}));

const Login = () => {
  const navigate = useNavigate();
  const log = "Login component ";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [authenticated, setAuthenticated] = useState(
    localStorage.getItem(localStorage.getItem("authenticated") || false)
  );

  const currentBaseUrl = useSelector((state) => state.baseUrl);
  const currentAppAuthToken = useSelector((state) => state.appAuthToken);
  const dispatch = useDispatch();
  console.log(log + currentBaseUrl);
  console.log(log + currentAppAuthToken);

  const onSubmit = async (data) => {
    setLoading(true);
    setErrorMessage("");
    debugger;
    try {
      const response = await axios.post(
        currentBaseUrl + "/login/loginUser",
        data
      );
      // Handle successful login
      console.log("Login successful:", response.data);
      setAuthenticated(true);
      localStorage.setItem("authenticated", true);
      dispatch(LoginAuthToken(response.data.authToken));
      navigate("dashboard");
      //return <Navigate replace to="/dashboard" />;
      /*      return (
        <>
          <DashBoard />
        </>
      ); */
    } catch (error) {
      setAuthenticated(false);
      localStorage.setItem("authenticated", false);
      // Handle login error
      setErrorMessage("Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <StyledContainer maxWidth="sm">
      <Typography variant="h4" component="h1" gutterBottom>
        Medical Store Login
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
        <TextField
          label="Email"
          variant="outlined"
          margin="normal"
          fullWidth
         
          {...register("username", { required: "Email is required" })}
          error={!!errors.username}
          helperText={errors.username ? errors.username.message : ""}
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          margin="normal"
          
          fullWidth
          {...register("password", { required: "Password is required" })}
          error={!!errors.password}
          helperText={errors.password ? errors.password.message : ""}
        />
        {errorMessage && (
          <Alert severity="error" sx={{ mt: 2 }}>
            {errorMessage}
          </Alert>
        )}
        <Box sx={{ position: "relative", mt: 3 }}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            type="submit"
            disabled={loading}
          >
            Login
          </Button>
          {loading && (
            <CircularProgress
              size={24}
              sx={{
                color: "primary.main",
                position: "absolute",
                top: "50%",
                left: "50%",
                marginTop: "-12px",
                marginLeft: "-12px",
              }}
            />
          )}
        </Box>
      </form>
    </StyledContainer>
  );
};

export default Login;
