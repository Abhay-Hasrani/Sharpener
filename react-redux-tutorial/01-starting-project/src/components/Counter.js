import { useDispatch, useSelector } from "react-redux";
import classes from "./Counter.module.css";
import { counterActions } from "../store/myredux";

const Counter = () => {
  const { counter, showCounter } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const incrementClickHandler = () => {
    dispatch(counterActions.increment());
  };
  const decrementClickHandler = () => {
    dispatch(counterActions.decrement());
  };
  const increaseClickHandler = () => {
    dispatch(counterActions.increase(10));
  };
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}

      <button onClick={incrementClickHandler}>IncrementBy5</button>
      <button onClick={decrementClickHandler}>DecrementBy5</button>
      <button onClick={increaseClickHandler}>Increase</button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
