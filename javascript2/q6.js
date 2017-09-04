var iregex = /^([0-9]{3}[\.]){3}[0-9]{3}$/;
var pregex = /^([0-9]{3}[-]){2}[0-9]{4}$/;

function phonevalidate(){
    var phone = document.getElementById("phone").value;

    if(pregex.test(phone) && phone.length==12){
        document.getElementById("phone_error").innerHTML = "Phone Valid";
        document.getElementById("phone_error").style.color = "#0f0";

    }else{
        document.getElementById("phone_error").innerHTML = "Invalid Phone";
        document.getElementById("phone_error").style.color = "#f00";
    }
}
function ipvalidate(){
    var ip = document.getElementById("ip").value;
    if(iregex.test(ip) && ip.length == 15){
        document.getElementById("ip_error").innerHTML = "IP valid";
        document.getElementById("ip_error").style.color = "#0f0";
    }else{
        document.getElementById("ip_error").innerHTML = "Invalid ip";
        document.getElementById("ip_error").style.color = "#f00";
    }
}