import { useContext, useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import AuthContext from "../store/AuthProvider";
const UpdateProfile = () => {
  const authContext = useContext(AuthContext);
  const token = authContext.idToken;
  const [profileObj, setProfileObj] = useState({
    username: "",
    photoUrl: "",
  });
  useEffect(() => {
    async function getUserProfileFromFirebase() {
      const res = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyDehsjS-i9vFZpBlJJXD-9fd0v-_UMtC6M",
        {
          method: "POST",
          body: JSON.stringify({
            idToken: token,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await res.json();
      // console.log(data);
      if (res.ok) {
        setProfileObj({
          username: data.users[0].displayName,
          photoUrl: data.users[0].photoUrl,
        });
      } else {
        alert("Firebase Get Profile : " + data.error.message);
      }
    }
    getUserProfileFromFirebase();
  }, []);
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
          idToken: token,
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
    // console.log(data);
    if (res.ok) {
      console.log("updated");
    } else {
      alert("Firebase UpdateProfile : " + data.error.message);
    }
  }

  async function profileEmailVerifyHandler() {
    const res = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyDehsjS-i9vFZpBlJJXD-9fd0v-_UMtC6M",
      {
        method: "POST",
        body: JSON.stringify({
          idToken: localStorage.getItem("idToken"),
          requestType: "VERIFY_EMAIL",
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await res.json();
    // console.log(data);
    if (res.ok) {
      console.log("verified :", data.email);
    } else {
      alert("Firebase Email Verify : " + data.error.message);
    }
  }
  return (
    <div>
      <Form onSubmit={userUpdateProfileFormHandler}>
        <Form.Group controlId="signInEmail">
          <Form.Label>Username :</Form.Label>
          <Form.Control
            type="text"
            name="username"
            placeholder="Enter username"
            defaultValue={profileObj.username}
            required
          />
        </Form.Group>
        <Form.Group controlId="signInPassword">
          <Form.Label>Profile Photo URL :</Form.Label>
          <Form.Control
            type="url"
            name="photoUrl"
            placeholder="Enter photo url"
            defaultValue={profileObj.photoUrl}
            required
          />
        </Form.Group>
        <Button type="submit">Update Profile</Button>
      </Form>
      <br />
      <Button onClick={profileEmailVerifyHandler}>Verify Email</Button>
    </div>
  );
};
export default UpdateProfile;
