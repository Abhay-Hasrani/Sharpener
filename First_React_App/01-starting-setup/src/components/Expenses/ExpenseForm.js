import { useState } from "react";

const ExpenseForm = () => {
  const [enteredTitle, setTitle] = useState("");
  const [enteredAmount, setAmount] = useState("");
  const [enteredDate, setDate] = useState("");
  function changeHandler(e) {
    const id = e.target.id;
    console.log(id);
    switch (id) {
      case "title":
        setTitle(e.target.value);
        console.log("title Updated");
        break;
      case "amount":
        setAmount(e.target.value);
        console.log("am0unt Updated");
        break;
      case "date":
        setDate(e.target.value);
        console.log("date Updated");
        break;
    }
  }

  function submitHandler(e){
    e.preventDefault();
    const expenseObj = {title : enteredTitle,
        amount : enteredAmount,
        date : new Date(enteredDate)
    }
    console.log(expenseObj);
  }
  return (
    <form onSubmit={submitHandler}>
      <label>Expense Description: </label>
      <input onChange={changeHandler} type="text" id="title" />
      <br />
      <label>Expense Amount: </label>
      <input onChange={changeHandler} type="number" id="amount" />
      <br />
      <label>Expense Date: </label>
      <input onChange={changeHandler} type="date" id="date" />
      <br />
      <input type="submit" value="Add Expense" id="submit" />
    </form>
  );
};
export default ExpenseForm;
