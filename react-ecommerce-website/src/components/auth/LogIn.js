import { useContext, useEffect, useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import LoadingIndicator from "../UI/LoadingIndicator";
import AuthContext from "../../store/AuthProvider";
import { useNavigate } from "react-router-dom";
function Auth() {
  const emailRef = useRef();
  const passRef = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();
  const isLoggedIn = authCtx.idToken!=null;
  useEffect(()=>{
    if(isLoggedIn) authCtx.setIdToken(null);
  },[]);
  async function authFormSubmitHandler(e) {
    e.preventDefault();
    setIsLoading(true);
    const enteredEmail = emailRef.current.value;
    const enteredPassword = passRef.current.value;
    const url =
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDw5CCDQ6E-9CjH3S4RnAR1LHpPmIEt_ao";

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
      console.log("IDToken = ", data.idToken);
      authCtx.setIdToken(data.idToken);
      navigate("/store");
    } else {
      let errorMessage = "Authentication Failed";
      if (data && data.error && data.error.message)
        errorMessage = data.error.message;
      alert(errorMessage);
    }
  }

  return (
    <Form className="m-3" onSubmit={authFormSubmitHandler}>
      <Form.Group className="mb-3 w-50" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3 w-50" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control ref={passRef} type="password" placeholder="Password" />
        <Form.Text className="text-muted">
          Password Must be atleast 6 characters
        </Form.Text>
      </Form.Group>
      {isLoading && <LoadingIndicator />}
      {!isLoading && (
        <Button variant="primary" type="submit">
          LogIn
        </Button>
      )}
    </Form>
  );
}

export default Auth;
