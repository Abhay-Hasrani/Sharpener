var nameText = document.getElementById("name");
var emailText = document.getElementById("email");

var form = document.getElementById("my-form");
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    // localStorage.setItem("name",nameText.value);
    // localStorage.setItem("email",emailText.value);

    //task 11 storing as an object
    let myobj = {
        name : nameText.value,
        email : emailText.value
    };
    // localStorage.setItem("myobj",JSON.stringify(myobj));

    // task 12 instead of above for scalable database we will use key as email
    //also we will display the key value
    localStorage.setItem(emailText.value,JSON.stringify(myobj));
    console.log("added object"); 

    var displayText = `${emailText.value} - ${JSON.stringify(myobj)}`;
    var br  = document.createElement("br");
    var list = document.getElementById("users");
    var listElement = document.createElement("li");
    listElement.appendChild(document.createTextNode(displayText));
    list.appendChild(listElement);
    
    // task 13 adding delete functionality
    var input = document.createElement("input");
    input.type = "button";
    input.value = "delete";
    listElement.appendChild(input);
    input.addEventListener("click",(e)=>{
            listElement.remove();
            var key = listElement.textContent.split(" - ")[0];
            localStorage.removeItem(key);
            console.log("deleted");
    });

    list.appendChild(br);

    //task 14 edit functionality
    var edit = document.createElement("input");
    edit.type = "button";
    edit.value = "edit";
    listElement.appendChild(edit);
    edit.addEventListener("click",(e)=>{
        listElement.remove();
        var key = listElement.textContent.split(" - ")[0];
        var object = JSON.parse(localStorage.getItem(key));
        localStorage.removeItem(key);
        nameText.value = object.name;
        emailText.value = object.email;
        console.log("editing");
});
});