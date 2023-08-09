const ExpenseListItem = (props)=>{
    return <div className="bg-success">
        ₹‎{props.amount} : {props.type} -  {props.description};
    </div>
}
export default ExpenseListItem;