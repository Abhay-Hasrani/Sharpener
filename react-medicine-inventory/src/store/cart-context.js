import React from "react";
const CartContext = React.createContext({
  items: [],
  totalItems: 0,
  totalAmount: 0,
  addItemToCart: (item) => {},
  updateCartItemQuantity:(id,amount)=>{}
});
export default CartContext;
