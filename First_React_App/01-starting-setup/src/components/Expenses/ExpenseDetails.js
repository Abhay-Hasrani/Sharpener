import "./ExpenseItem.css"
const ExpenseDetails=(props)=> {
  return (
    <div style={{width : "100%",padding : 10}}>
      <div> : {props.location}</div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">Rs {props.amount}</div>
      </div>
    </div>
  );
}
export default ExpenseDetails;