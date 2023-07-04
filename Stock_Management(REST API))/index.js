// import axios from "axios";

var baseUrl = "https://crudcrud.com/api/1425b487b37943ee88a98787c540cf1a/stockItems";
var candyName = document.getElementById("candy-name");
var description = document.getElementById("candy-description");
var price = document.getElementById("candy-price");
var quantity = document.getElementById("candy-quantity");
var list = document.getElementById("stock-list");
var myform = document.getElementById("my-form");

//adding functionality for data persistence after refresh
window.addEventListener("DOMContentLoaded",(e)=>{
    axios.get(baseUrl).then(myjson =>
    Object.values(myjson.data).forEach(element => {
        addListItem(element,element._id);
        // console.log(element+" -id =  "+element._id);
    })
    );
});

function refreshList(){
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

    buy1Btn.addEventListener("click",(e)=>{
        console.log("btn 1 clicked");
    axios.put(baseUrl+"/"+id,{
        name : obj.name,
        description : obj.description,
        price : obj.price,
        quantity : obj.quantity-1
    }).then(obj=>{
        addListItem(obj.data,id);
        console.log((baseUrl+"/"+id));
    });


    });
    buy2Btn.addEventListener("click",(e)=>{
        console.log("btn 2 clicked");
        axios.put(baseUrl+"/"+id,{
            name : obj.name,
            description : obj.description,
            price : obj.price,
            quantity : obj.quantity-2
        }).then(obj=>{
            addListItem(obj.data,id);
            console.log((baseUrl+"/"+id));
        });
    });
    buy3Btn.addEventListener("click",(e)=>{
        console.log("btn 3 clicked");
        axios.put(baseUrl+"/"+id,{
            name : obj.name,
            description : obj.description,
            price : obj.price,
            quantity : obj.quantity-3
        }).then(obj=>{
            addListItem(obj.data,id);
            console.log((baseUrl+"/"+id));
        });
    });

    listItem.appendChild(text);
    listItem.appendChild(buy1Btn);
    listItem.appendChild(buy2Btn);
    listItem.appendChild(buy3Btn);
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

function updateQuantity(id,obj,num){
    
}

