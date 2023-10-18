 /*
 Ejercicio 15: Un restaurante nos ha encargado una aplicación para colocar a los clientes
en sus mesas. En una mesa se pueden sentar de 0 (mesa vacía) a 4 comensales (mesa
llena).
El funcionamiento es el siguiente:
Cuando llega un cliente se le pregunta cuántos son. Como el programa no está
preparado para colocar a grupos mayores a 4, si un cliente solicita una mesa con mas
comensales (pej, 6), el programa dará el mensaje “Lo siento, no admitimos grupos de 6,
haga grupos de 4 personas como máximo e intente de nuevo” y volverá a preguntar.
Para cada grupo nuevo que llega, se busca siempre la primera mesa libre (con 0
personas). Si no quedan mesas libres, se busca una donde haya hueco para todo el grupo
(por ejemplo si el grupo es de dos personas, se podrá colocar en mesas donde haya una
o dos personas).
Cada vez que se sientan nuevos clientes se debe mostrar el estado de las mesas.
Los grupos no se pueden romper aunque haya huecos sueltos suficientes.
A tener en cuenta:
• El programa comienza pidiendo el numero de mesas que tiene el restaurante.
• Inicialmente, las mesas se cargan con valores aleatorios entre 0 y 4 y mostrará
por pantalla como quedan las mesas inicialmente.
• El programa seguirá pidiendo comensales hasta que se introduzca un valor
negativo.
 */
var mesas = [];
function pedirMesa() {
    let comensales = 0;
    do {
        if (comensales > 4) {
            alert("El numero debe de ser entre 1-4 no aceptamos a grupos superiores");
            comensales = prompt("Introduzca el numero de comensales");
        } else {
            comensales = prompt("Introduzca el numero de comensales");
        }
    } while (isNaN(comensales));
    return parseInt(comensales);
}
function numeroMesas() {
    let numeroMesas = -1;
    do {
        if (numeroMesas === -1) {
            numeroMesas = prompt("Introduzca el numero de mesas en el restaurante");
        } else {
            alert("El numero de mesas debe de ser numerico y positivo");
            numeroMesas = prompt("Introduzca el numero de mesas en el restaurante");
        }
    } while (numeroMesas < 1 || isNaN(numeroMesas));
    for (let i = 0; i < numeroMesas; i++) {
        mesas.push(parseInt(Math.random() * 5));
    }
    return numeroMesas;
}
function sentarGente(bar, comensales) {
    let sentados = false;
    let contador = 0;
    for (let mesa of bar) {
        let suma=0;
        contador++;
        if (parseInt(mesa) === 0 && comensales>0 && !sentados) {
            suma = mesa + comensales;
            mesas[contador-1] = parseInt(suma);
            alert("Sentados en la mesa" + contador);
            sentados = true;
        }
    }
    contador = 0;
    if (!sentados) {
        for (let mesa of bar) {
            let suma=0;
            contador++;
            if (mesa + comensales <= 4 && comensales>0 && !sentados) {
                suma = mesa + comensales;
                mesas[contador-1] = parseInt(suma);
                alert("Sentados en la mesa" + contador);
                sentados = true;
            }
        }
    }
    if (!sentados && comensales > 0) {
        alert("El bar va a reventar");
    }
}
function abrir() {
    numeroMesas();
    debugger;
    console.log(mesas);
    let comensales;
    do {
        comensales = pedirMesa();
        sentarGente(mesas, comensales);
        console.log(mesas);
    } while (comensales > 0);
}
abrir();