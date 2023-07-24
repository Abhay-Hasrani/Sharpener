import logo from "./logo.svg";
import "./App.css";
import Form from "./components/Form";
import TableList from "./components/TableList";
import { useEffect, useState } from "react";
import TableListItem from "./components/TableListItem";
let count = 0;
function App() {
  const [table1List, setTable1List] = useState([]);
  const [table2List, setTable2List] = useState([]);
  const [table3List, setTable3List] = useState([]);

  useEffect(() => {
    setTable1List([]);
    setTable2List([]);
    setTable3List([]);
    Object.keys(localStorage).forEach((key) => {
      const id = key;
      const [price, tableName, order] = localStorage.getItem(key).split(" - ");
      console.log(count++);
      console.log(key, localStorage.getItem(key));
      const item = (
        <TableListItem
          key={id}
          id={id}
          price={price}
          tableName={tableName}
          order={order}
        />
      );
      switch (tableName) {
        case "Table 1":
          setTable1List((prevList) => [item, ...prevList]);
          break;
        case "Table 2":
          setTable2List((prevList) => [item, ...prevList]);
          break;
        case "Table 3":
          setTable3List((prevList) => [item, ...prevList]);
          break;
      }
    });
  }, []);

  function formDataHandler(id, price, tableName, order) {
    switch (tableName) {
      case "Table 1":
        setTable1List((prevList) => {
          return [
            <TableListItem
              key={id}
              id={id}
              price={price}
              tableName={tableName}
              order={order}
            />,
            ...prevList,
          ];
        });
        break;
      case "Table 2":
        setTable2List((prevList) => {
          return [
            <TableListItem
              key={id}
              id={id}
              price={price}
              tableName={tableName}
              order={order}
            />,
            ...prevList,
          ];
        });
        break;
      case "Table 3":
        setTable3List((prevList) => {
          return [
            <TableListItem
              key={id}
              id={id}
              price={price}
              tableName={tableName}
              order={order}
            />,
            ...prevList,
          ];
        });
        break;
    }
  }
  return (
    <div>
      <Form formDataHandler={formDataHandler} />
      <TableList tableName="Table 1:" orderList={table1List} />
      <TableList tableName="Table 2:" orderList={table2List} />
      <TableList tableName="Table 3:" orderList={table3List} />
    </div>
  );
}

export default App;
