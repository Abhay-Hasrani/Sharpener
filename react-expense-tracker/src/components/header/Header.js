// import { useContext } from "react";
import { Button, Nav, Navbar } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
// import AuthContext from "../../store/AuthProvider";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../store/AuthReducer";
import { themeActions } from "../../store/ThemeReducer";
import CSVdownloadButton from "../helpers/CSVdownloadButton";

const Header = () => {
  // const authCtx = useContext(AuthContext);
  const totalExpenseAmount = useSelector(
    (state) => state.expenseReducer.totalExpenseAmount
  );
  const showPremium = totalExpenseAmount >= 10000;
  console.log(showPremium+" - "+totalExpenseAmount);
  const showThemeButton = useSelector(
    (state) => state.themeReducer.showThemeButton
  );
  const expenses = useSelector((state) => state.expenseReducer.expenses);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  function logoutClickHandler() {
    // authCtx.setIdToken(null);
    dispatch(authActions.setIdToken(null));
    navigate("/");
  }
  function premiumClickHandler() {
    // console.log("Premium Clicked");
    dispatch(themeActions.toggleThemeButton());
  }
  function themeClickHandler() {
    dispatch(themeActions.changeTheme());
  }
  // function downloadClickHandler() {
  //   dispatch(themeActions.changeTheme());
  // }
  return (
    <Navbar>
      {/* expand="lg" */}
      <Navbar.Brand>Expense Tracker</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="navbar-collapse">
        <Nav className="w-75 flex-wrap justify-content-between">
          <NavLink to="/updateProfile">Profile</NavLink>
          <NavLink to="/expenseManager">Manage Expenses</NavLink>
          <Button variant="danger" onClick={logoutClickHandler}>
            LogOut
          </Button>
          {showPremium && (
            <>
              <Button className="bg-warning" onClick={premiumClickHandler}>
                Activate Premium
              </Button>
              {showThemeButton && (
                <>
                  <Button onClick={themeClickHandler}>Theme</Button>
                  <CSVdownloadButton data={expenses} />
                </>
              )}
            </>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default Header;
