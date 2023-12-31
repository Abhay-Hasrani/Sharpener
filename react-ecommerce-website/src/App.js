import { lazy, Suspense, useContext, useState } from "react";
import "./App.css";
import Section from "./components/Section/Section";
import Footer from "./components/footer/Footer";
// import Header from './components/header_with_css/Header';
import Header from "./components/header/Header";
import CartModal from "./components/Modal/CartModal";
import CartProvider from "./store/CartProvider";
import { Navigate, Route, Routes } from "react-router-dom";
// import About from "./components/about/About";
// import Home from "./components/home/Home";
// import ContactUs from "./components/contact_us/ContactUs";
// import DetailedProduct from "./components/Section/DetailedProduct";
import Auth from "./components/auth/LogIn";
import AuthContext from "./store/AuthProvider";
import LoadingIndicator from "./components/UI/LoadingIndicator";

const DetailedProduct = lazy(() => import('./components/Section/DetailedProduct'));
const Home = lazy(() => import("./components/home/Home"));
const About = lazy(() => import("./components/about/About"));
const ContactUs = lazy(() =>import("./components/contact_us/ContactUs"));
function App() {
  const [cartVisibility, setCartVisibility] = useState(false);

  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.idToken != null;

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
            <Suspense fallback={<LoadingIndicator/>}>
          <Routes>
            {!isLoggedIn && (
              <Route path="/" element={<Navigate replace to="/auth" />} />
            )}
            {isLoggedIn && (
              <>
                <Route path="/store/:productId" element={<DetailedProduct />} />
                <Route path="/store" element={<Section title="Sale Items" />} />
                <Route path="/about" element={<About />} />
                <Route path="/home" element={<Home />} />
                <Route path="/contactus" element={<ContactUs />} />
              </>
            )}
            <Route path="/auth" element={<Auth />} />
            <Route path="*" element={<Navigate replace to="/auth" />} />
          </Routes>
            </Suspense>
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
