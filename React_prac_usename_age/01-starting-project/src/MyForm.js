import { useState } from "react";
import MyModal from "./MyModal";
import "./MyForm.css";
import Card from "./Card";
const MyForm = (props) => {
  const [hint, setHint] = useState("");
  const [isModalOpen, setIsOpenModal] = useState(false);

  function formSubmitHandler(e) {
    e.preventDefault();
    const userName = e.target[0].value;
    const userAge = e.target[1].value;
    if (userName.trim().length === 0) {
      setHint("Please Enter a Valid Name and Age (Non-Empty Values)");
      setIsOpenModal(true);
    } else if (userAge <= 0) {
      setHint("Age should be greater than 0 (>0)");
      setIsOpenModal(true);
    } else {
      props.userData(Math.random(), userName, userAge);
      e.target[0].value='';
      e.target[1].value='';
      // console.log(Math.random(), e.target[0].value, e.target[1].value);
    }
  }
  function closeModal() {
    setIsOpenModal(false);
  }
  return (<Card>
    
      <MyModal
        hintMessage={hint}
        isOpen={isModalOpen}
        closeModal={closeModal}
      />
      <form className="my-form" onSubmit={formSubmitHandler}>
        <label>Username</label>
        <input type="text" />
        <label>Age (Years)</label>
        <input type="number" />
        <button type="submit">Add User</button>
      </form>
    
    </Card>
  );
};

export default MyForm;
