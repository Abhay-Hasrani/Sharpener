import { useEffect, useState } from "react";
import CartContext from "./cart-context";
const CartProvider = (props) => {
  const baseurl =
    "https://crudcrud.com/api/4f0370db0fca4c2d84c51286d551c481/cart1";
  const [cartContext, updateCartContext] = useState({
    items: [],
    totalItems: 0,
    totalAmount: 0,
    addItemToCart: addItemHandler,
    //removeItem: removeItemHandler,
    updateCartItemQuantity: updateItemQuantityHandler,
  });

  useEffect(() => {
    async function getMedicinesFromCartDatabase() {
      const res = await fetch(baseurl);
      if (res.ok) {
        const data = await res.json();
        // console.log(data);
        updateCartContext((prev) => {
          prev.items = data;
          for(const {quantity,price} of data){
            prev.totalItems+=quantity;
            prev.totalAmount+=price*quantity;
          }
          return { ...prev };
        }); 
      } else {
        alert(
          "getMedicinesFromCartDatabase : " + res.status + " " + res.statusText
        );
      }
    }
    getMedicinesFromCartDatabase();
  }, []);

  async function addMedicineToCartDatabase(item, updateObjWithDatabaseId) {
    const url = baseurl;
    // const bodyObj = item;
    const methodType = "POST";
    const res = await fetch(url, {
      method: methodType,
      body: JSON.stringify({
        id: item.id,
        name: item.name,
        quantity: item.quantity,
        description: item.description,
        price: item.price
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.ok) {
      const data = await res.json();
      updateObjWithDatabaseId(data._id);
      console.log("Cart Item added: " + data._id);
    } else {
      alert("addMedicineToCartDatabase : " + res.status + " " + res.statusText);
    }
  }

  async function updateMedicineInCartDatabase(item, databaseId) {
    const url = baseurl + "/" + databaseId;
    // const bodyObj = medicineObj;
    const methodType = "PUT";
    const res = await fetch(url, {
      method: methodType,
      body: JSON.stringify({
        id: item.id,
        name: item.name,
        quantity: item.quantity,
        description: item.description,
        price: item.price}),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.ok) {
      console.log("Cart Item updated: "+res.statusText);
    } else {
      alert("updateMedicineInCartDatabase : " + res.status + " " + res.statusText);
    }
  }

  function updateItemQuantityHandler(id, amount) {
    updateCartContext((prev) => {
      const index = prev.items.findIndex((mItem) => mItem.id === id);
      prev.totalItems += amount;
      prev.totalAmount += amount * prev.items[index].price;
      if (prev.totalAmount < 0) prev.totalAmount = 0;
      if (prev.totalItems < 0) prev.totalItems = 0;
      if (prev.items[index].quantity === 1 && amount < 0) {
        prev.items.splice(index, 1);
        return { ...prev };
      }
      prev.items[index].quantity += amount;
      updateMedicineInCartDatabase(prev.items[index],prev.items[index]._id);
      return { ...prev };
    });
  }

  function addItemHandler(item) {
    const id = item.id;
    updateCartContext((prev) => {
      const index = prev.items.findIndex((mItem) => mItem.id === id);
      if (index === -1) {
        prev.items.push(item);
      } else {
        prev.items[index].quantity += item.quantity;
      }
      prev.totalItems += item.quantity;
      prev.totalAmount += item.quantity * item.price;
      function updateObjWithDatabaseId(databaseId) {
        item._id = databaseId;
      }
      addMedicineToCartDatabase(item,updateObjWithDatabaseId)
      return { ...prev };
    });
  }
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartProvider;
