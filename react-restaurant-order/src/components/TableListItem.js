const TableListItem = (props) => {
    const key = props.id;
    const orderValue = `${props.price} - ${props.tableName} - ${props.order} `;
    localStorage.setItem(key,orderValue);
    function itemDeleteHandler(e){
        //console.log(e.currentTarget+" "+e.target);
        if(e.target.id!="delete") return;
        const id = e.currentTarget.id;
        console.log("id - "+id);
        localStorage.removeItem(id);
        e.currentTarget.remove();
    }
    return (
      <li id={props.id} onClick={itemDeleteHandler}>
        {orderValue} <button id="delete"> Delete</button>
      </li>
    );
};
export default TableListItem;
