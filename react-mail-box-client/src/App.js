import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import SignUp from "./components/auth/SignUp";
import Home from "./components/Home";
import SignIn from "./components/auth/SignIn";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
