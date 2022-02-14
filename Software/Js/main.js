$(document).ready(function () {
    main();
    console.log("dasd");
    
});

var cont = 0.0; 
const enteros = 2;
const decimales = 2;
var read;
var url = "https://rickandmortyapi.com/api/character";
var updateRate = 10; // en milisegundos
var res = 0;

function main(){
    setInterval("update()", updateRate);
}
 
function update(){
    if(read){
        //devuelve en la variable res
        getText(url);

        console.log(res);

        //Provar
        contador();
    }
}


// Funcion solo para provar
function contador() {
    cont = cont.toFixed(decimales);
    
    $("#texto-temp").html(String(cont).padStart(enteros + 3, "0"));
    
    cont = parseFloat(cont) + 0.01;
 }