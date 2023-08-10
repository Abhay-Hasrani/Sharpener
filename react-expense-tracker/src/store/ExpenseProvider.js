import React, { useEffect, useState } from "react";

const ExpenseContext = React.createContext({
  expenses: [],
  addExpense: (expense) => {},
});

export const ExpenseProvider = (props) => {
  const makeUrl = () => {
    let formattedEmail = localStorage.getItem("email");
    if (formattedEmail == null) formattedEmail = "";
    return `https://sharpener-expense-tracke-3dae1-default-rtdb.firebaseio.com/expenses${formattedEmail}.json`;
  };
  const [expenseContext, updateExpenseContext] = useState({
    expenses: [],
    addExpense: addExpenseHandler,
  });
  console.log("getting...");
  useEffect(() => {
    async function getExpensesFromFirebase() {
      const res = await fetch(makeUrl());

      const data = await res.json();

      if (res.ok) {
        console.log(data);
        updateExpenseContext((prev) => {
          for (const _id in data) {
            console.log(data[_id]);
            prev.expenses.push(data[_id]);
          }
          return { ...prev };
        });
      } else {
        alert("While getting expenses from firebase : " + data.error.message);
      }
    }
    getExpensesFromFirebase();
  }, []);

  async function addExpenseToFirebase(expense) {
    const res = await fetch(makeUrl(), {
      method: "POST",
      body: JSON.stringify({
        amount: expense.amount,
        description: expense.description,
        type: expense.type,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();

    if (res.ok) {
      console.log("added :", data.name);
    } else {
      alert("While adding expense to firebase : " + data.error.message);
    }
  }

  function addExpenseHandler(expense) {
    updateExpenseContext((prev) => {
      prev.expenses.push(expense);
      addExpenseToFirebase(expense);
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
