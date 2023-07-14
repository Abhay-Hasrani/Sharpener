import { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  const [enteredTitle, setTitle] = useState("");
  const [enteredAmount, setAmount] = useState("");
  const [enteredDate, setDate] = useState("");
  function changeHandler(e) {
    const id = e.target.id;
    // console.log(id);
    switch (id) {
      case "title":
        setTitle(e.target.value);
        // console.log("title Updated");
        break;
      case "amount":
        setAmount(e.target.value);
        // console.log("am0unt Updated");
        break;
      case "date":
        setDate(e.target.value);
        // console.log("date Updated");
        break;
    }
  }

  function submitHandler(e) {
    e.preventDefault();
    const expenseObj = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    // console.log(expenseObj);
    props.onAddExpenseHandler(expenseObj);
    setFormVisibility(false);
  }

function newExpenseButtonClickHandler(e){
   setFormVisibility(true);
}
function cancelClickHandler(e){
  setFormVisibility(false);
}

  const [formVisibility,setFormVisibility] = useState(false);
  const newExpenseButton = <button onClick={newExpenseButtonClickHandler}>Add New Expense</button>;

  if (formVisibility === false) {
    return <div className="new-expense__control">{newExpenseButton}</div>;
  }
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Expense Description: </label>
          <input onChange={changeHandler} type="text" id="title" />
        </div>
        <div className="new-expense__control">
          <label>Expense Amount: </label>
          <input onChange={changeHandler} type="number" id="amount" />
        </div>
        <div className="new-expense__control">
          <label>Expense Date: </label>
          <input onChange={changeHandler} type="date" id="date" />
        </div>
        <div className="new-expense__control">
          <input type="submit" value="Add Expense" id="submit" />
        </div>
        <div className="new-expense__control">
          <button onClick={cancelClickHandler}>Cancel</button>
        </div>
      </div>
    </form>
  );
};
export default ExpenseForm;
