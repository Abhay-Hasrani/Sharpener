import { useContext } from "react";
import CartContext from "../../store/cart-context";
import MedicineContext from "../../store/medicine-context";

const CartItem = (props) => {
  const cartCtx = useContext(CartContext);
  const medicineCtx = useContext(MedicineContext);

  function onPlusClickHandler(e) {
    if (medicineCtx.isInStock(props.item.id)) {
      cartCtx.updateCartItemQuantity(props.item.id, 1);
      medicineCtx.updateMedicineQuantity(props.item.id, -1);
    } else {
      console.log("out of stock");
    }
  }
  function onMinusClickHandler(e) {
    medicineCtx.updateMedicineQuantity(props.item.id, +1);
    cartCtx.updateCartItemQuantity(props.item.id, -1);
  }
  return (
    <li>
      <span>{props.item.name + " "}</span>
      <span>{props.item.description + " "}</span>
      <span>{"₹" + props.item.price + " "}</span>
      <span>{props.item.quantity + " "}</span>
      <button onClick={onPlusClickHandler}>" +1 "</button>
      <button onClick={onMinusClickHandler}>" -1 "</button>
    </li>
  );
};
export default CartItem;
