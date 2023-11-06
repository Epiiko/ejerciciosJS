var vueltasDuros = 4;
var vueltasMedios = 9;
var vueltasBlandos = 0;
var timerDuros;
var timerMedios;
var timerBlandos;
var mundiales = 0;
var temporada = 1;
// -------------------------EVENTOS---------------------------
// ----------------Inicio-------------
document.querySelector(".inicio").addEventListener("click", function () {
    document.querySelector(".duros").removeAttribute("hidden");
    document.querySelector(".inicio").hidden = true;
})
// --------------Duros-----------------
document.querySelectorAll(".duros div input")[0].addEventListener("click", function () {
    timerDuros = setInterval("correrDuros()", 500);
    deshabilitarCarera();
    document.querySelectorAll(".duros div input")[1].disabled = false;
})
document.querySelectorAll(".duros div input")[1].addEventListener("click", function () {
    clearInterval(timerDuros);
    this.disabled = true;
    habilitarCarrera();

})
// ---------------Medios-----------------
document.querySelectorAll(".medios div input")[0].addEventListener("click", function () {
    timerMedios = setInterval("correrMedios()", 500);
    document.querySelectorAll(".medios div input")[1].disabled = false;
    deshabilitarCarera();
})
document.querySelectorAll(".medios div input")[1].addEventListener("click", function () {
    clearInterval(timerMedios);
    this.disabled = true;
    habilitarCarrera();

})
// ---------------Blandos-----------------
document.querySelector(".blandos div input").addEventListener("click", function () {
    timerBlandos = setInterval("correrBlandos()", 500);
})
// -----------------------------Duros-------------------------------
function correrDuros() {

    let barra = document.querySelector(".duros div progress");
    let parra = document.querySelector(".duros div label");
    console.log(barra.value);
    if (barra.value + 10 >= barra.max) {
        barra.value = barra.max;
        actualizarCasillero();
        parra.textContent = vueltasDuros + " vueltas con duros"; vueltasDuros++;
        if (vueltasDuros == 5) {
            document.querySelector(".medios").hidden = false;
        }
        setTimeout(() => {
            barra.value = 0;
        }, 100);
        mundial();

    } else {
        barra.value = barra.value + 10;
    }
}
// ----------------------------Medios-------------------------------
function correrMedios() {

    let barra = document.querySelector(".medios div progress");
    let parra = document.querySelector(".medios div label");
    console.log(barra.value);
    if (barra.value + 5 >= barra.max) {
        barra.value = barra.max;
        actualizarCasillero();
        parra.textContent = vueltasMedios + " vueltas con medios"; vueltasMedios++;
        setTimeout(() => {
            barra.value = 0;
        }, 100);
        mundial();
        if (vueltasMedios == 10 || (vueltasMedios + vueltasDuros) == 35) {
            document.querySelector(".blandos").removeAttribute("hidden");
        }
    } else {
        barra.value = barra.value + 5;
    }
}

// ----------------------------Blandos-------------------------
function correrBlandos() {
    deshabilitarCarera();
    let barra = document.querySelector(".blandos div progress");
    let parra = document.querySelector(".blandos div label");
    if (barra.value + 8 >= barra.max) {
        barra.value = barra.max;
        actualizarCasillero();
        vueltasBlandos++;
        parra.textContent = vueltasBlandos + " vueltas con blandos"; 
        clearInterval(timerBlandos);
        setTimeout(() => {
            barra.value = 0;
        }, 100);
        mundial();
        habilitarCarrera();
    } else {
        barra.value = barra.value + 8;
    }
}
function actualizarCasillero() {
    document.querySelector("label").textContent = (vueltasBlandos + vueltasDuros + vueltasMedios) + " Vueltas en el casillero\n----Temporada " + temporada + "-----"

}
function habilitarCarrera() {
    document.querySelectorAll(".duros div input")[0].disabled = false;
    document.querySelectorAll(".medios div input")[0].disabled = false;
    document.querySelector(".blandos div input").disabled = false;
}
function deshabilitarCarera() {
    document.querySelectorAll(".duros div input")[0].disabled = true;
    document.querySelectorAll(".medios div input")[0].disabled = true;
    document.querySelector(".blandos div input").disabled = true;
}
function mundial() {
    if ((vueltasBlandos + vueltasDuros + vueltasMedios) % 100 == 0) {
        mundiales++;
        temporada++;
        vueltasBlandos = 0;
        vueltasDuros = 0;
        vueltasMedios = 0;
        actualizarCasillero();
        setTimeout(() => {
            alert("Campeon del mundial de F1\n Ya son: " + mundiales + " en tu palmares");

        }, 100)
    } else {
        setTimeout(() => {
            alert("Vuelta completada en: 1 : " + parseInt((Math.random() * 10) + 10) + " : " + parseInt(Math.random() * 999) + "\n Faltan:  " + (100 - (vueltasBlandos + vueltasDuros + vueltasMedios)) + " para el mundial");
        }, 100)
    }
}