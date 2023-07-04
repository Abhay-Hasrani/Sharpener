// import axios from "axios";

var baseUrl = "https://crudcrud.com/api/0480798f3db3480fa52af526609c6e4d/stockItems";
var candyName = document.getElementById("candy-name");
var description = document.getElementById("candy-description");
var price = document.getElementById("candy-price");
var quantity = document.getElementById("candy-quantity");
var list = document.getElementById("stock-list");
var myform = document.getElementById("my-form");

//adding functionality for data persistence after refresh
window.addEventListener("DOMContentLoaded",(e)=>{
    refreshList();
});

function refreshList(){
    while (list.firstChild) {
        list.removeChild(list.firstChild);
      }
    axios.get(baseUrl).then(myjson =>
        Object.values(myjson.data).forEach(element => {
            addListItem(element,element._id);
            // console.log(element+" -id =  "+element._id);
        }));
}

function addListItem(obj,id,action){
    console.log(obj);
    let listItem = document.createElement("li");
    listItem.classList = "";
    let text = document.createTextNode(`${obj.name} ${obj.description} ${obj.price} Quantity: ${obj.quantity} `);
    let buy1Btn = document.createElement("button");
    buy1Btn.classList = "btn btn-primary btn-outline-dark text-white mx-1 my-1";
    buy1Btn.textContent = "Buy"

    let buy2Btn = buy1Btn.cloneNode(false);
    buy2Btn.textContent = "Buy 2"

    let buy3Btn = buy1Btn.cloneNode(false);
    buy3Btn.textContent = "Buy 3"

    let delBtn = document.createElement("button");
    delBtn.classList = "btn-close btn-danger"

    buy1Btn.addEventListener("click",(e)=>{
        console.log("btn 1 clicked");
        updateQuantity(id,obj,1,e);
    });
    buy2Btn.addEventListener("click",(e)=>{
        console.log("btn 2 clicked");
        updateQuantity(id,obj,2);
    });
    buy3Btn.addEventListener("click",(e)=>{
        console.log("btn 3 clicked");
        updateQuantity(id,obj,3);
    });
    delBtn.addEventListener("click",(e)=>{
        axios.delete(baseUrl+"/"+id).then(mas=>{
            console.log("deleted"+mas);
            refreshList();
        });
        
    });

    listItem.appendChild(text);
    listItem.appendChild(buy1Btn);
    listItem.appendChild(buy2Btn);
    listItem.appendChild(buy3Btn);
    listItem.appendChild(delBtn);
    list.prepend(listItem);
}

myform.addEventListener("submit",(e)=>{
    e.preventDefault();
    let obj = {
        name : candyName.value,
        description : description.value,
        price : price.value,
        quantity : quantity.value
    }
    //console.log("here");
    
    console.log("adding");
    axios.post(baseUrl,obj).then(msg=>{
        console.log("added "+JSON.stringify(msg.data));
        addListItem(msg.data,msg.data._id);
    }).catch(err=>console.log("error :" + err));
});

function updateQuantity(id,obj,num,e){
    axios.put(baseUrl+"/"+id,{
        name : obj.name,
        description : obj.description,
        price : obj.price,
        quantity : obj.quantity-num
    }).then(obj=>{
        console.log(("updated"));
        addListItem(obj.data,id);
        refreshList();
    });
}

