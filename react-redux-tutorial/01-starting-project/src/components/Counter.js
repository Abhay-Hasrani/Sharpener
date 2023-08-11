import { useDispatch, useSelector } from "react-redux";
import classes from "./Counter.module.css";

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const toggleCounterHandler = () => {};
  const incrementClickHandler = () => {
    dispatch({ type: "increment5" });
  };
  const decrementClickHandler = () => {
    dispatch({ type: "decrement5" });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>

      <button onClick={incrementClickHandler}>IncrementBy5</button>
      <button onClick={decrementClickHandler}>DecrementBy5</button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
