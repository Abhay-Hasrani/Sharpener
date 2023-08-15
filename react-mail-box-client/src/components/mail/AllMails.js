import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  getMailsFromFirebase,
  updateReadStatusInFirebase,
} from "../../store/MailReducer";

const AllMails = () => {
  const userMails = useSelector((state) => state.mail.userMails);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMailsFromFirebase());
  }, [dispatch]);
  const mailList = userMails.map((item) => {
    return (
      <li
        key={item.emailFrom + item.subject}
        onClick={() => {
          navigate("expandedmail", { state: { data: item } });
          if(!item.read)
          dispatch(updateReadStatusInFirebase({ ...item }, true));
        }}
      >
        From : {item.emailFrom}
        {" , "}Subject : {item.subject}
        {!item.read && <span className="fw-bolder fs-1">·</span>}
      </li>
    );
  });
  return <ul>{mailList}</ul>;
};
export default AllMails;
