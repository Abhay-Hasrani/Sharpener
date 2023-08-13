import { createSlice } from "@reduxjs/toolkit";

const initialState = { cartitems: [], showCart: false };
const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCartItem(state, action) {
      // console.log(action.payload);
      const { id, quantity } = action.payload;
      const cartitem = state.cartitems.find((item) => item.id === id);

      if (!cartitem) state.cartitems.push(action.payload);
      else {
        cartitem.quantity += quantity;
        cartitem.total += quantity * cartitem.price;
      }
    },
    updateCartItemQuantity(state, action) {
      const { id, numberOfItems } = action.payload;
      const index = state.cartitems.findIndex((item) => item.id === id);
      const cartitem = state.cartitems[index];
      if (!cartitem) alert("item not present");
      else {
        cartitem.quantity += numberOfItems;
        cartitem.total += numberOfItems * cartitem.price;
        if (cartitem.quantity === 0) {
          state.cartitems.splice(index, 1);
        }
      }
    },
    toggleCartVisibility(state) {
      state.showCart = !state.showCart;
    },
  },
});
export const cartActions = CartSlice.actions;
export default CartSlice.reducer;
