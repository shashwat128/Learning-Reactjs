import { createStore } from "redux";

//existing state as the first argument, asction dispatched as second
//state given default value, so that when the reducer is executed for the first time, we have an initial state.
const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return { counter: state.counter + 1 };
  }

  if (action.type === "increase") {
    return { counter: state.counter + action.amount };
  }

  if (action.type === "decrement") {
    return { counter: state.counter - 1 };
  }

  return state;
};

//central data (state) store
//create store wants a pointer at a resucer function as a parametre.
const store = createStore(counterReducer);

export default store;
