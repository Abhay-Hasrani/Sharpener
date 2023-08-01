import { Button, Modal } from "react-bootstrap";
import CartItem from "./CartItem";
const productsArr = [
  {
    title: "Colors",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },

  {
    title: "Black and white Colors",

    price: 50,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },

  {
    title: "Yellow and Black Colors",

    price: 70,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },

  {
    title: "Blue Color",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];
const CartModal = (props) => {
  const cartItemList = productsArr.map((item) => (
    <CartItem
      name={item.title}
      imgSrc={item.imageUrl}
      price={item.price}
    />
  ));
  return (
    <Modal size="lg" show={props.cartVisibility} onHide={props.hideCart}>
      <Modal.Header closeButton>
        <Modal.Title className="ms-auto fs-2">Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body>{cartItemList}</Modal.Body>
      <Modal.Footer className="mx-auto flex-column">
        <h4>Total Amount: ₹{69.69}</h4>
        <Button variant="success">Purchase</Button>
      </Modal.Footer>
    </Modal>
  );
};
export default CartModal;
