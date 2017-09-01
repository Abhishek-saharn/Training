function q1(){
    var number = prompt ("Please enter a number:");
    if( isNaN(number) == true || number == "" ){
        alert("Entered value is not a number!!");
    }else{
        if( number%2 == 0 ){
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
    if( isNaN(number) || isNaN(number2) || !regex.test(operator) ){
        alert("Enter valid inputs");  
    }else{
        var res = 0;
        switch ( operator ){
            case '+':
                res = number + number2;
                break;
            case '-':
                res = number - number2;
                break;
            case '*':
                res = number * number2;
                break;
            case '/':
                res = number / number2;
                break;

        }
        alert( "Result: " + res );

    }
}

function q3(){
    var last = 999;
    var primesum = 0;
    for(var i = 1; i <= last; i++){
        var count = true;
        for (var j = 2; j < i/2; j++){
            if(i%j == 0){
                count = false;
                break;
            }
        }
        if(count && i!=1){
            primesum+= i;
        }
    }
    alert("Total sum of all prime b/w 1 to 999="+ primesum);
}

function q4(){
    for(var year = 2014; year <= 2050; year++){
        var dateObj = new Date(year, 0, 1);
        if( dateObj.getDay() == 0){
            console.log(year);
        }
    }
}

function q5(){
    var today = new Date();
    var day = today.getDay();
    switch (day){
        case 0: 
            day = "sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2: 
            day = "Tuesday";
            break;
        case 3: 
            day = "wednesday";
            break;
        case 4: 
            day = "Thrusday";
            break;
        case 5: 
            day = "friday";
            break;
        case 6: 
            day = "saturday";
            break;
    }
    var hour = today.getHours();
    var ampm = "am" ;
    if(hour >= 12){
        ampm = "pm";
        hour %= 12;
    }
    var minute = today.getMinutes();
    var date = today.getDate();
    var month = today.getMonth()+1;
    var year = today.getFullYear();
    var newDatef1 = date + '/' + month + '/' + year;
    var newDatef2 = date + '-' + month + '-' + year;
    alert("Today is " + day + "\nCurrent time is :" + hour + ":" + minute + " " + ampm + "\n" + newDatef1 + ", " + newDatef2 );

}

function q6(){

    var userNumber = Math.ceil(prompt("Enter a guess number between 1 to 10:"));
    var randum_number = Math.floor(Math.random()*10) + 1;
    console.log(randum_number);
    if(userNumber == randum_number){
        alert("Good Work");
    }else{
        alert("Not Matched\n(check number in log)");

    }
}

function q7(){
    var user_string = prompt("Enter string:");
    var res_string = "";
    for(var i=0; i<user_string.length; i++){
        if(res_string.indexOf(user_string.charAt(i)) === -1){
            res_string+=user_string.charAt(i);
        }
    }
    alert("unique String= " + res_string);
}

function q8(){
    var john = { name: "John Smith", age: 23 };
    var mary = { name: "Mary Key", age: 18 };
    var bob = { name: "Bob-small", age: 6 };
    var lex = { name: "Lexema", age: 10 };
    var albert = { name: "Albert", age: 54 };
    var people = [ john, mary, bob, lex, albert ];
    people.sort(function(a,b){
            var nameA = a.name.toUpperCase();
            var nameB = b.name.toUpperCase();
            if(nameA<nameB)return -1;
            if(nameA>nameB)return 1;
            return 0;
    });
    alert("Checkout log for the result");
    console.log(people);
}

