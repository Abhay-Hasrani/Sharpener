import { useNavigate } from "react-router-dom";
import {
  deleteMailFromFirebase,
  updateReadStatusInFirebase,
} from "../../store/MailReducer";
import { useDispatch } from "react-redux";
import { Button } from "react-bootstrap";
import "./MailListItem.css";

const MailListItem = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const addSentClass = props.showDot?"sent":"";
  function mailDeleteHandler(e) {
    e.stopPropagation();
    dispatch(deleteMailFromFirebase(props));
    e.target.parentNode.remove();
  }
  return (
    <li
      className={props.read ? "listitem read" : "listitem unread"}
      onClick={() => {
        navigate("expandedmail", { state: { data: props } });
        if (!props.read)
          dispatch(updateReadStatusInFirebase({ ...props }, true));
      }}
    >
      <div>From : {props.emailFrom}</div>
      <div>Subject : {props.subject}</div>
      {/* {props.showDot && !props.read && <span className="fw-bolder fs-1"> · </span>} */}
      <Button variant="danger" onClick={mailDeleteHandler}>
        Delete
      </Button>
    </li>
  );
};
export default MailListItem;
