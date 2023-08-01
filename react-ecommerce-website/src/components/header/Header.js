import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Header.css";
import { Button } from "react-bootstrap";

function Header(props) {
  return (
    <Navbar expand="lg" className="navbar bg-black fixed-top">
      <Container>
        <Navbar.Brand className="fw-bold fs-3 brand" href="">
          ShopItUp
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navs w-100 justify-content-evenly fw-bold fs-5">
            <Nav.Link href="">Home</Nav.Link>
            <Nav.Link href="">Store</Nav.Link>
            <Nav.Link href="">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
            <Button onClick={props.showCart} variant="outline-light" className="button ml-auto">
              Cart
            </Button>
      </Container>
    </Navbar>
  );
}

export default Header;
