$(document).ready(function(){
   
    $('#btn-left').on('click',function(){

        if($("#rightselect").has('option').length>0){
            
            let selected = $("#rightselect option:selected").each(_ => $(this).value);
            $("#rightselect option:selected").remove();
            $('#leftselect').append(selected);
    
        }
     
    });

    $('#btn-right').on('click',function(){
        if($("#leftselect").has('option').length>0){
        
            let selected = $("#leftselect option:selected").each(_ => $(this).value);
            $("#leftselect option:selected").remove();
            $('#rightselect').append(selected);

        }

    });
});