import { Nav, Navbar } from "react-bootstrap";
import classes from "./Header.module.css";
import Link from "next/link";
const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" >
      <Navbar.Brand href="/">Todos</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} href="/">All Todos</Nav.Link>
          <Nav.Link as={Link} href="/">Completed</Nav.Link>
          <Nav.Link as={Link} href="/">Todos</Nav.Link>
          <Nav.Link as={Link} href="/">Add Todo</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default Header;
