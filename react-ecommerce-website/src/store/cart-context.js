import React from "react";

const CartContext = React.createContext({
    items:[],
    totalItems:0,
    totalAmount:0,
    addItemToCart:(item)=>{},
    updateItemInCart:(id)=>{},
    removeItemFromCart:(id)=>{}
});
export default CartContext;