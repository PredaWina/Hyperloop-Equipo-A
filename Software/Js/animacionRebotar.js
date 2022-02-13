var id;
var cont = 0;
var maxIteraciones = 15;

function animar() {
    
    $("#sensores").animate({
        top: "-5px"
    }, "fast");
    $("#sensores").animate({
        top: "0px"
    }, "fast");
    $("#sensores").animate({
        top: "-5px"
    }, "fast");
    $("#sensores").animate({
        top: "0px"
    }, "fast");

    cont++;
    if (cont > maxIteraciones - 1) {
        clearInterval(id);
    }
    
}

id = setInterval(function () {
    animar()
}, 15000);