import { useContext, useState } from "react";
import "./App.css";
import AddProductForm from "./components/AddProductForm";
import MedicineList from "./components/Medicines/MedicineList";
import CartProvider from "./store/CartProvider";
import MedicineProvider from "./store/MedicineProvider";
import Modal from "./components/Modal";
import Cart from "./components/cart/Cart";
import CartContext from "./store/cart-context";

function App() {
  const [showModal, setShowModal] = useState(false);
  const openCart = () => {
    setShowModal((prev) => {
      return !prev;
    });
  };
  const cartCtx = useContext(CartContext);
  return (
    <>
      <button onClick={openCart}>
        Cart <sup>{cartCtx.totalItems}</sup>
      </button>
      {showModal && <Modal closeCart={openCart} />}
      <AddProductForm />
      <MedicineList />
    </>
  );
}

export default App;
