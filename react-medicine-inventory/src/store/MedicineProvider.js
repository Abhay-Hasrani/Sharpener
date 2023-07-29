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
  const [medicineContext, updateMedicineContext] = useState({
    medicines: [],
    addMedicine: addMedicineHandler,
  });
  
  return (
    <MedicineContext.Provider value={medicineContext}>
      {props.children}
    </MedicineContext.Provider>
  );
};
export default MedicineProvider;
