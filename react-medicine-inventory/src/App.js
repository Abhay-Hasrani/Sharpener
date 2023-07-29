import { useState } from "react";
import "./App.css";
import AddProductForm from "./components/AddProductForm";
import MedicineList from "./components/Medicines/MedicineList";
import CartProvider from "./store/CartProvider";
import MedicineProvider from "./store/MedicineProvider";
import Modal from "./components/Modal";
import Cart from "./components/cart/Cart";

function App() {
  const [showModal,setShowModal] = useState(false);
  const openCart = () => {
      setShowModal((prev)=> {return !prev;})
  };
  return (
    <MedicineProvider>
      <CartProvider>
        <button onClick={openCart}>Cart</button>
        {showModal && <Modal closeCart={openCart}/>}
        <AddProductForm />
        <MedicineList />
      </CartProvider>
    </MedicineProvider>
  );
}

export default App;
