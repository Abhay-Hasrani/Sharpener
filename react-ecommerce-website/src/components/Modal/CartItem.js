import React, { useRef } from "react";
import { Button, Form, Image } from "react-bootstrap";
import './CartItem.css';
const CartItem = (props) => {
    const quantityRef = useRef(0);
    const removeCartItemHandler = (e)=>{
      if(e.target.id==="removeButton"){
          e.currentTarget.remove();
      }
    }
  return (
    <div onClick={removeCartItemHandler} className="cart-item-control">
      <div className="cart-item">
        <Image className="cart-item-img" src={props.imgSrc} rounded/>
        <h5>{props.name}</h5>
      </div>
      <div className="cart-item-price">₹‎{props.price}</div>
      <div className="cart-item-form">
      <Form>
        <Form.Control type="number" ref={quantityRef}/>
      </Form>
        <Button id="removeButton" variant="danger">Remove</Button>
        </div>
    </div>
  );
};
export default CartItem;
