import { Button } from "react-bootstrap";
import "./Header.css";
const Header = () => {
  function hi() {
    alert(hi);
  }
  return (
    <header>
      <ul className="header">
        <li onClick={hi}>Home</li>
        <li>Store</li>
        <li>About</li>
        <Button variant="outline-light" className="button m-1">Cart</Button>
      </ul>
      <div className="header-title">
        <div>ShopItUp</div>
      </div>
    </header>
  );
};
export default Header;
