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
    localStorage.setItem("myobj",JSON.stringify(myobj));
    console.log("added object");  
});