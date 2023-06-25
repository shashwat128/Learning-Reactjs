import { useSelector } from "react-redux";
import classes from "./Counter.module.css";

const Counter = () => {
  //The function will get access to our store using useSelector();
  //We need to pass a function to useSelector -it will be executed by react-Redux
  //This function will decide which piece of data we want to extract from our store.
  //the passed function here will recieve a state managed by redux and then we return part of the state which we want to extract
  const counter = useSelector((state) => state.counter);
  //when we use "useSelector" - react redux will automatically set up a subscription to the Redux store for this component.
  //any change will trigger it - which brings the latest state.

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
