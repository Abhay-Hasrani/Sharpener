import Counter from "./components/Counter";
import Auth from "./components/Auth";
import Header from "./components/Header";
import UserProfile from "./components/UserProfile";
import { useSelector } from "react-redux";

function App() {
  const isLogged = useSelector((state) => state.auth.isLogged);
  return (
    <>
      <Header />
      {isLogged ? <UserProfile /> : <Auth />}
      <Counter />
    </>
  );
}

export default App;
