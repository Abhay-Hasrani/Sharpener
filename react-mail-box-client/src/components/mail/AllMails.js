import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMailsFromFirebase } from "../../store/MailReducer";
import MailListItem from "./MailListItem";

const AllMails = () => {
  const userMails = useSelector((state) => state.mail.userMails);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMailsFromFirebase());
  }, [dispatch]);


  const mailList = userMails.map((item) => {
    return <MailListItem key={item.emailFrom + item.subject} {...item} />;
  });
  return <ul>{mailList}</ul>;
};
export default AllMails;
