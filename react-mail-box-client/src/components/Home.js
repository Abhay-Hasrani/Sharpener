import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getMailsFromFirebase } from "../store/MailReducer";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMailsFromFirebase());
  }, [dispatch]);
  return <div>Welcome to your mail box</div>;
};
export default Home;
