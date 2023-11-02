// 17.- Carrera de DIVS
// Coloca 4 divs de 100x100px y color de fondo distinto en la parte izquierda de la
// pantalla (uno debajo de otro). Crea un botón que se llame CORRER y al pulsarlo, los
// divs se moverán hacia la derecha de la pantalla de manera automática. Cada DIV debe
// moverse a una velocidad aleatoria que cambiará en cada carrera. El primer DIV que
// llegue a la derecha de la pantalla, gana. Nota: realiza el cálculo a ojo, ya aprenderemos
// a obtener las medidas de la página correctamente.
// Coloca otro botón para resetear todo y volver a comenzar la carrera
let timer;
let meta = window.innerWidth;
let ganador = "";
let coches = document.querySelectorAll("div");
document.querySelector("#inicio").addEventListener("click", function () {
  carrera();
});
document.querySelector("#reset").addEventListener("click", function(){
    restart();
    clearInterval(timer);
})
function carrera() {
   timer= setInterval("movercoches()", 2);

}
function saltar(salto = 5) {
  return ~~(Math.random() * (salto + 1));
}

function movercoches() {
  if (ganador == "") {
    coches.forEach((coche) => {
      let ocupa = parseInt(coche.style.left) + coche.offsetWidth;
      if (ocupa + saltar() <= meta) {
        coche.style.left = parseInt(coche.style.left) + saltar() + "px";
      } else {
        coche.style.left = parseInt(coche.style.left) + (meta - ocupa) + "px";
        ganador = coche.textContent;
        setTimeout(() => {
          alert("el ganador es " + ganador);
        }, 100);
      }
    });
  }
}
function restart(){
    coches.forEach(coche => {
        coche.style.left="0px";
        ganador="";
    });
}
