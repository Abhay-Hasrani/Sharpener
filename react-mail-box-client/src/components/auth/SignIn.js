import { Button, Form } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authActions } from "../../store/AuthReducer";
const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
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
    try {
      const res = await fetch(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.REACT_APP_FIREBASE_API_KEY}`,
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
      if (res.ok) {
        dispatch(authActions.setIdToken(data.idToken));
        localStorage.setItem("email", data.email);
        navigate("/home");
      } else {
        throw new Error(data.error.message);
      }
    } catch (error) {
      alert("FireBaseSignIn : " + error.message);
    }
  }
  return (
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
      <NavLink to="/signup">Dont have account? Create one!</NavLink>
    </Form>
  );
};
export const formatEmailForPath = (email) => {
  return email.replace(/[.@]/g, "");
};
export default SignIn;
