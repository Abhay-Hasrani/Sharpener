import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMailsFromFirebase } from "../../store/MailReducer";
import MailListItem from "./MailListItem";
import { useLocation } from "react-router-dom";

const AllMails = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const userMails = useSelector((state) => state.mail.userMails);
  const userSentMails = useSelector((state) => state.mail.userSentMails);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetch = () => {
      console.log("fetching...");
      dispatch(getMailsFromFirebase());
    };
    fetch();
    const intervalId = setInterval(fetch, 5000);
    return () => {
      clearInterval(intervalId);
    };
  }, [dispatch]);
  const mails = pathname === "/allmails" ? userMails : userSentMails;
  const mailList = mails.map((item) => {
    return <MailListItem key={item.emailFrom + item.subject} {...item} />;
  });
  return <ul>{mailList}</ul>;
};
export default AllMails;
