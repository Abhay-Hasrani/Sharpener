import { useDispatch } from "react-redux";
import classes from "./CartItem.module.css";
import { cartActions } from "../store/CartReducer";

const CartItem = (props) => {
  const { title, total, quantity, price, id } = props.item;
  const dispatch = useDispatch();
  const cartItemQuantityClickHandler = (numberOfItems) => {
    dispatch(
      cartActions.updateCartItemQuantity({
        id: id,
        numberOfItems: numberOfItems,
      })
    );
  };
  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={() => cartItemQuantityClickHandler(-1)}>-</button>
          <button onClick={() => cartItemQuantityClickHandler(+1)}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
