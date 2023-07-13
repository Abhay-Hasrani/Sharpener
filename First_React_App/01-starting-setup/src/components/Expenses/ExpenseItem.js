import "./ExpenseItem.css"
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import { useState } from "react";

const ExpenseItem=(props)=>{
   // console.log("called expense item");

    const [amount,setAmount] = useState(props.amount);
    const clickHandler=(e)=>{
        // const ele = document.getElementById(props.id);
        // console.log(ele," deleted");
        // ele.remove();
        setAmount("100");
        console.log(amount);
    }
    
    return (
    <div className="expense-item" id={props.id}>
    <ExpenseDate date ={props.date} />
    <ExpenseDetails amount={amount} title={props.title} location={props.location}/>
    <button onClick={clickHandler}>Update Amount</button>
    </div>
    );
}
export default ExpenseItem;