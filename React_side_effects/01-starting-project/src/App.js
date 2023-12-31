import React, { useEffect, useState } from "react";
import AuthContext from "./store/auth-context";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loggedInState = localStorage.getItem("loggedIn");
    if (loggedInState === "1") setIsLoggedIn(true);
  }, []);
  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem("loggedIn", "1");
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.setItem("loggedIn", "0");
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value = {{isLoggedIn : isLoggedIn,onLogout:logoutHandler}}>
      
      <MainHeader />
      <main>
        {!isLoggedIn && <Login  />}
        {isLoggedIn && <Home />}
      </main>
    </AuthContext.Provider>
  );
}

export default App;
