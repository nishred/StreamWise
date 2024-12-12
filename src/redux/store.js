import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./userSlice";

import appConfigReducer from "./appConfigSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    appConfig: appConfigReducer,
  },
});

export default store;
