const formData = [
    {"type":"text","name":"fName","label":"First Name","validate":{"minLength":6,"maxLength":15,"allow":"alphabet"}},
  {"type":"text","name":"lName","label":"Last Name","validate":
{"minLength":6,"maxLength":15,"allow":"alphabet"}},
  {"type":"text","name":"phone","label":"Phone Number","validate":
{"length":10,"allow":"number"}},
  {"type":"textarea","name":"about","label":"About","validate":{"minLength":6,"maxLength":150,"allow":"any"}},
  {"type":"text","name":"email","label":"Email","validate":
{"allow":"email"}},
  {"type":"password","name":"password","label":"Password","validate":
{"minLength":6,"maxLength":10,"allow":"any"}}
]


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

    $('.contain-form').append(formTag);

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



});