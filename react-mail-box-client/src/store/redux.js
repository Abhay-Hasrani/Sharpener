import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./AuthReducer";
import MailReducer from "./MailReducer";

const store = configureStore({
  reducer: {
    auth: AuthReducer,
    mail: MailReducer
  },
});
export default store;
