import { useState } from "react";
import React from "react"
const AuthContext = React.createContext({
    idToken : null,
    setIdToken : (idToken)=>{}
})
export const AuthProvider = (props) => {
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
  const [authContext, setAuthContext] = useState({
      //initialize it with local storage so refreshing doesnt log us out
      idToken: token,
      setIdToken: setIdTokenHandler,
    });
    function setIdTokenHandler(idToken) {
        setAuthContext((prev) => {
            localStorage.setItem("idToken", JSON.stringify({
                token: idToken,
                logInTime: Date.now(),
            }));
            return { ...prev, idToken: idToken };
        });
    }
    return (
        <AuthContext.Provider value={authContext}>
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
