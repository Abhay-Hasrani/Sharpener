// import { useContext } from "react";
import { useSelector } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
// import ExpenseContext from "../../store/ExpenseProvider";
const ExpenseList = () => {
  // const expenseCtx = useContext(ExpenseContext);
  const expenses = useSelector((state) => state.expenseReducer.expenses);
  const expenseList = expenses.map((item) => (
    <ExpenseListItem key={Math.random()} {...item} />
  ));
  return <div>Expense List : {expenseList}</div>;
};
export default ExpenseList;
