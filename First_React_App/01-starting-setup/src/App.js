import ExpenseItem from "./components/Expenses/ExpenseItem";
import ExpenseForm from "./components/Expenses/ExpenseForm";
import ExpenseFilter from "./components/Expenses/ExpenseFilter";
import { useState } from "react";
import ExpensesChart from "./components/Expenses/ExpensesChart";

const DUMMY_EXPENSES = [
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

function App() {
  console.log("called");
  
  const [expenseListState, setExpenseList] = useState(DUMMY_EXPENSES);
  const [filteredYear, setFilterYear] = useState("2023");

  function filteredChangehandler(selectedYear) {
    setFilterYear(selectedYear);
  }

  function OnAddExpense(expenseObj) {
    console.log(expenseObj);
    //note always use new object dont pass old state object and
    // if state is dependent on previous stae use below syntax
    setExpenseList((previousExpenseList) => {
      return [expenseObj, ...previousExpenseList];
    });
  }
  let filteredExpenses = expenseListState.filter((expense) => {
    return expense.date.getFullYear() == filteredYear;
  });
  let expenseListContent = <p style={{ color: "white" }}>No Expenses Found</p>;

  if (filteredExpenses.length > 0) {
    expenseListContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        id={expense.id}
        location={expense.location}
        title={expense.title}
        date={expense.date}
        amount={expense.amount}
      ></ExpenseItem>
    ));
  }

  return (
    <div style={{margin : "50px"}}>
      <ExpenseForm onAddExpenseHandler={OnAddExpense}  />
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filteredChangehandler}
      ></ExpenseFilter>
      <ExpensesChart expenses={filteredExpenses} />
      {expenseListContent}
      {(filteredExpenses.length === 1)?(<p style={{color : 'white',margin :"1rem"}}>Only single Expense here. Please add more...</p>):""}
    </div>
  );
}

export default App;
