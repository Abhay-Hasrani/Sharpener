import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./AuthReducer";
import ExpenseReducer from "./ExpenseReducer";

const store = configureStore({
    reducer:{auth:AuthReducer,expenseReducer:ExpenseReducer}
});
export default store;