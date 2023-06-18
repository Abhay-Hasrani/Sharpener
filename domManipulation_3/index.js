var title = document.getElementById("header-title");
title.style.borderBottom  = "solid 3px black"

var headingAddItems = document.getElementsByClassName("title");
headingAddItems[0].style = "background-color:green;font-weight:bold;"

var items = document.getElementsByClassName("list-group-item");
items[2].style.backgroundColor = "green";
for( let i of items){
    i.style.fontWeight = "bold";
}

//task 5
var itemsWithTag = document.getElementsByTagName("li");
// items[4].style.backgroundColor = "green"; //not working
itemsWithTag[4].style.backgroundColor = "green"; //working

//task 6
// var seconditem = document.querySelector(".list-group-item:nth-child(2)");
// seconditem.style.backgroundColor = "green";
// var thirditem = document.querySelector(".list-group-item:nth-child(3)");
// thirditem.style.visibility = "hidden";

var itemsWithQSA = document.querySelectorAll(".list-group-item");
itemsWithQSA[1].style.color = "green"
var itemsWithQSAOdd = document.querySelectorAll(".list-group-item:nth-child(odd)");
for(let i=0;i<itemsWithQSAOdd.length;i++){
    itemsWithQSAOdd[i].style.backgroundColor = "green";
}
