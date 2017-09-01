function q1(){
    var number = prompt("Please enter a number:");
    if(isNaN(number)==true||number==""){
        alert("Entered value is not a number!!");
    }else{
        if(number%2==0){
            alert("Entered value is even number!");
        }else{
            alert("Entered valuse is odd number!!");
        }
    }
}
function q2(){
    var number = prompt("Please enter a number:");
    var number2 = prompt("Please enter second number:");
    var operator = prompt("Please enter a operator:");
var regex = /^[+*/-]$/;
    if(isNaN(number)||isNaN(number2)||!regex.test(operator)){
        alert("Enter valid inputs");  
    }else{
        var res=0;
        switch (operator){
            case '+':res=number+number2;break;
            case '-':res=number-number2;break;
            case '*':res=number*number2;break;
            case '/':res=number/number2;break;

        }
        alert("Result: "+res);

    }


}
function q3(){
    var last = 999;
    var primesum=0;
    for(var i = 1; i<=last;i++){
        var count=0;
        for (var j=2;j<i/2; j++){
            if(i%j==0){
                count++;break;
            }
        }
        if(count==0&&i!=1){
            primesum+=i;
        }
    }
    alert("Total sum of all prime b/w 1 to 999="+ primesum);
}
function q4(){
    for(var year = 2014; year<=2050;year++){
        var dateObj = new Date(year, 0, 1);
        if(dateObj.getDay()===0){
            console.log(year);
        }
    }
}
function q5(){
    var today = new Date();
    var day = today.getDay();
    switch (day){
        case 0: day = "sunday";break;
        case 1: day = "Monday";break;
        case 2: day = "Tuesday";break;
        case 3: day = "wednesday";break;
        case 4: day = "Thrusday";break;
        case 5: day = "friday";break;
        case 6: day = "saturday";break;
    }
    var hour = today.getHours();
    var ampm="am" ;
    if(hour>=12){
        ampm="pm";
        hour%=12;
    }
    var minute= today.getMinutes();
    var date = today.getDate();
    var month = today.getMonth()+1;
    var year = today.getFullYear();
    var newDatef1 = date+'/'+month+'/'+year;
    var newDatef2 = date+'-'+month+'-'+year;
    alert("Today is "+day+"\nCurrent time is :" +hour+":"+minute+" "+ampm+"\n"+newDatef1+", "+newDatef2 );

}
function q6(){
    
}