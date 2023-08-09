import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
// https://images.app.goo.gl/mH1DUpesEVmgHJAZ7
const UpdateProfile = () => {
  const navigate = useNavigate();
  function userUpdateProfileFormHandler(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formObj = {};
    for (const [name, value] of formData.entries()) {
      formObj[name] = value;
    }
    firebaseUpdateProfileHandler(formObj.username, formObj.photoUrl);
  }

  async function firebaseUpdateProfileHandler(username, photoUrl) {
    const res = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDehsjS-i9vFZpBlJJXD-9fd0v-_UMtC6M",
      {
        method: "POST",
        body: JSON.stringify({
          idToken: localStorage.getItem("userIdToken"),
          displayName: username,
          photoUrl: photoUrl,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await res.json();
    console.log(data);
    if (res.ok) {
      console.log("updated");
    } else {
      alert("Firebase UpdateProfile : " + data.error.message);
    }
  }
  return (
    <Form onSubmit={userUpdateProfileFormHandler}>
      <Form.Group controlId="signInEmail">
        <Form.Label>Username :</Form.Label>
        <Form.Control
          type="text"
          name="username"
          placeholder="Enter username"
          required
        />
      </Form.Group>
      <Form.Group controlId="signInPassword">
        <Form.Label>Profile Photo URL :</Form.Label>
        <Form.Control
          type="url"
          name="photoUrl"
          placeholder="Enter photo url"
          required
        />
      </Form.Group>
      <Button type="submit">Update Profile</Button>
    </Form>
  );
};
export default UpdateProfile;
