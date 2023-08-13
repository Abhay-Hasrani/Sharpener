import { useDispatch } from "react-redux";
import Card from "../UI/Card";
import classes from "./ProductItem.module.css";
import { cartActions } from "../store/CartReducer";

const ProductItem = (props) => {
  const { title, price, description } = props;
  const dispatch = useDispatch();
  function addToCartClickHandler() {
    const itemObj = {
      id: title,
      title: title,
      price: price,
      description: description,
      quantity: 1,
      total:price
    };
    // console.log(itemObj);
    dispatch(cartActions.addCartItem(itemObj));
  }
  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addToCartClickHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
