import React, { useEffect, useReducer, useState } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState("");
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);


  const[emailState,emailDispatch] = useReducer(emailReducer,{value:'',isValid:null});
  function emailReducer(state,action){
      if(action.type==="USER_INPUT"){
          return {value : action.val,isValid: action.val.includes("@")}
      }
      if(action.type==="USER_INPUT_BLUR"){
        return {value : state.value,isValid: state.value.includes("@")}
    }
    return {value:'',isValid:false};
  }

  const[passwordState,passwordDispatch] = useReducer(passwordReducer,{value:'',isValid:null});
  function passwordReducer(state,action){
      if(action.type==="USER_INPUT"){
          return {value : action.val,isValid: action.val.trim().length > 6}
      }
      if(action.type==="USER_INPUT_BLUR"){
        return {value : state.value,isValid: state.value.trim().length > 6}
    }
    return {value:'',isValid:false};
  }
  // useEffect(() => {
  //   const timeoutId = setTimeout(() => {
  //     setFormIsValid(
  //       enteredEmail.includes("@") && enteredPassword.trim().length > 6
  //     );
  //   }, 500);
  //   return () => {
  //     clearTimeout(timeoutId);
  //   };
  // }, [enteredEmail, enteredPassword]);

  const emailChangeHandler = (event) => {
    emailDispatch({type : "USER_INPUT",val : event.target.value});  
    setFormIsValid(
      emailState.isValid && passwordState.isValid
    );
  };

  const passwordChangeHandler = (event) => {
    passwordDispatch({type : "USER_INPUT",val : event.target.value});  
    setFormIsValid(
      emailState.isValid && passwordState.isValid
    );
  };

  const validateEmailHandler = () => {
    emailDispatch({type : "USER_INPUT_BLUR"});  
  };

  const validatePasswordHandler = () => {
    passwordDispatch({type : "USER_INPUT_BLUR"});  
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.value, passwordState.value);
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
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordState.isValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
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
