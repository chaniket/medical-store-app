import { configureStore } from "@reduxjs/toolkit";
import BaseUrl from "./index";
import LoginAuthToken from "./AuthTokenRDX";

export default configureStore(
  {
    reducer: {
      baseUrl: BaseUrl,
      appAuthToken: LoginAuthToken,
    },
  },
  window._REDUX_DEVTOOLS_EXTENTION && window._REDUX_DEVTOOLS_EXTENTION_()
);
