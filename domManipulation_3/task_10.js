var nameText = document.getElementById("name");
var emailText = document.getElementById("email");

var form = document.getElementById("my-form");
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    localStorage.setItem("name",nameText.value);
    localStorage.setItem("email",emailText.value);
    console.log("added ")
});