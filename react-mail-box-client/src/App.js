import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import SignUp from "./components/auth/SignUp";
import Home from "./components/Home";
import MailComposer from "./components/mail/MailComposer";
import SignIn from "./components/auth/SignIn";
import { useSelector } from "react-redux";
import Header from "./components/header/Header";
import AllMails from "./components/mail/AllMails";
import ExpandedMail from "./components/mail/ExpandedMail";
function App() {
  const isLogged = useSelector((state) => state.auth.isLogged);
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        {isLogged && (
          <>
            <Route path="/home" element={<Home />} />
            <Route path="/mailcomposer" element={<MailComposer />} />
            <Route path="/allmails">
              <Route index element={<AllMails />} />
              <Route path="expandedmail" element={<ExpandedMail />} />
            </Route>
            <Route path="/sentmails">
              <Route index element={<AllMails />} />
              <Route path="expandedmail" element={<ExpandedMail />} />
            </Route>
          </>
        )}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
