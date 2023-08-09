import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const navigate = useNavigate();
  function sendPasswordLinkEmailHandler(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formObj = {};
    for (const [name, value] of formData.entries()) {
      formObj[name] = value;
    }
    const enteredEmail = formObj.email;

    firebaseChangePasswordLink(enteredEmail);
  }

  async function firebaseChangePasswordLink(email) {
    const res = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyDehsjS-i9vFZpBlJJXD-9fd0v-_UMtC6M",
      {
        method: "POST",
        body: JSON.stringify({
          email: email,
          requestType: "PASSWORD_RESET",
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await res.json();
    // console.log(data);
    if (res.ok) {
      alert("Link Sent : Please Check Your Email");
      navigate("/signIn");
    } else {
      alert("Firebase SignIn : " + data.error.message);
    }
  }
  return (
    <Form onSubmit={sendPasswordLinkEmailHandler}>
      <Form.Group controlId="signInEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          name="email"
          placeholder="Enter email"
          required
        />
      </Form.Group>
      <Button type="submit">Send Link</Button>
    </Form>
  );
};
export default ForgotPassword;
