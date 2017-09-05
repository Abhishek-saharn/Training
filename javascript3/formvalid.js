let fn=0,ln=0,pn=0,db=0,eml=0,pss=0;

let validator = {

    validate_chars : function (input){
        let namerex = /^[A-z+]{6,15}$/;
        return namerex.test(input);
    },

    validate_phone : function (input){
        let pregex = /^([789])[0-9]{9}$/;
        return pregex.test(input);

    },
    
    validate_DOB : function(input){
        let regdob = /^(((0[1-9]|[12]\d|3[01])\/(0[13578]|1[02])\/((19|[2-9]\d)\d{2}))|((0[1-9]|[12]\d|30)\/(0[13456789]|1[012])\/((19|[2-9]\d)\d{2}))|((0[1-9]|1\d|2[0-8])\/02\/((19|[2-9]\d)\d{2}))|(29\/02\/((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))))$/g;
        return regdob.test(input); 
    },

    validate_email : function(input){
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(input);
    },

    validate_password : function(input){
        
        let passreg = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{6,15}$/;
        return passreg.test(input);
    },

    validate_form : function( ){
        return fn&&ln&&pn&&eml&&db&&pss;
    }

}

$(window).ready(function() {
    
    $('#fname').keyup(function(){
        let input_name = $('#fname').val();
       
        if(validator.validate_chars(input_name)){
            fn = 1;
            $('#fnamep').text('Valid Name').css('color','green');
        }else{
            fn = 0;
            $('#fnamep').text('Invalid Name').css('color','red');
        }
    });


    $('#lname').keyup(function(){
        let input_name = $('#lname').val();
       
        if(validator.validate_chars(input_name)){
            ln = 1;
            $('#lnamep').text('Valid Name').css('color','green');
        }else{
            ln = 0;
            $('#lnamep').text('Invalid Name').css('color','red');
        }
    });
    
    $('#phone').keyup(function(){
        let input = $('#phone').val();

        if(validator.validate_phone(input) && input!=""){
            pn = 1;
            $('#phonep').text('Valid Phone').css('color','green');
        }else{
            pn = 0;
            $('#phonep').text('Invalid Phone').css('color','red');
        }

    });

    $('#dob').keyup(function(){
        let input = $('#dob').val();

        if(validator.validate_DOB(input) && input!=""){
            db = 1;
            $('#dobp').text('Valid DOB').css('color','green');
        }else{
            db = 0;
            $('#dobp').text('Invalid DOB').css('color','red');
        }

    });

    $('#email').keyup(function(){
        let input = $('#email').val();

        if(validator.validate_email(input) && input!=""){
            eml = 1;
            $('#emailp').text('Valid Email').css('color','green');
        }else{
            eml = 0;
            $('#emailp').text('Invalid Email').css('color','red');
        }

    });

    $('#password').keyup(function(){
        let input = $('#password').val();

        if(validator.validate_password(input) && input!=""){
            eml = 1;
            $('#passwordp').text('Valid Password').css('color','green');
        }else{
            eml = 0;
            $('#passwordp').text('Invalid Password').css('color','red');
        }

    });




});

function validateSubmit(){
    return validate_form;
}