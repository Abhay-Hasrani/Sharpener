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
    var displayText = `${emailText.value} - ${JSON.stringify(myobj)}`;
    var br  = document.createElement("br");
    var list = document.getElementById("users");
    list.appendChild(
        document.createElement("h4").
    appendChild(document.createTextNode(displayText))
    );
    list.appendChild(br);

    console.log("added object");  
});