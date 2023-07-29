import { useContext } from "react";
import MedicineListItem from "./MedicineListItem";
import MedicineContext from "../../store/medicine-context";

const MedicineList = () => {
    const medicineCtx = useContext(MedicineContext);
  const productList = medicineCtx.medicines.map((item) => (
    <MedicineListItem
      key={item.id}
      item={item}
    />
  ));
  return <ul>
    {productList}
    </ul>;
};
export default MedicineList;
