import { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const [cartContext, updateCartContext] = useState({
    items: [],
    totalItems: 0,
    totalAmount: 0,
    addItem: addItemHandler,
    //removeItem: removeItemHandler,
    updateItemQuantity: updateItemQuantityHandler,
  });

  function updateItemQuantityHandler(id, amount) {
    updateCartContext((prev) => {
      const index = prev.items.findIndex((mItem) => mItem.id === id);
      prev.totalItems += amount;
      prev.totalAmount += amount * prev.items[index].price;
      if (prev.totalAmount < 0) prev.totalAmount = 0;
      if (prev.totalItems < 0) prev.totalItems = 0;
      if (prev.items[index].quantity === 1 && amount < 0) {
        prev.items.splice(index, 1);
        return { ...prev };
      }
      prev.items[index].quantity += amount;
      return { ...prev };
    });
  }

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

  // function removeItemHandler(id,index=-1) {
  //   updateCartContext((prev) => {
  //     if(index===-1) index = prev.items.findIndex((mItem) => mItem.id === id);
  //     else {
  //       prev.items = prev.items.splice(index,1);
  //       return { ...prev };
  //     }
  //     if (index === -1) {
  //       alert("item is not present");
  //       return { ...prev };
  //     }
  //     const item = prev.items[index];
  //     prev.totalItems += item.quantity;
  //     prev.totalAmount -= item.quantity * item.price;
  //     prev.items = prev.items.splice(index,1);
  //     return { ...prev };
  //   });
  // }

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartProvider;
