import "./ExpenseItem.css"
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";

const ExpenseItem=(props)=>{
    const clickHandler=(e)=>{
        const ele = document.getElementById(props.id);
        console.log(ele," deleted");
        ele.remove();
    }
    
    return (
    <div className="expense-item" id={props.id}>
    <ExpenseDate date ={props.date} />
    <ExpenseDetails amount={props.amount} title={props.title} location={props.location}/>
    <button onClick={clickHandler}>Delete</button>
    </div>
    );
}
export default ExpenseItem;