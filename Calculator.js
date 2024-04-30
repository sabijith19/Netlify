function addToDisplay(value) {
    document.getElementById('result').value += value;
}

function clearDisplay() {

    document.getElementById('result').value = '';

}

function clearString() {

    document.getElementById('res').value = '';

}

function simpleCalculations() {



    try {
        document.getElementById('result').value = eval(document.getElementById('result').value);
    } catch (error) {
        document.getElementById('result').value = 'Error';
    }
}

function calc() {

    document.getElementById('res').value = document.getElementById('res').value.length;
}


$(document).ready(function() {
    $("#res").click(function() {
        $(".Calculator").fadeToggle();
    });

});

$(document).ready(function() {
    $("h1").click(function() {
        $("#work").slideToggle();
    });

});

$(document).ready(function() {
    $(".lenght").click(function() {
        $("#hello").animate({
            left: '250px',
            opacity: '0.5',
            height: '150px',
            width: '150px'
        });
    });
});