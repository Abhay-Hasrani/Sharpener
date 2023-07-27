import Modal from '../UI/Modal';
import classes from './Cart.module.css'
const Cart = (props)=>{
    const cartItems = <ul className={classes['cart-items']}>{
        [{id:'c1',name:'sushi',amount:'2',price:'99.99'}].map((item)=><li>{item.name}</li>)}
    </ul>
return (
    <Modal onHideCart={props.onHideCart}>
     {cartItems}
    <div className={classes.total}>
    <span>Total Amount</span>
    <span>99.99</span>
    </div>
    <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onHideCart}>close</button>
        <button className={classes['button']}>Order</button>
    </div>
    </Modal>

)
}
export default Cart;