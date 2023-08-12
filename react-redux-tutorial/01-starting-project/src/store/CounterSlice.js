import { createSlice } from "@reduxjs/toolkit";

const initialState = { counter: 0, showCounter: true };
const CounterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.counter+=5;
    },
    decrement(state) {
      state.counter-=5;
    },
    increase(state, action) {
      state.counter += action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});
export default CounterSlice;
