import Input from "../../UI/Input";
import classes from './MealItemForm.module.css'
const MealItemForm = (props)=>{
    return(
        <form className={classes.form}>
        <Input label="Amount" input={{
            id:"amount"+props.id,
            type:"number",
            max:"5",
            min:"1",
            step:"1",
            defaultValue:"1"
        }}/>
        <button type="submit">Add</button>
        </form>
    )
}
export default MealItemForm;