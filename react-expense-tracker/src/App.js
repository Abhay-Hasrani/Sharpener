import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import Welcome from "./components/Welcome";
import UpdateProfile from "./components/UpdateProfile";
import { Button } from "react-bootstrap";
import ForgotPassword from "./components/auth/ForgotPassword";
import ExpenseManager from "./components/main/ExpenseManager";
function App() {
  const navigate = useNavigate();
  function logoutClickHandler() {
    localStorage.removeItem("userIdToken");
    navigate("/");
  }
  return (
    <div>
      <Button onClick={logoutClickHandler}>LogOut</Button>
      <Routes>
        <Route path="/" element={<SignIn />} /> 
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/updateProfile" element={<UpdateProfile />} />
        <Route path="/expenseManager" element={<ExpenseManager />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
