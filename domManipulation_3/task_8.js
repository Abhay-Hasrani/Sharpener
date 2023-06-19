var itemList = document.querySelector("#items");
var form = document.querySelector("#addForm");  

//creating new Node with value from form
form.addEventListener("submit",(e) =>{
    e.preventDefault();
    // console.log("1");
    var newListItem = document.createElement("li");
    var itemValue = document.querySelector("#item");
    newListItem.appendChild(document.createTextNode(itemValue.value));

    //as new list element should have same bs styling
    newListItem.className = itemList.children[0].className;

    //adding delete button with same style
    var btn =  document.createElement("button");
    btn.className = "btn btn-danger btn-sm float-right delete";
    btn.appendChild(document.createTextNode("X"));
    newListItem.appendChild(btn);

    //adding edit button
    var edit = document.createElement("button");
    edit.className = "btn btn-info btn-sm float-right edit"
    edit.appendChild(document.createTextNode("EDIT"));
    newListItem.appendChild(edit);

    itemList.appendChild(newListItem);

});

//delete functionality
itemList.addEventListener("click",(e)=>{
    if(e.target.classList.contains("delete")){
        // console.log(e.target.className);
        // console.log(e.currentTarget.className);
        if(confirm("Are you sure")){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }

});
