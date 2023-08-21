import { formatDate } from "@/components/helper";
import TodoForm from "@/components/todoForm/TodoForm";
import TodoList from "@/components/todoList/TodoList";
import { useRouter } from "next/router";

const TodoType = () => {
  const router = useRouter();
  const todosType = router.query.todosType;
  const todoList = [
    {
      id: "0",
      title: "DSA1",
      description: "Complete 5 dsa questions",
      date: formatDate(696969696969),
      completed: false,
    },
    {
      id: "1",
      title: "DSA2",
      description: "Complete 50 dsa questions",
      date: formatDate(969696969696),
      completed: true,
    },
    {
      id: "2",
      title: "DSA3",
      description: "Complete 500 dsa questions Complete 500 dsa questions Complete 500 dsa questions Complete 500 dsa questions Complete 500 dsa questions Complete 500 dsa questions Complete 500 dsa questions Complete 500 dsa questions Complete 500 dsa questions Complete 500 dsa questions Complete 500 dsa questions Complete 500 dsa questions Complete 500 dsa questions Complete 500 dsa questions Complete 500 dsa questions Complete 500 dsa questions Complete 500 dsa questions Complete 500 dsa questions Complete 500 dsa questions Complete 500 dsa questions Complete 500 dsa questions Complete 500 dsa questions Complete 500 dsa questions Complete 500 dsa questions Complete 500 dsa questions Complete 500 dsa questions ",
      date: formatDate(9696969669696),
      completed: false,
    },
  ];
  return (
    <>
      {todosType === "All Todos" && <TodoForm />}
      <TodoList todoList={todoList} todosType={todosType} />
    </>
  );
};
export default TodoType;
