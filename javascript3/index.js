let count = 1;
let array = [];
$(window).ready(function() {
    $('#add').click(function () {
            count++;
            var row = '<tr id="'+ count + '" ><td><input class="sel" id="sel'+ count +'" type="checkbox"></td><td><input class="pnp" id="pnp'+ count +'" type="checkbox">Push/Pop</td>'+
            '<td><input id="text'+ count +'" class="text" type="text" placeholder="Enter Text"></td>'+'<td><span id=' + count + ' class="glyphicon glyphicon-remove delr"></span></td></tr>';
            $('#thetable').append(row);

    });
    $('#thetable').on("click",'.pnp',function(event){
                if($(this).is(":checked")){
                    var parentrow_Id = $(this).parent().parent().attr('id');
                    let value_to_push = $("input#text"+parentrow_Id).val();
                    if(value_to_push!=""){
                        array.push(value_to_push);
                    }else{
                        alert("Enter Some Value");
                        return false;
                    }

                    console.log(array);
                    
                }
    });

    $('#show').click(function(){
        let stringfromArray = array.join(" | ");
        alert(stringfromArray);
    });
    
    $('#length').click(function(){
        alert("Total Rows are:" + $("#thetable tbody tr").length);
    });

    $('#thetable').on("click",'.delr',function(event){
            let parentrow_Id = $(this).parent().parent().attr('id');
           
            let text_value = $('input#text'+parentrow_Id).val();
           
            let index = array.indexOf(text_value);
           
            if (index > -1)
                {
                    array.splice(index,1);
                }

            console.log(array)
           
            $('#'+parentrow_Id).remove();
            
    });

    $('#delete').click(function(){

        let delArray = [];
        $('table tr').has('input[class="sel"]:checked').find(".text").each(function(){
            delArray.push($(this).val());
           
        });
    
        $('table tr').has('input[class="sel"]:checked').remove();
        
        for(var i = 0 ; i<delArray.length; i++){
            let index = array.indexOf(delArray[i]);
            if(index>-1){
                array.splice(index,1);
            }
        }
    
        console.log("arrayBecome: "+array);
    
        
    
    });

    


});
