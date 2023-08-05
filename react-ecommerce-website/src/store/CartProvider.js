import { useEffect, useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const baseUrl =
    "https://crudcrud.com/api/1739700753774bdcbfd4f8f99e8a77f4/222";
  const emailID = localStorage.getItem("loggedUserEmail");
  let databaseid = null;
  const [cartContextValue, updateCartContextValue] = useState({
    items: [],
    totalItems: 0,
    totalAmount: 0,
    addItemToCart: addItemToCartHandler,
    updateItemInCart: updateItemInCartHandler,
    removeItemFromCart: removeItemFromCartHandler,
  });
  useEffect(() => {
    async function fetchFromDataBase() {
      const res = await fetch(baseUrl + emailID);
      const data = await res.json();
      updateCartContextValue((prevItems) => {
        prevItems.items = [...data];
        let itemCount = 0;
        let amount = 0;
        for (const obj of data) {
          itemCount += obj.quantity;
          amount += obj.quantity * obj.price;
        }
        prevItems.totalAmount = amount;
        prevItems.totalItems = itemCount;
        return { ...prevItems };
      });
    }
    fetchFromDataBase();
  }, []);

  async function updateInDataBase(item, _id) {
    const {databaseid,...newitem}=item;
    const res = await fetch(baseUrl + emailID + "/" + _id, {
      method: "PUT",
      body: JSON.stringify(newitem),
      headers: {
        "Content-Type": "application/json",
      }
    });
    if (res.ok) {
      // const data = await res.json();
      console.log("updated = " + res._id);
    } else {
      alert(res.status + " " + res.statusText);
    }
  }
  async function addToDataBase(item,updateItemWithDatabaseId) {
    console.log("adding")
    let methodType = "POST";
    let url = baseUrl + emailID;
    let bodyValue = JSON.stringify(item);
    // console.log(JSON.stringify(item));
    // if(item._id != undefined) {
    //   methodType = "PUT";
    //   url += `/${item._id}`;
    //   delete item._id;
    //   bodyValue = JSON.stringify({...item});
    // }
    // console.log(methodType, bodyValue);
    const res = await fetch(url, {
      method: methodType,
      body: bodyValue,
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.ok) {
      const data = await res.json();
      const newItem = { ...item, _id: data._id };
      if (typeof updateItemWithDatabaseId === "function") {
        updateItemWithDatabaseId(newItem);
      }
      console.log("added = " + data._id);
    } else {
      alert(res.status + " " + res.statusText);
    }
  }

  function addItemToCartHandler(item) {
    const id = item.id;
    updateCartContextValue((prevItems) => {
      const index = prevItems.items.findIndex((mItem) => mItem.id === id);
      if (index === -1) {
        const updateItemWithDatabaseId = (newItem) => {
          prevItems.items.push(newItem);
          prevItems.totalItems += newItem.quantity;
          prevItems.totalAmount += newItem.price * newItem.quantity;
          // Set the updated cart state
          updateCartContextValue({ ...prevItems });
        };
        addToDataBase(item,updateItemWithDatabaseId);
        return { ...prevItems };
      } else {
        alert("Item already added");
        return prevItems;
      }
    });
  }

  function updateItemInCartHandler(id, quantity) {
    updateCartContextValue((prevItems) => {
      const index = prevItems.items.findIndex((mItem) => mItem.id === id);
      const item = prevItems.items[index];
      const quantityDiff = quantity - item.quantity;
      item.quantity = quantity;
      prevItems.totalItems += quantityDiff;
      prevItems.totalAmount += item.price * quantityDiff;
      console.log(JSON.stringify(item), item._id);
      //updateInDataBase(item,item._id);
      return { ...prevItems };
    });
  }

  function removeItemFromCartHandler(id) {
    updateCartContextValue((prevItems) => {
      const index = prevItems.items.findIndex((mItem) => mItem.id === id);
      const item = prevItems.items[index];
      prevItems.totalItems -= item.quantity;
      prevItems.totalAmount -= item.price * item.quantity;
      prevItems.items.splice(index, 1);
      return { ...prevItems };
    });
  }

  return (
    <CartContext.Provider value={cartContextValue}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartProvider;
