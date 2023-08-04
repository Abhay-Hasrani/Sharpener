import { useState, useRef, useContext } from "react";
import UserContext from "../../store/user-context";
import classes from "./AuthForm.module.css";
const AuthForm = () => {
  const userCtx = useContext(UserContext);
  const emailRef = useRef();
  const passRef = useRef();
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };
  const loadingElement = <h5>Please Wait ...</h5>;
  async function authFormSubmitHandler(e) {
    e.preventDefault();
    setIsLoading(true);
    const enteredEmail = emailRef.current.value;
    const enteredPassword = passRef.current.value;
    const url = isLogin
      ? "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDw5CCDQ6E-9CjH3S4RnAR1LHpPmIEt_ao"
      : "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDw5CCDQ6E-9CjH3S4RnAR1LHpPmIEt_ao";

    const res = await fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    setIsLoading(false);
    console.log(data);
    if (res.ok) {
      if (isLogin) {
        console.log("IDToken = ", data.idToken);
        userCtx.setIdToken(data.idToken);
      }
    } else {
      let errorMessage = "Authentication Failed";
      if (data && data.error && data.error.message)
        errorMessage = data.error.message;
      alert(errorMessage);
    }
  }
  return (
    <section className={classes.auth}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form onSubmit={authFormSubmitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input ref={emailRef} type="email" id="email" required />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input ref={passRef} type="password" id="password" required />
        </div>
        <div className={classes.actions}>
          {isLoading && loadingElement}
          {!isLoading && (
            <button>{isLogin ? "LogIn" : "Create Account"}</button>
          )}
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
