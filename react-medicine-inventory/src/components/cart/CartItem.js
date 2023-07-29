import { useContext } from "react";
import CartContext from "../../store/cart-context";

const CartItem = (props) => {
  const cartCtx = useContext(CartContext);
  function onPlusClickHandler(e) {
    cartCtx.updateCartItemQuantity(props.item.id, 1);
  }
  function onMinusClickHandler(e) {
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
