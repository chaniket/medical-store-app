import { createSlice } from "@reduxjs/toolkit";

const AppBaseUrl = createSlice({
  name: "baseUrl",
  initialState: "http://localhost:9090",
  reducers: {
    BaseUrl: (state, action) => {
      return "http://localhost:9090";
    },
    AuthToken: (state, action) => {
      return action.payload;
    },
  },
});

/*
const AppAuthToken = createSlice({
  name: "appAuthToken",
  initialState: "http://localhost:9090",
  reducers: {
    LoginAuthToken: (state, action) => {
      return action.payload;
    },
  },
}); */

export const { BaseUrl, AuthToken } = AppBaseUrl.actions;
//export const {LoginAuthToken } = AppAuthToken.actions;

export default AppBaseUrl.reducer;

