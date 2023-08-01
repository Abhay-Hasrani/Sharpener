import { Button, Image } from "react-bootstrap";
import './Product.css'
import { useContext } from "react";
import CartContext from '../../store/cart-context';
const Product = (props) => {
  const cartCtx = useContext(CartContext);
  const addToCartHandler = ()=>{

    cartCtx.addItemToCart({...props,quantity:1,id:props.imageUrl});
  }
  return (
    <div className="product">
      <div>{props.title}</div>
      <Image src={props.imageUrl} rounded/>
      <div>₹{props.price}</div>
      <Button onClick={addToCartHandler} variant="success" className="mb-2 mt-1">Add To Cart</Button>
    </div>
  );
};
export default Product;
