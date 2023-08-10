import React, { useState } from "react";
const ExpenseContext = React.createContext({
  expenses: [],
  addExpense: (expense) => {},
});

export const ExpenseProvider = (props) => {
  const [expenseContext, updateExpenseContext] = useState({
    expenses: [],
    addExpense: addExpenseHandler,
  });
  function addExpenseHandler(expense) {
    updateExpenseContext((prev) => {
      prev.expenses.push(expense);
      return { ...prev };
    });
  }
  return (
    <ExpenseContext.Provider value={expenseContext}>
      {props.children}
    </ExpenseContext.Provider>
  );
};
export default ExpenseContext;
