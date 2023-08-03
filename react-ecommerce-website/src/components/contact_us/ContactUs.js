import { useEffect } from "react";

const ContactUs = () => {
  async function a() {
    const res = await fetch(
        "https://sharpener-ecommerece-website-default-rtdb.firebaseio.com/users.json"
    );
    const data = await res.json();
    for(const obj in data)
    console.log(data[obj]);
  }
  a();
  function contactFormSubmitHandler(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const user = {};
    for (const [name, value] of formData.entries()) {
      user[name] = value;
    }
    addDataToFireBase(user);
  }

  async function addDataToFireBase(user) {
    const id = await fetch(
      "https://sharpener-ecommerece-website-default-rtdb.firebaseio.com/users.json",
      {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
 
  }

  return (
    <form onSubmit={contactFormSubmitHandler}>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" />
      <label htmlFor="email">E-mail:</label>
      <input type="email" id="email" name="email" />
      <label htmlFor="phone">Phone:</label>
      <input type="number" id="phone" name="phone" />
      <button type="submit">Send</button>
    </form>
  );
};
export default ContactUs;
