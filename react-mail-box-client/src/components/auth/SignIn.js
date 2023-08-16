import { Button, FloatingLabel, Form } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authActions } from "../../store/AuthReducer";
import "./auth.css";
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
    <div className="form-div">
      <Form onSubmit={userSignInFormHandler} className="form">
        <FloatingLabel
          controlId="signInEmail"
          label="Email address"
          className="floatinglabel"
        >
          <Form.Control
            className="control"
            type="email"
            name="email"
            placeholder="Enter email"
            autoFocus
            required
          />
        </FloatingLabel>
        <FloatingLabel
          label="Enter Password"
          controlId="signInPassword"
          className="floatinglabel"
        >
          <Form.Control
            className="control"
            type="password"
            name="password"
            placeholder="Enter Password"
            required
          />
        </FloatingLabel>
        <Button type="submit" className="button">
          Sign In
        </Button>
        <NavLink className="navlink" to="/signup">
          Dont have account? Create one!
        </NavLink>
      </Form>
    </div>
  );
};
export const formatEmailForPath = (email) => {
  return email.replace(/[.@]/g, "");
};
export default SignIn;
