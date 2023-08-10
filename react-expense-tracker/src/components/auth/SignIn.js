import { useContext } from "react";
import { Button, Form } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import AuthContext from "../../store/AuthProvider";

const SignIn = () => {
    const navigate = useNavigate();
    const authCtx = useContext(AuthContext);
  function userSignInFormHandler(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formObj = {};
    for (const [name, value] of formData.entries()) {
      formObj[name] = value;
    }
    const enteredEmail = formObj.email;
    const enteredPass = formObj.password;
    firebaseSignInHandler(enteredEmail, enteredPass);
  }

  async function firebaseSignInHandler(email, password) {
    const res = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDehsjS-i9vFZpBlJJXD-9fd0v-_UMtC6M",
      {
        method: "POST",
        body: JSON.stringify({
          email: email,
          password: password,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await res.json();
    // console.log(data);
    if (res.ok) {
      // localStorage.setItem("userIdToken", data.idToken);
      authCtx.setIdToken(data.idToken);
      navigate('/welcome');
    } else {
      alert("Firebase SignIn : " + data.error.message);
    }
  }
  return (
    <div>
    <Form onSubmit={userSignInFormHandler}>
      <Form.Group controlId="signInEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          name="email"
          placeholder="Enter email"
          required
        />
      </Form.Group>
      <Form.Group controlId="signInPassword">
        <Form.Label>Password :</Form.Label>
        <Form.Control
          type="password"
          name="password"
          placeholder="Enter Password"
          required
        />
      </Form.Group>
      <Button type="submit">Sign In</Button>
    </Form>
    <NavLink to="/signUp">New User? Create a Account !!</NavLink><br/>
    <NavLink to="/forgotPassword">Forgot Password</NavLink>
    </div>
  );
};
export default SignIn;
