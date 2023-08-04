import { Link } from "react-router-dom";
import UserContext from "../../store/user-context";
import classes from "./MainNavigation.module.css";
import { useContext } from "react";
const MainNavigation = () => {
  const userCtx = useContext(UserContext);

  const logoutButtonClickHandler = (e) => {
    userCtx.setIdToken(null);
  };

  return (
    <header className={classes.header}>
      <Link to="/">
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>
          {userCtx.idToken == null && (
            <li>
              {" "}
              <Link to="/auth">Login</Link>
            </li>
          )}
          {userCtx.idToken != null && (
            <li>
              {" "}
              <Link to="/profile">Profile</Link>
            </li>
          )}
          {userCtx.idToken != null && (
            <li>
              <button onClick={logoutButtonClickHandler}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
