import { useEffect, useState } from "react";
import MedicineContext from "./medicine-context";
const MedicineProvider = (props) => {
  const baseurl =
    "https://crudcrud.com/api/ad5300ca3c3c4ecc9b5f5a21d211fb47/medicines1";

  useEffect(() => {
    async function getMedicinesFromDatabase() {
      const res = await fetch(baseurl);
      if (res.ok) {
        const data = await res.json();
        // console.log(data);
        updateMedicineContext((prev) => {
          prev.medicines = data;
          return { ...prev };
        });
      } else {
        alert(
          "getMedicinesFromDatabase : " + res.status + " " + res.statusText
        );
      }
    }
    getMedicinesFromDatabase();
  }, []);

  async function addMedicineToDatabase(medicineObj, updateObjWithDatabaseId) {
    const url = baseurl;
    const bodyObj = medicineObj;
    const methodType = "POST";
    const res = await fetch(url, {
      method: methodType,
      body: JSON.stringify(bodyObj),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.ok) {
      const data = await res.json();
      updateObjWithDatabaseId(data._id);
      console.log("added: " + data._id);
    } else {
      alert("addMedicineToDatabase : " + res.status + " " + res.statusText);
    }
  }

  async function updateMedicineInDatabase(medicineObj, databaseId) {
    const url = baseurl + "/" + databaseId;
    const {_id,...bodyObj} = medicineObj;
    const methodType = "PUT";
    const res = await fetch(url, {
      method: methodType,
      body : JSON.stringify(bodyObj),
      // body: JSON.stringify({
      //   id: medicineObj.id,
      //   name: medicineObj.name,
      //   quantity: medicineObj.quantity,
      //   description: medicineObj.description,
      //   price: medicineObj.price}),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.ok) {
      console.log("updated : "+res.statusText);
    } else {
      alert("updateMedicineInDatabase : " + res.status + " " + res.statusText);
    }
  }

  const addMedicineHandler = (medicineObj) => {
    updateMedicineContext((prev) => {
      const index = prev.medicines.findIndex(
        (item) => item.id === medicineObj.id
      );
      if (index === -1) {
        function updateObjWithDatabaseId(databaseId) {
          medicineObj._id = databaseId;
        }
        addMedicineToDatabase(medicineObj, updateObjWithDatabaseId);
        prev.medicines.push(medicineObj);
      } else {
        // console.log(prev.medicines[index].quantity," ",medicineObj.quantity)
        prev.medicines[index].quantity += +medicineObj.quantity;
        updateMedicineInDatabase(prev.medicines[index], prev.medicines[index]._id);
      }
      return { ...prev };
    });
  };
  function updateMedicineQuantityHandler(id, amount) {
    updateMedicineContext((prev) => {
      const index = prev.medicines.findIndex((item) => item.id === id);
      const medicineObj = prev.medicines[index];
      medicineObj.quantity += amount;
      if (medicineObj.quantity < 0) medicineObj.quantity = 0;

      updateMedicineInDatabase(medicineObj, medicineObj._id);
      return { ...prev };
    });
  }
  function isInStock(id) {
    return medicineContext.medicines.find(
      (item) => item.id === id && item.quantity > 0
    );
  }
  const [medicineContext, updateMedicineContext] = useState({
    medicines: [],
    addMedicine: addMedicineHandler,
    updateMedicineQuantity: updateMedicineQuantityHandler,
    isInStock: isInStock,
  });

  return (
    <MedicineContext.Provider value={medicineContext}>
      {props.children}
    </MedicineContext.Provider>
  );
};
export default MedicineProvider;
