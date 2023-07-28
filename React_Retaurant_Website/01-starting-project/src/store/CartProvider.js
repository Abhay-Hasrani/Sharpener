import { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const [cartContext, updateCartContext] = useState({
    items: [],
    totalItems: 0,
    totalAmount: 0,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  });

  function addItemHandler(item) {
    const id = item.id;
    updateCartContext((prev) => {
      const index = prev.items.findIndex((mItem) => mItem.id === id);
      if (index === -1) {
        prev.items.push(item);
      } else {
        prev.items[index].quantity += item.quantity;
      }
      prev.totalItems += item.quantity;
      prev.totalAmount += item.quantity * item.price;
      return { ...prev };
    });
  }

  function removeItemHandler(id) {
    updateCartContext((prev) => {
      const index = prev.items.findIndex((mItem) => mItem.id === id);
      if (index === -1) {
        alert("item is not present");
        return;
      }
      const item = prev.items[index];
      prev.totalItems += item.quantity;
      prev.totalAmount -= item.quantity * item.price;
      prev.items.splice(index,1);
      return { ...prev };
    });
  }

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartProvider;
