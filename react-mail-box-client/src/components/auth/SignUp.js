import { Button, Form } from "react-bootstrap";

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
    <Form onSubmit={userSignUpFormHandler}>
      <Form.Group controlId="signUpEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          name="email"
          placeholder="Enter email"
          required
        />
      </Form.Group>
      <Form.Group controlId="signUpPassword">
        <Form.Label>Password :</Form.Label>
        <Form.Control
          type="password"
          name="password"
          placeholder="Enter Password"
          required
        />
        <Form.Text className="text-muted">
          Atleast 6 characters , for strong password one UpperCase (A,B,...) ,
          one LowerCase (a,b,...) , one specialCharacter (@,$,...)
        </Form.Text>
      </Form.Group>
      <Form.Group controlId="signUpConfirmPassword">
        <Form.Label>Confirm Password :</Form.Label>
        <Form.Control
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          required
        />
      </Form.Group>
      <Button type="submit">Sign Up</Button>
    </Form>
  );
};
export default SignUp;
