import { useContext } from "react";
import ExpenseListItem from "./ExpenseListItem";
import ExpenseContext from "../../store/ExpenseProvider";
const ExpenseList = () => {
  const expenseCtx = useContext(ExpenseContext);
  const expenseList = expenseCtx.expenses.map((item) => <ExpenseListItem key={Math.random()} {...item} />);
  return <div>Expense List :    {expenseList}</div>;
};
export default ExpenseList;
