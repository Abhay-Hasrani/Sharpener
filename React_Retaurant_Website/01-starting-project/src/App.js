import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meal/Meals";

function App() {
  return (
    <>
      <Header/>
      <Cart/>
      <main>
        <Meals/>
      </main>
    </>
  );
}

export default App;
