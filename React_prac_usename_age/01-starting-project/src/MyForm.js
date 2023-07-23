import { useRef, useState } from "react";
import MyModal from "./MyModal";
import "./MyForm.css";
import Card from "./Card";
const MyForm = (props) => {
  const [hint, setHint] = useState("");
  const [isModalOpen, setIsOpenModal] = useState(false);
  const userNameRef =  useRef();
  const ageRef =  useRef();
  const collegeNameRef =  useRef();
  function formSubmitHandler(e) {
    e.preventDefault();
    const userName = userNameRef.current.value;
    const userAge = ageRef.current.value;
    const collegeName = collegeNameRef.current.value;
    if (userName.trim().length === 0) {
      setHint("Please Enter a Valid Name (Non-Empty Values)");
      setIsOpenModal(true);
    }else if (userAge <= 0) {
      setHint("Age should be greater than 0 (>0)");
      setIsOpenModal(true);
    }else if (collegeName.trim().length === 0) {
      setHint("Please Enter a Valid College Name (Non-Empty Values)");
      setIsOpenModal(true);
    } else {
      props.userData(Math.random(), userName, userAge,collegeName);
      userNameRef.current.value='';
      ageRef.current.value='';
      collegeNameRef.current.value='';
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
        <input ref={userNameRef} type="text" />
        <label>Age (Years)</label>
        <input ref={ageRef} type="number" />
        <label>College Name</label>
        <input ref={collegeNameRef} type="text" />
        <button type="submit">Add User</button>
      </form>
    
    </Card>
  );
};

export default MyForm;
