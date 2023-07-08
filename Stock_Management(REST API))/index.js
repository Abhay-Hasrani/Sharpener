// import axios from "axios";

var baseUrl = "https://crudcrud.com/api/faceff872529477da42d329002dd6f4c/stockItems";
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
    async function my_get(){
        try {
            const myjson =await getData(baseUrl);
                   Object.values(myjson.data).forEach(element => {
            addListItem(element,element._id)});
        } catch (err) {
            console.log("error :" + err)
        }
    }
    my_get();
  
}

function addListItem(obj,id){
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
        updateQuantity(id,obj,1);
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
        async function my_delete(baseUrl,id){
            try {
                await deleteData(baseUrl,id);
                refreshList();
            } catch (err) {
                console.log("error :" + err)
            }
        }
        my_delete(baseUrl,id);
        
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
    
    console.log("adding");
    async function add(){
        try {
            const msg = await putData(baseUrl,obj);
            addListItem(msg.data,msg.data._id);
        } catch (err) {
            console.log("error :" + err)
        }
    }
    add();
});

function updateQuantity(id,obj,num){
    console.log(typeof(obj)+" : "+JSON.stringify(obj));
    async function my_update(){
        try {
            const prom = await updateData(id,obj,num);
            console.log(("updated"));
            addListItem(prom.data,id);
            refreshList();
        } catch (error) {
            console.log("error :" + error)
        }
    }
    my_update();
}


async function putData(baseUrl,obj){
    return await axios.post(baseUrl,obj);
}
async function deleteData(baseUrl,id){
    return await axios.delete(baseUrl+"/"+id);
}
async function getData(baseUrl){
    return await axios.get(baseUrl);
}
async function updateData(id,obj,num){
    return axios.put(baseUrl+"/"+id,{
        name : obj.name,
        description : obj.deriscption,
        price : obj.price,
        quantity : obj.quantity-num});
}