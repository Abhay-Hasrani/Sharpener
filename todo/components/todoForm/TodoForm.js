import { useRef } from "react";
import TodoFormInput from "./TodoFormInput";
import classes from "./TodoForm.module.css";
import { formatDate } from "../helper";
const TodoForm = (props) => {
  const titleRef = useRef();
  const descriptionRef = useRef();
  function todoFormSubmitHandler(e) {
    e.preventDefault();
    const enteredTitle = titleRef.current.value;
    const enteredDescription = descriptionRef.current.value;
    const formattedDate = formatDate();
    const todoObj = {
      title: enteredTitle,
      description: enteredDescription,
      date: formattedDate,
      completed: false,
    };
    props.onTodoAdd(todoObj);
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
      <button type="submit" className={classes["diagonal-button"]}>
        Add Todo
      </button>
    </form>
  );
};
export default TodoForm;
