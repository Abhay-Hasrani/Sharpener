import { useRef } from "react";
import TodoFormInput from "./TodoFormInput";
import classes from "./TodoForm.module.css";
const TodoForm = () => {
  const titleRef = useRef();
  const descriptionRef = useRef();
  return (
    <form>
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
      <button className={classes["cta"]}>
        <span className={classes["hover-underline-animation"]}> Add Todo </span>
      </button>
    </form>
  );
};
export default TodoForm;
