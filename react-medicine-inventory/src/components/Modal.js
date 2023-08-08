import { useContext, useState } from "react";
import Cart from "./cart/Cart";
import './Modal.css'
import CartContext from "../store/cart-context";
const Modal = (props)=>{
    const [showBill,setShowBill] = useState(false);
    const cartCtx = useContext(CartContext);
    function generateBillHandler(e){
        setShowBill(true);
    }
    return <div className="modal-overlay">
        <div className="modal-content">
            <Cart/>
            <button onClick={generateBillHandler}>Generate Bill</button>
            <button onClick={props.closeCart}>Close</button>
            {showBill && <div>Your total bill is ₹‎{cartCtx.totalAmount} <br/>
            THANK YOU!!! for Shopping with us...</div>}
        </div>
    </div>
}
export default Modal;