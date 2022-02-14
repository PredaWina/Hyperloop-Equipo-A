$(document).ready(function () {
   $("#boton-datos").click(function () {
      toggleRead();
   });
});

//La idea de esta función es en un futuro poder pausar o reanudar recibir datos.
function toggleRead() {
   if ($("#boton-datos").attr("src") != "img/pause.png") {
      $("#boton-datos").attr("src", "img/pause.png");
      read = true;

   } else {
      $("#boton-datos").attr("src", "img/play.png");
      read = false;
   }
}


async function getText(file) {
   fetch(file)
      .then((response) => response.json())
      .then((json) => res = (json.temp));
}