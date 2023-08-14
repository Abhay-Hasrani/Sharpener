import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import SignUp from "./components/auth/SignUp";
import Home from "./components/Home";
import SignIn from "./components/auth/SignIn";
import { useSelector } from "react-redux";
function App() {
  const isLogged = useSelector((state) => state.auth.isLogged);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        {isLogged && <Route path="/home" element={<Home />} />}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
