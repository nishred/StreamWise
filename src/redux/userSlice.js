import { createSlice } from "@reduxjs/toolkit";

const initialUserState = {
  fullName: "",
  email: "",
  uid: "",
  isAuthenticated: false,
};

const userSlice = createSlice({
  name: "user",
  initialState: initialUserState,
  reducers: {
    createUser(state, action) {
      const { fullName, uid, email } = action.payload;

      console.log(action.payload)

      state.fullName = fullName;

      state.uid = uid;

      state.email = email;

      state.isAuthenticated = true;
    },

    removeUser(state, action) {
      state.isAuthenticated = false;
    },
  },
});

export const { createUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
