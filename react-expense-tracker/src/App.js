import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import Welcome from "./components/auth/Welcome";
import UpdateProfile from "./components/UpdateProfile";
import { Button } from "react-bootstrap";
function App() {
  const navigate = useNavigate();
  function logoutClickHandler(){
      localStorage.removeItem("userIdToken");
      navigate("/");
  }
  return (
    <div>
      <Button onClick={logoutClickHandler}>LogOut</Button>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/updateProfile" element={<UpdateProfile />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
