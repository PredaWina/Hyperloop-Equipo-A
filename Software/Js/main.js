$(document).ready(function () {
    main();
    console.log("dasd");
    
});
 
var cont = 0.0;
const decimales = 2;
var read;
var url = "https://rickandmortyapi.com/api/character";
var updateRate = 10; // en milisegundos
var res;

function main(){
    setInterval("update()", updateRate);
}
 
function update(){
    if(read){
       getText(url);
        console.log(res);
       //Provar
       contador();
    }
}


// Funcion solo para provar
function contador() {
    cont = cont.toFixed(decimales);
 
    $("#texto-temp").html(cont);
 
    cont = parseFloat(cont) + 0.01;
 }