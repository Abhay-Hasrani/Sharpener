import { Nav, Navbar } from "react-bootstrap";
import classes from "./Header.module.css";
import Link from "next/link";
const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" >
      <Navbar.Brand className={classes.navbrand} href="/">Todos</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
          <Nav.Link as={Link} href="/">Home</Nav.Link>
          <Nav.Link as={Link} href="/All Todos">All Todos</Nav.Link>
          <Nav.Link as={Link} href="/Completed">Completed</Nav.Link>
          <Nav.Link as={Link} href="/Todos">Todos</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default Header;
