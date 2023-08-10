import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import Welcome from "./components/Welcome";
import UpdateProfile from "./components/UpdateProfile";
import { Button } from "react-bootstrap";
import ForgotPassword from "./components/auth/ForgotPassword";
import ExpenseManager from "./components/main/ExpenseManager";
import Header from "./components/header/Header";
import { useContext, useEffect, useState } from "react";
import AuthContext from "./store/AuthProvider";
function App() {
  const authCtx = useContext(AuthContext);
  // const [isLogged,setIsLogged]=useState(false);
  // useEffect(()=>{
  //   setIsLogged(authCtx.idToken != null);
  // },[]);
  const isLogged = authCtx.idToken != null;
  return (
    <div>
      {isLogged && <Header />}
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/signUp" element={<SignUp />} />
        {isLogged && (
          <>
            <Route path="/welcome" element={<Welcome />} />
            <Route path="/updateProfile" element={<UpdateProfile />} />
            <Route path="/expenseManager" element={<ExpenseManager />} />
          </>
        )}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
