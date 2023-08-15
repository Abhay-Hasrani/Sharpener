import { Button, Nav, Navbar } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { authActions } from "../../store/AuthReducer";

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
    <Navbar>
      {/* expand="lg" */}
      <Navbar.Brand>Mail Box Client</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="navbar-collapse">
        {isLogged && (
          <Nav className="w-75 flex-wrap justify-content-between">
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/allmails">
              Received<span> {unreadMailCount}</span>
            </NavLink>
            <NavLink to="/sentmails">Sent</NavLink>
            <NavLink to="/mailcomposer">Mail Composer</NavLink>
            <Button variant="danger" onClick={logoutClickHandler}>
              LogOut
            </Button>
          </Nav>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
};
export default Header;
