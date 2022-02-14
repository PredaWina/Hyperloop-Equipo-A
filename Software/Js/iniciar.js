var id;
var cont = 0.0;
const decimales = 2;
var aux;

$(document).ready(function () {
   $("#boton-datos").click(function () {
      toggleRead();
   });
});

//La idea de esta función es en un futuro poder pausar o reanudar recibir datos.
function toggleRead() {
   if ($("#boton-datos").attr("src") != "img/pause.png") {
      $("#boton-datos").attr("src", "img/pause.png");
      act = false;

      //Provar fetch
      getText("https://rickandmortyapi.com/api/character");

      //Provar cotnador (ir)
      id = setInterval("contador()", 25);
   } else {
      $("#boton-datos").attr("src", "img/play.png");
      act = true;

      //Provar contador (pausar)
      clearInterval(id);
   }
}

// Funcion solo para provar
function contador() {
   cont = cont.toFixed(decimales);

   $("#texto-temp").html(cont);

   cont = parseFloat(cont) + 0.01;
}

async function getText(file) {
   fetch(file)
      .then((response) => response.json())
      .then((json) => console.log(json.results));
}