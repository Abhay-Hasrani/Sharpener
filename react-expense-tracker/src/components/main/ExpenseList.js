import ExpenseListItem from "./ExpenseListItem";
const ExpenseList = () => {
  const expenseList = [
    { amount: 200, description: "adadawd", type: "Bills" },
  ].map((item) => <ExpenseListItem key={item.description} {...item} />);
  return <div>Expense List :    {expenseList}</div>;
};
export default ExpenseList;
