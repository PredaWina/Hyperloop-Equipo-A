$(document).ready(function () {
    main();
    // console.log("dasd");
    
});

var cont = 0.0; 
const enteros = 2;
const decimales = 2;
var read;
var url = "?";
var updateRate = 10; // en milisegundos
var res = 2;

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
        
    }
}

function obtenerTemp(res){

    return res;
}

// Funcion solo para provar
function mostrarDatos(datos) {
    datos = datos.toFixed(decimales);
    
    $("#texto-temp").html(String(datos).padStart(enteros + decimales + 1, "0"));
}