import { useContext } from 'react';
import Modal from '../UI/Modal';
import classes from './Cart.module.css'
import CartContext from '../../store/cart-context';
const Cart = (props)=>{
    const cartCtx = useContext(CartContext);
    const cartItems = <ul className={classes['cart-items']}>{
        cartCtx.items.map((item)=><li key={item.id}>{item.name} {item.price} {item.quantity}</li>)}
    </ul>
    const totalAmount = cartCtx.totalAmount.toFixed(2)
return (
    <Modal onHideCart={props.onHideCart}>
     {cartItems}
    <div className={classes.total}>
    <span>Total Amount</span>
    <span>{totalAmount}</span>
    </div>
    <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onHideCart}>close</button>
        <button className={classes['button']}>Order</button>
    </div>
    </Modal>

)
}
export default Cart;