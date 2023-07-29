import React from "react";
const MedicineContext = React.createContext({
    medicines : [],
    addMedicine : (medicineObj)=>{},
});
export default MedicineContext;