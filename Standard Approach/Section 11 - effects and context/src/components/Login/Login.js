import React, { useState, useEffect, useReducer } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";

//we dont need any data generated inside of the component function thus it is outside component function
//outside of the scope of component function
const emailReducer = (state, action) => {
  //what we dispatch as action will be an object because we set it to in emailChangeHandler
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.includes("@") };
  }

  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.includes("@") };
  }

  //initial state
  return { value: "", isValid: false };
};
//all the data required by this function will be passed down when executed by React, automatically.

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState("");
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    //initial state for emailState snapshot
    value: "",
    isValid: null,
  });

  /*
  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log("Check");
      setFormIsValid(
        enteredEmail.includes("@") && enteredPassword.trim().length > 5
      );
    }, 500);

    return () => {
      console.log("clean");
      //clear last timer when new timer is set
      clearTimeout(identifier);
    };
  }, [enteredEmail, enteredPassword]);
  */

  const emailChangeHandler = (event) => {
    //the identifier will often be an object but could be any
    //object has some field that hold some identifier
    //convetnion of using type and all_caps
    dispatchEmail({ type: "USER_INPUT", val: event.target.value });

    setFormIsValid(
      event.target.value.includes("@") && enteredPassword.trim().length > 5
    );
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);

    setFormIsValid(
      emailState.isValid &&
        emailState.value.includes("@") &&
        event.target.value.trim().length > 5
    );
  };

  const validateEmailHandler = () => {
    // setEmailIsValid(emailState.isValid);
    dispatchEmail({ type: "INPUT_BLUR" });
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.vlaue, enteredPassword);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailState.isValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.vlaue}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordIsValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
