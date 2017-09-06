const formData = [
    {
        "type":"text",
        "name":"fName",
        "label":"First Name",
        "validate":{
            "minLength":6,
            "maxLength":15,
            "allow":"alphabet"
        }
    },
    {
        "type":"text",
        "name":"lName",
        "label":"Last Name",
        "validate":{
            "minLength":6,
            "maxLength":15,
            "allow":"alphabet"
        }
    },
    {
        "type":"text",
        "name":"phone",
        "label":"Phone Number",
        "validate": {
            "length":10,
            "allow":"number"
        }
    },
    {
        "type":"textarea",
        "name":"about",
        "label":"About",
        "validate": {
            "minLength":6,
            "maxLength":150,
            "allow":"any"
        }
    },
    {
        "type":"text",
        "name":"email",
        "label":"Email",
        "validate": {
            "allow":"email"
        }
    },
    {
        "type":"password",
        "name":"password",
        "label":"Password",
        "validate": {
            "minLength":6,
            "maxLength":10,
            "allow":"any"
        }
    }
]

let validator = {
    
        validate_length : function (input,min,max){
             if(typeof(max) != "undefined" ){
                
                return (input.length>=min && input.length<=max);
             }else{
                return (input.length<=min);
             }  

        },

        validate_input : function(input,type){
            switch (type) {
                case 'alphabet':
                    let namerex = /^[A-z]+$/;
                    return namerex.test(input);
                    
                break;
                case 'number':
                
                    let pregex = /^([789])[0-9]{9}$/;
                    return pregex.test(input);

                break;
                case 'email':

                    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                    return re.test(input);
                
                break;
                
            }
        }
    }
    


$(document).ready(function () {

    $('button#btn-alert').on('click',function () {
        alert("Hello Awesomeness! :D");
    });

    $('button#btn-prompt').on('click',function(){
        let name = prompt("Tell me your name:");
        alert("Keep Smiling, "+name);
    });


    let formTag = '<form id="theform" action="#" class="formindiv">'+
                  '</form>'

    $('#contain-form').append(formTag);

    for(var i = 0; i < formData.length; i++){
        let row;
        switch (formData[i].type) {
            case 'text':
                row = '<div class="form-group">'+
                    '<label>' + formData[i].label + ': </label>'+ 
                    '<input class="form-control" type="' + formData[i].type + '" name="' + formData[i].name + '"/></div>';
                $('#theform').append(row); 
            break;
            case 'textarea':
                row = '<div class="form-group">'+
                    '<label>' + formData[i].label + ': </label>'+
                    '<textarea name="' + formData[i].name + '" class="form-control" rows="4"></textarea>'+
                    '</div>';
                $('#theform').append(row);
            
            break;
            case 'password':
                row = '<div class="form-group">'+
                    '<label>' + formData[i].label + ': </label>'+ 
                    '<input class="form-control" type="' + formData[i].type + '" name="' + formData[i].name + '"/></div>';
                $('#theform').append(row); 
            break;
        }
    }
    let submit = '<input style="background-color: #F0544E" type="submit" role = "button" class="btn btn-success btn-lg">';
    $('#theform').append(submit);


    $('#contain-form').on('keyup','input[name="fName"]', function(){

            let input = $(this).val();
            
            if(validator.validate_length(input,formData[0].validate.minLength,formData[0].validate.maxLength) && 
                validator.validate_input(input,formData[0].validate.allow)){
                
                fn = 1;

                if($("#fp").length==0){

                    $(this).after('<p id="fp" >Valid Name</p>');

                }else{

                    $('#fp').html('Valid Name').css('color','green');

                }
            }else{
                
                fn = 0;
                if($("#fp").length==0){
                    $(this).after('<p id="fp" >Invalid Name(Length should be 6-15)</p>');

                    $('#fp').css('color','red');

                }else{
                    $('#fp').html('Invalid Name(Length should be 6-15)').css('color','red');
                }
            } 
            
    });
   
    $('#contain-form').on('keyup','input[name="lName"]',function(){
        

            let input = $(this).val();
            
            if(validator.validate_length(input,formData[1].validate.minLength,formData[1].validate.maxLength) && 
                validator.validate_input(input,formData[1].validate.allow)){
                
                ln = 1;

                if($("#lp").length==0){

                    $(this).after('<p id="lp" >Valid Name</p>');

                }else{

                    $('#lp').html('Valid Name').css('color','green');

                }
            }else{
                
                ln = 0;
                if($("#lp").length==0){
                    $(this).after('<p id="lp" >Invalid Name(Length should be 6-15)</p>');

                    $('#lp').css('color','red');

                }else{
                    $('#lp').html('Invalid Name(Length should be 6-15)').css('color','red');
                }
            } 
                
                    
    });

    $('#contain-form').on('keyup','input[name="phone"]',function(){

        let input = $(this).val();
        if(validator.validate_length(input,formData[2].validate.length) && 
            validator.validate_input(input,formData[2].validate.allow)){
            
            pn = 1;

            if($("#pn").length==0){

                $(this).after('<p id="pn" >Valid Pnone</p>');

            }else{

                $('#pn').html('Valid Phone').css('color','green');

            }
        }else{
            
            pn = 0;
            if($("#pn").length==0){
                $(this).after('<p id="pn" >Invalid Phone</p>');

                $('#pn').css('color','red');

            }else{
                $('#pn').html('Invalid Phone').css('color','red');
            }
        } 
                    
    });

    $('#contain-form').on('keyup','textarea[name="about"]',function(){
        
        let input = $(this).val();
       
        if(validator.validate_length(input,formData[3].validate.minLength,formData[3].validate.maxLength)){
            
            ab = 1;
            
                $('#ab').remove();
            
            
        }else{
            
            ab = 0;
            if($("#ab").length==0){
                $(this).after('<p id="ab">6-150 Characters needed </p>');

                $('#ab').css('color','red');

            }else{
                $('#ab').html('6-150 Characters needed').css('color','red');
            }
        } 
                    
    });


    $('#contain-form').on('keyup','input[name="email"]',function(){
        
        let input = $(this).val();
        
        if(validator.validate_input(input,formData[4].validate.allow)){
            
            em = 1;

            if($("#em").length==0){

                $(this).after('<p id="em" >Valid Email</p>');

            }else{

                $('#em').html('Valid Email').css('color','green');

            }
        }else{
            
            em = 0;
            if($("#em").length==0){
                $(this).after('<p id="em" >Invalid Email</p>');

                $('#em').css('color','red');

            }else{
                $('#em').html('Invalid Email').css('color','red');
            }
        }        
                    
    });


    $('#contain-form').on('keyup','input[name="password"]',function(){
        
        let input = $(this).val();
        
        if(validator.validate_length(input,formData[5].validate.minLength,formData[5].validate.maxLength)){
            
            ps = 1;

            if($("#ps").length==0){

                $(this).after('<p id="ps" >Fair Password</p>');

            }else{

                $('#ps').html('Fair Password').css('color','green');

            }
        }else{
            
            ps = 0;
            if($("#ps").length==0){
                $(this).after('<p id="ps" >Invalid Password(Length should 6-10)</p>');

                $('#ps').css('color','red');

            }else{
                $('#ps').html('Invalid Password(Length should 6-10)').css('color','red');
            }
        }                 
                    
    });

});

