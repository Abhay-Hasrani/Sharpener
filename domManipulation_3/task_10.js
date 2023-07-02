var nameText = document.getElementById("name");
var emailText = document.getElementById("email");
var id=0;
var form = document.getElementById("my-form");


window.addEventListener("DOMContentLoaded",(e)=>{
    axios.get('https://crudcrud.com/api/f0a4b50eb9664eea90a2411075a3fb45/users').then(res=>{
        console.log(res)
        Object.values(res.data).forEach(element => {
            console.log(element);
            nameText.value = element.name;
            emailText.value = element.email;
            id=element._id;
            createListElement();
        });
    });    
});
//above code is for persisting data even after refreshing


var editing = false;
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    if(editing===true) createListElement("editing");
    createListElement("submit");
});
function createListElement(flag){
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
    // localStorage.setItem(emailText.value,JSON.stringify(myobj));
    // console.log("added object"); 

    //MTRPD_task_17 : instead of local storage we will use crud crud for data persistence
    // axios({
    //     method:'get',
    //     url : 'https://crudcrud.com/api/c862e7ed25204570a122fb4b9063d488/users'
    // }).then(res => console.log(res));


    //using post method to put dataon its server using axios
    if(flag==="submit"){
        if(nameText.value==="" || emailText.value==="") return;
    axios.post('https://crudcrud.com/api/f0a4b50eb9664eea90a2411075a3fb45/users',{
        name : nameText.value,
        email : emailText.value
    }).then(res => {
        console.log("posted");
        console.log(res);
    });
    }else if(flag==="editing"){
        console.log("started edit for id: "+id);
        axios.put('https://crudcrud.com/api/f0a4b50eb9664eea90a2411075a3fb45/users/'+id,{
        name : nameText.value,
        email : emailText.value
    }).then(res => {
        console.log("updated");
        console.log(res);
        editing=false;
    });

    }

    var displayText = `${emailText.value} - ${nameText.value} - ${id}`;
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
            
            id = listElement.textContent.split(" - ")[2];
            // localStorage.removeItem(key);
            
            //instead using axios delete request
            axios.delete('https://crudcrud.com/api/f0a4b50eb9664eea90a2411075a3fb45/users/'+id)
            .then(res => console.log(res));

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

        id = listElement.textContent.split(" - ")[2];
        // var object = JSON.parse(localStorage.getItem(key));
        // localStorage.removeItem(key);

        //instead of above using put method of axios 

        axios({
        method:'get',
        url : 'https://crudcrud.com/api/f0a4b50eb9664eea90a2411075a3fb45/users/' +id
    }).then(res => {
        // console.log(res);
        nameText.value = res.data.name;
        emailText.value = res.data.email;
        editing=true;
    });
        
});
nameText.value = "";
emailText.value = "";
}