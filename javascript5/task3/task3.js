$(document).ready(function () {
    let tselected;
    jQuery("#availability option:selected").text();

    $('#typeselect').on('change', function () {
        tselected = $(('option:selected'), this).val();
        console.log(tselected);

        switch (tselected) {
            case 1:
                    
                break;

            default:
                break;
        }


    });





});