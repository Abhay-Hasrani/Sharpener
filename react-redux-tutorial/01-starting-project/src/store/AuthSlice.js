import { createSlice } from "@reduxjs/toolkit";

const initialState = { isLogged: false };
const AuthSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    logIn(state) {
      state.isLogged = true;
    },
    logOut(state) {
      state.isLogged = false;
    },
  },
});
export default AuthSlice;
