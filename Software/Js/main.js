$(document).ready(function () {
    main();
    // console.log("dasd");
    
});

var res2 = 0;
var maximo = 0;
var minimo = 0;
var cont = 0.0; 
const enteros = 2;
const decimales = 2;
var read;
var url = "?";
var updateRate = 10; // en milisegundos
var res = -2;

function main(){
    id = setInterval("update()", updateRate);
}
 
function update(){
    if(read){
        //devuelve en la variable res
        getText(url);
        res = obtenerTemp(res);

        console.log(res);
        mostrarDatos(res);
        minimoR(res2);
        maximoR(res2);
        
    }
}

function obtenerTemp(res){

    return res;
}

// Funcion solo para provar
function mostrarDatos(datos) {
    res2 = datos;
    datos = datos.toFixed(decimales);
    
    $("#texto-temp").html(String(datos).padStart(enteros + decimales + 1, "0"));
}

//Función para poner el mínimo
function minimoR(datos){
    if (minimo > res2) {
        datos = datos.toFixed(decimales);
        $("#texto-temp2").html(String(datos).padStart(enteros + decimales + 1, "0"));
        minimo = res2;
    }
}

//Función para poner el máximo
function maximoR(datos){
    if (maximo < res2) {
        datos = datos.toFixed(decimales);
        $("#texto-temp3").html(String(datos).padStart(enteros + decimales + 1, "0"));
        maximo = res2;
    }
}