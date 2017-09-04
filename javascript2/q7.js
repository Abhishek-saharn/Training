function vali() {

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phonenumber").value;

    if(name==""||email==""||phone==""){
        alert("all fields are required");
        return false;
    }
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!re.test(email)){
        alert("Email Not valid");
        return false;
    }
    
    if(phone.length>10)return false;
    var rex = /^[789][0-9]{9}$/;
    if(!rex.test(phone)){
        alert("Phone not valid");
        return false;
    }
}