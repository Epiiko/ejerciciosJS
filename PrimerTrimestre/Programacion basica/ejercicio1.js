//pide por pantalla numeros, o bien maximo 9 numeros o bien * para salir
//creamos un array con esos 9 numeros y lo metemos en una bidimensional

function pedirNumeros() {
  let cont = 0;
  let lista = [];
  let num;
  do {
    num = prompt("Introduzca un numero o * para salir");
    if (num === "*") {
        cont = 10;
    }else if (isNaN(num)){
        alert("El valor debe de ser numerico");
    }else{
        num=Number(num);
      lista.push(num);
      cont++;
    }
  } while (cont < 9);
  return lista;
}
function calculaResultado(lista) {
  let elem;
  let array = [[]];
  for (let i = 0; i < lista.length; i++) {
    array[i] = [];
    for (let j = 0; j < lista.length; j++) {
      array[i][j] = lista[i] * (j + 1);
    }
  }
  console.log(array);
  return array;
}
function imprimirArray(lista) {
  for (let i = 0; i < lista.length; i++) {
    for (let j = 0; j < lista.length; j++) {
      document.write(lista[i][j] + "|| ");
    }
    document.write("<br>");
  }
}
function imprimirWeb(lista) {
  for (let i = 0; i < lista.length-1; i++) {
    switch (i) {
      case 0:
        elem = document.getElementById("resultado1");
        break;
      case 1:
        elem = document.getElementById("resultado2");
        break;
      case 2:
        elem = document.getElementById("resultado3");
        break;
      case 3:
        elem = document.getElementById("resultado4");
        break;
      case 4:
        elem = document.getElementById("resultado5");
        break;
      case 5:
        elem = document.getElementById("resultado6");
        break;
      case 6:
        elem = document.getElementById("resultado7");
        break;
      case 7:
        elem = document.getElementById("resultado8");
        break;
      case 8:
        elem = document.getElementById("resultado9");
        break;
    }
    elem.innerHTML=lista[i];
  }
}
imprimirArray(calculaResultado(pedirNumeros()));