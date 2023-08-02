import { useState } from "react";
import "./App.css";
import Section from "./components/Section/Section";
import Footer from "./components/footer/Footer";
// import Header from './components/header_with_css/Header';
import Header from "./components/header/Header";
import CartModal from "./components/Modal/CartModal";
import CartProvider from "./store/CartProvider";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/about/About";
import Home from "./components/home/Home";
function App() {
  const [cartVisibility, setCartVisibility] = useState(false);
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
        <Router>
          <Header showCart={showCart} />
          <div className="main-content">
            <Routes>
              <Route path="/" element={<Section title="Sale Items" />} />
              <Route path="/about" element={<About />} />
              <Route path="/home" element={<Home />} />
            </Routes>
          </div>
        </Router>
        <Footer />
      </CartProvider>
    </div>
  );
}

export default App;
