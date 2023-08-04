import { useState } from "react";
import UserContext from "./user-context";

const UserProvider = (props) => {
  const [userContext, setUserContext] = useState({
    idToken: null,
    setIdToken: setIdTokenHandler,
  });
  function setIdTokenHandler(idToken) {
    setUserContext((prev)=>{
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
