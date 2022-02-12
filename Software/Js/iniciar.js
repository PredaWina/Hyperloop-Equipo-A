function cambiarIcono() {
if ($("#boton-datos").attr("src") != "img/pause.png") {
   $("#boton-datos").attr("src", "img/pause.png");
   act = false;
}
else {
   $("#boton-datos").attr("src", "img/play.png");
   act = true;
}
}

$(document).ready(function(){
   $("#boton-datos").click(function () {  
      
      cambiarIcono();
      
   })
});
