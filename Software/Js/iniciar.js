var id;
var cont = 0.0000;

function cambiarIcono() {
   
   if ($("#boton-datos").attr("src") != "img/pause.png") {
      $("#boton-datos").attr("src", "img/pause.png");
      act = false;
      
      id = setInterval('contador()', 25);
   }
   else {
      $("#boton-datos").attr("src", "img/play.png");
      act = true;

      clearInterval(id);
   }
}

$(document).ready(function(){
   $("#boton-datos").click(function () {  
      
      cambiarIcono();
      
   })
});

function contador(){
   cont = cont.toFixed(4);
   
	$("#texto-temp").html(cont);

	cont = parseFloat(cont) + 0.0001 ;
}



