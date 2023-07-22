import { useState } from "react";
import "./MyModal.css";
const MyModal = (props) => {
  return (props.isOpen &&
    <div className="modal-overlay">
    <div className="modal">
      <div className="modal-content">
        <h1>Invalid input</h1>
        <p>{props.hintMessage}</p>
       <button onClick={props.closeModal}>Okay</button> 
      </div>
    </div>
    </div>
  );
};
export default MyModal;
