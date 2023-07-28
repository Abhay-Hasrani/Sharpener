import { useContext } from 'react';
import classes from './CartItem.module.css';
import CartContext from '../../store/cart-context';

const CartItem = (props) => {
  const price = `$${props.item.price.toFixed(2)}`;
  const cartCtx = useContext(CartContext);
  function onAdd(){
   cartCtx.updateItemQuantity(props.item.id,1);
  }
  function onRemove(){
    cartCtx.updateItemQuantity(props.item.id,-1);
  }
  return (
    <li  className={classes['cart-item']}>
      <div>
        <h2>{props.item.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
          <span className={classes.amount}>x {props.item.quantity}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={onRemove}>−</button>
        <button onClick={onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
