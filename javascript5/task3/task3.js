let selcount = 1;
let radcount = 1;
let value_button;
let initRow;
let values = [];
let tselected;
$(document).ready(function () {

    function addFields(index, firstTime) {
        let count = 0;
        let option = null;
        if (index == "1") {
            count = selcount;
            option = "Option";
        } else {
            count = radcount;
            option = "Label for Radio button";
        }

        value_button = ' <button id="btn-addvalue" style="background-color: #00AB95" type="button" class="btn btn-success">' +
            'Add Value' +
            '</button><br/>';


        initRow =
            '<div class="row" id="' + count + '">' +
            '<input class="col-md-9 form-control" id="text' + count + '" name="tbox" type="text" placeholder="Enter ' + option + '">' +
            '<button id="close' + count + '" style="background-color: #00AB95" type="button" class="col-md-1 btn btn-success btn-sm delr">' +
            '          X' +
            '</button>' +
            '<button id="up' + count + '" style="background-color: #00AB95" type="button" class="col-md-1 btn btn-success btn-sm">' +
            '          ^' +
            '</button>' +
            '<button id="down' + count + '" style="background-color: #00AB95" type="button" class="col-md-1 btn btn-success btn-sm">' +
            '          V' +
            '</button>' +
            '</div>';



        if (index == "1") {
            if (firstTime == 1) {
                $('.dynamicFormRadio').empty();
                $('.dynamicFormSelect').append(value_button);
            }
            $('.dynamicFormSelect').append(initRow);

        } else {
            if (firstTime == 1) {
                $('.dynamicFormSelect').empty();
                $('.dynamicFormRadio').append(value_button);
            }
            $('.dynamicFormRadio').append(initRow);
        }




    }


    $('#typeselect').on('change', function () {
        tselected = $(('option:selected'), this).val();
        console.log(tselected);

        switch (tselected) {
            case "0":

                $('.dynamicFormRadio').empty();
                $('.dynamicFormSelect').empty();

                break;
            default:

                addFields(tselected, 1);
                break;
        }


    });


    $('.dynamicFormSelect').on('click', '#btn-addvalue', function () {
        selcount++;
        addFields(1, 0);
    });

    $('.dynamicFormRadio').on('click', '#btn-addvalue', function () {
        radcount++;
        addFields(2, 0);
    });

    $('.container').on("click", '.delr', function (event) {

        $(this).closest('.row').remove();

    });


    $('#btn-addfeild').on('click', function () {
        
        $("input[name=tbox]").each(function () {
            values.push($(this).val());
        });
        console.log(values);
        

        


    });


});