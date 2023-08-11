import { createStore } from "redux";
function counterReducer(state = { counter: 0 }, action) {
  let count = state.counter;
  switch (action.type) {
    case "increment5":
      count = state.counter + 5;
      break;
    case "decrement5":
      count = state.counter - 5;
      break;
    default:
      count = state.counter;
  }
  return {
    counter: count,
  };
}
const store = createStore(counterReducer);

export default store;
