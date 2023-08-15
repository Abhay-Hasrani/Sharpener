import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AllMails = () => {
  const [userMails, setUserMails] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    async function getMailsFromFirebase() {
      try {
        const res = await fetch(
          `https://react-blog-deploy-4f574-default-rtdb.firebaseio.com/${localStorage.getItem(
            "email"
          )}.json`
        );

        const data = await res.json();
        if (res.ok) {
          setUserMails((prev) => {
            const newMails = [];
            for (const emailObj in data) newMails.push(data[emailObj]);
            return newMails;
          });
        } else {
          throw new Error(data.error);
        }
      } catch (error) {
        alert("FireBaseSignIn : " + error.message);
      }
    }
    getMailsFromFirebase();
  }, []);
  //   console.log((userMails));
  const mailList = userMails.map((item) => {
    return (
      <li
        key={item.emailFrom+item.subject}
        onClick={() => {
          navigate("expandedmail", { state: { data: item } });
        }}
      >
        From : {item.emailFrom} <br />
        Subject : {item.subject}
      </li>
    );
  });
  return <ul>{mailList}</ul>;
};
export default AllMails;
