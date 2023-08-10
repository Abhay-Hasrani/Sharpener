import { useContext } from "react";
import { Button, Form } from "react-bootstrap";
import ExpenseContext from "../../store/ExpenseProvider";

const ExpenseForm = () => {
  const expenseCtx = useContext(ExpenseContext);
  function expenseFormSubmitHandler(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const expenseObj = {};
    for (const [name, value] of formData.entries()) {
        expenseObj[name] = value;
    }
    expenseCtx.addExpense(expenseObj);
  }

  return (
    <Form onSubmit={expenseFormSubmitHandler}>
      <Form.Group controlId="expenseAmount">
        <Form.Label>Enter Amount Spent :</Form.Label>
        <Form.Control
          type="number"
          min={0}
          name="amount"
          placeholder="Enter amount spent here"
          required
        />
      </Form.Group>
      <Form.Group controlId="expenseDescription">
        <Form.Label>Enter Expense Description :</Form.Label>
        <Form.Control
          type="text"
          name="description"
          placeholder="Enter expense description here"
          required
        />
      </Form.Group>
      <Form.Group controlId="expenseType">
        <Form.Label>Enter Expense Description :</Form.Label>
        <Form.Control as="select" name="type" required>
            <option>Others</option>
            <option>Food</option>
            <option>Fuel</option>
            <option>Shopping</option>
            <option>Bills</option>
        </Form.Control>
      </Form.Group>
      <Button type="submit">Add Expense</Button>
    </Form>
  );
};
export default ExpenseForm;
