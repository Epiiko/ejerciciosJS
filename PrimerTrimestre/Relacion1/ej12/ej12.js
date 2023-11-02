// 12.- Coloca una imagen dentro de un DIV con position: absolute. Crea dos botones:
// •Al pulsar uno de ellos la imagen debe moverse 5px hacia la derecha de la
// pantalla.
// •Al pulsar el otro, la imagen debe moverse 5px hacia la izquierda de la pantalla.
// Nota: Recuerda la posicion (0,0) de la pagina web al usar top/left/right/bottom
// b) Mejora el ejercicio haciendo que la imagen no pueda salirse de los limites de la
// pantalla. Nota: realiza el cálculo a ojo, ya aprenderemos a obtener las medidas de la
// página correctamente.
// c) Realizar el mismo ejercicio pero esta vez la imagen se moverá hacia la derecha
// mientras el ratón esté encima de ella. Coloca un botón para resetear los valores de
// posición de la imagen
// salto = 
let imagen = document.querySelector("div");
let salto = parseInt(prompt("introduce"));
document.querySelectorAll("button")[1].addEventListener("click", function () {
  let posizqd = parseInt(imagen.style.left);
  let movimiento;
  if (window.innerWidth - (imagen.offsetWidth + posizqd) >= salto) {
    movimiento = posizqd + salto;
    //console.log("sumo")
  } else {
    let resto = window.innerWidth - (imagen.offsetWidth + posizqd);
    movimiento = posizqd + resto;

    console.log("chochaste");
  }
  imagen.style.setProperty("left", movimiento + "px");

  /*
  if (imagen.offsetWidth < document.body.offsetWidth - (posizqd + salto)) {
    imagen.style.setProperty("left", posizqd + salto + "px");
    //console.log("sumo")
  } else {
    imagen.style.setProperty("left", posizqd + salto + "px");
    alert ("chocaste")
  }
  */
});
document.querySelectorAll("button")[0].addEventListener("click", function () {
  let posizqd = parseInt(imagen.style.left);
  if (posizqd >= salto) {
    imagen.style.setProperty("left", posizqd - salto + "px");
  } else {
    alert("chocaste");
  }
});
document.querySelectorAll("button")[2].addEventListener("click", function () {
  imagen.style.setProperty("left", " 0px");
});
