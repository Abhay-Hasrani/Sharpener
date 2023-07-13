const ExpenseForm = () => {
    function changeHandler(e){
        console.log(e.target.value);
    }

    return (
        <form>
            <label>Expense Description: </label>
            <input onChange={changeHandler} type="text" id="title"/><br/>
            <label>Expense Amount: </label>
            <input onChange={changeHandler} type="number" id="amount"/><br/>
            <label>Expense Date: </label>
            <input onChange={changeHandler} type="date" id="date"/>
        </form>
    );
}
export default ExpenseForm;