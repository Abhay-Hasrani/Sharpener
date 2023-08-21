import { formatDate } from "@/components/helper";
import TodoForm from "@/components/todoForm/TodoForm";
import TodoList from "@/components/todoList/TodoList";
import { MongoClient } from "mongodb";
import { useRouter } from "next/router";

let todoList = [
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
    description:
      "Complete 500 dsa questions Complete 500 dsa questions Complete 500 dsa questions Complete 500 dsa questions Complete 500 dsa questions Complete 500 dsa questions Complete 500 dsa questions Complete 500 dsa questions Complete 500 dsa questions Complete 500 dsa questions Complete 500 dsa questions Complete 500 dsa questions Complete 500 dsa questions Complete 500 dsa questions Complete 500 dsa questions Complete 500 dsa questions Complete 500 dsa questions Complete 500 dsa questions Complete 500 dsa questions Complete 500 dsa questions Complete 500 dsa questions Complete 500 dsa questions Complete 500 dsa questions Complete 500 dsa questions Complete 500 dsa questions Complete 500 dsa questions ",
    date: formatDate(9696969669696),
    completed: false,
  },
];
let TodoType = (props) => {
  const router = useRouter();
  const todosType = router.query.todosType;
  todoList = props.todosArray;
  async function onTodoAddHandler(todoObj) {
    const res = await fetch("../api/todosapi", {
      method: "POST",
      body: JSON.stringify(todoObj),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    router.push('/All Todos')
    console.log(data);
  }
  return (
    <>
      {todosType === "All Todos" && <TodoForm onTodoAdd={onTodoAddHandler} />}
      <TodoList todoList={todoList} todosType={todosType} />
    </>
  );
};
export default TodoType;
export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          todosType: "All Todos",
        },
      },
      {
        params: {
          todosType: "Completed",
        },
      },
      {
        params: {
          todosType: "Todos",
        },
      },
    ],
  };
}
export async function getStaticProps() {
  const client = await MongoClient.connect(process.env.MONGO_API_URL);
  const database = client.db();
  const meetupCollection = database.collection("todos");
  const result = await meetupCollection.find().toArray();
  const todosArray = result.map((item) => {
    const { _id, ...otherdata } = item;
    return {
      _id: _id.toString(),
      ...otherdata,
    };
  });
  // console.log(result);
  client.close();
  return {
    props: {
      todosArray,
    },
  };
}
