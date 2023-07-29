import Cart from "./cart/Cart";
import './Modal.css'
const Modal = (props)=>{
    return <div className="modal-overlay">
        <div className="modal-content">
            <Cart/>
            <button onClick={props.closeCart}>Close</button>
        </div>
    </div>
}
export default Modal;