import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./CartReducer";
import UiReducer from "./UiReducer";
const store = configureStore({
  reducer: { cart: CartReducer, UI: UiReducer },
});
export default store;
