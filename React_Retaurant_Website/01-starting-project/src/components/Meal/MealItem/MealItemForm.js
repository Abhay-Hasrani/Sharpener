import { useContext } from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";
import CartContext from "../../../store/cart-context";
const MealItemForm = (props) => {
  const cartCtx = useContext(CartContext);
  function addItemToCartHandler(e) {
    e.preventDefault();
    // console.log("form submitted")
    const quantity =  (+document.getElementById("amount" + props.id).value);
    console.log(quantity+"", )
    cartCtx.addItem({ ...props.item, quantity: quantity });
  }
  return (
    <form onSubmit={addItemToCartHandler} className={classes.form}>
      <Input
        label="Amount"
        input={{
          id: "amount" + props.id,
          type: "number",
          max: "5",
          min: "1",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button type="submit">Add</button>
    </form>
  );
};
export default MealItemForm;
