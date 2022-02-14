$(document).ready(function () {
    main();
    // console.log("dasd");

});

var maximo = 0.00;
var minimo = 0.00;
var cont = 0.00;
const enteros = 2;
const decimales = 2;
var aux = 0;
var read;
var url = "?";
var updateRate = 100; // en milisegundos
var res = 20;

function main() {
    id = setInterval("update()", updateRate);
}

function update() {
    if (read) {
        //devuelve en la variable res
        getText(url);
        res = obtenerTemp(res);

        minimoR(res);
        maximoR(res);

        console.log(res);
        mostrarDatos(res, "texto-temp");
        mostrarDatos(minimo, "texto-temp-min");
        mostrarDatos(maximo, "texto-temp-max");

        res--;
    }
}

function obtenerTemp(res) {

    return res;
}

// Funcion solo para provar
function mostrarDatos(datos, obj) {
    if (datos < 0) {
        datos = datos * -1;
        datos = datos.toFixed(decimales);
        aux = "-" + String(datos).padStart(enteros + decimales + 1, "0");

    } else {
        datos = datos.toFixed(decimales);
        aux = String(datos).padStart(enteros + decimales + 1, "0");
    }

    $("#" + obj).html(aux);


}

//Función para poner el mínimo
function minimoR(datos) {
    if (minimo > datos) {
        minimo = datos;
    }
}

//Función para poner el máximo
function maximoR(datos) {
    if (maximo < datos) {
        maximo = datos;
    }
}