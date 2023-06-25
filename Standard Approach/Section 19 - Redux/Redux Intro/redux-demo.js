const redux = require("redux");

// reducer function
const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  }

  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }
  return;
};

// the one central data store
const store = redux.createStore(counterReducer);

//Subscriber.
//Subscriber function - this will hold the function which does not get any parameter.
const counterSubscriber = () => {
  const latestState = store.getState(); //gives latest state snapshot after update.
  console.log(latestState);
};
//the function above and below both will be executed by redux.
store.subscribe(counterSubscriber);

// create and dispatch an action
//action - javascript object with a type property acts as identifier
store.dispatch({ type: "increment" });
store.dispatch({ type: "decrement" });
