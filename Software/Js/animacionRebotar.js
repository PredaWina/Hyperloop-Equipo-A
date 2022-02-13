// var id;
// var cont = 0;
// var maxIteraciones = 15;
// var tiempoEspera = 5000;

// function animar() {

//     $("#sensores").animate({
//         top: "-5px"
//     }, "fast");
//     $("#sensores").animate({
//         top: "0px"
//     }, "fast");
//     $("#sensores").animate({
//         top: "-5px"
//     }, "fast");
//     $("#sensores").animate({
//         top: "0px"
//     }, "fast");

//     $('#sensores').css({
//         position: 'relative'
//     });

//     $("#sensores").stop();


//     clearInterval(id);

//     cont++;
//     if (cont > maxIteraciones - 1) {
//         clearInterval(id);
//     }
// }

// id = setInterval(function () {
//     animar()
// }, tiempoEspera);