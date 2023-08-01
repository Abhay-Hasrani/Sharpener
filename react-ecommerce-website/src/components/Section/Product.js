import { Button, Image } from "react-bootstrap";
import './Product.css'
const Product = (props) => {
  return (
    <div className="product">
      <div>{props.title}</div>
      <Image src={props.imageUrl} rounded/>
      <div>₹{props.price}</div>
      <Button variant="success" className="mb-2 mt-1">Add To Cart</Button>
    </div>
  );
};
export default Product;
