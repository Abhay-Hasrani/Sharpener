import { Button, Nav, Navbar } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { authActions } from "../../store/AuthReducer";
import './Header.css';
const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const unreadMailCount = useSelector((state) => state.mail.unreadMailCount);
  const isLogged = useSelector((state) => state.auth.isLogged);
  function logoutClickHandler() {
    dispatch(authActions.setIdToken(null));
    navigate("/");
  }
  return (
    <Navbar className="navbar">
      {/* expand="lg" */}
      <Navbar.Brand className="navbrand">Mail Box Client</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="navbar-collapse">
        {isLogged && (
          <Nav className="nav w-100 flex-wrap">
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/allmails">
              Received ({unreadMailCount})
            </NavLink>
            <NavLink to="/sentmails">Sent</NavLink>
            <NavLink to="/mailcomposer">Mail Composer</NavLink>
            <Button className="button" onClick={logoutClickHandler}>
              LogOut
            </Button>
          </Nav>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
};
export default Header;
