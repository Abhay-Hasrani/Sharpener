import { useDispatch, useSelector } from "react-redux";
import classes from "./CartButton.module.css";
import { cartActions } from "../store/CartReducer";

const CartButton = (props) => {
  const numberOfItems = useSelector((state) => state.cart.cartitems.length);
  const dispatch = useDispatch();
  return (
    <button
      className={classes.button}
      onClick={() => dispatch(cartActions.toggleCartVisibility())}
    >
      <span>My Cart</span>
      <span className={classes.badge}>{numberOfItems}</span>
    </button>
  );
};

export default CartButton;
