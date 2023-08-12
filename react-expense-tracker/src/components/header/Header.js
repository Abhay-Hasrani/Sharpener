// import { useContext } from "react";
import { Button, Nav, Navbar } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
// import AuthContext from "../../store/AuthProvider";
import { useDispatch } from "react-redux";
import { authActions } from "../../store/AuthReducer";

const Header = () => {
  // const authCtx = useContext(AuthContext);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function logoutClickHandler() {
    // authCtx.setIdToken(null);
    dispatch(authActions.setIdToken(null));
    navigate("/");
  }
  return (
    <Navbar>
      {/* expand="lg" */}
      <Navbar.Brand>Expense Tracker</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="navbar-collapse">
        <Nav className="w-75 flex-wrap justify-content-between">
          <NavLink to="/welcome">Home</NavLink>
          <NavLink to="/updateProfile">Profile</NavLink>
          <NavLink to="/expenseManager">Manage Expenses</NavLink>
          <Button variant="danger" onClick={logoutClickHandler}>
            LogOut
          </Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default Header;
