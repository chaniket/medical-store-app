import { createSlice } from "@reduxjs/toolkit";

const AppAuthToken = createSlice({
  name: "appAuthToken",
  initialState: "emptyToken",
  reducers: {
    LoginAuthToken: (state, action) => {
      return action.payload;
    },
  },
});

export const { LoginAuthToken } = AppAuthToken.actions;

export default AppAuthToken.reducer;
