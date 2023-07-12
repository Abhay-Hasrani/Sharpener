import "./ExpenseItem.css"
function ExpenseItem(){
    const expenseDate = new Date();
    const expenseDescription = ["Food","Petrol","Movies"];
    const expensePrice = ["10","100","200"];
    const expenseLocation = "Bhandara, Maharashtra"
    return (
    <div className="expense-item">
    <div>{expenseDate.toISOString()}</div>
    <div>{expenseLocation}</div>
    <div className="expense-item__description">
        <h2>{expenseDescription[0]}</h2>
        <div className="expense-item__price">Rs {expensePrice[0]}</div>
        <h2>{expenseDescription[1]}</h2>
        <div className="expense-item__price">Rs {expensePrice[1]}</div>
        <h2>{expenseDescription[2]}</h2>
        <div className="expense-item__price">Rs {expensePrice[2]}</div>
    </div>
    </div>
    );
}
export default ExpenseItem;