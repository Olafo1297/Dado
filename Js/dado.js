function TirarDado(){
 var randomNumber = Math.floor(Math.random() * 6) + 1;

 document.querySelector(".img").setAttribute("src","./Img/dado"+randomNumber+".png");
 document.querySelector(".dadoJugador").innerHTML = ("El número que cayó fue " +randomNumber+", puedes volver a tirar el dado.");

}