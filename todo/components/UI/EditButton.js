import { useRef, useState } from "react";
import classes from "./EditButton.module.css";
import { Button, Modal } from "react-bootstrap";
const EditButton = (props) => {
  const [show, setShow] = useState(false);
  const titleRef = useRef();
  const descriptionRef = useRef();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <button
        className={classes["edit-button"]}
        onClick={(e) => {
          e.stopPropagation();
          setShow(!show);
        }}
      >
        <svg className={classes["edit-svgIcon"]} viewBox="0 0 512 512">
          <path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"></path>
        </svg>
      </button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header className={classes["modal-header"]} closeButton>
          <Modal.Title>Edit the Todo</Modal.Title>
        </Modal.Header>
        <Modal.Body className={classes["modal-header"]}>
          <div className="d-flex flex-column">
            <input
              ref={titleRef}
              type="text"
              placeholder="Enter new title"
              defaultValue={props.title}
              className="mt-1 mb-1"
            />
            <textarea
              ref={descriptionRef}
              placeholder="Enter new description"
              defaultValue={props.description}
              className="mt-1 mb-1 "
            />
          </div>
        </Modal.Body>
        <Modal.Footer className={classes["modal-footer"]}>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default EditButton;
