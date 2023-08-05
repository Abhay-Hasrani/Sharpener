import React, { useContext } from "react";
import { Button, Form, Image } from "react-bootstrap";
import './CartItem.css';
import CartContext from "../../store/cart-context";
const CartItem = (props) => {
    const cartCtx = useContext(CartContext);
    const removeCartItemHandler = (e)=>{
      if(e.target.id==="removeButton"){
          cartCtx.removeItemFromCart(props.id);
          // e.currentTarget.remove();
      }
    }
    function cartItemQuantityChangeHanlder(e){
      e.preventDefault();
      cartCtx.updateItemInCart(props.id,e.target[0].value);
    }
  return (
    <div onClick={removeCartItemHandler} className="cart-item-control">
      <div className="cart-item">
        <Image className="cart-item-img" src={props.imgSrc} rounded/>
        <h5>{props.name}</h5>
      </div>
      <div className="cart-item-price">₹‎{props.price}({props.quantity})</div>
      <div className="cart-item-form">
      <Form onSubmit={cartItemQuantityChangeHanlder}>
        <Form.Control type="number" min={1} defaultValue={1}/>
        <Form.Text className="text-muted">
          Quantity
        </Form.Text>
      </Form>
        <Button id="removeButton" variant="danger">Remove</Button>
        </div>
    </div>
  );
};
export default CartItem;
