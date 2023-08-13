import { useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const items = useSelector((state) => state.cart.cartitems);
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {items.map((itemObj) => (
          <CartItem key={itemObj.title} item={{...itemObj}} />
        ))}
      </ul>
    </Card>
  );
};

export default Cart;
