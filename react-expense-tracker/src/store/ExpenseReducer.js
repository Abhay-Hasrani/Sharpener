import { createSlice } from "@reduxjs/toolkit";

// const idToken = localStorage.getItem("idToken").idToken;
const makeUrl = (id) => {
  let formattedEmail = localStorage.getItem("email");
  if (formattedEmail == null) formattedEmail = "";
  else {
    formattedEmail += id ? "/" + id : "";
  }
  return `https://sharpener-expense-tracke-3dae1-default-rtdb.firebaseio.com/expenses${formattedEmail}.json`;
};

const initialState = {
  expenses: [],
  totalExpenseAmount: 0,
};

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

const ExpenseSlice = createSlice({
  name: "expenseReducer",
  initialState,
  reducers: {
    addExpense(state, action) {
      let expense = { ...action.payload };
      function addDatabaseIdToExpense(id) {
        expense = { ...expense, id: id };
      }
      addExpenseToFirebase(expense, addDatabaseIdToExpense);
      state.totalExpenseAmount += +expense.amount;
      state.expenses.push(expense);
    },
    deleteExpense(state, action) {
      const id = action.payload;
      const expenses = state.expenses;
      const index = expenses.findIndex((item) => item.id === id);
      if (index === -1) alert("item not present");
      else {
        state.totalExpenseAmount -= expenses[index].amount;
        expenses.splice(index, 1);
        deleteExpenseFromFirebase(id);
      }
      state.expenses = expenses;
    },
    editExpense(state, action) {
      const { id, expense } = action.payload;
      const expenses = state.expenses;
      const index = expenses.findIndex((item) => item.id === id);
      if (index === -1) alert("item not present");
      else {
        state.totalExpenseAmount += expenses[index].amount - expense.amount;
        expenses[index] = {
          id: id,
          amount: expense.amount,
          description: expense.description,
          type: expense.type,
        };
        editExpenseInFirebase(id, expense);
      }
      state.expenses = expenses;
    },
    setExpenses: (state, action) => {
      const expenses = action.payload;
      for (const { amount } of expenses) {
        state.totalExpenseAmount += +amount;
      }
      state.expenses = expenses;
    },
  },
});

export const fetchExpenses = () => async (dispatch) => {
  const res = await fetch(makeUrl());
  const data = await res.json();

  if (res.ok) {
    // console.log(data);
    const expenses = [];
    for (const id in data) {
      // console.log(data[id]);
      const expenseObj = data[id];
      // console.log(expenseObj);
      expenseObj.id = id;
      expenseObj.amount = (+expenseObj.amount);
      expenses.push(expenseObj);
    }
    dispatch(expenseActions.setExpenses(expenses));
  } else {
    alert("While getting expenses from firebase : " + data.error.message);
  }
};
export const expenseActions = ExpenseSlice.actions;
export default ExpenseSlice.reducer;
