import { useNavigate } from "react-router-dom";
import {
  deleteMailFromFirebase,
  updateReadStatusInFirebase,
} from "../../store/MailReducer";
import { useDispatch } from "react-redux";
import { Button } from "react-bootstrap";

const MailListItem = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function mailDeleteHandler(e) {
    e.stopPropagation();
    dispatch(deleteMailFromFirebase(props));
    e.target.parentNode.remove();
  }
  return (
    <li
      onClick={() => {
        navigate("expandedmail", { state: { data: props } });
        if (!props.read)
          dispatch(updateReadStatusInFirebase({ ...props }, true));
      }}
    >
      From : {props.emailFrom}
      {" , "}Subject : {props.subject}
      {!props.read && <span className="fw-bolder fs-1"> · </span>}
      <Button variant="danger" onClick={mailDeleteHandler}>
        Delete
      </Button>
    </li>
  );
};
export default MailListItem;
