console.log("Hola Mundo");
let nombre = "Nacho";
let a = 3;
let ok = true;
let l;
let nulo = null;
console.log(typeof nombre);
console.log(typeof a);
console.log(a + nombre);
console.log(typeof ok);
console.log(typeof l);
console.log(typeof nulo);
let simbolo = Symbol(8);
console.log(simbolo);
if (nulo === null) {
  console.log("No hay valor en la variable");
} else {
  console.log("Variable con contenido");
}
let h = 16;
if (h < 12) {
  console.log("Son las " + h + " Es bien tempranito");
} else if (h < 18) {
  console.log("Son las " + h + " Buenas tardes");
} else {
  console.log("Son las " + h + " Buenas noches");
}
h > 12
  ? console.log("Es mas de medio dia")
  : console.log("Es mas de medio dia");
num = parseInt(Math.random() * 10 + 1);
num % 2 === 0
  ? console.log("El numero " + num + "es un numero par ")
  : console.log("El numero " + num + " es impar");
let contador = 0;
while (contador < 5) {
  contador++;
  console.log("vuelta numero " + contador);
}
contador = 0;
do {
  contador++;
  console.log("vuelta numero " + contador);
} while (contador < 5);
for (let i = 0; i < 5; i++) {
  contador++;
  console.log("vuelta numero " + contador);
}
switch (Math.random() * 10 + 1) {
  case 1:
    console.log("Salio 1");
    break;
  case 2: case 3: case 4: case 5:
    console.log("Salio del 2-5");
    break;
  case 6:
    console.log("Salio 6");
    break;
  case 7:
    console.log("Salio 7");
    break;
  case 8:
    console.log("Salio 8");
    break;
  case 9:
    console.log("Salio 9");
    break;
  default:
    console.log("Salio 10");
}
let objeto={
    nombre: "Andresito",
    apellido: "El locoo"
}
class Persona{
    constructor(nombre, apellido){
        this.nombre=nombre;
        this.apellido=apellido;
    }
}
console.log(new Persona("Nacho" , "Diaz"));
let marcaCoches= ["BMW", "Audi", "Seat"];
console.log(typeof marcaCoches);
console.log (marcaCoches[0]);
function saludar(){
 alert("Saludos desde la funcion");
}
var people =["Jose", "Antonio", "Luis", "Olga"];
people.length;

people.forEach(nombre => {
  console.log(nombre);
});

for(i in people){
  console.log(people[i]);
}

for(cosa of people){
  console.log(cosa);
}
//añade un elemento al array al final
people.push("Nacheto");
//añade un elemento al array en primera posicion y guarda nueva longitud
var long=people.unshift("Alberto");
console.log(long);
//elimina el ultimo elemento con pop podemos guardar el elmento o trabajar con el.
var auxiliar=people.pop();
//saca el primer valor
people.shift();
//ordenacion de arrays
people.sort();
for(cosa of people){
  console.log(cosa);
}
people.reverse();
for(cosa of people){
  console.log(cosa);
}
//busqueda de posicion por valor
var pos=people.indexOf("Antonio");
var elementoEliminado=people.splice(people.indexOf("Luis"),2,"Zambrana","Paquillo");
for(cosa of people){
  console.log(cosa);
}
//copiar un array
var copia =people.slice();
for(cosita of copia){
  console.log(cosita);
}

