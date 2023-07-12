import "./ExpenseItem.css"
function ExpenseItem(){
    return (
    <div className="expense-item">
    <div>July 12th 2023</div>
    <div className="expense-item__description">
        <h2>Food</h2>
        <div className="expense-item__price">Rs 10</div>
        <h2>Petrol</h2>
        <div className="expense-item__price">Rs 100</div>
        <h2>Movies</h2>
        <div className="expense-item__price">Rs 200</div>
    </div>
    </div>
    );
}
export default ExpenseItem;