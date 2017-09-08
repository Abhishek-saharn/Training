let selcount = 1;
let radcount = 1;
let value_button;
let initRow;
let values = [];
let tselected = '0';
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

    function buildForm(values, label) {


        switch (tselected) {
            case "0":

                if ($('#theform-text' + label).length == 0) {
                    let labelbox = '<div class="form-group">' +
                        '<label for="label">' + label + '</label>' +
                        '<input type="text" class="form-control" id="theform-text' + label + '" >' +
                        '</div>';
                    $('#theform').append(labelbox);
                }


                break;
            case "1":

                if ($('#theform-select' + label).length == 0) {
                    let selecbox = '<div class="form-group">' +
                        '<label>' + label + '</label>' +
                        '<select class="form-control" id="theform-select' + label + '">' +

                        '</select>' +
                        '</div>';

                    $('#theform').append(selecbox);
                }
                $('#theform-select' + label).empty();
                values.forEach((v) => {
                    let optionbox = '<option>' + v + '</option>';
                    $('#theform-select' + label).append(optionbox);
                });

                break;
            case "2":

                if ($('#theform-radio' + label).length == 0) {
                    let radbox = '<br/><label> '+label+'</label><br/><label  id="theform-radio'+label+'">'+
                        '</label>';
                    $('#theform').append(radbox);

                }

                $('#theform-radio' + label).empty();
                values.forEach((v) => {

                    let radiobox ='<div class="form-check">'+
                    '<label class="form-check-label">'+ 
                        '<input type="radio" name="'+label+'" class="form-check-input" >'
                        + v +
                        '</label>';
                    $('#theform-radio' + label).append(radiobox);
                });


                break;
        }
        values = [];



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

    function isValid(item) {
        return item !== "" && item != undefined;
    }

    $('#btn-addfeild').on('click', function () {
        let glabel = $('input#label').val();
        values = [];
        if (glabel.trim() != "") {
            $("input[name=tbox]").each(function () {
                if (values.indexOf($(this).val()) === -1) {
                    values.push($(this).val());
                }
            });

            values = values.filter(isValid);
            
            values.forEach(v => {
                if (values.indexOf(v) === -1) {
                    values.push(v);
                }
            });

            console.log(values + glabel);

            buildForm(values, glabel);
        }


    });


});