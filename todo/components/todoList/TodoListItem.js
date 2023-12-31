import { useState } from "react";
import classes from "./TodoListItem.module.css";
import EditButton from "../UI/EditButton";
import DeleteButton from "../UI/DeleteButton";
const TodoListItem = (props) => {
  // console.log(props);
  const [showDescription, setShowDescription] = useState(false);
  function checkBoxClickHandler(e) {
    console.log(e.target.checked);
    const isChecked = e.target.checked;
    const newTodoObj = {
      completed: isChecked,
      _id: props._id,
    };
    props.onTodoUpdate(newTodoObj);
  }
  function onTodoDeleteHandler(){
      props.onTodoDelete(props._id);
  }
  return (
    <>
      <div
        onClick={() => setShowDescription(!showDescription)}
        className={classes["list-item"]}
      >
        <input
          type="checkbox"
          className={classes["item-checkbox"]}
          defaultChecked={props.completed}
          onClick={checkBoxClickHandler}
        />
        <div className={classes["item-content"]}>
          <h3 className={classes["item-title"]}>{props.title}</h3>
          <p className={classes["item-date"]}>{props.date}</p>
        </div>
        <EditButton {...props} />
        <DeleteButton onDelete={onTodoDeleteHandler}/>
        <span
          className={
            classes["chevron"] + " " + classes[showDescription ? "rotate" : ""]
          }
        >
          &#9660;
        </span>
      </div>
      <p
        className={
          classes["item-description"] +
          " " +
          classes[showDescription ? "active" : "not-active"]
        }
      >
        {props.description}
      </p>
    </>
  );
};
export default TodoListItem;
