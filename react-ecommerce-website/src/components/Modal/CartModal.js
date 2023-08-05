import { Button, Modal } from "react-bootstrap";
import CartItem from "./CartItem";
import { useContext } from "react";
import CartContext from "../../store/cart-context";
// const productsArr = [
//   {
//     title: "Colors",

//     price: 100,

//     imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
//   },

//   {
//     title: "Black and white Colors",

//     price: 50,

//     imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
//   },

//   {
//     title: "Yellow and Black Colors",

//     price: 70,

//     imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
//   },

//   {
//     title: "Blue Color",

//     price: 100,

//     imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
//   },
// ];
const CartModal = (props) => {
  const cartCtx = useContext(CartContext);
  const cartItemList = cartCtx.items.map((item) => (
    <CartItem
      key={item.imageUrl}
      id={item.id}
      name={item.title}
      imgSrc={item.imageUrl}
      price={item.price}
      quantity={item.quantity}
    />
  ));
  return (
    <Modal size="lg" show={props.cartVisibility} onHide={props.hideCart}>
      <Modal.Header closeButton>
        <Modal.Title className="ms-auto fs-2">Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body>{cartItemList}</Modal.Body>
      <Modal.Footer className="mx-auto flex-column">
        <h4>Total Amount: ₹{cartCtx.totalAmount}</h4>
        <Button variant="success">Purchase</Button>
      </Modal.Footer>
    </Modal>
  );
};
export default CartModal;
