import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Header.css";
import { Button } from "react-bootstrap";
import { useContext } from "react";
import CartContext from "../../store/cart-context";

function Header(props) {
  const cartCtx = useContext(CartContext);
  return (
    <Navbar expand="lg" className="navbar bg-black fixed-top">
      <Container>
        <Navbar.Brand className="fw-bold fs-3 brand" href="">
          ShopItUp
        </Navbar.Brand>
        <Button
          onClick={props.showCart}
          variant="outline-light"
          className="button ms-auto"
        >
          Cart
          <sup className="cart-item-count">{cartCtx.totalItems}</sup>
        </Button>
        <Navbar.Toggle className="bg-light m-2" aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navs w-100 justify-content-evenly fw-bold fs-5">
            <Nav.Link href="">Home</Nav.Link>
            <Nav.Link href="">Store</Nav.Link>
            <Nav.Link href="">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
