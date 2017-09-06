$(document).ready(function () {

    $('button#btn-alert').on('click',function () {
        alert("Hello Awesomeness! :D");
    });

    $('button#btn-prompt').on('click',function(){
        let name = $('#ntext').val()
        if($('#getName').length==0){
        $('div.text-center').append('<h1 id="getName" >Hello, ' + name + ' </h1>');
        
        }else{
            $('#getName').html('Hello, '+name);
        }
        $('#modelId').modal('hide');
    });


   
});

