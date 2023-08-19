import classes from "./TodoForm.module.css";

const TodoFormInput = (props) => {
  return (
    <div className={classes["input-container"]}>
      <input
        placeholder={props.placeholder}
        className={classes["input-field"]}
        type={props.type}
        ref={props.parentRef}
      />
      <label for="input-field" className={classes["input-label"]}>
        {props.label}
      </label>
      <span className={classes["input-highlight"]}></span>
    </div>
  );
};
export default TodoFormInput;
