import { useState } from "react";
import UserContext from "./user-context";

const UserProvider = (props) => {

  const [userContext, setUserContext] = useState({
    //initialize it with local storage so refreshing doesnt log us out
    idToken: localStorage.getItem("idToken"),
    setIdToken: setIdTokenHandler,
  });
  function setIdTokenHandler(idToken) {
    setUserContext((prev)=>{
      localStorage.setItem("idToken",idToken);
      return {...prev,idToken:idToken};
    })
  }
  return (
    <UserContext.Provider value={userContext}>
      {props.children}
    </UserContext.Provider>
  );
};
export default UserProvider;
