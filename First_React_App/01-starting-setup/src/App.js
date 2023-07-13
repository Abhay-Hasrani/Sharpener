import ExpenseItem from "./components/Expenses/ExpenseItem";
import ExpenseForm from "./components/Expenses/ExpenseForm";
import { useState } from "react";
function App() {
  console.log("called");
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
      location: "Bhandara",
    },
    {
      id: "e2",
      title: "New TV",
      amount: 799.49,
      date: new Date(2021, 2, 12),
      location: "Warthi",
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
      location: "Mumbai",
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
      location: "Pune",
    },
  ];

  const expenseList = [];
  for (let i = 0; i < expenses.length; i++) {
    expenseList.push(
      <ExpenseItem
        id={expenses[i].id}
        location={expenses[i].location}
        title={expenses[i].title}
        date={expenses[i].date}
        amount={expenses[i].amount}
      ></ExpenseItem>
    );
  }

  const [expenseListState, setExpenseList] = useState(expenseList);

  function OnAddExpense(expenseObj) {
    console.log(expenseObj);
    expenseList.push(
      <ExpenseItem
        id="id"
        location="location"
        title={expenseObj.title}
        date={expenseObj.date}
        amount={expenseObj.amount}
      ></ExpenseItem>
    );
    //console.log(expenseList);
    setExpenseList([...expenseList]); //note always use new object dont pass old state object
  }
  let arr = [100, 200, 200];
  // console.log(expenseList);
  // console.log("expenseListState", [...expenseListState]);
  return (
    <div>
      <h2>Let's get started!!</h2>
      <ExpenseForm onAddExpenseHandler={OnAddExpense} />
      {expenseListState};
    </div>
  );
}

export default App;
