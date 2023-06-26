import { createStore } from "redux";
import { createSlice } from "@reduxjs/toolkit";

//existing state as the first argument, asction dispatched as second
//state given default value, so that when the reducer is executed for the first time, we have an initial state.

const initialState = { counter: 0, showCounter: true };

//Object as an argument.
createSlice({
  name: "counter", //identifier
  //all the methods inside reducer will be called by Redux and will automatically receive the current state
  initialState: initialState, //initial state
  reducers: {
    // we wont need action here because these mwthods will automatically be called depending on which action was triggered
    //We are allowed to mutate the state here
    //because redux toolkit internally uses another package "imgur", which detects codes like this and clino the existing state,  create a new state object, keep all the state which we are not editing, and override the state which we are editing in an immutable way
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    //for this we need extra data
    increase(state, action) {
      state.counter = state.counter + action.amount;
    },
    toggleCOunter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

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
