import { useContext } from "react";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

const Cart = () => {
  const cartCtx = useContext(CartContext);
  const totalAmount = cartCtx.totalAmount;
  const cartItemList = cartCtx.items.map((item) => (
    <CartItem key={item.id} item={item} />
  ));
  return (
    <div>
      <ul>{cartItemList}</ul>
      <div>Total Amount : ₹{totalAmount}</div>
    </div>
  );
};
export default Cart;
