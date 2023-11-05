// 16.-  Usando las funciones setInterval y clearInterval de Javascript. Coloca
// una etiqueta meter, una etiqueta progress y un botón al lado de cada una. Al pulsar el
// botón se debe simular la “carga” de la barrita. Muestra un mensaje cuando se alcance el
// máximo.
// b) Mejora el ejercicio haciendo que cuando pulsemos uno de los botones, este quede
// bloqueado hasta que la barra del elemento progress/meter se complete del todo.
document.querySelector("input").addEventListener("click", function () {
    timerdescarga=setInterval("descargar()", 100)
    this.disabled = true;
})
document.querySelectorAll("input")[1].addEventListener("click", function () {
    timercarga=setInterval("cargar()", 100)
    this.disabled = true;
})

function descargar() {
    let barra = document.querySelector("progress");
    if (barra.value + parseInt((Math.random() * 5) + 1) >= 100) {
        barra.value = barra.max;
        setTimeout(() => {
            barra.value=0;
            document.querySelector("input").disabled=false;
            clearInterval(timerdescarga);
            alert("La descarga ha finalizado")
        }, 100);
    } else {
        barra.value += parseInt((Math.random() * 2) + 1);
    }
}
function cargar(){
    let barra = document.querySelector("meter");
    if (barra.value + parseInt((Math.random() * 5) + 1) >= 100) {
        barra.value = barra.max;
        setTimeout(() => {
            barra.value=0;
            document.querySelectorAll("input")[1].disabled=false;
            clearInterval(timercarga);
            alert("La carga ha finalizado")
        }, 500);
    } else {
        barra.value += parseInt((Math.random() * 2) + 1);
    }
}