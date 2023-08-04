import { useState } from "react";
import UserContext from "./user-context";

const UserProvider = (props) => {
  let token = null;
  let logInTime = null;
  let obj = localStorage.getItem("idToken");
  if(obj!=null) {
    obj=JSON.parse(obj);
    token = obj.token;
    logInTime = obj.logInTime;
  }
  if (logInTime != null && Date.now() - logInTime > 5 * 60 * 1000) {
    localStorage.setItem("idToken", JSON.stringify({
      token: null,
      logInTime: null,
    }));
  }
  const [userContext, setUserContext] = useState({
    //initialize it with local storage so refreshing doesnt log us out
    idToken: token,
    setIdToken: setIdTokenHandler,
  });
  function setIdTokenHandler(idToken) {
    setUserContext((prev) => {
      localStorage.setItem("idToken", JSON.stringify({
        token: idToken,
        logInTime: Date.now(),
      }));
      return { ...prev, idToken: idToken };
    });
  }
  return (
    <UserContext.Provider value={userContext}>
      {props.children}
    </UserContext.Provider>
  );
};
export default UserProvider;
