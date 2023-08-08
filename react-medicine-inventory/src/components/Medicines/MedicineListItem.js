import { useContext } from "react";
import CartContext from "../../store/cart-context";
import MedicineContext from "../../store/medicine-context";

const MedicineListItem = (props) => {
  const cartCtx = useContext(CartContext);
  const medicineCtx = useContext(MedicineContext);
  const isInStock = medicineCtx.isInStock(props.item.id);
  function addToCartHandler(e) {
    e.preventDefault();
    if (!isInStock) return;
    const buyingQuantity = +e.target[0].value;
    medicineCtx.updateMedicineQuantity(props.item.id, 0 - buyingQuantity);
    cartCtx.addItemToCart({ ...props.item, quantity: buyingQuantity });
    e.target.reset();
  }
  let quantityValue = props.item.quantity;
  if (props.item.quantity === 0) {
    quantityValue = "Out Of Stock";
  }

  return (
    <li>
      <span>{props.item.name + " "}</span>
      <span>{props.item.description + " "}</span>
      <span>{"₹" + props.item.price} </span>
      <span>{quantityValue} </span>
      <form onSubmit={addToCartHandler}>
        <label htmlFor="medicine_buy_quantity">Select Amount:</label>
        <input type="number" id="medicine_buy_quantity" min="1" defaultValue={1} max={quantityValue} />
        <button
          id="add_to_cart"
          style={{
            backgroundColor: isInStock ? "green" : "red",
          }}
          type="submit"
        >
          Add To Cart
        </button>
      </form>
      {/* {console.log(cartCtx.items)} */}
    </li>
  );
};
export default MedicineListItem;
