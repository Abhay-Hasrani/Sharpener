import classes from "./MealItem.module.css"
import MealItemForm from "./MealItemForm";
const MealItem = (props) => {
  const formattedPrice = `$${props.price.toFixed(2)}`;
  return (
    <li className={classes.meal}>
      <div>
      <div>
        <h3>{props.name}</h3>
      </div>
      <div className={classes.description}>{props.description}</div>
      <div className={classes.price}>{formattedPrice}</div>
      </div>
      <div><MealItemForm id={props.id} item={props}/></div>
    </li>
  );
};
export default MealItem;
