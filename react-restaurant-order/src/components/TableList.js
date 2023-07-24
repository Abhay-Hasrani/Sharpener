const TableList = (props) => {
  return (
    <>
      <label>{props.tableName}</label>
      <ul>{props.orderList}</ul>
    </>
  );
};
export default TableList;
