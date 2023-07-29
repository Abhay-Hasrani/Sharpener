import React from "react";
const MedicineContext = React.createContext({
    medicines : [],
    addMedicine : (medicineObj)=>{},
    updateMedicineQuantity : (id,amount)=>{},
    isInStock : (id)=>{}
});
export default MedicineContext;