import { useRef } from "react";
import TodoFormInput from "./TodoFormInput";
import classes from "./TodoForm.module.css";
const TodoForm = () => {
  const titleRef = useRef();
  const descriptionRef = useRef();
  function todoFormSubmitHandler(e){
    e.preventDefault();
    console.log(titleRef.current.value, descriptionRef.current.value);
  }
  return (
    <form className={classes.form} onSubmit={todoFormSubmitHandler}>
      <h3>Add a Todo...</h3>
      <TodoFormInput
        type="text"
        placeholder="Enter Todo title"
        label="Title"
        parentRef={titleRef}
      />
      <TodoFormInput
        type="text"
        placeholder="Enter Todo description"
        label="Description"
        parentRef={descriptionRef}
      />
      <button type="submit" className={classes["diagonal-button"]}>Add Todo</button>
    </form>
  );
};
export default TodoForm;
