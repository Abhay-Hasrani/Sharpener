import { useDispatch, useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useEffect } from "react";
import Notification from "./components/UI/Notification";
import { cartActions, fetchFromFirebase } from "./components/store/CartReducer";
import { uiActions } from "./components/store/UiReducer";

let initial = true;
function App() {
  const showCart = useSelector((state) => state.cart.showCart);
  const cart = useSelector((state) => state.cart.cartitems);
  const notificationStatus = useSelector(
    (state) => state.UI.notificationStatus
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFromFirebase());
  }, [dispatch]);

  useEffect(() => {
    async function addDataToFirebase() {
      dispatch(uiActions.setNotificationType("loading"));
      const res = await fetch(
        "https://react-blog-deploy-4f574-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );
      const data = await res.json();
      if (res.ok) {
        dispatch(uiActions.setNotificationType("success"));
        // console.log(data);
        // dispatch(cartActions.replaceCart(data));
      } else {
        dispatch(uiActions.setNotificationType("error"));
      }
    }
    if (initial) {
      initial = false;
      return;
    }
    addDataToFirebase();
  }, [cart]);
  return (
    <>
      {notificationStatus && <Notification status={notificationStatus} />}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
