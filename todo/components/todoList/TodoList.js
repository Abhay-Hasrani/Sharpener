import TodoListItem from "./TodoListItem";
import classes from "./TodoListItem.module.css";
const TodoList = (props) => {
  
  let todoArray = props.todoList;
  switch (props.todosType) {
    case "Todos":
      todoArray = props.todoList.filter((item) => item.completed === false);
      break;
    case "Completed":
      todoArray = props.todoList.filter((item) => item.completed === true);
      break;
    default:
      todoArray = props.todoList;
  }
  const todoList = todoArray.map((item, index) => (
    <TodoListItem onTodoDelete={props.onTodoDelete} onTodoUpdate = {props.onTodoUpdate} key={index} {...item} />
  ));
  return <ul className={classes["item-list"]}>{todoList}</ul>;
};
export default TodoList;
