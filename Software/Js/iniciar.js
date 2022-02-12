let aux = "";
$(document).ready(function(){
    $("#boton-datos").click(function () {  
       if ($("#boton-datos").attr("src") != "img/pause.png") {
        $("#boton-datos").attr("src", "img/pause.png");
       } 
       else{
        $("#boton-datos").attr("src", "img/play.png");
       }
        
    })
  });


