import { useState } from "react";
import MedicineContext from "./medicine-context";
const MedicineProvider = (props) => {
  
  const addMedicineHandler = (medicineObj) => {
    updateMedicineContext((prev) => {
      const index = prev.medicines.findIndex(
        (item) => item.id === medicineObj.id
        );
        if (index === -1) {
          prev.medicines.push(medicineObj);
        } else {
          // console.log(prev.medicines[index].quantity," ",medicineObj.quantity)
          prev.medicines[index].quantity += (+medicineObj.quantity);
        }
        
        return { ...prev };
      });
    };
    function updateMedicineQuantityHandler(id,amount){
      updateMedicineContext((prev)=>{
        const index = prev.medicines.findIndex(
          (item) => item.id === id
          );
          prev.medicines[index].quantity += amount;
          if(prev.medicines[index].quantity<0) prev.medicines[index].quantity=0;
          return {...prev};
      })
    }
    function isInStock(id){
      return medicineContext.medicines.find(
        (item) => (item.id === id && item.quantity>0)
        ); 
    }
  const [medicineContext, updateMedicineContext] = useState({
    medicines: [],
    addMedicine: addMedicineHandler,
    updateMedicineQuantity : updateMedicineQuantityHandler,
    isInStock : isInStock
  });
  
  return (
    <MedicineContext.Provider value={medicineContext}>
      {props.children}
    </MedicineContext.Provider>
  );
};
export default MedicineProvider;
