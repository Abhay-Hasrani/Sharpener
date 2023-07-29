import { useContext } from "react";
import CartContext from "../../store/cart-context";

const MedicineListItem = (props) => {
    const cartCtx = useContext(CartContext);
    function addToCartHandler(e){
        e.preventDefault();
        cartCtx.addItemToCart({...props.item , quantity : (+e.target[0].value)})
    }
    return (
        <li>
        <span>{props.item.name+" "}</span>
        <span>{props.item.description+" "}</span>
        <span>{"₹"+props.item.price+" "}</span>
        <span>{props.item.quantity+" "}</span>
        <form onSubmit={addToCartHandler}>
            <label htmlFor="medicine_buy_quantity">Select Amount:</label>
            <input type="number" id="medicine_buy_quantity" min="0"/>
            <button type="submit">Add To Cart</button>
        </form>
        {/* {console.log(cartCtx.items)} */}
        </li>
    )
};
export default MedicineListItem;
