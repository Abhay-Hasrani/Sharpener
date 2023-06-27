var amount = document.querySelector("#amount");
var activity = document.querySelector("#activity");
var dropdownItems = document.querySelectorAll(".dropdown-item");
var myForm = document.querySelector("#my-form");
var dropdown = document.querySelector("#dropdown");
var expenseList = document.querySelector("#expense-list");

//code for selecting dropdown item
dropdownItems.forEach((item)=>{
    item.addEventListener("click",(e)=>{
        let text = item.textContent;
        console.log(text);
        dropdown.textContent=text;
})
});

myForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    console.log(` ${amount.value} ${activity.value} ${dropdown.textContent}`);
    var expenseObj = {
        amount : amount.value,
        activity : activity.value,
        category : dropdown.textContent
    }
    let str = `${amount.value}₹ - ${activity.value} - ${dropdown.textContent}`;
    //cloning and creating new list element from hidden template i created in html
    var listItem = document.getElementById("mylist-item").cloneNode(true);
    listItem.style.display='';
    listItem.firstChild.textContent= str;
    expenseList.append(listItem);

    localStorage.setItem(str,JSON.stringify(expenseObj));

    listItem.addEventListener("click",(e)=>{
            console.log("entry");
        let key = listItem.firstChild.textContent;
        if(e.target.classList.contains("delete")){
            localStorage.removeItem(key);
            e.currentTarget.remove();
            console.log("deleted");
        }
        if(e.target.classList.contains("edit")){
            let obj = JSON.parse(localStorage.getItem(key));
            amount.value = obj.amount;
            activity.value = obj.activity;
            dropdown.textContent = obj.category;
            e.currentTarget.remove();
            console.log("edited");
        }
    });
});

