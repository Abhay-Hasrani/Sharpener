import { useRef, useState } from "react";
import { Button, FormControl, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { expenseActions } from "../../store/ExpenseReducer";
// import ExpenseContext from "../../store/ExpenseProvider";

const ExpenseListItem = (props) => {
  const [showModal, setShowModal] = useState(false);
  // const expenseCtx = useContext(ExpenseContext);
  const dispatch = useDispatch();
  const amountRef = useRef();
  const typeRef = useRef();
  const descriptionRef = useRef();
  function deleteExpenseClickHandler(e) {
    // expenseCtx.deleteExpense(props.id);
    dispatch(expenseActions.deleteExpense(props.id));
  }
  function updateExpenseHandler() {
    // expenseCtx.editExpense(props.id, {
    //   amount: amountRef.current.value,
    //   type: typeRef.current.value,
    //   description: descriptionRef.current.value,
    // });
    dispatch(
      expenseActions.editExpense({
        id: props.id,
        expense: {
          amount: amountRef.current.value,
          type: typeRef.current.value,
          description: descriptionRef.current.value,
        },
      })
    );
    setShowModal(false);
  }
  return (
    <div>
      ₹‎{props.amount} : {props.type} - {props.description};
      <Button variant="danger" onClick={deleteExpenseClickHandler}>
        Delete
      </Button>
      <Button
        variant="success"
        onClick={() => {
          setShowModal(true);
        }}
      >
        Edit
      </Button>
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Expense</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormControl
            type="number"
            min={0}
            name="amount"
            placeholder="Enter new amount here"
            ref={amountRef}
            defaultValue={props.amount}
            required
          />
          <FormControl
            type="text"
            name="description"
            placeholder="Enter new description here"
            ref={descriptionRef}
            defaultValue={props.description}
            required
          />
          <FormControl
            as="select"
            name="type"
            ref={typeRef}
            defaultValue={props.type}
            required
          >
            <option>Others</option>
            <option>Food</option>
            <option>Fuel</option>
            <option>Shopping</option>
            <option>Bills</option>
          </FormControl>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={updateExpenseHandler}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
export default ExpenseListItem;
