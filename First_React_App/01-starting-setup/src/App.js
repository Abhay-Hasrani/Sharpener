import ExpenseItem from "./components/Expenses/ExpenseItem";
function App() {

  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
      location: "Bhandara"
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) ,location: "Warthi"},
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
      location: "Mumbai"
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
      location: "Pune"
    },
  ];
  const expenseList = [];
  for(let i=0;i<expenses.length;i++){
    expenseList.push(
    <ExpenseItem location ={expenses[i].location} title={expenses[i].title} date={expenses[i].date} amount={expenses[i].amount}></ExpenseItem>
    );
  }
  return (
    <div>
      <h2>Let's get started!!</h2>
      {expenseList};
    </div>
  );
}

export default App; 
