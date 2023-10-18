function sumatorio(arrayparametro) {
  var sumatorio = [0];
  for (let i = 0; i < arrayparametro.length; i++) {
    sumatorio.push(arrayparametro[i] + sumatorio[i]);
  }
  sumatorio.shift();
  return sumatorio;
}
let numeritos = [1, 2, 3, 4, 5, 6, 7, 8];
let arrayfinal = sumatorio(numeritos);
for (elemento of arrayfinal) {
  console.log(elemento);
}
function counBy(x, y) {
  let arrayres = [];
  if (isNaN(x) || isNaN(y)) {
    alert("Error debe ser un numero");
  } else {
    if (x === 0 || y === 0) {
      return arrayres;
    } else {
      for (i = 1; i <= y; i++) {
        arrayres.push(i * x); 
      }
      return arrayres;
    }
  }
}
console.log(counBy(2, 3));

function crearmatriz(n) {
  let fila = [];
  for (let i = 0; i < n; i++) {
    fila.push([]);
    for (let j = 0; j < n; j++){
      //fila[i].push(n);
    }
  }
  return fila;
}

let resultado = crearmatriz();
for (elemento of resultado) {
    console.log(elemento);
}
