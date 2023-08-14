import { createSlice } from "@reduxjs/toolkit";
let token = null;
let logInTime = null;
let obj = localStorage.getItem("idToken");
if (obj != null) {
  obj = JSON.parse(obj);
  token = obj.token;
  logInTime = obj.logInTime;
}
if (logInTime != null && Date.now() - logInTime > 10 * 60 * 1000) {
  // localStorage.setItem("email", null);
  localStorage.setItem(
    "idToken",
    JSON.stringify({
      token: null,
      logInTime: null,
    })
  );
}

const initialState = {
  idToken: token,
  isLogged: token != null,
};
const AuthSlice = createSlice({
  name: "authReducer",
  initialState,
  reducers: {
    setIdToken(state, action) {
      const idToken = action.payload;
      if (idToken == null) localStorage.setItem("email", null);
      localStorage.setItem(
        "idToken",
        JSON.stringify({
          token: idToken,
          logInTime: Date.now(),
        })
      );
      state.idToken = idToken;
      state.isLogged = idToken != null;
    },
  },
});
export const authActions = AuthSlice.actions;
export default AuthSlice.reducer;
