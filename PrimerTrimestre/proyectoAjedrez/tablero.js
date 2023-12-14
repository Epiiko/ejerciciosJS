function crearTablero() {
  let tablero = document.createElement("table");
  let trs = [];
  for (let i = 0; i < 8; i++) {
    trs.push(document.createElement("tr"));
    for (let j = 0; j < 8; j++) {
      let td = document.createElement("td");
      if (i % 2 != 0) {
        td.className = j % 2 ? "celdaNegra" : "celdaBlanca";
      } else {
        td.className = !(j % 2)? "celdaNegra" : "celdaBlanca";
      }
      trs[i].appendChild(td);
    }
  }
  trs.forEach((elemento) => {
    tablero.appendChild(elemento);
  });
  document.querySelector("div").appendChild(tablero);
}
crearTablero();
generarRey();
function generarRey() {
  let ale = parseInt(Math.random() * 64);
  document.querySelectorAll("td")[ale].style.backgroundColor = "red";
}
