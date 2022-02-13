var id;
var cont = 0.0000;
const decimales = 4;
var aux;
$(document).ready(function(){
   $("#boton-datos").click(function () {  
      
      toggleRead();
      
   })
});

function toggleRead() {
   
   if ($("#boton-datos").attr("src") != "img/pause.png") {
      $("#boton-datos").attr("src", "img/pause.png");
      act = false;

      //Provar fetch
      getText("https://rickandmortyapi.com/api/character");

      //Provar
      id = setInterval('contador()', 25);
   }
   else {
      $("#boton-datos").attr("src", "img/play.png");
      act = true;

      //Provar
      clearInterval(id);
   }
}


// Funcion solo para provar
function contador(){
   cont = cont.toFixed(decimales);
   
	$("#texto-temp").html(cont);

	cont = parseFloat(cont) + 0.0001 ;
}

async function getText(file) {
   fetch(file)
      .then(response => response.json())
      .then(json => console.log(json.results))
}

