import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meal/Meals";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsShown,setCartIsShown] = useState(false);

  function showCartHandler(){
    setCartIsShown(true);
  }
  function hideCartHandler(){
    setCartIsShown(false);
  }
  return (
    <CartProvider>
      <Header onShowCart={showCartHandler}/>
      {cartIsShown && <Cart onHideCart={hideCartHandler}/>}
      <main>
        <Meals/>
      </main>
    </CartProvider>
  );
}

export default App;
