import { createStore } from "redux";

//existing state as the first argument, asction dispatched as second
//state given default value, so that when the reducer is executed for the first time, we have an initial state.

const initialState = { counter: 0, showCounter: true };
const counterReducer = (state = initialState, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
      showCounter: state.showCounter,
    };
  }

  if (action.type === "increase") {
    return {
      counter: state.counter + action.amount,
      showCounter: state.showCounter,

      //Never mutate the current state always override - could lead to unexpected bugs and side-effects (state get out of sync, and suddenly the UI is not reflecting your state)
      //state.counter++   --   XXX
    };
  }

  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
      showCounter: state.showCounter,
    };
  }

  if (action.type === "toggle") {
    return {
      showCounter: !state.showCounter,
      counter: state.counter,
    };
  }

  return state;
};

//central data (state) store
//create store wants a pointer at a resucer function as a parametre.
const store = createStore(counterReducer);

export default store;
