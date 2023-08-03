import { useEffect, useState } from "react";
import "./App.css";
import Section from "./components/Section/Section";
import Footer from "./components/footer/Footer";
// import Header from './components/header_with_css/Header';
import Header from "./components/header/Header";
import CartModal from "./components/Modal/CartModal";
import CartProvider from "./store/CartProvider";
import { Route, Routes, useNavigate } from "react-router-dom";
import About from "./components/about/About";
import Home from "./components/home/Home";
import ContactUs from "./components/contact_us/ContactUs";
import DetailedProduct from "./components/Section/DetailedProduct";
function App() {
  const [cartVisibility, setCartVisibility] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/store");
  }, []);
  function showCart() {
    setCartVisibility(true);
  }
  function hideCart() {
    setCartVisibility(false);
  }
  return (
    <div className="app">
      <CartProvider>
        <CartModal hideCart={hideCart} cartVisibility={cartVisibility} />
        <Header showCart={showCart} />
        <div className="main-content">
          <Routes>
            <Route path="/store/:productId" element={<DetailedProduct />} />
            <Route path="/store" element={<Section title="Sale Items" />} />
            <Route path="/about" element={<About />} />
            <Route path="/home" element={<Home />} />
            <Route path="/contactus" element={<ContactUs />} />
          </Routes>
        </div>
        <Footer />
      </CartProvider>
    </div>
  );
}

export default App;
//todos
//add remove from cart handler code in cart context
//update styles