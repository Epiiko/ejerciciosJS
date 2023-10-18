function ejercicio1() {
  let gramos = -1;
  do {
    if (gramos === -1) {
      gramos = prompt("Introduzca un valor en gr. ");
    } else {
      alert("El valor de ser numerico y positivo");
      gramos = prompt("Introduzca un valor en gr. ");
    }
  } while (gramos < 0 || isNaN(gramos));
  alert(`${gramos} g corresponden a ${gramos / 1000} Kg`);
}
function ejercicio2() {
  function pedirValor() {
    let valor = -10000;
    do {
      if (valor === -10000) {
        valor = prompt("Introduzca un numero positivo");
      } else {
        alert("El valor debe ser numerico y positivo");
        valor = prompt("Introduzca un numero positivo");
      }
    } while (valor < 0 || isNaN(valor));
    return valor;
  }
  let v1 = parseInt(pedirValor());
  let v2 = parseInt(pedirValor());
  let v3 = parseInt(pedirValor());
  let v4 = parseInt(pedirValor());
  let v5 = parseInt(pedirValor());
  let v6 = parseInt(pedirValor());
  let v7 = parseInt(pedirValor());
  let v8 = parseInt(pedirValor());
  let v9 = parseInt(pedirValor());
  let v10 = parseInt(pedirValor());
  let v11 = parseInt(pedirValor());
  let masmedia = "";
  let doblemedia = "";
  let media = (v1 + v2 + v3 + v4 + v5 + v6 + v7 + v8 + v9 + v10) / 10;
  if (v1 > media) {
    masmedia += v1 + " ";
  }
  if (v1 > media * 2) {
    doblemedia += v1 + " ";
  }
  if (v2 > media) {
    masmedia += v2 + " ";
  }
  if (v2 > media * 2) {
    doblemedia += v2 + " ";
  }
  if (v3 > media) {
    masmedia += v3 + " ";
  }
  if (v3 > media * 2) {
    doblemedia += v3 + " ";
  }
  if (v4 > media) {
    masmedia += v4 + " ";
  }
  if (v4 > media * 2) {
    doblemedia += v4 + " ";
  }
  if (v5 > media) {
    masmedia += v5 + " ";
  }
  if (v5 > media * 2) {
    doblemedia += v5 + " ";
  }
  if (v6 > media) {
    masmedia += v6 + " ";
  }
  if (v6 > media * 2) {
    doblemedia += v6 + " ";
  }
  if (v7 > media) {
    masmedia += v7 + " ";
  }
  if (v7 > media * 2) {
    doblemedia += v7 + " ";
  }
  if (v8 > media) {
    masmedia += v8 + " ";
  }
  if (v8 > media * 2) {
    doblemedia += v8 + " ";
  }
  if (v9 > media) {
    masmedia += v9 + " ";
  }
  if (v9 > media * 2) {
    doblemedia += v9 + " ";
  }
  if (v10 > media) {
    masmedia += v10 + " ";
  }
  if (v10 > media * 2) {
    doblemedia += v10 + " ";
  }
  if (v11 > media) {
    masmedia += v11 + " ";
  }
  if (v11 > media * 2) {
    doblemedia += v11 + " ";
  }
  alert(
    `Siendo la media ${media} , los numeros que los superan son: ${masmedia} \n Y superan el doble de la media : ${doblemedia}`
  );
}
function ejercicio3() {
  var res = [];
  function pedirTam() {
    let tam = -9;
    do {
      if (tam === -9) {
        tam = prompt("Introduzca el tamaño del arreglo");
      } else {
        alert("El numero debe de estar entre 5 y 10 ambos incluidos");
        tam = prompt("Introduzca el tamaño del arreglo");
      }
    } while (tam < 5 || tam > 10 || isNaN(tam));
    return tam;
  }
  function construirArray() {
    let tam = parseInt(pedirTam());
    for (let i = 0; i < tam; i++) {
      res.push(tam * Math.floor(Math.random() * 10));
    }
  }
  function media(lista) {
    let media2 = 0;
    let tam = 0;
    for (elemento of lista) {
      media2 += elemento;
      tam++;
    }
    return media2 / tam;
  }
  construirArray();
  console.log("Los elementos del arreglo son: " + res);
  let mediatotal = media(res);
  console.log("Los elementos superiores a la media son: ");
  for (elemento of res) {
    if (elemento > mediatotal) {
      console.log(elemento + " ");
    }
  }
}
function ejercicio4() {
  let tam = -1;
  var matriz = [];
  do {
    if (tam === -1) {
      tam = prompt ("Introduzca el tamaño");
    } else {
      alert("El numero debe de ser entre 2-5 (incluidos)");
      tam = prompt ("Introduzca el tamaño");
    }
  } while (isNaN(tam) || tam < 2 || tam > 5);
  function construccionMatriz() {
    for (let i = 0; i < tam; i++) {
        matriz[i]=new Array(tam);
      for (let j = 0; j < tam; i++) {
        debugger;
        let ale=Math.floor((Math.random() * 99 )+ 1);
        matriz[i][j]=ale;
      }
    }
  }
  function solo(valor) {
    if (valor < 10) {
      return true;
    }
    return false;
  }
  function mostrar() {
    let res = "";
    for (let i = 0; i < matriz.length(); i++) {
      for (let j = 0; j < matriz[i].length(); i++) {
        if (solo(matriz[i][j])) {
          res += "0" + matriz[i][j];
        } else {
          res += "" + matriz;
        }
      }
      res += "\n";
    }
    console.log(res);
  }
  function media(matriz) {
    let suma = 0;
    for (let i = 0; i < matriz.length(); i++) {
      for (let j = 0; j < matriz[i].length(); i++) {
        suma += matriz[i] + [j];
      }
    }
    return suma / (tam * tam);
  }
  function crearArrays(tabla) {
    let res=[
        []
    ];
    let mediaa = parseInt(media(tabla));
    for (let i = 0; i < tabla.length(); i++) {
      for (let j = 0; j < tabla[i].length(); i++) {
        if (tabla[i][j] > mediaa) {
          res[0].push(tabla[i][j]);
        } else {
          res[1].push(tabla[i][j]);
        }
      }
    }
    console.log ("Los numeros inferiores a la media son: " + res[0]);
    console.log ("Los numeros superiores a la media son: " + res[1]);
  }
  function ordenar(){
    let valor=0; //identifica el tipo de ordenacion
    do{
        valor=prompt("Introduzca 0 ó 1");
    }while(valor==!1 || valor!==0);
    if(valor===0){
        matriz[0].sort((a,b)=>a-b);
        matriz[1].sort((a,b)=>a-b);
    }else{
        matriz[0].sort((a,b)=>b-a);
        matriz[1].sort((a,b)=>b-a);
    }
    mostrar();
     
  }
  construccionMatriz();
  mostrar();
  media(matriz);
  crearArrays(matriz);
  ordenar();
}
