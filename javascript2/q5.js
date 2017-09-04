
var obj = {
    length:0 ,
    items:[],
    add : function(item){
        this.items.push(item);
        this.length++;
        document.getElementById("itemsList").innerHTML = this.items;
        
    },
    remove : function(){
        this.items.pop();
        this.length--;
        document.getElementById("itemsList").innerHTML = this.items;
    }
}

function add(){
    var item = document.getElementById('itemName').value;
    //alert(item);
    obj.add(item);
   
}
function remove(){
    if(obj.length>0){
        obj.remove();   
       
    }else{
        alert("No Items Left");
    }

}