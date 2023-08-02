import { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const [cartContextValue, updateCartContextValue] = useState({
    items: [],
    totalItems: 0,
    totalAmount: 0,
    addItemToCart: addItemToCartHandler,
    updateItemInCart: updateItemInCartHandler,
    removeItemFromCart: removeItemFromCartHandler,
  });
  function addItemToCartHandler(item){
    const id = item.id;
    updateCartContextValue((prevItems) => {
      const index = prevItems.items.findIndex((mItem) => mItem.id === id);
      if (index === -1) prevItems.items.push(item);
      else prevItems.items[index].quantity += item.quantity;
      prevItems.totalItems += item.quantity;
      prevItems.totalAmount += item.price * item.quantity;
      return {...prevItems};
    });
  };
  function updateItemInCartHandler(id){
    updateCartContextValue((prevItems) => {
      return prevItems;
    });
  };
  function removeItemFromCartHandler(id){
    updateCartContextValue((prevItems) => {
      return prevItems;
    });
  };
  return (
    <CartContext.Provider value={cartContextValue}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartProvider;
