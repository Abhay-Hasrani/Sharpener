import { useContext } from "react";
import MedicineContext from "../store/medicine-context";

const AddProductForm = () => {
  const medicineCtx = useContext(MedicineContext);
  function AddProductFormHandler(e) {
    e.preventDefault();
    //adding item to medicine context
    const name = e.target[0].value;
    const id = name.toLowerCase();
    const formattedPrice = (+e.target[2].value).toFixed(2);
    medicineCtx.addMedicine({
      id: id,
      name: name,
      description: e.target[1].value,
      price: formattedPrice,
      quantity: (+e.target[3].value),
    });
    e.target.reset();
  }
  return (
    <form onSubmit={AddProductFormHandler}>
      <label htmlFor="medicine_name">Medicine Name:</label>
      <input type="text" id="medicine_name" required/>
      <label htmlFor="medicine_description">Description:</label>
      <input type="text" id="medicine_description" />
      <label htmlFor="medicine_price"> Price:</label>
      <input type="number" id="medicine_price" min={1} />
      <label htmlFor="medicine_quantity">Quantity:</label>
      <input type="number" id="medicine_quantity" min={1} defaultValue={1} required />
      <button type="submit">Add Product</button>
    </form>
  );
};
export default AddProductForm;
