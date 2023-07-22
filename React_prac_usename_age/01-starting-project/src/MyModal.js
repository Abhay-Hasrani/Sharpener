import ReactDOM from "react-dom";
import "./MyModal.css";
const Modal = (props) => {
  return (
    props.isOpen && (
      <div className="modal-overlay" onClick={props.closeModal}>
        <div className="modal">
          <div className="modal-content">
            <h1>Invalid input</h1>
            <p>{props.hintMessage}</p>
            <button onClick={props.closeModal}>Okay</button> 
          </div>
        </div>
      </div>
    )
  );
};
const MyModal = (props) => {
  return <>{ReactDOM.createPortal(
        <Modal
          isOpen={props.isOpen}
          hintMessage={props.hintMessage}
          closeModal={props.closeModal}
        />,
        document.getElementById('modal-root')
      )}</>
};
export default MyModal;
