$(document).ready(function () {

    $('#btn-left').on('click', function () {

        if ($("#rightselect").has('option').length) {

            let selected = $("#rightselect option:selected").each(_ => $(this).value);
            $("#rightselect option:selected").remove();
            $('#leftselect').append(selected);

        }

    });

    $('#btn-right').on('click', function () {
        if ($("#leftselect").has('option').length) {

            let selected = $("#leftselect option:selected").each(_ => $(this).value);
            $("#leftselect option:selected").remove();
            $('#rightselect').append(selected);

        }

    });

    $('#btn-right-all').on('click', function () {
        if ($("#leftselect").has('option').length) {

            let selected = $("#leftselect option").each(_ => $(this).value);
            $("#leftselect option").remove();
            $('#rightselect').append(selected);

        }

    });

    $('#btn-left-all').on('click', function () {

        if ($("#rightselect").has('option').length) {

            let selected = $("#rightselect option").each(_ => $(this).value);
            $("#rightselect option").remove();
            $('#leftselect').append(selected);

        }

    });

    $('#btn-add-left').on('click', function () {
        let text = $('#lefttbox').val();
        $('#lefttbox').val("");
        if (text != "") {
            let option = '<option>' + text + '</option>';
            $('#leftselect').append(option);

        }

    });

    $('#btn-add-right').on('click', function () {
        let text = $('#rightbox').val();
        $('#rightbox').val("");
        if (text != "") {
            let option = '<option>' + text + '</option>';
            $('#rightselect').append(option);

        }

    });


});