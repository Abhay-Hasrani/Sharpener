import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Header.css";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../../store/cart-context";
import { Outlet } from "react-router-dom";

function Header(props) {
  const cartCtx = useContext(CartContext);
  return (
    <>
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
          <Navbar.Toggle
            className="bg-light m-2"
            aria-controls="basic-navbar-nav"
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="navs w-100 justify-content-evenly fw-bold fs-5">
              <Nav.Link as={NavLink} to="home">
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to="/" end>
                Store
              </Nav.Link>
              <Nav.Link as={NavLink} to="/about">
                About
              </Nav.Link>
              <Nav.Link as={NavLink} to="/contactus">
                Contact Us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* here below outlet is there to show where the routed component will be rendered */}
      <Outlet />
    </>
  );
}

export default Header;
