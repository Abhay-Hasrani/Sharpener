// import { createStore } from "redux";
// function counterReducer(state = { counter: 0 }, action) {
//   let count = state.counter;
//   switch (action.type) {
//     case "increment5":
//       count = state.counter + 5;
//       break;
//     case "decrement5":
//       count = state.counter - 5;
//       break;
//     default:
//       count = state.counter;
//   }
//   return {
//     counter: count,
//   };
// }

import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./AuthSlice";
import CounterSlice from "./CounterSlice";

//above code is only simple redux without redux toolkit

export const authActions = AuthSlice.actions;
export const counterActions = CounterSlice.actions;
const store = configureStore({
  reducer: { counter: CounterSlice.reducer, auth: AuthSlice.reducer },
});

export default store;
