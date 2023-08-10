import React, { useContext, useEffect, useState } from "react";
import AuthContext from "./AuthProvider";

const ExpenseContext = React.createContext({
  expenses: [],
  addExpense: (expense) => {},
  editExpense: (expense) => {},
  deleteExpense: (expense) => {},
});

export const ExpenseProvider = (props) => {
  const authCtx = useContext(AuthContext);
  const makeUrl = (id) => {
    let formattedEmail = localStorage.getItem("email");
    if (formattedEmail == null) formattedEmail = "";
    else {
      formattedEmail += id ? "/" + id : "";
    }
    return `https://sharpener-expense-tracke-3dae1-default-rtdb.firebaseio.com/expenses${formattedEmail}.json`;
  };
  const [expenseContext, updateExpenseContext] = useState({
    expenses: [],
    addExpense: addExpenseHandler,
    editExpense: editExpenseHandler,
    deleteExpense: deleteExpenseHandler,
  });
  useEffect(() => {
    // console.log("getting...");
    async function getExpensesFromFirebase() {
      const res = await fetch(makeUrl());
      const data = await res.json();

      if (res.ok) {
        // console.log(data);
        updateExpenseContext((prev) => {
          prev.expenses = [];
          for (const id in data) {
            // console.log(data[id]);
            const expenseObj = data[id];
            expenseObj.id = id;
            prev.expenses.push(expenseObj);
          }
          return { ...prev };
        });
      } else {
        alert("While getting expenses from firebase : " + data.error.message);
      }
    }
    getExpensesFromFirebase();
  }, [authCtx.idToken]);

  async function addExpenseToFirebase(expense, addDatabaseIdToExpense) {
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
      addDatabaseIdToExpense(data.name);
    } else {
      alert("While adding expense to firebase : " + data.error.message);
    }
  }

  function addExpenseHandler(expense) {
    updateExpenseContext((prev) => {
      function addDatabaseIdToExpense(id) {
        expense.id = id;
      }
      addExpenseToFirebase(expense, addDatabaseIdToExpense);
      prev.expenses.push(expense);
      return { ...prev };
    });
  }

  async function deleteExpenseFromFirebase(id) {
    const res = await fetch(makeUrl(id), {
      method: "DELETE",
    });

    const data = await res.json();

    if (res.ok) {
      console.log("Deleted :", res);
    } else {
      alert("While Deleting expense to firebase : " + data.error.message);
    }
  }

  function deleteExpenseHandler(id) {
    updateExpenseContext((prev) => {
      const index = prev.expenses.findIndex((item) => item.id === id);
      if (index === -1) alert("item not present");
      else {
        prev.expenses.splice(index, 1);
        deleteExpenseFromFirebase(id);
      }
      return { ...prev };
    });
  }

  async function editExpenseInFirebase(id, expense) {
    const res = await fetch(makeUrl(id), {
      method: "PUT",
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
      console.log("Updated :", data);
    } else {
      alert("While Updating expense to firebase : " + data.error.message);
    }
  }

  function editExpenseHandler(id, expense) {
    updateExpenseContext((prev) => {
      const index = prev.expenses.findIndex((item) => item.id === id);
      if (index === -1) alert("item not present");
      else {
        prev.expenses[index] = {
          id:id,
          amount: expense.amount,
          description: expense.description,
          type: expense.type,
        };
        editExpenseInFirebase(id, expense);
      }
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
