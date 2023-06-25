import { useSelector, useDispatch } from "react-redux";
import classes from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch();

  //The function will get access to our store using useSelector();
  //We need to pass a function to useSelector -it will be executed by react-Redux
  //This function will decide which piece of data we want to extract from our store.
  //the passed function here will recieve a state managed by redux and then we return part of the state which we want to extract
  const counter = useSelector((state) => state.counter);
  //when we use "useSelector" - react redux will automatically set up a subscription to the Redux store for this component.
  //any change will trigger it - which brings the latest state.

  //increment and decrement handler function using the dispatch function
  const incrementHandler = () => {
    //the identifiers should be exactly what was passed inside the conditional state in the reducer function in the "store/index.js". (no typos!)
    dispatch({ type: "increment" });
  };

  const decrementHandler = () => {
    dispatch({ type: "decrement" });
  };

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
