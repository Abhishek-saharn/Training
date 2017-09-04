function isValid(item){
    return item!=0 && item!=undefined && typeof(item) == 'number' && !isNaN(item);
}

function q1() {
    
    var str = prompt("Enter elements(Space saperated): ");
    var arr = str.split(" ");
    console.log(arr);
    var n = parseInt(prompt("Enter n:"));
    if(n<=arr.length&&n!=0){
        alert(arr[n-1]);
    }
    else{
        alert("enter A valid length");
    }
    
}

function q2() {
    var str = prompt("Enter elements(Space saperated): ");
    var arr = str.split(" ").map(Number);
    var newArr = arr.filter(isValid);
    console.log(newArr);
}

function q3(){
    var today = new Date();
    var tdate = today.getDate();
    var tmonth = today.getMonth();
    var tyear = today.getFullYear();
    var userDate = prompt("Enter date in  dd/mm/yyyy format:");
    userDate = userDate.split('/');
    
    var uDateObj = new Date(userDate[2],userDate[1]-1,userDate[0]);
    var tDateObj = new Date(tyear,tmonth,tdate);

    var diff_in_milis = Math.round(Math.abs(uDateObj-tDateObj));
    var diff_in_days = diff_in_milis/(1000*60*60*24);
    console.log(diff_in_days);

}

function q4(){
    var arr1 = prompt("Enter array 1(space saperated):").split(" ");
    var arr2 = prompt("Enter array 2(space saperated):").split(" ");
    var arr3 = [];
    console.log("arr1=" + arr1 + " Arr2=" + arr2);
    for(var i = 0; i < arr1.length; i++){
        for(var j = 0; j < arr2.length; j++){
            if(arr1[i] === arr2[j]){
                arr3.push(arr1[i]);
            }
        }
    }

    alert("Intersection will be : "+ arr3); 
}

function q6(){
    var phone = document.getElementById("phone").value;
    var ip = document.getElementById("ip").value;
    var pregex = /^([0-9]{3}[-]){2}[0-9]{4}$/;
    var iregex = /^([0-9]{3}[\.]){3}[0-9]{3}$/;
    if(pregex.test(phone) && phone.length==12){
        alert("Phone valid");
    }else{
        document.getElementById("phone_error").innerHTML = "Invalid Phone";
    }

    if(iregex.test(ip) && ip.length == 15){
        alert("IP Valid");
    }else{
        document.getElementById("ip_error").innerHTML = "Invalid ip";
    }
}