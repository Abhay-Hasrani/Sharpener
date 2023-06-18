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