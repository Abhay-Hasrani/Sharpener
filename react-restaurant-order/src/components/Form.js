import { useState } from "react";
import Input from "../UI/Input";

const Form = (props)=>{
    const [tableSelected,setTableSelected] = useState("Table 1");
    function tableSelectHandler(e){
        setTableSelected(e.target.value);
    }
    function formSubmitHandler(e){
        e.preventDefault();
        if(localStorage.getItem(e.target[0].value)!=null){
            console.log("Enter a different key");
            return;
        }
        props.formDataHandler(e.target[0].value,e.target[1].value,tableSelected,e.target[2].value);
    }
    return (
        <form onSubmit={formSubmitHandler}>
            <Input label= "Unique Order ID:" id = "ID" type = "number" />
            <Input label= "Choose Price:" id = "Price" type = "number" />
            <Input label= "Choose Dish:" id = "Dish" type = "text" />
            <br/>
            <label htmlFor="table_select">Choose a Table: </label>
            <select id="table_select" onChange={tableSelectHandler} >
            <option>Table 1</option>
            <option>Table 2</option>
            <option>Table 3</option>
            </select>
            <button type="submit" id="add_order">Add Order</button>
        </form>
    )
}
export default Form;