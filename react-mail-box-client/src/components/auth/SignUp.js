import { Button, FloatingLabel, Form } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./auth.css";
const SignUp = () => {
  function userSignUpFormHandler(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formObj = {};
    for (const [name, value] of formData.entries()) {
      formObj[name] = value;
    }
    const enteredEmail = formObj.email;
    const enteredPass = formObj.password;
    const enteredConfirmPass = formObj.confirmPassword;
    if (enteredPass !== enteredConfirmPass) {
      alert("Password didnt match");
    } else {
      firebaseSignUpHandler(enteredEmail, enteredPass);
    }
  }

  async function firebaseSignUpHandler(email, password) {
    try {
      const res = await fetch(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.REACT_APP_FIREBASE_API_KEY}`,
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
        console.log(data);
        alert("Account Created Successfully!! PleaseLogIn!!");
      } else {
        throw new Error(data.error.message);
      }
    } catch (error) {
      alert("FireBaseSignUp : " + error.message);
    }
  }
  return (
    <div className="form-div">
      <Form onSubmit={userSignUpFormHandler} className="form">
        <FloatingLabel
          controlId="signUpEmail"
          label="Enter email"
          className="floatinglabel"
        >
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            required
          />
        </FloatingLabel>
        <FloatingLabel
          controlId="signUpPassword"
          label="Enter Password"
          className="floatinglabel"
        >
          <Form.Control
            type="password"
            name="password"
            placeholder="Enter Password"
            required
          />
          <Form.Text className="text-muted control-text">
            Atleast 6 characters , for strong password one UpperCase (A,B,...) ,
            one LowerCase (a,b,...) , one specialCharacter (@,$,...)
          </Form.Text>
        </FloatingLabel>
        <FloatingLabel
          controlId="signUpConfirmPassword"
          label="Confirm Password"
          className="floatinglabel"
        >
          <Form.Control
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            required
          />
        </FloatingLabel>
        <Button type="submit" className="button">
          Sign Up
        </Button>
        <NavLink to="/home" className="navlink">
          Already a User? Sign In!
        </NavLink>
      </Form>
    </div>
  );
};
export default SignUp;
