import { useSelector, useDispatch, connect } from "react-redux";
import classes from "./Counter.module.css";
import { Component } from "react";

/*
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
*/

class Counter extends Component {
  incrementHandler() {
    this.props.increment();
  }

  decrementHandler() {
    this.props.decrement();
  }

  toggleCounterHandler() {}

  render() {
    return (
      <main className={classes.counter}>
        <h1>Redux Counter</h1>
        <div className={classes.value}>{this.props.counter}</div>
        <div>
          <button onClick={this.incrementHandler.bind(this)}>Increment</button>
          <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
        </div>
        <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
      </main>
    );
  }
}

//connect will return a new function as a value, which we then execute again, and then we pass out component to that returned function as our argument.
//connect will take two arguments and both are functions
//first function maps redux state to props, which will be recieved by this Counter component then.
//it will return an object where keys will be returned as props in the receiving component.(counter component)
//Values of those keys are the logic drilling into the redux state.
const mapStateToProps = (state) => {
  return {
    counter: state.counter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch({ type: "increment" }),
    decrement: () => dispatch({ type: "decrement" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
