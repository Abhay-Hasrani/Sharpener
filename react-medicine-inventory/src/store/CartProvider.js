import { useState } from "react";
import CartContext from "./cart-context";
const CartProvider = (props) => {
    const [cartContext, updateCartContext] = useState({
      items: [],
      totalItems: 0,
      totalAmount: 0,
      addItemToCart: addItemHandler,
      //removeItem: removeItemHandler,
      updateCartItemQuantity: updateItemQuantityHandler,
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
    return (
        <CartContext.Provider value={cartContext}>
          {props.children}
        </CartContext.Provider>
      );
    };
    export default CartProvider;
