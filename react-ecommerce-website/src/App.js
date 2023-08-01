import { useState } from 'react';
import './App.css';
import Section from './components/Section/Section';
import Footer from './components/footer/Footer';
// import Header from './components/header_with_css/Header';
import Header from './components/header/Header';
import CartModal from './components/Modal/CartModal';
import CartProvider from './store/CartProvider';

function App() {
  const [cartVisibility,setCartVisibility] = useState(false);
  function showCart(){
    setCartVisibility(true);
  }
  function hideCart(){
    setCartVisibility(false);
  }
  return (
    <CartProvider className='app'>
      <CartModal hideCart={hideCart} cartVisibility={cartVisibility}/>
    <Header showCart={showCart}/>
    <div className='main-content'>
      <Section title="Sale Items"/>
      </div>
    <Footer/>
    </CartProvider>
  );
}

export default App;
