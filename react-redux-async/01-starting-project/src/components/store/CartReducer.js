import { createSlice } from "@reduxjs/toolkit";

const initialState = { cartitems: [], showCart: false };
const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCartItem(state, action) {
      // console.log(action.payload);
      const { id, quantity } = action.payload;
      const index = state.cartitems.findIndex((item) => item.id === id);
      state.cartitems.push(action.payload);
      // if (index === -1) 
      // else {
      //   state.cartitems[index] += quantity;
      //   console.log(state.cartitems[index]);
      // }
    },
    updateCartItemQuantity(state, action) {
      const { id, quantity } = action.payload;
      const index = state.cartitems.findIndex((item) => item.id === id);
      if (index === -1) alert("item not present");
      else {
        state.cartitems[index] += quantity;
      }
    },
    toggleCartVisibility(state) {
      state.showCart = !state.showCart;
    },
  },
});
export const cartActions = CartSlice.actions;
export default CartSlice.reducer;
