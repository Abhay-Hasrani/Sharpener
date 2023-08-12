import { useEffect } from "react";
import ExpenseForm from "./ExpenseForm";
import ExpenseList from "./ExpenseList";
import { useDispatch } from "react-redux";
import { fetchExpenses } from "../../store/ExpenseReducer";
const ExpenseManger = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchExpenses());
  },[dispatch]);
  return (
    <div>
      <ExpenseForm />
      <ExpenseList />
    </div>
  );
};
export default ExpenseManger;
