import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meal/Meals";

function App() {
  const [cartIsShown,setCartIsShown] = useState(false);

  function showCartHandler(){
    setCartIsShown(true);
  }
  function hideCartHandler(){
    setCartIsShown(false);
  }
  return (
    <>
      <Header onShowCart={showCartHandler}/>
      {cartIsShown && <Cart onHideCart={hideCartHandler}/>}
      <main>
        <Meals/>
      </main>
    </>
  );
}

export default App;
